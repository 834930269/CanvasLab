import { Point } from "../../Interpolation/Point";
import { BaseSprite } from "../BaseSprite";
import { Transform } from "../Transform";

export class RectSprite extends BaseSprite{
    public draw(ctx:CanvasRenderingContext2D): void {
        ctx.strokeRect(
            this.transform.position.x,this.transform.position.y,
            this.rectInfo.x,this.rectInfo.y
        );
    }
    private _rectInfo:Point;
    constructor(
        height:number,width:number,
        layer?:number,layerSort?:number,
        parent?:Transform
    ){
        super(layer,layerSort,parent);
        this._rectInfo = new Point(height,width);
    }

    public get rectInfo():Point{
        let newRect:Point = this._rectInfo.clone();
        newRect.scaleXY(this.transform.localScale);
        return newRect;
    }

}