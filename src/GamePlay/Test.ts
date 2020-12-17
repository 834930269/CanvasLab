import { TextBaseline } from './../extension/Core/DrawUtils/draw';
import { MathTools } from './../extension/MathTools';
import { BezierCurve } from './../extension/Interpolation/BezierCurve';
import { Canvas2DApplication } from "../extension/Core/C2DApplication";
import {
    fillText,
    strokeGrid,
    fillCircle,
    strokeCoord,
    TextAlign,
} from "../extension/Core/DrawUtils/draw";
import {
    CanvasKeyBoardEvent,
    CanvasMouseEvent,
} from "../extension/Core/Shared/Event";
import { Point } from '../extension/Interpolation/Point';

export class PlayGround extends Canvas2DApplication {
    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
        this.bezier=new BezierCurve();
        this.point = new Point(40,40);
        this.perFrame = 2000;
        this.direction = true; //初始正向
        this.progress=0.0;
        this.draw_ = true;
        this.counter=0;

        this.addTimer(
            (id,data)=>{
                this.draw_=!this.draw_;
            },
            0.65,
            false,
            null
        );
        this.addTimer(
            (id,data)=>{
                this.counter=(this.counter+1)%this.Title.length;
            },
            0.5,
            false,
            null
        )
    }
    private bezier:BezierCurve;
    private point:Point;
    private perFrame:number;
    private direction:boolean;
    private progress:number;

    private draw_:boolean;
    private counter:number;
    private Title:string="ちょう　ぶん　とう";

    protected Render(): void {
        this.drawBackground();
        this.drawText("浪迹天涯的终极无敌打工仔ZWT参上!",500,10,"top","center",40,false);
        this.drawText("露如微霰下前池，月过回塘万竹悲。",500,80,"top","center",20,false);
        this.drawText("浮世本来多聚散，红蕖何事亦离披。",500,110,"top","center",20,false);
        this.drawText("悠扬归梦惟灯见，濩落生涯独酒知。",500,140,"top","center",20,false);
        this.drawText("岂到白头长只尔，嵩阳松雪有心期。",500,170,"top","center",20,false);
        this.drawText("---《七月二十九日崇让宅宴作》",550,210,"top","center",15,false);
        if(this.context2D !== null){
            for(var i=0;i<=this.counter;++i){
                let ofX=(i-this.Title.length)*80+this.context2D.canvas.width-this.Title.length*75;
                this.drawText(this.Title[i],ofX,0,"middle","center",70,true);
            }
        }
        if(this.draw_){
            this.drawText("____");
        }
    }

    /**
     * 
     * @param text 文本
     * @param offsetX X轴偏移量
     * @param offsetY Y轴偏移量
     * @param textBaseLine 与画布对齐方式
     * @param textAlign 文本框内对齐方式
     * @param size 大小
     * @param is_center 是否居中
     */
    protected drawText(text: string,offsetX:number=0,offsetY:number=0,textBaseLine:TextBaseline="middle",textAlign:TextAlign="center",size:number=140,is_center:boolean=true): void {
        if (this.context2D !== null) {
            let c = this.context2D;
            // 计算cnavas中心坐标
            let centerX: number = 0;
            let centerY: number = 0;
            if(is_center){
                centerX = c.canvas.width * 0.5;
                centerY = c.canvas.height * 0.5;
            }

            fillText(
                c,
                text,
                centerX+offsetX,
                centerY+offsetY,
                "#000",
                textAlign,
                textBaseLine,
                size+"px sans-serif"
            );
        }
    }

    // 画背景
    protected drawBackground(): void {
        let c = this.context2D;
        if (c !== null) {
            c.lineWidth = 10;
            //为指定矩形描边 如果后两个参数中任何一个为0，则画横线或者竖线,都为0则不绘制
            c.strokeRect(75, 100, 200, 200);
            //填充矩形，如何后两个参数任意一个为0，则不绘制
            c.fillRect(325, 100, 200, 200);
            c.clearRect(0, 0, c.canvas.width, c.canvas.height);
            fillCircle(c, this.point.x, this.point.y, 10, "green");
            strokeGrid(c, "#333", 15);
            fillCircle(c,200,200,80,'rgb('+(255*this.progress)+','+(255-255*this.progress)+',100)');
            //strokeCoord(c, 0, 0, c.canvas.width, c.canvas.height)
        }
    }

    protected Update(elapsedMsec:number,intervalSec:number) {
        this.direction = (((elapsedMsec/this.perFrame) & 1)===0);
        this.progress = (elapsedMsec%this.perFrame)/this.perFrame;
        if(!this.direction){
            this.progress = 1-this.progress;
        }
        var pt:Point=this.bezier.Bezier(this.progress,[
            new Point(0.86, 0),
            new Point(0.07, 1),
            new Point(0.52, 0.52),
            new Point(0.74, 0.32)
        ]);

        //[40,40] - [180,120]
        this.point.x = pt.x*800 + 60;
        this.point.y = pt.y*600 + 60;
    }

    // 鼠标
    protected dispatchMouseDown(evt: CanvasMouseEvent) {
        console.log("鼠标按下", evt);
    }

    // 按键
    protected dispatchKeyPress(evt: CanvasKeyBoardEvent) {
        console.log("按键", evt);
    }
}
