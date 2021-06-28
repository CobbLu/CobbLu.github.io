---
title: 文档对象模型DOM
publish: false
---

*document object model文档对象模型，用于对HTML文档进行操作*

*DOM操作就是把文档内容变成**对象***

## 1.基本概念

* 文档：整个HTML网页文档
* 对象：将网页中的每一部分转化为一个对象
* 模型：表对象之间的关系
* 节点：Node，构成HTML文档最基本的单元
  * 文档节点：HTML整个文档(document)
  * 元素节点：HTML文档中的HTML标签
  * 属性节点：元素的属性
  * 文本节点：HTML标签中的文本内容
* 事件：用户和浏览器的交互行为，如：点击按钮，鼠标移动……

## 2.事件 

### 2.1.用法

1. 获取对象 

   >let 对象名 = document.get……("")

2. 绑定事件 

   >对象名.事件 = function(){语句……};

```html
<body>
    <button id="btn">按钮</button>
    /*
    *	将js代码写在页面下部就是为了，可以在页面加载完毕以后再执行js代码
    */
    <script>
         <!--1.获取对象 -->
        let b = document.getElementById("btn");
        <!--2.绑定事件 -->
        b.onclick = function (){
            alert("嘻嘻嘻");
        };
    </script>
</body>
```


 注意：浏览器在加载一个页面时，是按照**自上向下**的顺序加载的



## 3.文档加载

*onload事件会在整个页面加载完成后触发*

```HTML
<script>
        window.onload = function (){
            let b = document.getElementById("btn");
            b.onclick = function (){
                alert("加载");
            }
        }
</script>
<body>
    <button id="btn">按钮</button>
</body>
/*虽然script写在了按钮的上面，但是通过onload让整个页面加载完后再触发onclick*/
```

## 4.DOM查询

### 4.1.通过document对象调用

|             value              |                             mean                             |
| :----------------------------: | :----------------------------------------------------------: |
|       getElementById("")       |                                                              |
|  getElement**s**ByTagName("")  |              通过标签名获取**一组**元素节点对象              |
| getElement**s**ByClassName("") |              通过class获取**一组**元素节点对象               |
|   getElement**s**ByName("")    |               通过name获取**一组**元素节点对象               |
|       querySelector("")        | 通过**CSS选择器**查询**一个**元素节点对象(如果满足元素的条件有多个它只会返回第一个) |
|      querySelectorAll("")      | 通过**CSS选择器**查询符合条件的元素返回封装到**一个节点数组**中；即使符合条件的元素只有一个，也会返回一个节点数组 |

```html
<div></div>
<div></div>
<div></div>
```

```js
let divs = document.querySelectorAll('div')
divs
/*将节点数组转为数组*/
Array.from(divs)
[...divs]
```

>NodeList(3) [div, div, div]
>
>(3) [div, div, div]
>
>(3) [div, div, div]





### 4.2.通过具体元素节点调用

*获取选择到的元素的子节点/元素*

>写法
>
>Node.属性名

|                            value                             |                             mean                             |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|                          childNodes                          | 返回包含指定节点的**子节点的集合**（注：会获取包括**文本在内**的所有节点，根据DOM标准标签间的空白也会被当作文本节点（IE8不会）） |
|                          firstChild                          | 属性当前节点的第一个**子节点**,如果节点无子节点，则返回 `null` |
|                      firstElementChild                       |                获取当前节点的第一个**子元素**                |
|                          lastChild                           |                                                              |
|                       lastElementChild                       |                                                              |
|                           children                           | 返回包含指定节点的**子元素的集合**(不包括文本，只返回**标签元素**) |
| [nodeType](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeType) |                     返回该**节点的类型**                     |

