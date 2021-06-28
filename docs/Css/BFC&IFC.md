---
title: BFC&IFC规范
publish: false
---

## 1.FC(Fomatting Context)

​	**格式上下文**：页面中的一块渲染区域，并有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。



## 2.BFC规范(块级)

* ##### 形成BFC的条件：

  * 浮动元素(float除none以外的值)
  * 定位元素(position中的absolute/fixed)
  * display(值为inline-block/table-cell/table-caption时)
  * overflow(值为hidden/auto/scroll时)

* ##### BFC特性(规则)

  * 内部的盒子会在垂直方向上一个接一个的放置

  * 垂直方向的距离会叠加，值由最大margin的值决定

    ```html
     <style>
            .container{
                width: 100px;
                height: 100px;
                background-color: black;
            }
            .box1{
                height: 20px;
                margin: 2px 0;
                background-color: aqua;
            }
            .box2{
                height: 20px;
                margin: 20px 0;													/*box1和box2的上下距离为20px*/
                background-color: aquamarine;
            }
        </style>
    </head>
    <body>
    <div class="container">
        <div class="box1"></div>
        <div class="box2"></div>
    </div>
    ```

    (垂直两个元素上下设置margin值按最大的那个算。如果不想让margin值叠加，需要将该盒子变成一个独立的盒子)

    ```css
    .wrapper{
        overflow: hidden;
    }
    ```

    ```html
    <div class="container">
        <div class="wrapper">	
            <div class="box1"></div>
        </div>
        <div class="box2"></div>
    </div>
    ```

  * BFC的区域不会与float元素区域重叠

    ```css
    .box1{              /*BFC*/
        height: 100px;
        width: 200px;
        float: left;    /*不会和BFC.box2重叠*/
        background-color: aqua;
    }
    .box2{              /*BFC*/
        overflow: hidden;
        height: 200px;
        background-color: aquamarine;
    }
    ```
    
    ```html
    <div class="container">
        <div class="box1"></div>
        <div class="box2"></div>
    </div>
    ```
    
  * 计算BFC的高度时，浮动元素也参与运算
  ```css
  .container{
      width: 300px;
      border: 1px solid #000;
      overflow: hidden;      
      /*设置hidden，将.container变为BFC，高度将会被浮动的高度撑开*/
  }
  .box1{
      width: 200px;
      height: 200px;
      background-color: aquamarine;
      float: left;
  }
  ```

  ```html
  <div class="container">
      <div class="box1"></div>
  </div>
  ```

  >* BFC就是页面上的一个独立容器，容器里面的子元素不会影响到外面的元素

* ##### BFC的作用

  * 解决margin重叠问题(添加独立BFC)
  * 解决浮动高度塌陷的问题(在父级添加overflow:hidden)
  * 解决侵占浮动元素的问题(添加overflow:hidden清除浮动)



## 3.IFC规范(行级/内联)

* ##### 形成BFC的条件

  * font-size
  * line-height
  * height
  * vertical-aligin

* ##### IFC特性(规则)

  * IFC的元素会在一行中从左至右的排列
  * 在一行上的所有元素会在该区域形成一个行框
  * 行框的高度为包含框的高度，高度为行框中最高元素的高度
  * 浮动的元素不会在行框中，并且浮动元素会压缩行框的宽度
  * 行框的宽度容纳不下子元素时，子元素会换下一行显示，并且会产生新的行框
  * 行框的元素内遵循text-align和vertical-align

* ##### 容器的高度：height = line-height + vertical-align

  

  


