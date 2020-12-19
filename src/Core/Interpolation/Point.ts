import { MathTools } from '../MathTools';

export interface PointLike{
    x:number,
    y:number
}

//插值计算中的笛卡尔下的点
export class Point{
    constructor(x?:number,y?:number){
        this.x=x || 1;
        this.y=y || 1;
    }
    public x:number;
    public y:number;

    public clone(){
        return new Point(this.x,this.y);
    }

    public set(x:number,y:number){
        this.x=x;
        this.y=y;
    }

    public equal(other:Point){
        return other.x===this.x && other.y===this.y;
    }

    public add(other:Point){
        this.x+=other.x;
        this.y+=other.y;
        return this;
    }

    /**
     * 数乘
    */
    public scale(scalar:number){
        this.x*=scalar;
        this.y*=scalar;
    }

    public scaleAndAdd(other:Point,scalar:number){
        this.x += other.x*scalar;
        this.y += other.y*scalar;
    }

    /**
     * XY不等价数乘
     * @param scalar 
     */
    public scaleXY(scalar:Point){
        this.x*=scalar.x;
        this.y*=scalar.y;
    }

    public scaleXYAndAdd(other:Point,scalar:Point){
        this.x += other.x*scalar.x;
        this.y += other.y*scalar.y;
    }

    public sub(other: Point){
        this.x -= other.x;
        this.y -= other.y;
        return this;
    }

    /**
     * 点乘
     * @param other 另外一个点
     */
    public dot(other:Point){
        return this.x*other.x+this.y*other.y;
    }

    /**
     * 获取到原点的距离
     */
    public len(){
        return MathTools.Sqrt(this.lenSquare());
    }

    public lenSquare(){
        return this.x*this.x + this.y*this.y;
    }

    /**
     * 归一化
     */
    public normalize(){
        const len =this.len();
        this.x /=len;
        this.y /=len;
        return this;
    }

    /**
     * 到另一个点的距离
     * @param other
     */
    public distance(other:Point):number{
        return MathTools.Sqrt(this.distanceSquare(other));
    }

    public distanceSquare(other:Point){
        const dx = this.x -other.x;
        const dy = this.y - other.y;
        return dx*dx+dy*dy;
    }

    public negate(){
        this.x = -this.x;
        this.y = -this.y;
    }

    /**
     * 线性插值
     * @param p0 A点
     * @param p1 B点
     * @param t 时间比例
     */
    static lerp(p0:Point,p1:Point,t:number):Point{
        const onet =1-t;
        var out:Point=new Point(0,0);
        out.x = onet * p0.x + t* p1.x;
        out.y = onet * p0.y + t*p1.y;
        return out;
    }

}