```html
<ul id="city">
    <li id="bj">北京</li>
    <li>上海</li>
    <li>东京</li>
    <li>首尔</li>
</ul>
<script>
    let city = document.getElementById("city");
    let cns = city.childNodes;
    let cns1 = city.children;
    let cns2 = city.firstChild;
    let cns3 = city.firstElementChild;

    console.log(cns.length)    
    console.log(cns1.length);   
    console.log(cns2.innerHTML);    
    console.log(cns3.innerHTML);    /*北京*/
</script>
```

>输出：
>
>9
>4
>undefined
>北京
>
>解析：
>
>（1）childNodes,获取子节点列表包含**文本text**(空格也是),所以4个标签节点+5个空格 = 9
>
>（2）children,获取子元素列表，不包含文本text
>
>（3）因为HTML文档中父元素与第一个子元素存在**空格**所以innerHTML返回undefined
>
>（4）返回当前节点的第一个**子元素**



### 4.3.获取父节点和子节点

|         value          |                             mean                             |
| :--------------------: | :----------------------------------------------------------: |
|       parentNode       |   当前节点的**父节点**（返回父节点包括父节点中的所有内容）   |
|     parentElement      | 返回当前节点的**父元素节点**。如果该元素没有父节点，或者父节点不是一个 `DOM 元素`，则返回 `null` |
|    previousSibling     |                 当前节点的前一个**兄弟节点**                 |
| previousElementSibling |           获取前一个**兄弟元素**(IE8及以下不支持)            |
|      nextSibling       |                 当前节点的后一个**兄弟节点**                 |
|   nextElementSibling   |                    获取后一个**兄弟元素**                    |
|                        |                                                              |

parentNode和parentElement的区别？

```html
<script>
    let bj = document.getElementById('bj')
    console.log(bj.parentElement)
    console.log(bj.parentNode)
    console.log(bj.previousSibling)
    console.log(bj.nextElementSibling)
</script>
```

>输出：![image-20210522100542971](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210522100542971.png)

### 4.4.获取一些奇怪的东西

document.body 	

获取body标签

document.documentElement

获取html标签



## 5.DOM增删改

*document.*

|      value      |                             mean                             |
| :-------------: | :----------------------------------------------------------: |
| createElement() | 创建一个元素节点对象；需要一个**标签名**作为参数，将创建好的对象作为返回值返回 |
|  appendChild()  | 向一个父节点中**添加一个新的子节点**<br/>父节点appendChild(子节点) |
| insertBefore()  | 可在指定节点前插入新的子节点<br />父节点.insetBefore(新节点, 旧节点) |
| replaceChild()  | 使用指定子节点替换已有的子节点<br />父节点.replace(新节点, 旧节点) |
|  removeChild()  |                          删除子节点                          |
|    innerHTML    |       用于获取元素内部的HTML代码，对于自结束标签无意义       |
|    innerText    |        获取元素内部的文本内容（与innerHTML的区别？）         |



```js
<body>
<div id="box">
    <p id="bj">北京</p>
    <p id="cs">长沙</p>
    <p id="sh">上海</p>
</div>
<button id="btn1">添加文字</button>
<button id="btn2">上海前插入广州</button>
<button id="btn3">广州替换北京</button>
<button id="btn4">删除北京</button>
<script>
    let box = document.getElementById("box");
    let bj = document.getElementById("bj");
    let sh = document.getElementById("sh");
    function MyClick(btr, fun){
        let btn = document.getElementById(btr);
        btn.onclick = fun;
    }
    MyClick("btn1", function (){
        let p = document.createElement("p");
        let pt = document.createTextNode("￥￥￥￥￥￥￥");
        p.appendChild(pt);
        let box = document.getElementById("box");
       // 在父节点中添加p
        box.append(p);
        // 使用innerhtml在父节点中添加p，此方法添加单个元素时才建议使用
        // box.innerHTML += "<p>￥￥￥￥￥￥￥</p>";
    });
    MyClick("btn2", function (){
        let gz = document.createElement("p");
        let gztext = document.createTextNode("广州");
        gz.appendChild(gztext);
        /*上三句的优化写法
        let gz = document.createElement("p");
        gz.innerHTML = "广州";
        */
        /*在父节点中的sh前添加gz*/
        box.insertBefore(gz, sh);
    });
    MyClick("btn3", function (){
        let gz = document.createElement("p");
        let gztext = document.createTextNode("广州");
        gz.appendChild(gztext);
        /*在父节点中的bj替换成gz*/
        box.replaceChild(gz, bj);
    });
    MyClick("btn4", function (){
        /*获取北京的父节点，然后删除父节点下的北京*/
        bj.parentNode.removeChild(bj);
    });
</script>
</body>
```



