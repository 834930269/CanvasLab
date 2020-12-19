export class SingletonBase{
    constructor(){}
    private static instance:SingletonBase;
    public static getInstance():SingletonBase{
        if(this.instance==null){
            this.instance=new SingletonBase();
        }
        return this.instance;
    }
}