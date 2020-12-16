import { vec2 } from './Vec2';
/**
 * 输入事件的分发和响应
 */

//事件类型枚举
export enum EInputEventType{
    MOUSEEVENT,
    MOUSEDOWN,
    MOUSEUP,
    MOUSEMOVE,
    MOUSEDRAG,
    KEYBOARDEVENT,
    KEYUP,
    KEYDOWN,
    KEYPRESS
}

export class CanvasInputEvent{
    public altKey:boolean;
    public ctrlKey:boolean;
    public shiftKey:boolean;
    //当前事件类型
    public type:EInputEventType;
    public constructor(
        altKey:boolean=false,
        ctrlKey: boolean = false,
        shiftKey: boolean = false,
        type: EInputEventType = EInputEventType.MOUSEEVENT
    ){
        this.altKey = altKey
        this.ctrlKey = ctrlKey
        this.shiftKey = shiftKey
        this.type = type
    }
}

export class CanvasMouseEvent extends CanvasInputEvent{
    // button 表示按下鼠标的哪个键 [0: 左键，1: 中键，2: 右键]
    public button:number;
    // 基于canvas坐标系的表示
    public canvasPosition: vec2
    public localPosition: vec2

    public constructor(
        canvasPos: vec2,
        button: number,
        altKey: boolean = false,
        ctrlKey: boolean = false,
        shiftKey: boolean = false
      ) {
        super(altKey, ctrlKey, shiftKey)
        this.canvasPosition = canvasPos
        this.button = button

        // 暂时创建一个vec2对象
        this.localPosition = vec2.create()
      }
}

/**
 *键盘事件
 *
 * @export
 * @class CanvasKeyBoardEvent
 * @extends {CanvasInputEvent}
 */
export class CanvasKeyBoardEvent extends CanvasInputEvent{
    // 当前按下的ASCII字符
    public key: string
    // 当前按下的ASCII码
    public keyCode: number
    // 当前按下的键是否不停的出发事件
    public repeat: boolean
    public constructor(
      key: string,
      keyCode: number,
      repeat: boolean,
      altKey: boolean = false,
      ctrlKey: boolean = false,
      shiftKey: boolean = false
    ) {
      super(altKey, ctrlKey, shiftKey, EInputEventType.KEYBOARDEVENT)
      this.key = key
      this.keyCode = keyCode
      this.repeat = repeat
    }
  }