## 6.DOM操作元素的样式

### 6.1.内联样式

#### 6.1.1.赋值

>元素.style.样式名 = 样式值

特点：通过style属性设置的样式都是内联样式

#### 6.1.2.读取

>元素.style.样式名

特点：通过style属性设置的样式都是内联样式，只能读取内联样式，无法读取样式表中的样式

### 6.2.当前样式

#### 6.2.1.元素.currentStyle.样式名

读取当前元素正在显示的样式，如果当前元素没有设置样式则返回默认值

兼容：只有IE浏览器支持

#### 6.2.2.getComputedStyle()

>需要两个参数：1.要获取样式的元素； 2.传递一个伪元素一般为null

特点：

1. 该方法是widow的方法，可以直接使用

2. 该方法会返回一个对象，对象中封装了当前元素的样式


兼容：不支持IE8及以下

* ##### 自定义函数getStyle兼容任何浏览器：

  ```html
  <script>
      window.onload = function () {
          let box1 = document.getElementById("box1");
          let btn1 = document.getElementById("btn1");
          btn1.onclick = function () {
              alert(getStyle(box1, "width"));
          }
          /*
          * 实参：ogj 要获取样式的元素
          *      name 要获取的样式名
          * */
          function getStyle (obj, name){
              /*写成if (getComputedStyle)IE8会报错，因为找不到对象；而加了window代表元素，找不到元素会返回false*/
              if (window.getComputedStyle){
                  return getComputedStyle(obj , null)[name];
              }else{
                  return obj.currenttStyle[name];
              }
          }
  
      };
  </script>
  ```

  **注意：**currentStyle和getComputedStyle()获取到的样式都是只读的，修改样式必须要用Style
  
  

### 6.3.其他样式操作方式

* `clientHeigh`t和`clientWidth`

  获取元素的可见宽度和高度不带px，包括元素的高度或宽度和内容区内边距

* `offsetWidth`和`offsetHeight`

  包括元素的高度或宽度和内容区内边距、边框

* `offsetParent`

  获取当前元素的定位父元素，会获取到离当前元素最近的开启了定位的祖先元素

* `offsetLeft`和`offsetTop`

  获取当前元素相对于定位父元素的水平偏移量和垂直偏移量


**注意：**如果CSS样式名中含有`-`，这种名称在JS是不合法的，需要修改为**驼峰命名法**；去掉-号，然后-后的字母大写



## 7.事件对象event

​		当事件的响应函数被触发时，浏览器每次都会将一个事件对象作为实参传递进响应函数，在事件对象中封装了当前事件相关的一切信息

注意：IE8中，响应函数被触发时，浏览器不会传递事件对象；IE8及一下浏览器中，是将事件对象作为window对象的属性保存的

### 7.1.事件属性

#### 7.1.1.鼠标

##### 7.1.1.1.onmousemove

鼠标在元素中**移动**时被触发

##### 7.1.1.2.clientX和clientY

鼠标指针的**水平坐标**和**垂直坐标**

