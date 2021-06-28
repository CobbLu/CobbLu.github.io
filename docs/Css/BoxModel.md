---
title: 盒子模型
publish: false
---

*每个元素都是盒子，一个盒子由margin border padding content(内容)组成。系统默认外边距为8px*



## 1.边框

*`border`*

```css
border: border -width | | border-style || border -color;
```

### 1.1.表格边框

*`border-collapse: collapse` 表示相邻边框合并在一起*

该属性可以解决**表格边框重叠**问题



### 1.2.圆角边框

*用于设置元素的外边框圆角*

```css
border-radius:数值/百分比;
```

>百分比相对于当前盒子的宽高
>分离数值的写法和边距一致

正方形盒子的-radius设置**宽的一半**会变成⚪

长方形盒子的-radius设置**宽/高的一半**会变成**圆角矩形**



### 1.3.边框三角

*定义一个**宽高都为0的盒子**，为其设置**透明边框**，通过`border-上下左右-color`来设置对应三角*

```css
.box {
    width: 0;
    height: 0;
     /* 边框粗细控制三角大小 */
    border: 50px solid transparent;
    border-top-color: tomato;
    border-right-color: wheat;
    border-bottom-color: #ccc;
    border-left-color: pink;
}
```

![image-20210424105743196](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210424105743196.png)



## 2.盒子真实尺寸

> 盒子宽度 = width + padding左右 + border左右

> 盒子高度 = height + padding上下 + border上下

 **注意：**

* **行内元素**设置**上下内外边距**是无效的

* 网页元素默认自带内外边距，布局前先清除

  * ```css
    * {
        padding:0;  margin:0;
    }
    ```



### 2.1.box-sizing

*CSS3中可以通过box-sizing来指定盒模型*

*有两个值：`content-box`  `border-box`*

>1. box-sizing: content-box盒子大小为width+ padding+ border ( 以前默认的)
>2. box-sizing: border-box盒子大小为width(padding和border不会撑大盒子，保持设置的宽度)





### 2.2.margin

*外边距，可以带1—4个参数*

* 1个:表上下左右都有外边距
* 2个；上下   左右
* 3个：上   下   左右
* 4个：上   右   下   左



#### 2.2.1.块级盒子水平居中

*盒子必须指定宽度，左右外边距设置auto*

```css
margin: 0 auto;
```

**行内元素**或者**行内块元素**水平居中给其父元素添加`text- align:center`即可



#### 2.2.2.外边距合并

*使用margin定义块元素的垂直外边距时,可能会出现外边距的合并*

![image-20210411214531747](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210411214531747.png)

**嵌套块元素垂直外边距的塌陷**
*对于两个嵌套关系(父子关系)的块元素,父元素有上外边距同时子元素也有上外边距,此时父元素会塌陷较大的外边距值*

**解决方案**
①可以为父元素定义**边框**
②可以为父元索定义**内边距**
③可以为父元素添加**overflow:hidden**



### 2.3.padding

*内边距，参数同上*

不设置元素宽度只设置左右padding，可实现均等分隔的效果（导航栏）

**元素不设置宽/高，添加padding不会撑开盒子(增加宽/高)**



## 3.阴影

*阴影不占用布局空间，不影响其他盒子排列*

### 3.1.box-shadow

*盒子阴影*

```css
box-shadow: h-shadow V-shadow blur spread color inset;
```

| value    | mean                                       |
| -------- | ------------------------------------------ |
| h-shadow | 水平阴影的位置，左正由负                   |
| V-shadow | 垂直阴影的位置，下正上负                   |
| blur     | 模蝴程度                                   |
| spread   | 大小                                       |
| color    | 颜色                                       |
| inset    | 可选。将外部阴影(默认outset)改为内部阴影。 |



### 3.2.text-shadow

*文字阴影*

```css
text-shadow: h-shadow v-shadow blur color;
```



## 4.显示与隐藏

### 4.1.display

*用于设置元素的显示方式；通过转换可将`行内->行内块级`再设置高度*

* none：**不显示**(隐藏)元素，**不再占用原来的位置**
* block：**显示**元素，转换成块级元素
* inline：行内显示，将块级标签转行级标签
* inline-block：将块级或行级转换为**行内块级**标签
* flex：flex布局



### 4.2.visibility

*本质：让一个元素在页面中隐藏或者显示出来*

* visible：元素可视，**继续占用原来的位置**
* hidden：元素隐藏



### 4.3.overflow

* visible：显示超出内容，不显示滚动条
* hidden：不显示超出内容（定位盒子慎用该属性）
* scroll：显示滚动条（不溢出也显示滚动条）
* auto：内容超出=>显示滚动条，未超出=>不显示滚动条



## 6.calc函数

*calc（）此CSS函数让你在声明CSS属性值时执行一些**计算***

```css
/*宽度永远比父盒子少30px*/
width: calc(100% - 30px)
```

括号里面可以使用`+`  `-` `*` `/`来进行计算。



## 7.filter属性

### 7.1.blur()

*设置元素模糊*

>filter.blur(number px)



## table盒模型

*（一般不用来布局，主要用来格式化数据，tr行td列）*

* table属性
  * 宽高+bordr
  * border-collapse: collapse     单线边框
* tr属性
  * 宽高+bordr
  * text-align:left(默认) center right
  * vertical-align:top middle(默认) bottom
  
