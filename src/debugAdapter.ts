import {
    Logger,
    logger,
    DebugSession,
    InitializedEvent,
    TerminatedEvent,
    StoppedEvent,
    BreakpointEvent,
    OutputEvent,
    Thread,
    StackFrame,
    Scope,
    Source,
    Handles,
    Breakpoint
} from '@vscode/debugadapter';
import { DebugProtocol } from '@vscode/debugprotocol';
import * as path from 'path';
import { spawn, ChildProcess } from 'child_process';

/**
 * This interface describes the Z-debug specific launch attributes
 * (which are not part of the Debug Adapter Protocol).
 * The schema for these attributes lives in the package.json of the Z extension.
 * The interface should always match this schema.
 */
interface LaunchRequestArguments extends DebugProtocol.LaunchRequestArguments {
    /** An absolute path to the "program" to debug. */
    program: string;
    /** enable logging the Debug Adapter Protocol */
    trace?: boolean;
}

export class ZDebugSession extends DebugSession {

    // we don't support multiple threads, so we can use a hardcoded ID for the default thread
    private static THREAD_ID = 1;

    // a Z runtime (or here: a mock runtime)
    private _runtime: ZRuntime;

    // maps from sourceFile to array of Breakpoints
    private _breakPoints = new Map<string, DebugProtocol.Breakpoint[]>();

    // since we want to send breakpoint events, we will assign an id to every event
    // so that the frontend can match events with breakpoints.
    private _breakpointId = 1;

    // create a map for handles to variables
    private _variableHandles = new Handles<string>();

    public constructor() {
        super();

        // this debugger uses zero-based lines and columns
        this.setDebuggerLinesStartAt1(false);
        this.setDebuggerColumnsStartAt1(false);

        this._runtime = new ZRuntime();

        // setup event handlers
        this._runtime.on('stopOnEntry', () => {
            this.sendEvent(new StoppedEvent('entry', ZDebugSession.THREAD_ID));
        });
        this._runtime.on('stopOnStep', () => {
            this.sendEvent(new StoppedEvent('step', ZDebugSession.THREAD_ID));
        });
        this._runtime.on('stopOnBreakpoint', () => {
            this.sendEvent(new StoppedEvent('breakpoint', ZDebugSession.THREAD_ID));
        });
        this._runtime.on('stopOnException', (exception) => {
            this.sendEvent(new StoppedEvent('exception', ZDebugSession.THREAD_ID, exception));
        });
        this._runtime.on('breakpointValidated', (bp: DebugProtocol.Breakpoint) => {
            this.sendEvent(new BreakpointEvent('changed', bp));
        });
        this._runtime.on('output', (text, filePath, line, column) => {
            const e: DebugProtocol.OutputEvent = new OutputEvent(`${text}\n`);
            e.body.source = this.createSource(filePath);
            e.body.line = this.convertDebuggerLineToClient(line);
            e.body.column = this.convertDebuggerColumnToClient(column);
            this.sendEvent(e);
        });
        this._runtime.on('end', () => {
            this.sendEvent(new TerminatedEvent());
        });
    }

    /**
     * The 'initialize' request is the first request called by the frontend
     * to interrogate the features the debug adapter provides.
     */
    protected async initializeRequest(response: DebugProtocol.InitializeResponse, args: DebugProtocol.InitializeRequestArguments): Promise<void> {

        // build and return the capabilities of this debug adapter:
        response.body = response.body || {};

        // the adapter implements the configurationDoneRequest.
        response.body.supportsConfigurationDoneRequest = true;

        // make VS Code to use 'evaluate' when hovering over source
        response.body.supportsEvaluateForHovers = true;

        // make VS Code to show a 'step back' button
        response.body.supportsStepBack = false;

        // make VS Code to support data breakpoints
        response.body.supportsDataBreakpoints = false;

        // make VS Code to support completion in REPL
        response.body.supportsCompletionsRequest = true;
        response.body.completionTriggerCharacters = [".", "["];

        // make VS Code to send cancelRequests
        response.body.supportsCancelRequest = true;

        response.body.supportsTerminateRequest = true;

        this.sendResponse(response);

        // since this debug adapter can accept configuration requests like 'setBreakpoint' at any time,
        // we request them early by sending an 'initializeRequest' to the frontend.
        // The frontend will end the configuration sequence by calling 'configurationDone' request.
        this.sendEvent(new InitializedEvent());
    }

    /**
     * Called at the end of the configuration sequence.
     * Indicates that all breakpoints etc. have been sent to the DA and that the 'launch' can start.
     */
    protected configurationDoneRequest(response: DebugProtocol.ConfigurationDoneResponse, args: DebugProtocol.ConfigurationDoneArguments): void {
        super.configurationDoneRequest(response, args);

        // notify the launchRequest that configuration has finished
        this._runtime.run();
    }