```html
<!--显示鼠标在内容div中的坐标-->
<script>
        window.onload = function (){
            let area = document.getElementById("areaDiv");
            let show = document.getElementById("showMsg");
            area.onmousemove = function (event){
                /*
                IE8及以下的写法
                 let x = window.event.clientX;
                let y = window.event.clientY;
                ————————————————————————————
                兼容处理：
                event = event || window.event;	
                */
                let x = event.clientX;
                let y = event.clientY;
                show.innerHTML = `x = ${x}, y = ${y}`;
            }
        }
</script>
<body>
    <div id="areaDiv" style="height:200px; width:400px; border: 1px solid #cccccc"></div>
    <div id="showMsg" style="height: 50px; width: 150px; border: 1px solid #cccccc"></div>
</body>
```

##### 7.1.1.3.pageX和pageY

获取鼠标相对于当前页面的坐标

兼容：IE8不支持

##### 7.1.1.4.onmouseup

鼠标松开

##### 7.1.1.5.onmousedown

鼠标点下

##### 7.1.1.6.onmousewheel

滚轮滚动时触发



wheelDelta：获取鼠标滚轮的方向；上为负，下为正

兼容：火狐不支持，需要使用DOMMouseScroll且该事件需要使用

addEventlistener()函数绑定。wheelDelta的功能也只能用detail代替，上为正，下为负

```HTML
<script>
    window.onload = function (){
        //书鼠标滚轮向下滚 box1变长，向上 变短
        let box1 = document.getElementById("box1");
        box1.onmousewheel = function (event){
            //判断鼠标滚轮滚动的方向
            event = event || window.event;
            if (event.wheelDelta > 0 || event.detail < 0){
                 //向上滚
                box1.style.height = box1.clientHeight + 30 + "px";
            }else{
                //向下滚
                box1.style.height = box1.clientHeight - 30 + "px";
            }
        };
        //火狐兼容
        addEventListener("DOMMouseScroll", box1.onmousewheel, false);
    };
</script>
```

```HTML
<script>
    //键盘控制div的移动
    window.onload = function (){
        let box1 = document.getElementById("box1");
        //onkeydown绑定在document上因为box1要在整个页面上移动
        document.onkeydown = function (event){
            event  = event || window.event;
            switch (event.key){
                case 'ArrowLeft':
                    box1.style.left = box1.offsetLeft - 20 + "px";
                    break;
                case 'ArrowRight':
                    box1.style.left = box1.offsetLeft + 20 + "px";
                    break;
                case 'ArrowUp':
                    box1.style.top = box1.offsetTop - 20 + "px";
                    break;
                case 'ArrowDown':
                    box1.style.top = box1.offsetTop + 20 + "px";
                    break;
            }
        }
    };
</script>
```

#### 7.1.2.键盘

*键盘事件一般绑定给可以获取焦点的对象或者是document*

##### 7.1.2.1.onkeydown/onkeyup

按键被按下/松开

>属性：event.key(返回键盘输入的键值)

```HTML
<script>
    window.onload = function (){
        let input = document.querySelector("input");
        input.onkeydown = function (event){
            //在文本框中输入内容属于onkeydown中的默认行为，如果取消了onkeydown的默认行为，则输入内容不会出现在文本框
            // return false;
            /*设置文本框中不能输入数字*/
            let reg1 = /[0-9]/;
            if(reg1.test(event.key)){
                return false
            }
        }
    };
</script>
<body>
    <input type="text"/>
</body>
```

### 7.2.事件冒泡

*所有的冒泡事件都是**向上传导**的，当后代元素的事件被触发时，其祖先元素的相同事件也会被触发*

#### 7.2.1.取消

>可以将事件对象的cancelBubble设置为true，即可取消冒泡
>
>事件对象.cancelBubble = true;

### 7.3.事件的委派

*将事件统一绑定给元素共同的祖先元素，这样后代元素上的事件触发时，会一直冒泡到祖先元素从而通过祖先的响应函数来处理事件*

*委派利用了冒泡，通过委派可以减少事件绑定的次数*

