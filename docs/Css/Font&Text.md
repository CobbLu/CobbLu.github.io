---
title: 字体&文本
publish: false
---

## 1.字体

### 1.1.font-size

*字号*

>font-size: {number px/%}

### 1.2.font-family

*字体系列*

>font-family: 字体

注意：

>1. 各种字体之间必须使用英文状态下的`,`隔开
>2. 如果有空格隔开的多个单词组成的字体加`""`
>3. 可定义多种字体，按照从左到右的优先级应用

```css
font-family: 'Microsoft Yahei', tahoma, arial;
```



### 1.3.font-weight

*加粗，与`<strong>`的加粗标签类似*

|  value  |                             mean                             |
| :-----: | :----------------------------------------------------------: |
| normal  |                             默认                             |
|  bold   |                             粗体                             |
| border  |                           比bold粗                           |
| lighter |                           normal细                           |
| number  | 定义由粗到细的字符;400等同于normal，700等同于bold;范围[100-900]（无单位） |

```css
font-weight: 700
```



### 1.4.font-style

*字体风格，与`<em>`斜体标签类似*

| value  | mean |
| :----: | :--: |
| normal | 默认 |
| italic | 斜体 |

```css
font-style: italic;
```



### 1.5.font

*字体复合属性*

style>weight>size/height/family

>font: font: font-style font-weight font-size/line-height font-family;

**注意**：

1. 必须有`-size`和`-family`属性，其它的可以省略
2. 位置**不可以颠倒**

```css
font: italic 700 16px '微软雅黑'
```





## 2.文本

### 2.1.color

*文本颜色*

>color: 预定义的颜色值/#十六进制/rgb(,,,)



### 2.2.text-align

*文本内容的**水平对齐**方式*

>text-align: left(默认)/center/right



### 2.3.text-decoration

*给文本添加下划线、删除线、上划线等*

|    value     |             mean             |
| :----------: | :--------------------------: |
|     none     |       默认;没有装饰线        |
|  underline   | 下划线;链接a自带下划线(常用) |
|   overline   |            上划线            |
| line-through |            删除线            |



### 2.4.text-indent

*指定文本的第一行的**缩进**，通常是将段落的**首行缩进***

>text-indent: number/-number px

>text-indext: number em

em是一个相对单位，就是当前元素( font-size) **1个文字的大小**，如果当前元素没有设置字体大小,则会按照父元素的1个文字大小



### 2.5.line-height

*没置行间的距离(行高)，可以控制文字行与行之间的距离*

```css
line-height: 26px;
```

![image-20210428043225774](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210428043225774.png)



### 2.6.word-wrap

*（文本自动换行）*

* 属性值：normal只在允许的断字点换行（默认值，与没有设置一样）

  ​				在长单词或URL地址内部进行换行

### 2.7.wrod-break

*（单词拆分）*

* 属性值：normal

  ​				break-all允许在单词内换行

  ​			 	keep-all遇到半角空格或连字符则换行


### 2.8.text-transform

*字母大小写*

属性值：

* none
* capitalize:每个单词的第一个字母转大写
* uppercase
* lowercase



## 3.文本溢出

### 3.1.text-overflow

*（单行文本溢出*）

|  value   |                             mean                             |
| :------: | :----------------------------------------------------------: |
|   clip   |                  修剪文本(超出的文本不显示)                  |
| ellipsis |                显示**省略号**代表被修剪的文本                |
|  string  | 使用给定的字符串来代表被修剪的文本(只在 Firefox 浏览器下有效) |

```css
p{
    width: 200px;
    border: 1px solid #000;
    /*不允许折行*/
    white-space: nowrap;     
}
.p2{
    text-overflow: ellipsis;
    overflow: hidden;
}
.p3{
    text-overflow: clip;
    overflow: hidden;
}
```

```html
<p class="p1">Opinion / A disease-ridden US fails world in anti-virus cooperation Market </p>
 
 <p class="p2">Opinion / A disease-ridden US fails world in anti-virus cooperation Market </p>
 
 <p class="p3">Opinion / A disease-ridden US fails world in anti-virus cooperation Market </p>
```

![image-20210426091746277](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210426091746277.png)

##### 多行文本溢出（IE9以下不支持，主要chrome支持）

```css
.p4{
    width: 200px;
    /*弹性伸缩盒子模型显示*/
    display: -webkit-box;
    /*属性规定框的子元素应该被水平或垂直排列。*/
    -webkit-box-orient: vertical;	
    /*显示四行*/
    -webkit-line-clamp:4;			
    overflow: hidden;
}
```

```html
<p class="p4">Opinion / A disease-ridden US fails world in anti-virus cooperation Market / China OKs three ChiNext IPOs COVID-19 / China reports 13 cases, all imported Diplomacy </p>
```

![image-20210426092256916](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210426092256916.png)
