import { NonEmptyArray } from '_@baggie_typescript@0.1.7-alpha.1@@baggie/typescript';
import { Point } from './Point';
export class BezierCurve{
    constructor(){}

    /**
     * N阶贝塞尔曲线递归实现
     * @param time 时间[0-1]
     * @param point 控制点集
     */
    public Bezier(time:number,point:Array<Point>):Point{
        if(point.length < 2){
            return point[0];
        }
        var newPoint:Array<Point> = new Array<Point>();
        for(var i=0;i<point.length-1;++i){
            var np:Point=point[i].clone();
            np.scale(1-time);
            np.scaleAndAdd(point[i+1],time);
            newPoint.push(np);
        }
        return this.Bezier(time,newPoint);
    }
}