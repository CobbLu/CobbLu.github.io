---
title: CSS3动画效果
publish: false
---

## 1.transform：

### 1.1.2D转换

（1）translate（x轴, y轴）

 平移

* translatex（单位%或px，这里百分比是移动元素的长或宽来对比的）
* translatey

eg：

```html
<style>
    /*盒子实现水平和垂直居中*/
    .box1{
        width: 500px;
        height: 500px;
        background-color: antiquewhite;
        position: relative;
    }
    p{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 200px;
        height: 200px;
        background-color: blueviolet;
        /*往上走自己高度的一半*/
        transform: translate(-50%, -50%);
    }
</style>
<body>
    <div class="box1"><p></p></div>
</body>
```

注：translate对于行内元素无效

（2）scale（x, y）

缩放，参数不带单位，是倍数的意思，1就是原来大小，2就是原来的一倍。等比例缩放，可以只写一个参数

* scalex
* scaley

eg：

```html
<style>
    /*鼠标经过图片放大效果*/
    div{
        overflow: hidden;
        float: left;
        margin: 20px;
    }
    div img{
        transition: all 0.4s;
    }
    div img:hover{
        transform: scale(1.1);
    }
</style>
<body>
    <div><a href="#"></a><img src="1.jpg"></div>
    <div><a href="#"></a><img src="1.jpg"></div>
    <div><a href="#"></a><img src="1.jpg"></div>
</body>
```

特点：可以设置缩放中心的，且不影响其他盒子

（3）rotate（angle deg）

旋转       范围-360~360 +顺时针 -逆时针

* rotateX
* rotateY
* rotateZ

eg：transform:rotate(15deg);

（4）2D转换综合写法顺序

transform: translate()  rotate()  scale() 等

注意：顺序会影响转换效果（先选择会改变坐标轴方向），当同时又位移和其他属性时，要将位移放到最前

### 1.2.3D转换

（1）CSS3的三维坐标系

​	x轴：右正，左负

​	y轴：下正，上负（与数学中的坐标系相反）

​	z轴：向外为正，向里为负

（2）translate3d(x, y, z)

​	translateZ(z)参数后面的单位一般为px,z轴越大物体越大

​	eg：transform:translateX(100px) translateY(100px) translateZ(100px) === translate3d(100px, 100px, 100px)

（3）perspective透视（无需transform）

​	增加元素的立体感，可以理解为凑进了看一个物体

​	注意：透视写在被观察元素的父盒子上

​	透视越小元素子越大，透视越大元素越小

（2）skew（x-angle, y-angle）扭曲   只有一个参数只有x方向扭曲
* skewx
* skewy

（3）matrix（a,b,c,d,e,f）定义2D变形。使用六个值的矩阵

* a b表示x轴，c d表示y轴，e f表示z轴

## 2.transform-origin：

* 作用：调整元素旋转的基点

  （元素默认的基点在其正中心，

  ​	等价于：transform-origin:center center）

* 参数：（参数用空格隔开，可以使用方位名词，百分比，px）
  * x-axis： 
  * y-axis ：
  * z-axis：
  
  eg：
  
  ```html
  <style>
      /*旋转中心案例*/
      div{
          width: 200px;
          height: 200px;
          border: 1px solid #ff486b;
          margin: 100px auto;
          overflow: hidden;
      }
      div::before{
          content: "你在吗？";
          display: block; /*::before伪元素为行内元素*/
          width: 100%;
          height: 100%;
          background-color: #ff486b;
          transform: rotate(180deg);
          transform-origin: left bottom;
          transition: all 0.3s ease;
      }
      div:hover::before{
          transform: rotate(0deg);
      }
  </style>
  <body>
      <div></div>
  </body>
  ```

## 3.过渡动画*

通常和hover伪元素搭配使用，谁做过渡给谁加

* 常用属性

  * transition: property name | duration | timing function | delay

    transition:要过渡的属性	花费的时间	运动曲线(可省)	何时开始(可省);

  * transition-property:定义应用过渡效果的 CSS 属性名称列表，列表以逗号分隔，也可以直接使用all。

  * transition-duration:完成过渡效果需要花费的时间

  * transition-timing-function:规定速度效果的速度曲线

  * transition-delay:在过渡效果开始前等待时间

    

* 可以使用的属性：
  * 颜色：color background-color border-color outline-color
  * 位置：background-position left right top bottom

## 4.animation

动画序列，可以做多个状态的变化；keyframe关键帧；

可以添加多个动画用“，”隔开，eg：animation：move1 1s ……，move2 2s ……，move3…………;

（1）基本使用

* @keyframes定义动画(类似定义类选择器)

  from和to等同于0%和100%

  百分比要是整数，且按照总的时间划分

* 调用动画

  * animation-name(不可省)

  * animation-duration(不可省)

  * animation-timing-function运动曲线

    * linear匀速

    * ease慢->快->慢（默认）

    * ease-in慢开始

    * ease-out慢结束

    * ease-in-out慢开始慢结束

    * steps($)分几步完成动画

      ```css
      /*打印机效果*/
      div{
          font-size: 20px;
          height: 30px;
          animation: w 2s steps(10);      /*10步输出，10个字*/
          overflow: hidden;
          /*white-space: nowrap;         !*强制在一行显示*!*/
      }
      @keyframes w {
          0%{
              width: 0;
          }
          100%{
              /*fz为20px，所以宽度设置为200px*/
              width: 200px;
          }
      }
      ```
      ```html
      
      ```
    <div>打印机动画打印行文字</div>
      ```
    
      ```
    
  * animation-delay何时开始
  
  * animation-iteration-count重复次数
  
    * 次数（默认为1）/infinite（无限）
  
  * animation-direction是否反方向播放
  
    * 默认normal/反方向播放alternate
  
  * animation-fill-mode动画结束后的状态
  
    * 默认backwards(回到起始)/forwards(保持)
  
  * animation-play-state动画播放状态
  
    * 默认running/paused(停止)
  
  * 动画简写属性：
  
    animation：动画名称	持续时间	何时开始	播放次数	是否反方向	动画结束状态
  
  注：animation-play-state不可写入简写中
  
  eg：
  
  ```html
   <style>
  /*1.定义动画*/
      @keyframes move {
          0%{
              transform: translate(0, 0);
          }
          25%{
              transform: translate(500px, 0);
          }
          50%{
              transform: translate(500px, 100px);
          }
          75%{
              transform: translate(0, 100px);
          }
          100%{
              transform: translate(0, 0);
          }
      }
      div{
          width: 100px;
          height: 100px;
          background-color: blueviolet;
          /*2.调用动画*/
          animation-name: move;
          animation-duration: 3s;
      }
  </style>
  <body>
      <div></div>
  </body>
  ```
  
  