---
title: 闭包
publish: false
---
*闭包就是能够读取其他函数内部变量的函数*

## 1.产生&死亡

产生：满足函数嵌套且内部函数引用外部函数的变量，在嵌套内部函数**定义执行**(因为函数提升)时就产生了（不一定是调用）

死亡：在嵌套的内部函数成为垃圾对象时


## 2.常见的闭包

2.1.将一个函数作为另一个函数的返回值

```javascript
function fn1(){
    var a = 2;
    function fn2(){
        a++;
        console.log(a);
    }
    return fn2;
}
var x = fn1();
x();//3
x();//4
```

解析

>**fn1中的局部变量a一直保存在内存中**，没有在fn1调用后被自动清除？
>
>原因在于fn1是fn2的父函数。而fn2被赋值给了全局变量x，导致fn2始终在内存中，而fn2的存在依赖于fn1,因此fn1也始终在内存中

2.2.将函数作为实参传递给另一个函数



## 3.弊端&解决方法

### 3.1.弊端

*由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露*

### 3.2.解决方法

在退出函数之前，将不使用的局部变量全部删除(让内部函数成为垃圾对象-->回收闭包)

#### 3.2.1.eg

*点击div显示属性值*

```html
<div desc="coob">coob</div>
<div desc="sj">sj</div>
```

```js
let divs = document.querySelectorAll('div')
divs.forEach(item => {
    //将获取到的div的desc属性赋值给变量
    let desc = item.getAttribute('desc')
    item.addEventListener('click', ()=>{
        console.log(desc)
        console.log(item)
    })
    //清除item,释放内存
    item = null
})
```

>解析：
>
>在forEach中产生了闭包（遍历中的`item=>{}`，事件中的`()=>`），为了节省空间，需要将item清除释放清除
>
>为什么事件绑定回调函数打印itme会是null?
>**DOM事件绑定的回调函数**是一个**宏任务**，因此item=null(同步任务)会在它之前执行完

## 4.例题

### 4.1.

```javascript
var name = "The Window";
var object = {
    name:"My Object",
    getNameFunc:function(){
        return function(){
            return this.name;	
        };
    }
};
alert(object.getNameFunc()());   //The Window
```

>解析：
>
>object.getNameFunc()返回的是一个**匿名函数**不是object对象的属性和成员函数，则匿名函数中的this指向的肯定是window

### 4.2.

```javascript
var name = "The Window";
var object = {
    name:"My Object",
    getNameFunc:function(){
        //1.把this对象保存在闭包中的另一个可以访问到的变量中
        var that = this;	//此处的this为object
        return function(){
            return that.name;
        };
    }
};
alert(object.getNameFunc()());  //My Object 
```

```js
//2.箭头函数实现实现
getNameFunc: function () {
    return () => {
        return this.name;
    };
}
```

>解析：
>
>1. getNameFunc方法返回的是一个**普通的函数其this指向Window**，因此返回的函数无法通过this调用对象中的属性
>2. 可以将方法中的this保存成变量，在方法的作用域中返回的函数可以访问这个变量;或是使用箭头函数
>3. 也可以通过一些函数的第二个参数改变指针(如：map())

### 4.3.

```js
function fun(n, o){
    console.log(o);
    return{
        fun:function(m){
            return fun(m, n)
        }
    }
}
var a = fun(0); //undefined, 赋值a时调用了一次外部fun函数，此时n = 0, o = undefined;
a.fun(1); //0, a调用内部fun方法,产生闭包,内部m与外部n对应，内部n与外部o对应，输出o为0
a.fun(2); //0,内部fun方法，改变内部m的值不会改变外部o的值,没有产生新的闭包
a.fun(3); //0

var b = fun(0).fun(1).fun(2).fun(3);//undefined 0 1 2 , 此处的fun都是外部的函数
var c = fun(0).fun(1); //undefined 0
c.fun(2);   //1 c调用内部fun方法
c.fun(3);   //1
```

## 5.应用

### 5.1.自定义JS模块

js模块

* 将所用的数据和功能都封装在一个函数内部(私有的)
* 值向外暴露一个包含n个方法的对象或函数

```html
//.html文件
<script src="myModule.js"></script>
```

```javascript
<script>
     /*方法一*/
     var Module = Module1();
    Module.Daxie();
    Module.Xiaoxie();

    /*方法二,更为简便*/
    Module2.Daxie();
    Module2.Xiaoxie();
</script>

//.js文件
/*方法一*/
function Module1(){
    var msg = 'WanDaRen';
    function Daxie(){
        console.log(`Daxie ${msg.toUpperCase()}`);
    };
    function Xiaoxie(){
        console.log(`Xiaoxie ${msg.toLowerCase()}`);
    };
    //返回Module1函数包含子函数的对象
    return{
        Daxie:Daxie,
        Xiaoxie:Xiaoxie
    }
};

/*方法二,更为简便*/
(function(){
    var msg = 'WanDaRen';
    function Daxie(){
        console.log(`Daxie ${msg.toUpperCase()}`);
    };
    function Xiaoxie(){
        console.log(`Xiaoxie ${msg.toLowerCase()}`);
    };
    //将匿名函数中的子函数暴露在全局作用域window中
    window.Module2 = {
        Daxie:Daxie,
        Xiaoxie:Xiaoxie
    }
})();
```

### 5.2.平移效果

*点击按钮，让按钮向右平移*

```css
button{
    position: absolute;
}
```

```html
<button>Coob</button>
<button>Sj</button>
```

```js
let btns = document.querySelectorAll('button')
btns.forEach(function(item){
    let bind = false
    item.addEventListener("click", function(){
        if(!bind){
            bind = true
            let left = 1
            setInterval(function() {
                item.style.left = left++ + "px"
            }, 50);
        }
    })
})
```

>解析：
>
>每一次点击都会创建一个**新的click事件函数作用域**，因此可以在forEach中创建一个变量**判断是否已经点击过**，为true时则不再设置默认left和setInterval

bind为true不再设置默认left和setInterval

![image-20210502153400730](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210502153400730.png)



