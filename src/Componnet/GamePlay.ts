import { Type } from "typescript";
import { PlayGround } from "../GamePlay/Test";
import { Canvas2DApplication, CanvasAppFactroy } from "../Core/App/C2DApplication";
class GamePlay{
  constructor() {
    this.run.bind(this);
    this.canvas = document.getElementById(
        "canvas"
    ) as HTMLCanvasElement;
  }

  private canvas: HTMLCanvasElement;
  private app?: Canvas2DApplication;

  public run(): void {
    // 调用
    // 测试定时器
    if (this.canvas !== null) {
        this.app = CanvasAppFactroy.createInstance(PlayGround,this.canvas);
        this.app.start();
    }
  }
}

export default GamePlay;
