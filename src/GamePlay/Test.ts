import { MathTools } from './../extension/MathTools';
import { BezierCurve } from './../extension/Interpolation/BezierCurve';
import { Canvas2DApplication } from "../extension/Core/C2DApplication";
import {
    fillText,
    strokeGrid,
    fillCircle,
    strokeCoord,
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
    }
    private bezier:BezierCurve;
    private point:Point;
    private perFrame:number;
    private direction:boolean;
    private progress:number;

    protected Render(): void {
        this.drawBackground();
        this.drawText("Solvarg");
    }

    protected drawText(text: string): void {
        if (this.context2D !== null) {
            let c = this.context2D;
            // 计算cnavas中心坐标
            let centerX: number = c.canvas.width * 0.5;
            let centerY: number = c.canvas.height * 0.5;

            fillText(
                c,
                text,
                centerX,
                centerY,
                "#000",
                "center",
                "middle",
                "140px sans-serif"
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
