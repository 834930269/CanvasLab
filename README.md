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

该项目将会从拟2D游戏引擎最基本的开始(借鉴的框架代码非常少,但是足够了)  
一步步的深入和细化和完善引擎架构,不完全实现游戏引擎的功能,但会逐步实现一些非常有趣的动效和基本的动画。  
直到做出一个基于Canvas的动画博客。 

RT,该Repo是一个实验性质的Repo,它**并不涉及前端的大部分知识**  
Po主目前主要做Unity前端  
JS的实现比较直观,而且可以以最小代价部署到Github Page上 目前Po主也暂时不会深入学习前端的知识  
最多的则是Canvas方面的知识  


![image](https://github.com/834930269/CanvasLab/blob/main/github_static/1.jpg)   

## 技术解释  
### 为什么选择JS?    
因为见效快,可以直接部署到Github Page上

### 动效与插值  

**通俗来说,就是通过函数来控制图片的移动速率,时间作为x轴,随便整一个函数来计算下一个位置要跑到哪**

> 当然,据之前浏览很多大佬的实现方案,还有基于物理公式的实现...这个小白不懂,简单的效果只需要使用贝塞尔其实就够了


### 设计模式

为什么**刚入门的我们就想不到怎么实现框架呢**？  

这就是设计模式的故事了。

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


如在叙述中有不对  
真心希望能得到您的指导!  


-- 西花厅的海棠花又开了.