    protected async launchRequest(response: DebugProtocol.LaunchResponse, args: LaunchRequestArguments) {
        // make sure to 'Stop' the buffered logging if 'trace' is not set
        logger.setup(args.trace ? Logger.LogLevel.Verbose : Logger.LogLevel.Stop, false);

        // wait until configuration has finished (and configurationDoneRequest has been called)
        await this._runtime.start(args.program);

        this.sendResponse(response);
    }

    protected async terminateRequest(response: DebugProtocol.TerminateResponse, args: DebugProtocol.TerminateArguments, request?: DebugProtocol.Request) {
        this._runtime.terminate();
        this.sendResponse(response);
    }

    protected async disconnectRequest(response: DebugProtocol.DisconnectResponse, args: DebugProtocol.DisconnectArguments, request?: DebugProtocol.Request): Promise<void> {
        this._runtime.terminate();
        this.sendResponse(response);
    }

    protected async setBreakPointsRequest(response: DebugProtocol.SetBreakpointsResponse, args: DebugProtocol.SetBreakpointsArguments): Promise<void> {

        const path = args.source.path as string;
        const clientLines = args.lines || [];

        // clear all breakpoints for this file
        this._runtime.clearBreakpoints(path);

        // set and verify breakpoint locations
        const actualBreakpoints = clientLines.map(l => {
            let { verified, line, id } = this._runtime.setBreakPoint(path, this.convertClientLineToDebugger(l));
            const bp = new Breakpoint(verified, this.convertDebuggerLineToClient(line)) as DebugProtocol.Breakpoint;
            bp.id = id;
            return bp;
        });

        // send back the actual breakpoint positions
        response.body = {
            breakpoints: actualBreakpoints
        };
        this.sendResponse(response);
    }

    protected async threadsRequest(response: DebugProtocol.ThreadsResponse): Promise<void> {

        // runtime supports no threads so just return a default thread.
        response.body = {
            threads: [
                new Thread(ZDebugSession.THREAD_ID, "thread 1")
            ]
        };
        this.sendResponse(response);
    }

    protected async stackTraceRequest(response: DebugProtocol.StackTraceResponse, args: DebugProtocol.StackTraceArguments): Promise<void> {

        const startFrame = typeof args.startFrame === 'number' ? args.startFrame : 0;
        const maxLevels = typeof args.levels === 'number' ? args.levels : 1000;
        const endFrame = startFrame + maxLevels;

        const stk = this._runtime.stack(startFrame, endFrame);

        response.body = {
            stackFrames: stk.frames.map((f: any) => new StackFrame(f.index, f.name, this.createSource(f.file), this.convertDebuggerLineToClient(f.line))),
            totalFrames: stk.count
        };
        this.sendResponse(response);
    }

    protected async scopesRequest(response: DebugProtocol.ScopesResponse, args: DebugProtocol.ScopesArguments): Promise<void> {

        const frameReference = args.frameId;
        const scopes = new Array<Scope>();
        scopes.push(new Scope("Local", this._variableHandles.create("local_" + frameReference), false));
        scopes.push(new Scope("Global", this._variableHandles.create("global_" + frameReference), true));

        response.body = {
            scopes: scopes
        };
        this.sendResponse(response);
    }

    protected async variablesRequest(response: DebugProtocol.VariablesResponse, args: DebugProtocol.VariablesArguments, request?: DebugProtocol.Request): Promise<void> {

        const variables = [];
        const id = this._variableHandles.get(args.variablesReference);

        if (id !== null) {
            variables.push({
                name: "var1",
                value: "23",
                variablesReference: 0
            });
            variables.push({
                name: "var2",
                value: "42",
                variablesReference: 0
            });
        }

        response.body = {
            variables: variables
        };
        this.sendResponse(response);
    }

    protected async continueRequest(response: DebugProtocol.ContinueResponse, args: DebugProtocol.ContinueArguments): Promise<void> {
        this._runtime.continue();
        this.sendResponse(response);
    }

    protected async reverseContinueRequest(response: DebugProtocol.ReverseContinueResponse, args: DebugProtocol.ReverseContinueArguments): Promise<void> {
        this._runtime.continue(true);
        this.sendResponse(response);
    }

    protected async nextRequest(response: DebugProtocol.NextResponse, args: DebugProtocol.NextArguments): Promise<void> {
        this._runtime.step();
        this.sendResponse(response);
    }

    protected async stepBackRequest(response: DebugProtocol.StepBackResponse, args: DebugProtocol.StepBackArguments): Promise<void> {
        this._runtime.step(true);
        this.sendResponse(response);
    }

