import { Point } from "../Interpolation/Point";

export class Transform{
    constructor(){
        this._position = new Point();
        this.rotation = new Point();
        this.localScale = new Point();
        this.localPosition = new Point();
        this.childs=new Array<Transform>();
    }
    private _position:Point;
    public rotation:Point;
    public localScale:Point;
    public localPosition:Point;
    public root:Transform=this;
    public childs:Array<Transform>;
    private _parent:Transform=this;

    public set parent(p:Transform){
        if(p!=this._parent){
            if(this._parent!=this){
                this._parent.RemoveChild(this);
            }
            this._parent=p;
            p.AddChild(this);
        }
    }

    public get parent():Transform{
        return this._parent;
    }

    private AddChild(cld:Transform):void{
        this.childs.push(cld);
    }
    private RemoveChild(cld:Transform):void{
        let index = this.childs.indexOf(cld);
        if(index>-1){
            this.childs.splice(index,1);
        }
    }

    public get position(){
        return this._position;
    }
    public set position(pos:Point){
        this._position=pos;
    }

}

