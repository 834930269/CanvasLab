import { MathTools } from './../MathTools';
import { time } from 'console';

export enum EnumTimerState{
    StandBy,//待命
    Timing,//计时
    Pause,//停止
    Destroy//销毁
}

export interface TimerProcessCallBack{
    (progress:number,deltaTime:number):void;
}

export interface TimerArgs{
    duration:number;
    isRepeat:boolean;
    isAutoDestroy:boolean;
    onTimerComplete?:Function;
    onTimerUpdate?:TimerProcessCallBack;
    onCheckInterrupt?:Function;
    onInterrupt?:Function;
}

export class Timer{
    constructor(args:TimerArgs){
        this.Duration = args.duration;
        this.isRepeat = args.isRepeat;
        this.isAutoDestroy = args.isAutoDestroy;

        this.onTimerComplete = args.onTimerComplete;
        this.onTimerUpdate = args.onTimerUpdate;
        this.onCheckInterrupt = args.onCheckInterrupt;
        this.onInterrupt = args.onInterrupt;

        this.startTime = this.Time;
        this.pauseTime = 0;
        this.pauseOffsetTime = 0;
        this.state = EnumTimerState.Timing;
    }

    private onTimerComplete?:any;
    private onTimerUpdate?:any;
    private onCheckInterrupt?:any;
    private onInterrupt?:any;
    private onDestroy?: any;
    private onPause?:any;
    private onResume?:any;

    private duration:number=0.0;
    private isAutoDestroy:boolean=true;
    private isRepeat:boolean=false;

    private startTime:number=0.0;
    private pauseTime:number=0.0;
    private pauseOffsetTime:number=0.0;
    private timer:number=0.0;
    private lastTimer:number=0.0;

    private state:EnumTimerState=EnumTimerState.Timing;

    public get State(){
        return this.state;
    }

    private get Time(){
        return Date.parse(new Date().toString());
    }

    public get Duration(){
        return this.duration;
    }

    public set Duration(value:number){
        this.duration=value;
    }

    public get IsAutoDestroy(){
        return this.isAutoDestroy;
    }

    public get CurrentTime(){
        return this.Time-this.pauseOffsetTime-this.startTime;
    }

    public get RemainderTime(){
        return this.Duration-this.CurrentTime;
    }

    public get Progress(){
        return MathTools.Clamp(this.CurrentTime/this.Duration,0,1);
    }

    public Update(){
        if(this.state!=EnumTimerState.Timing) return;
        if(this.onCheckInterrupt!=null && this.onCheckInterrupt()){
            if(this.onInterrupt!=null){
                this.onInterrupt();
                this.Pause();
            }
        }
        this.timer = this.Time-this.pauseOffsetTime-this.startTime;

        if(this.onTimerUpdate!=null){
            this.onTimerUpdate(MathTools.Clamp(this.timer/this.Duration,0,1),this.timer-this.lastTimer);
        }

        if(this.timer > this.Duration){
            if(this.onTimerComplete!=null)
                this.onTimerComplete();
            if(this.isRepeat){
                this.Reset();
            }else if(this.IsAutoDestroy){
                this.Destroy();
            }else{
                this.ResetAndStandBy();
            }
        }
        this.lastTimer=this.timer;
    }

    public Pause(){
        if(this.onPause!=null){
            this.onPause();
        }
        if(this.state == EnumTimerState.Timing){
            this.state=EnumTimerState.Pause;
            this.pauseTime=this.Time;
        }
    }

    public Resume()
    {
        if (this.onResume != null)
            this.onResume();
        if (this.state == EnumTimerState.Pause /*&& TimerManager.Instance.IsGlobalPause*/)
        {
            this.state = EnumTimerState.Timing;
            this.pauseOffsetTime += (this.Time - this.pauseTime);
        }
    }

    public Reset()
    {
        this.startTime = this.Time;
        this.pauseOffsetTime = 0;
        this.state = EnumTimerState.Timing;
    }

    public Start(){
        this.state = EnumTimerState.Timing;
    }

    public ResetAndStandBy()
    {
        this.Reset();
        this.state = EnumTimerState.StandBy;
    }

    public Destroy()
    {
        if (this.state == EnumTimerState.Destroy) return;
        this.onTimerComplete=null;
        this.onTimerUpdate =null;
        this.state = EnumTimerState.Destroy;
        if (this.onDestroy != null)
            this.onDestroy();
    }
}