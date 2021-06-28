---
title: 布局
publish: false
---

*网页布局的本质一用CSS 来摆放盒子，把盒子摆放到相应位置*

## 1.三种布局方式

*CSS提供了三种传统布局方式(简单说就是盒子如何进行排列顺序)*

***网页布局第一准则**：多个块级元素**纵向排列**找**标准流**,多个块级元素**横向排列找浮动***

**网页布局第二准则**：**先**设置盒子**大小**，之**后**设置盒子的**位置**



### 1.1.标准流

*也叫普通流，文档流，所谓的标准流：就是标签按照规定好的默认方式排列*

* 块级元素会独占一行，从上向下顺序排列
* 行内元素会按照顺序，从左到右顺序排列,碰到父元素边缘则自动换行



### 1.2.浮动

#### 1.2.1.float

*用于创建浮动框.将其移动到一边，直到左边缘或右边缘触及包含块或另一个浮动框的边缘*

```css
float: left/right/inherit/none
```

#### 1.2.3.特性

（1）浮动元素会**脱离标准流(脱标)**，不再保留原先的位置

![image-20210413142920470](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210413142920470.png)

（2）浮动的元素会**一行内显示**并且**元素顶部对齐**

* 注意：浮动的元素是互相贴靠在一起的(不会有缝隙)，如果父级宽度装不下这些浮动的盒子，多出的盒子会另起一行对齐

（3）浮动的元素会具有**行内块元素**的特性

（4）浮动的盒子只会影响浮动盒子后面的标准流不会影响前面的标准流

（5）与定位不同浮动会压住它下面标准流的盒子,但是**不会压住**下面标准流盒子里面的**文字(图片)**；因为浮动最初是为了做文字环绕效果的

* 定义父盒子内的三个标准流子盒子
  
  ![image-20210413153251484](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210413153251484.png)
  
* 为中间盒子添加左浮动后
  
  ![image-20210413153320486](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210413153320486.png)



#### 1.2.4.清除浮动

*清除浮动的本质是清除浮动元素造成的影响*

如果父盒子没有高度，有高度的子元素设置了浮动脱离了标准流，那么父盒子就不会被撑开

如果父盒子**本身有高度**，则不需要清除浮动

清除浮动之后，父级就会根据浮动的子盒子自动检测高度；父级有了高度，就不会影响下面的标准流了

```css
clear: left/right/both
```



##### 1.2.4.1.额外标签法

*额外标签法会在**浮动元素末尾**添加一个空的标签*

例如`<div style="clear: both;"></div> ` 或者其他标签**（只能是块级元素）**



##### 1.2.4.2.overflow

*父级添加`overflow:hidden`属性*



##### 1.2.4.3.after伪元素

*父级添加`::after`伪元素，额外标签法的升级版*

```css
父元素::after {
    content: "";
     /*content本身是行内元素，清除浮动需要块级元素*/
    display: block;
    /*隐藏元素*/
    visibility: hidden;
    height: 0;
    clear: both;
}
父元素 {
    /*IE6、7专有*/
    *zoom: 1;
}
```



##### 1.2.4.4.双伪元素

*父级添加双伪元素*

```css
父元素:before,
父元素:after {
    content :"";
    /*转换为块级元素并且一行显示*/
    display: table;
}
父元素:after {
    clear: both;
}
父元素 {
    *zoom:1;
}
```



#### 1.2.5.案例使用

##### 1.2.5.1.与标准类搭配

*浮动元素经常和标准流父级搭配使用*

*先用标准流的父元素排列上下位置，之后内部子元素采取浮动排列左右位置符合网页布局第一准侧*
![image-20210413143615470](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210413143615470.png)





### 1.3.定位

*定位：将盒子定在某一个位置 ,所以定位也是在摆放盒子。按照定位的方式移动盒子*

*定位=定位模式+边偏移(top、bottom、left、right)*

#### 1.3.1.位偏移属性

*如果一个盒既有left属性也有right属性， 则默认会执行left属性同理top和bottom，默认top*

>top/bottom/left/right: number/%

##### 1.3.1.1.位偏移的值

