import { InterpolationBase } from "./InterpolationBase";
import { Point } from "./Point";

//输入一堆点，求出x点上的y值
export class Lagrange extends InterpolationBase{
    constructor(){
        super();
    }

    /**
     * 拉格朗日插值
     * @param x 坐标为x[0-1] 可以当做时间
     * @param count 总共几个点
     * @param pt 点集
     */
    public Calculate(x:number,count:number,pt:Array<Point>){
        this.ZeroCalCount();
        var nume,deno,result=0;
        for(var i=0;i<count;++i){
            nume=1;
            deno=1;
            for(var j=0;j<count;++j){
                if(i==j) continue;
                this.CalCountAdd();
                nume*=x-pt[j].x;
                deno*=pt[i].x-pt[j].x;
            }
            result += (nume/deno) * pt[i].y;
        }
        return result;
    }
}