- [canvas 插值动效实验室](#canvas--------)
  * [Demo](#demo)
  * [目的与目标](#-----)
  * [技术解释](#----)
    + [为什么选择JS?](#-----js-)
    + [动效与插值](#-----)
    + [设计模式](#----)
  * [进度](#--)

# canvas 插值动效实验室

-------------

基础核心架构支撑来自:  

[https://github.com/seymoe/canvas2d-ts](https://github.com/seymoe/canvas2d-ts "https://github.com/seymoe/canvas2d-ts")

Tag: 没了解协议问题,所以把基础核心架构的借鉴放在最上方

-------------  

**算法和语法是承载框架的砖头**  
**设计模式才是完成框架的核心** 

## Demo

Demo地址:  

[http://www.be-sunshine.cn/Solvarg_lab/](http://www.be-sunshine.cn/Solvarg_lab/ "http://www.be-sunshine.cn/Solvarg_lab/")

文档完善中

## 目的与目标  

<h1>最大目标就是瞎78乱写 写哪是哪 放飞自我...</h1>

该项目将会从拟2D游戏引擎最基本的开始(借鉴的框架代码非常少,但是足够了)  
一步步的深入和细化和完善引擎架构,不完全实现游戏引擎的功能,但会逐步实现一些非常有趣的动效和基本的动画。  
直到做出一个基于Canvas的动画博客。 

RT,该Repo是一个实验性质的Repo,它**并不涉及前端的大部分知识**  
Po主目前主要做Unity前端  
JS的实现比较直观,而且可以以最小代价部署到Github Page上 目前Po主也暂时不会深入学习前端的知识  
最多的则是Canvas方面的知识  


![image](/github_static/1.jpg)   

## 技术解释  
### 为什么选择JS?    
因为见效快,可以直接部署到Github Page上

### 动效与插值  

**通俗来说,就是通过函数来控制图片的移动速率,时间作为x轴,随便整一个函数来计算下一个位置要跑到哪**

> 当然,据之前浏览很多大佬的实现方案,还有基于物理公式的实现...这个小白不懂,简单的效果只需要使用贝塞尔其实就够了


### 设计模式

为什么**刚入门的我们就想不到怎么实现框架呢**？  

这就是设计模式的故事了。

### 精灵(Sprite)

如果硬编码绘制图形 需要不断的控制图形的形状等参数

考虑一下将每个图形当做一个元素,然后我们只通过  
- 缩放(scale)
- 位置(position)
- 旋转(rotation)

等信息来控制这个元素  

就会方便很多

然后还有就是每个元素的绘制顺序  

绘制到屏幕上的顺序决定了是那个元素 **盖着** 那个元素  

就是谁在谁上面 也可以根据规定层级用透视算法来模拟远近的透视缩放

### 形态记录(Transform)  

我们可以通过Transform来控制层级关系,即哪个元素是哪个元素的子物体

以及记录该元素的父物体 位置 缩放 旋转等数据

## 进度

插值函数 

目前基础引擎支持的功能:  

- 基础2D图像绘制
- FPS统计
- 时间管理器
- 帧的生命周期
	- Update
	- Stop
	- Render
- 定时器
- 精灵 (进行中)
- Tranform (进行中)

## 运行

```shell
cnpm i  

npm start
```

### 入口

> 全局入口

**src/Component/GamePlay.ts**

中的**run()**函数

```typescript
public run(): void {
	// 调用
	// 测试定时器
	if (this.canvas !== null) {
	    this.app = CanvasAppFactroy.createInstance(PlayGround,this.canvas);
	    this.app.start();
	}
}
```

函数中的app是一个场景,该场景继承自**Canvas2DApplication**类  
从工厂函数**CanvasAppFactroy**中生成子类对象  
调用基类**start()**方法启动场景

> 场景入口

**src/GamePlay/Test.ts**  

中的**PlayGround**类

其中画布的绘制是在**重写的Render()**方法中(**记为帧**)  

数据的帧更新在**重写的Update()**方法中



## 下一步

 - 打字机效果(古诗逐字浮现效果)
 - 完善Sprite
 - 编写坐标变换 实现Sprite的 缩放/旋转 等效果


如在叙述中有不对  
真心希望能得到您的指导!  