**往属性名相反**的方向移动为**正值**，**往属性名一样**的方向移动为**负值**

![image-20210424112452836](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210424112452836.png)





#### 1.3.2.position	

*定位模式*：设置元素在文档中的位置，会将标签（元素）转换为**块级**

*块级元素添加**绝对**或者**固定**定位,如果不给宽度或者高度,默认大**小是内容的大小***

绝对定位(固定定位)会**压住下面标准流所有的内容**

>positon: value

| value    | main |
| -------- | ---- |
| static   | 静态 |
| relative | 相对 |
| absolute | 绝对 |
| fixed    | 固定 |



#### 1.3.3.定位的分类(属性值)

##### 1.3.3.1.static

占用标准流(文档流)，默认值，没有定位，不能设置偏移值(left/top/right/bottom)



##### 1.3.3.2.relativ

*它是相对于**自己原来的位置**来移动的*

**原来**在标准流的**位置继续占有**，**会压住其他标准流和浮动的盒子**，后面的盒子仍然以标准流的方式对待它( 不脱标,继续保留原来位置)



##### 1.3.3.3.absolute

**脱离文档流**。*单独使用时，相对于body做偏移*

绝对定位一般与相对定位结合使用，它相对的父级是**relative定义的元素做偏移**。定义时relative的元素必须是absolute的父级**(子绝父相）**

###### (1)元素居中

*水平*

>left: 50%	//父容器宽度的一半
>
>margin-left: 往左走 自己盒子宽度的一半

*垂直*

>top: 50% 
>
>margin-top: 往上走 自己盒子高度的一半

##### 1.3.3.4.fixed

**脱离文档流**。一般在用于固定导航栏(不随滚动条滚动)

相对于浏览器窗口左上角(0,0)做偏移，它与relative设定的对象没有关系

######  (1)固定内容区右侧

*一般用于，定位返回顶部按钮*

>left: 50%	//走到浏览器一半的位置
>
>margin-left: 内容区宽度一半的距离



#### 1.3.4.z-index

*控制盒子的前后次序*

*注意：用在static和relative元素(不脱离文档流)上将**无效***

>选择器{ z-index: number }

* 数值可以是正整数、负数、0, 默认值是auto，值越大，越靠前
* 如果两个元素z-index的值相同，按照标签的书写顺序排，后来居上
* 只有定位的盒子才有该属性







## 2.常见网页布局

### 2.1.双飞翼布局

*由三列组成，两端固定，中间自适应*

注意：布局时要将**内容写在前面**，因为在DOM中center_panel在三列结构的最前面，因此可以实现**主要内容的优先加载**

#### 2.1.1.布局要求

- header和footer各自占领屏幕所有宽度，高度固定。
- 中间的container是一个三栏布局。
- 三栏布局两侧宽度固定不变，中间部分自动填充整个区域。
- 中间部分的高度是三栏中最高的区域的高度。

##### 2.1.2.布局实现

left、center、right三种都设置**左浮动**

设置center宽度为100%

设置负边距，left设置负边距为100%，right设置负边距为自身宽度

设置content的margin值为左右两个侧栏留出空间，margin值大小为left和right宽度

**”双飞翼布局比圣杯布局多创建了一个包裹中间内容的div，但不用相对布局了**

```html
<style>
     body{
         font-weight: bold;
         font-size: 20px;
     }
     #header,#footer{
        background-color: gray;
        text-align: center;
        height: 60px;
        line-height: 60px;
     }
     #footer{
         margin-top: 300px;
     }
     .column{
         text-align: center;
         height: 300px;
         line-height: 300px;
     }
     #left, #right, #center{
         float: left;
     }
     #center{
         width: 100%;
         background-color: hotpink;
     }
     #left{
         width: 200px;
         /*html中left写在center后，所以先浮动*/
         margin-left: -100%;
         background-color: khaki;
     }
     #right{
         width: 150px;
         margin-left: -150px;
         background-color: lightblue;
     }
     .content{
        margin: 0 150px 0 200px;
     }
    </style>
<body>
    <div id="header">#header</div>
        <div id="container">
            <!--中间内容被一个div包裹住-->
            <div id="center" class="column">
                <div class="content">#center</div>
            </div>
            <div id="left" class="column">#left</div>
            <div id="right" class="column">#right</div>
        </div>
    <div id="footer">#footer</div>    
</body>
```

### 2.2.圣杯布局

*三列组成，两端固定，中间自适应(外观与双飞翼一样)*

布局时与双飞翼相比添加了定位和偏移

```html
<style>
     body{
         font-weight: bold;
         font-size: 20px;
     }
     #header,#footer{
        background-color: gray;
        text-align: center;
        height: 60px;
        line-height: 60px;
     }

     #container{
         /* 留出左右栏的空间 */
         padding: 0 150px 0 200px;   
     }
     #footer{
         margin-top: 300px;
     }
     .column{
         text-align: center;
         height: 300px;
         line-height: 300px;
     }
     #left, #right, #center{
         float: left;
     }
     #center{
         width: 100%;
         background-color: hotpink;
     }
     #left{
         width: 200px;
         margin-left: -100%;
          /*中间栏的位置摆正之后，左栏的位置也相应右移，通过相对定位的left恢复到正确位置*/
         background-color: khaki;
         position: relative;
         left: -200px;
     }
     #right{
         width: 150px;
         margin-left: -150px;
         background-color: lightblue;
         position: relative;
         right: -150px;
     }
    </style>
</head> 

<body>
    <div id="header">#header</div>
        <div id="container">
            <div id="center" class="column">#center</div>
            <div id="left" class="column">#left</div>
            <div id="right" class="column">#right</div>
        </div>
    <div id="footer">#footer</div>    
</body>
```



### 2.3.侧边栏布局

#### 2.3.1两栏布局

* 左侧固定，右侧自适应
* 左侧自适应，右侧固定（同上）
* 左右都固定 （左设置左浮动，右设置右浮动，左右确定宽高）

```html
<div class="parent">
    <div class="left"></div>
    <div class="right"></div> 
</div>
```


~~~css
* 左侧固定，右侧自适应

  （1.浮动法）左边向左浮动并固定宽度，右边给margin-left (注：右边这个div一定不能给width:100%，固定div要写在自适应div的前面，反之固定的div会浮不上去)

  ```css
  	.parent{
      width:100%;
      height:400px;
  }
  .left{
      float:left;
      width:200px;
      height:100%;
      background:#afa;
  }
  .right{
      /*width: 100%;*/             /*right部分不能设置宽度100%，因为后面的margin-left会将宽度挤出210px*/
      height:100%;
      margin-left:200px;
      background:yellow;
  }
  ```

  （2.定位法）父元素相对定位，左边绝对定位并给固定宽度，右边margin-left  (注：右边这个div一定不能给width:100%，固定div要写在自适应div的前面,反之固定div会被自适应div挤下去)

  ```css
  .parent{
      position:relative;
      width:100%;
      height:400px;
  }
  .left{
      position:absolute;
      left:0;
      width:200px;
      height:100%;
      background:#afa;
  }
  .right{
      margin-left:200px;
      height:100%;
      background:#aba;
  }
  ```

  （3.定位法）父元素相对定位，且需要设置padding-left,左边的元素绝对定位且为固定宽度，右边的元素需要设置width:100%(固定div要写在自适应div的前面,此方法设置自适应div宽度100%，会造成parent的宽度被被拉伸到100%+固定div的宽度)

  ```CSS
  .parent{
      width:100%;
      height:400px;
      padding-left:200px;
      position:relative;
  }
  .left{
      position:absolute;
      left:0;
      width:200px;
      height:100%;
      background:#afa;
  }
  .right{
      /*注意宽度*/
      width:100%;
      height:100%;
      background:#aba;
  }
  ```
~~~

#### 2.3.2.三栏布局

* 左侧固定，中间自适应，右侧固定
* 左侧自适应，中间和右侧固定
* 左边和中间固定，右侧自适应(与上面大同小异)


~~~HTML
* 左侧固定，中间自适应，右侧固定

  （1.浮动法）左右中三列，左列左浮动，右列右浮动，中间列设置左右margin

  ```html
  <style>
          .parent {
              padding: 0;
              margin: 0;
              height: 200px;
              overflow: hidden;
          }
          /*左边栏左浮动*/
          .left {
              float: left;
              height: 200px;
              width: 200px;
              background: pink;
          }
          /*中间栏自适应*/
          .center {
              height: 100%;
              margin: 0 200px;
              background: skyblue;
          }
          /*右边栏右浮动*/
          .right {
              float: right;
              height: 200px;
              width: 200px;
              background: pink;
          }
      </style>
  </head>
  <body>
      <div class="parent">
          <div class="left">固定</div>
          <div class="right">固定</div>                    
          /*固定div必须写在自适应div之前 */
          <div class="center">自适应</div>
      </div>
  </body>
  ```

  （2.定位法）父元素设置相对定位，固定div设置绝对定位，自适应div设置左右margin
	<style>
        .parent{
            width: 100%;
            height: 200px;
            position: relative;
            overflow: hidden;
        }
        .left, .right{
            width: 200px;
            height: 200px;
            background-color: blueviolet;
            position: absolute;
        }
        .left{
            left: 0;
        }
        .right{
            right: 0;
        }
        .center{
            height: 200px;
            background-color: aqua;
            margin: 0 200px;
        }
    </style>
</head>
<body>
    <div class="parent">
        <div class="left">固定</div>
        <div class="right">固定</div>
        /*固定div必须写在自适应div之前 */
        <div class="center">自适应</div>
    </div>
</body>
	
* 左侧自适应，中间和右侧固定
（1.浮动法）左右中三列，自适应列设置左右margin，固定div设置右浮动(靠右的div先浮动且div写在最前面)
 <style>
        .parent{
            width: 100%;
            height: 200px;
            overflow: hidden;
        }
        .center, .right{
            width: 200px;
            height: 200px;
        }
        .center{
            float: right;
            background-color: blueviolet;
        }
        .right{
            float: right;
            background-color: brown;
        }
        .left{
            height: 200px;
            background-color: aqua;
            margin-right: 400px;
        }
    </style>
</head>
<body>
    <div class="parent">
        <div class="right">固定右</div>
        <div class="center">固定中</div>
        <div class="left">自适应左</div>
    </div>
</body>
（2.定位法）父级元素相对定位，固定div绝对定位，自适应div设置右margin
   <style>
        .parent{
            width: 100%;
            height: 200px;
            position: relative;
            overflow: hidden;
        }
        .center, .right{
            width: 200px;
            height: 200px;
            position: absolute;
        }
        .center{
            right: 200px;
            background-color: blueviolet;
        }
        .right{
            right: 0px;
            background-color: brown;
        }
        .left{
            height: 200px;
            background-color: aqua;
            margin-right: 400px;
        }
    </style>
</head>
<body>
    <div class="parent">
        <div class="right">固定右</div>
        <div class="center">固定中</div>
        <div class="left">自适应左</div>
    </div>
</body>
~~~



## 3.vertical-align

*常用于设置图片或者表单(行内块元素)和文字垂直对齐*

*它只针对于**行内元素**或者**行内块元素**有效*

*通常设置在与要与文字对齐的元素中*

>vertical-align: value

|  value   |                  mean                  |
| :------: | :------------------------------------: |
| baseline |      默认。元素放在父元素的基线上      |
|   top    |  把元素的顶端与行中最高元素的顶端对齐  |
|  middle  |        把元素放置在父元素的中部        |
|  bottom  | 把元素的顶端与行中最低的元素的顶端对齐 |

![image-20210424115710710](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210424115710710.png)

```html
<div>
    <img src="../img/焦点图01.jpg" style="vertical-align:middle;">文字
</div>
```

![image-20210424120416468](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210424120416468.png)





### 3.1.图片底部空白缝隙

*图片底侧会有一个空白缝额 ，原因是行内块元素会和文字的**基线对齐***

主要解决方法有两种：

（1）给图片添加`vertical-align:middle | top | bottom`等( 提倡使用)

（2）把图片转换为块级元素`display:block`



## 4.flex布局

`display:flex;`弹性/伸缩布局，**移动端**应用广泛*PC端浏览器支持情况较差
IE11或更低版本,不支持或仅部分支持*

**原理**：就是通过给父盒子添加flex属性，来控制子盒子的位置和排列方式



### 4.1.特点

1. **任何**一个**容器**都可以指定flex布局
2. 父盒子设为flex布局以后，子元素的`float` `clear`和`vertical-align`属性将**失效**
3. flex布局中，默认子元素是**不换行**的；如果装不下， **会缩**小子元素的**宽度**，放到父元素里面



### 4.2.父项属性

#### 主轴和侧轴

*在flex布局中,是分为主轴和侧轴两个方向*

>1. 默认主轴方向就是x轴方向,水平向右
>2. 默认侧轴方向就是y轴方向,水平向下

![image-20210427103714030](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210427103714030.png)

**主轴方向改变，侧轴的方向也会变**

![image-20210427111037896](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210427111037896.png)

#### 4.2.1.flex-direction

*设置**主轴方向**(即子元素的排列方向)，子元素是**跟着主轴来排列**的*



|     value      |      mean      |
| :------------: | :------------: |
|      row       | 默认值从左到右 |
|  row-reverse   |    从右到左    |
|     column     |    从上到下    |
| column-reverse |    从下到上    |



#### 4.2.2.flex-wrap

*设置子元素是否换行*

| value  |      mean      |
| :----: | :------------: |
| nowrap | 默认值，不换行 |
|  wrap  |      换行      |



#### 4.2.3.flex-flow

*复合属性.相当于同时设置了`flex-direction`和`flex-wrap`，位置可以交换*

```css
flex-flow: column wrap;
/*等价于*/
flex-direction: column;
flex-wrap: wrap;
```



#### 4.2.4.justify-content

*设置**主轴**上的子元素**排列方式***

**注意**：使用这个属性之前一定要**确定好主轴**是哪个

|     value      |                   mean                    |
| :------------: | :---------------------------------------: |
|   flex-start   | 默认值从头部开始如果主轴是x轴，则从左到右 |
|    flex-end    |              从尾部开始排列               |
|     center     |  在主轴居中对齐(如果主轴是x轴则水平居中)  |
| space - around |               平分剩余空间                |
| space- between |      先两边贴边再平分剩余空间(重要)       |

```css
/*以space-between为例*/
div {
    width: 80%;
    height: 500px;
    background-color: red;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}
div span {
    width: 150px;
    height: 100px;
    background-color: blue;
}
```

```html
<div>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
```

![image-20210427104812214](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210427104812214.png)

#### 4.2.5.align-content 

*设置**侧轴**上的子元素的**排列方式(多行)**，**只能**用于子元素出现**换行**的情况*

|     value      |                 mean                 |
| :------------: | :----------------------------------: |
|   flex-start   |                                      |
|    flex-end    |                                      |
|     center     |                                      |
| space - around |             平分剩余空间             |
| space- between |    先两边贴边再平分剩余空间(重要)    |
|    stretch     | 拉伸，设置子项元素高度平分父元素高度 |

```css
div {
    ......
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    .......
}
```

```html
<div>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
```

![image-20210427111931902](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210427111931902.png)



#### 4.2.6.align-items

*设置**侧轴**上的子元素**排列方式(单行)***

|   value    |             mean             |
| :--------: | :--------------------------: |
| flex-start |           从上到下           |
|  flex-end  |           从下到上           |
|   center   |    挤在一起居中(垂直居中)    |
|  stretch   | 拉伸，子元素不设高度(默认值) |

```css
/*设置盒子垂直水平居中*/
div {
    ........
   display: flex;
    justify-content: center;
    align-items: center;
}
.......
```

![image-20210427110220619](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210427110220619.png)



### 4.3.子项属性

#### 4.3.1.flex

*flex属性定义子项目**分配剩余空间**,用flex来表示占多少**份数***

>flex: number

```css
section {
    width: 80%;
    height: 150px;
    background-color: #ccc;
    margin: 0 auto;
    display: flex;
}
section div:nth-child(1) {
    width: 100px;
    height: 150px;
    background-color: red;
}
section div:nth-child(3) {
    width: 100px;
    height: 150px;
    background-color: blue;
}
section div:nth-child(2) {
    /* div2独占一份父元素未分配的宽度 */
    flex: 1;
    background-color: green;
}
```

```html
<section>
    <div></div>
    <div></div>
    <div></div>
</section>
```

![image-20210427113326324](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210427113326324.png)



#### 4.3.2.align-self

*允许**单个项目**有与其他项目不一样的**对齐方式**,可覆盖align-items属性*

*默认值为`auto` ,表示继承父元素的`align-items`属性,如果没有父元素,则等同于`stretch`*

```css
div { 
    display: flex;
    align-items: flex-start;
}
div span:nth-child(3) {
    align-self: flex-end;
}
```

![image-20210427114558346](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210427114558346.png)



#### 4.3.3.order

*定义项目的排列顺序*

*数值**越小**，排列**越靠前**，默认为0*

```css
/*默认子项order都是0，修改第四个span为-1，会被提到最前面*/
div span:nth-child(4) {
    order: -1;
}
```

![image-20210427115301890](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210427115301890.png)

## 5.布局技巧

### 5.1.margin负值

#### 5.1.1.浮动时边框重叠

*解决多个带边框盒子**浮动时边框重叠**问题，后面盒子的边框压住前面盒子的边框*

```css
ul li {
    list-style: none;
    width: 100px;
    height: 200px;
    border: 1px solid red;
    float: left;
    
    margin-left: -1px;
}
```

```html
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
</ul>
```

##### 问题1

li都设置左移1px，边框还是会重叠？

html的渲染是**一个标签对应一个样式**

渲染完第一个li的样式后，第二个li渲染样式先浮动紧贴第一个li再左移1px，因而可以解决边框重叠问题



##### 问题2

边框被压住了如何设置:hover改变边框颜色？

如果li原先没有定位：添加`相对定位`，使li**压住标准流和浮动**

```css
ul li:hover {
     position: relative;
     border: 1px solid blue
}
```

如果li原先有定位：`使用z-index`

```css
ul li{
    .......
	position: relative;   
}

ul li:hover {
     z-index: 1;
     border: 1px solid blue
}
```

![image-20210426095830414](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210426095830414.png)

### 5.2.文字围绕浮动

*因为浮动不会遮住文字*

```css
.box {
    width: 300px;
    height: 60px;
    background-color: pink;
    margin: 0 auto;
}
.pic img{
    width: 120px;
    height: 60px;
    float: left;
}
```

```html
<div class="box">
        <div class="pic">
            <img src="../img/焦点图01.jpg">
        </div>
        <p>哒哒哒哒哒哒大大大嗄哒哒哒哒哒哒大大大嗄</p>
    </div>
```

![image-20210426100746334](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210426100746334.png)

### 5.3.行内块的运用

*子元素设置`display: inline-block;`，父元素可使用`text-align`设置子元素对其方式*

```css
div {
    text-align: center;
}
div a {
    text-decoration: none;
    list-style: none;
    width: 30px;
    height: 30px;
    background-color: #c1c1c1;
    line-height: 30px;
    text-align: center;
    display: inline-block;
}
```

```html
<div>
    <a href="">1</a>
    <a href="">2</a>
    <a href="">3</a>
    <a href="">4</a>
    <a href="">5</a>
</div>
```

![image-20210426105723652](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210426105723652.png)



## 6.分栏

* column-count：规定元素被分隔的列数（栏数）

  * 属性值：number/auto

* column-gap：设置栏间距（$px）

  * 属性值：length/normal

* column-rule-*：设置栏间分隔线

  * colum6n-rule-style：设置线型	

    * none/hidden
    * dotted（点线）/dashed（虚线）/solid/double（双线）
    * groove/ridge/inset/outset(3D,效果取决于宽度和颜色)

  * column-rule-width：设置线宽

  * column-color：设置分隔线颜色

  * 复合写法

    * column-rule：宽度 线型 颜色


