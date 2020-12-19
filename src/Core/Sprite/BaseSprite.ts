import { Point } from './../Interpolation/Point';
import { Transform } from "./Transform";

export abstract class BaseSprite{
    constructor(
        layer?:number,layerSort?:number,
        parent?:Transform
    ){
        this.transform=new Transform();
        this.type = BaseSpriteType.None;
        this.spriteLayer=new Point(layer||0,layerSort||0);
        this.transform.parent=parent || this.transform;
    }
    public type:BaseSpriteType;
    public transform:Transform;
    /**
     * x为层级
     * y为在该层级内的排序
     */
    public spriteLayer:Point;

    public abstract draw(ctx:CanvasRenderingContext2D):void;
}

export enum BaseSpriteType{
    None=0,
    Square=1,
    Circle=2,
    Rect=3,
    Custome=4,
}