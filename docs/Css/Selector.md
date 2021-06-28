---
title: Css选择器
publish: false
---
## 1.CSS选择器分类

### 1.1.`*`

*匹配html中所有元素*

​		写法：*{}



### 1.2.标签选择器

*用来匹配对应的标签*

​		写法：标签名{}



### 1.3.类标签

*用来选择class命名的标签*

​		写法：.class名{}



### 1.4.ID选择器

*用来选择用id命名的标签（唯一）*

​		写法：#id名{}



### 1.5.关系选择器

*根据上下文来选择标签* (后代选择器)

​		写法：.class名 class中的标签名{}	**用空格隔开**

*只选择儿子元素*

​		写法：**用>隔开**

*兄弟选择器*

​		写法：**用+隔开**



### 1.6.伪类选择器

*伪类：专门用来表示一种元素的特殊状态*

#### 1.6.1.常见的伪类

##### 1.6.1.1.a标签的伪类

|   value    |                mean                |
| :--------: | :--------------------------------: |
|  `:link`   |            未访问的链接            |
| `:visited` |            已访问的链接            |
|  `:hover`  |            鼠标悬停链接            |
| `:active`  | 已选择的链接(鼠标按下未弹起的链接) |

##### 1.6.1.2. :focus 

*获得焦点*

#### 1.6.2.结构性伪类

##### 1.6.2.1. :root

*匹配HTML元素，与body选择器效果一样*

##### 1.6.2.2.子元素伪类

*匹配父元素中**连续**的子元素*

|           value           |                    mean                    |
| :-----------------------: | :----------------------------------------: |
|      `:first-child`       |                                            |
|       `:last-child`       |                                            |
|   `:nth-child(number)`    | 顺数第number个元素(没有找到则**停止寻找**) |
| `:nth-last-child(number)` | 倒数第number个元素(没有找到则**停止寻找**) |

**nth-of-type类**

*用于匹配父元素中兄弟子元素，**可以用于子元素不连续**的情况*

* :nth-of-type(number)

* :nth-last-of-type(number)

  ```html
  <style>
      /*找到p标签中顺数第三个兄弟p标签，如果第三个不是p标签，则跳过，继续往下找（5）。如果找不到则样式不会实现*/
      p:nth-of-type(3)
      {
          color: aqua;
      }
      /*找到p标签中倒数第二个兄弟p标签，如果第二个不是p标签，则跳过，继续往下找（2）。如果找不到则样式不会实现*/
      P:nth-last-of-type(2){
          color: blueviolet;
      }
  </style>
  <div class="container">
      <p class="content p1">段落1</p>
      <p class="p2 content">段落2</p>
      <div class="content">段落3</div>
      <div class="content">段落4</div>
      <p class="content p5">段落5</p>
  </div>
  ```

##### 1.6.2.3.其他

* **:only-child(父元素中仅有一个子元素)**

  ```html
  	 <style>
           /*选择父元素中只有的一个标签，且为p，不可以再有p以外的标签。p标签中可以有子标签("oooo" "oospanoo")*/
          p:only-child{
              width: 200px;
              border: 1px solid #c6ff50;
          }
      </style>
      <div><p>oooo</p></div>
  	<div><p>oo<span>span</span>oo</p></div>			<!--此句也会实现-->
      <div><p>da</p><p>aa</p></div>
  ```

* **:only-of-type(父元素中仅有一个指定的元素，且指定元素可以存在不同的兄弟元素)**

  ```html
  <style>
      /*选择父元素中只有的一个标签p，可以再有p以外的标签。p标签中可以有子标签("oooo" "oospanoo" "da")*/
      p:only-of-type{
          width: 200px;
          border: 1px solid #c6ff50;
      }
  </style>
  <div><p>OOOO</p></div>
  <div><p>oo<span>span</span>oo</p></div>
  <div><p>da</p><span>123</span><h1>123</h1>
  </div>
  ```

* **:empty (没有元素，包含文本元素，即查找空元素)**

  ```html
    div:empty{
              width: 200px;
              height: 100px;
              background-color: brown;
          }
  <div></div>
  ```

#### 1.6.3.目标伪类

* ##### :target(匹配url指向的元素)

```html
<style>
        p{
            height: 600px;
        }
        p:target{
            color: brown;
        }
    </style>
<body>
    <a href="#jump1">跳转1</a>
    <a href="#jump2">跳转2</a>
    <a href="#jump3">跳转3</a>
    <br><br><br><br><br>
    <p id="jump1">这是段落1的内容</p>
    <div id="jump2">这是段落2的内容</div>
    <p id="jump3">这是段落3的内容</p>
</body>
```

