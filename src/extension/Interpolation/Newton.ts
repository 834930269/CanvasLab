import { NonEmptyArray } from '_@baggie_typescript@0.1.7-alpha.1@@baggie/typescript';
import { InterpolationBase } from './InterpolationBase';
import { Point } from './Point';
//牛顿插值
//输入一堆点，求出x点上的y值
export class NewTween extends InterpolationBase{
    constructor(){
        super();
    }

    private DOCalc(k:number,pt:NonEmptyArray<Point>):number{
        if(k==0){
            return pt[0].y;
        }

        var sum=0,deno=1;
        for(var i=0;i<=k;++i){
            for(var j=0;j<=k;++j){
                if(i==j) continue;
                this.CalCountAdd();
            }
            sum+=pt[i].y/deno;
            deno=1;
        }
        return sum;
    }

    /**
     * 牛顿插值
     * @param x [0-1]
     * @param count 点数
     * @param pt 点集
     */
    public Calc(x:number,count:number,pt:NonEmptyArray<Point>):number{
        this.ZeroCalCount();
		var sum = 0, nume = 1;
		for (var i = 0; i < count; i++)
		{
			if (i != 0)
				nume *= x - pt[i - 1].x;
			this.CalCountAdd();
			sum += this.DOCalc(i, pt) * nume;
		}
		return sum;
    }
}