    protected async evaluateRequest(response: DebugProtocol.EvaluateResponse, args: DebugProtocol.EvaluateArguments): Promise<void> {

        let reply: string | undefined = undefined;

        if (args.context === 'repl') {
            // 'evaluate' supports to create and delete breakpoints from the 'repl':
            const matches = /new +([0-9]+)/.exec(args.expression);
            if (matches && matches.length === 2) {
                const mbp = this._runtime.setBreakPoint(this._runtime.sourceFile, this.convertClientLineToDebugger(parseInt(matches[1])));
                const bp = new Breakpoint(mbp.verified, this.convertDebuggerLineToClient(mbp.line), undefined, this.createSource(this._runtime.sourceFile)) as DebugProtocol.Breakpoint;
                bp.id = mbp.id;

                this.sendEvent(new BreakpointEvent('new', bp));
                reply = `breakpoint created`;
            }
        }

        response.body = {
            result: reply ? reply : `evaluate(context: '${args.context}', '${args.expression}')`,
            variablesReference: 0
        };
        this.sendResponse(response);
    }

    //---- helpers

    private createSource(filePath: string): Source {
        return new Source(path.basename(filePath), this.convertDebuggerPathToClient(filePath), undefined, undefined, 'z-adapter-data');
    }
}

class ZRuntime extends EventEmitter {

    // the initial (and one and only) file we are 'debugging'
    private _sourceFile: string = '';
    public get sourceFile() {
        return this._sourceFile;
    }

    private _process: ChildProcess | undefined;

    // This is the next line that will be 'executed'
    private _currentLine = 0;
    private _currentColumn: number | undefined;

    // maps from sourceFile to array of Breakpoints
    private _breakPoints = new Map<string, number[]>();

    // since we want to send breakpoint events, we will assign an id to every event
    // so that the frontend can match events with breakpoints.
    private _breakpointId = 1;

    constructor() {
        super();
    }

    /**
     * Start executing the given program.
     */
    public async start(program: string): Promise<void> {
        this._sourceFile = program;
        this._currentLine = 1;
        this._currentColumn = 0;
        this._process = spawn('z', [program]);

        this._process.stdout?.on('data', (data) => {
            this.sendEvent('output', data.toString(), this._sourceFile, this._currentLine, this._currentColumn);
        });

        this._process.stderr?.on('data', (data) => {
            this.sendEvent('output', data.toString(), this._sourceFile, this._currentLine, this._currentColumn);
        });

        this._process.on('close', (code) => {
            if (code !== 0) {
                this.sendEvent('end');
            }
        });
    }

    public terminate(): void {
        if (this._process && !this._process.killed) {
            this._process.kill();
        }
    }

    /**
     * Continue execution to the end/beginning.
     */
    public continue(reverse = false) {
        if (reverse) {
            this.sendEvent('stopOnEntry');
        } else {
            // emulate execute program to end
            this.sendEvent('end');
        }
    }

    /**
     * "Step" for single line and allow stepping backward.
     */
    public step(reverse = false) {
        if (reverse) {
            this.sendEvent('stopOnEntry');
        } else {
            // emulate step
            if (this._currentLine < 10) {
                this._currentLine++;
            } else {
                this.sendEvent('end');
            }
            this.sendEvent('stopOnStep');
        }
    }

    /**
     * Returns a fake 'stacktrace' where every 'stackframe' is a word from the current line.
     */
    public stack(startFrame: number, endFrame: number): any {

        const words = this._sourceFile ? this._sourceFile.split(/\s+/) : [];
        const frames = new Array<any>();

        // clamp the number of frames returned
        endFrame = Math.min(endFrame, words.length);

        for (let i = startFrame; i < endFrame; i++) {
            const name = words[i]; // use a word of the line as the stackframe name
            const stackFrame = {
                index: i,
                name: `${name}(${i})`,
                file: this._sourceFile,
                line: this._currentLine
            };
            frames.push(stackFrame);
        }

        return {
            frames: frames,
            count: words.length
        };
    }

    /*
     * Set breakpoint in file with given line.
     */
    public setBreakPoint(path: string, line: number): { verified: boolean, line: number, id: number } {
        const bp = { verified: true, line: line, id: this._breakpointId++ } as { verified: boolean, line: number, id: number };

        let bps = this._breakPoints.get(path);
        if (!bps) {
            bps = new Array<number>();
            this._breakPoints.set(path, bps);
        }
        bps.push(line);

        this.sendEvent('breakpointValidated', bp);

        return bp;
    }

    /*
     * Clear all breakpoints for file.
     */
    public clearBreakpoints(path: string): void {
        this._breakPoints.delete(path);
    }

    /*
     * Run the program.
     */
    public run(): void {
        this.sendEvent('stopOnEntry');
    }

    private sendEvent(event: string, ...args: any[]): void {
        setImmediate(_ => {
            this.emit(event, ...args);
        });
    }
}

// Import the EventEmitter
import { EventEmitter } from 'events';