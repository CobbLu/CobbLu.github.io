---
title: this
publish: false
---

## 1.this是什么?

*任何函数本质上都是通过对象来调用的，如果没有指定对象就是window*

1.全局作用域的this是window

2.所有函数内部都有一个变量this

```javascript
 var tt = 10;
sss = 100;
function dd(){
    console.log(this);
}
dd();//window
```

3.它的值是调用函数的当前对象

## 2.确定this的值

1.test()：window

2.p.test()：p

3.new test()：新创建的对象

4.p.call(obj)：obj



## 3.js加不加分号?

*语句后不加分号出现问题的情况*

小括号开头的前一条语句

```js
var a = 1
(function(){})()	//error
//解决办法方法
var a = 1
;(function(){})()  
```

中括号开头的前一条语句

```js
var b = 2
[1, 55, 6].forEach(function(){})	//error
//解决办法方法
var b = 2
;[1, 55, 6].forEach(function(){})
```

所以说我就不加

