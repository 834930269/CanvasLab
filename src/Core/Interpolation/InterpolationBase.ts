export class InterpolationBase{

    private static instance:InterpolationBase;

    constructor(){
        this.m_calCount=0;
    }
    protected m_calCount:number;
    protected ZeroCalCount(){
        this.m_calCount=0;
    }
    protected CalCountAdd(){
        this.m_calCount++;
    }
    public GetCalCount():number{
        return this.m_calCount;
    }

    public static getInstance():InterpolationBase{
        if(this.instance==null){
            this.instance=new InterpolationBase();
        }
        return this.instance;
    }

}