#### 1.6.4.UI (表单)元素伪类

* ##### :enabled

* ##### :disabled

* ##### :checked

* ##### ::selection

  ```html
  <style>
  	/*选中1*/
       input:disabled{
           background-color: blueviolet;
       }
       /*x选中2 3*/
       input:enabled{
           background-color: blue;
       }
       input:checked{                 /*checked只在Opera中有效*/
           background-color: brown;
       }
       ::selection{                   /*高亮显示被鼠标选中的文本，必须用双冒号*/
           color: blueviolet;
       }
  </style>
   <form>
          <input type="text" name="1" disabled><br>
          <input type="text" name="2"><br>
          <input type="text" name="3"><br>
  
          <input type="checkbox" name="face" checked>党员
          <input type="checkbox" name="face" >共青团员
          <input type="checkbox" name="face" >群众
      </form>
  ```

##### 1.6.5.否定伪类

* #####  :not()

```html
<style>
		/*一般写在父元素中*/
        .container :not(p){				/*注意：.container后面一定要加空格，这里相当于除去p外选择.container的孩子标签*/
            color: blueviolet;
        }
</style>
<div class="container">
        <p>p1</p>
        <p>p2</p>
        <span>span</span>
        <em>em</em>
</div>
```

##### 1.6.6.兄弟元素选择器

* ~

  ```html
  <style>
      /*找到div1的兄弟div3。注意目标标签必须在其兄弟的后面eg：.div2~.div3是不行的*/
          .div1~.div3{
              color: blueviolet;
          }
      	.div1~.div2{
          	color: aqua;
      	}
      	
  </style>
  <div class="test">
      <div class="div1">div1</div>
      <div class="div2">div2<strong>strong</strong></div>
      <div class="div3">div3</div>
  </div>
  ```

  

### 1.7.伪元素选择器

*after和before创建的元素在**文档树中不可见***

|                | value           | mean                            |
| -------------- | --------------- | ------------------------------- |
| ::after        | p::after        | 在每个p元素内之后插入内容。 |
| ::before       | p::before       | 在每个p元素内之前插入内容。 |
| ::first-letter | p::first-letter | 选择每个p元素的首字母。     |
| ::first-line   | p::first-line   | 选择每个p元素的首行。       |
| ::selection    | p::selection    | 选择用户选择的元素部分。        |

`::before`/`::after`使用的格式为：

*伪元素可以写成单冒号`:`，兼容低版本浏览器*

```css
/*content可以为空，但不可以省略*/
h1::after {
	content: 插入的图片路径或文本;
} 
```

**注意:** 

1. `-letter`和`-line`只能用于**块级元素**
2. content添加的是**行内元素**
3. 伪元素和伪类同时选择，之间**不用加空格**

>元素:hover::before





### 1.8.属性选择器

>[属性名]
>
>[属性名 = 属性值]
>
>[属性名 ^= 属性值]
>
>[属性名 $= 属性值 ]
>
>[属性名 *= 属性值]

```css
/*1.p中含有class属性的（1-5）*/
p[class]{
    color: aqua;
}
/*2.p中class等于content（3 4）*/
p[class = content]{
    color: aquamarine;
}
/*3.p中class以content开头的 （1 3 4 5）*/
p[class ^= content]{
    color: blue;
}
/*4.p中class以content结束的（2 3 4）*/
p[class $= content]{
    color: blueviolet;
}
/*5.p中class里包含"p"的 (1 2 5)*/
p[class *= p]{
    color: azure;
}
```

```HTML
<div class="container">
    <p class="content p1">段落1</p>
    <p class="p2 content">段落2</p>
    <p class="content">段落3</p>
    <p class="content">段落4</p>
    <p class="content p5">段落5</p>
</div>
```

​	

## 2.伪元素和伪类

 * 伪元素与伪类的**区别**：

    1. 伪类和伪元素都是用来**修饰不在文档树中的部分**
    2. **伪类**用于当已有元素处于某个状态时，为其添加对应的样式，这个状态是根据用户行为而变动的。
    3. **伪元素**用于创建一些不在文档数中的元素，并为其添加样式。比如，通过::before来在一个元素前添加一些文本，并为这些文本添加样式。虽然用户可以看到这些文本，但这些文本实际上不在文档树中。

 * 伪元素和伪类的**特点**：

   

   

## 3.选择器的分组

*让多个选择器（元素）具有相同的样式，一般用于**公共样式***

**写法：**

>`,`将需要分组的选择器分开
>
>标签名, .class名, #id名{}

 注意：如果分组定义的样式会被后面单独定义的标签/class/id的样式覆盖