```html
<body>
<button id="btn01">添加超链接</button>
<ul id="u1">
    <li><a href="javascript:" class="link">超链接1</a></li>
    <li><a href="javascript:" class="link">超链接2</a></li>
    <li><a href="javascript:" class="link">超链接3</a></li>
</ul>
<script>
    let u1 = document.getElementById("u1");
    let btn01 = document.getElementById("btn01");
    btn01.onclick = function (){
        let li = document.createElement("li");
        li.innerHTML = "<a href='javascript:' class='link'>新的超链接</a>";
        u1.appendChild(li);
    }
    //li的父元素绑定子元素的触发事件
    u1.onclick = function (event){
        //event事件中的target表示触发事件的对象
        //如果不写判断，点击u1列表中任意一个地方都会触发单击事件
        if (event.target.className === "link")
            alert("单击响应函数");
    }
</script>
</body>
```

### 7.4.事件绑定

#### 7.4.1.addEventListener()

*同时为一个元素的相同事件绑定多个响应函数，当事件被触发时，响应函数将会按照函数绑定的顺序执行*

>参数：
>
>1. 事件的字符串，不要on
>2. 回调函数，当事件触发时该函数会被调用
>
>3. 是否在捕获阶段触发事件，需要一个布尔值，一般都为false

兼容：IE8及以下不支持

注意：addEventListener()中的this，是绑定事件的对象

```html
<body>
<button id="btn01">点击</button>
<script>
    let btn01 = document.getElementById("btn01");
    /*为btn01连续设置三个单击函数*/
    btn01.addEventListener("click", function (){
        alert(1);
    }, false);
    btn01.addEventListener("click", function (){
        alert(2);
    }, false);
    btn01.addEventListener("click", function (){
        alert(3);
    }, false);
</script>
```

#### 7.4.2.attachEvent()

*同时为一个事件绑定多个处理函数，不同的时它是后绑定先执行*

>参数：
>
>1. 事件的字符串，要on
>2. 回调函数

兼容：只兼容IE8及以下

注意：attachEvent()中的this，是window

```html
<body>
<button id="btn01">点击</button>
<script>
    let btn01 = document.getElementById("btn01");
    /*定义一个函数，为指定元素绑定响应函数
    * obj 绑定的对象         eventStr 事件的字符串         callback 回调函数
    * */
    function bind(obj, event, callback){
        if(addEventListener){
            /*支持大部分浏览器*/
            obj.addEventListener(event, callback, false);
        }else{
            /*IE8及以下*/
            obj.attachEvent("on"+event, function (){
                //在匿名函数中调用回调函数
                callback.call(obj);
            });
        }
    }
    bind(btn01, "click", function (){
       alert(2);
    });
    bind(btn01, "click", function (){
        alert(123);
    });
</script>
</body>
```



## 8.节点对象原型链

![image-20210522100142947](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210522100142947.png)

```html
<div id="ss">xxx.com</div>
<input type="text" id="title" />
<script>
    //遍历获取节点对象原型链
    function prototype(el) {
        let p = Object.getPrototypeOf(el)
        console.log(p)
        Object.getPrototypeOf(p) ? prototype(p) : ""
    }
    let hd = document.getElementById('title')
    prototype(hd)
</script>
```

>输出：![image-20210521102349615](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210521102349615.png)



## 9.例子

### 9.1.多层标签获取

*定义一个函数，通过`Node.childrem`获取子元素放入一个数组中，再通过递归获取多层标签的子元素*

```html
<div id="id">
    <h1>xxx</h1>
    <h2>xxxxxx</h2>
</div>
<ul id="list">
    <li>
        <div>
            <div><h2></h2></div>
        </div>
    </li>
</ul>
```

```js
function all(el){
    const items = []
    ;[...el.children].map((node) => {
        //多层标签获取，递归压入元素
        items.push(node, ...all(node))
    })
    return items
}
let id = all(document.getElementById('id'))
let list = all(document.getElementById('list'))
console.log(id)
console.log(list)
```

>输出：
>[h1, h2]
>[li, div, div, h2]

