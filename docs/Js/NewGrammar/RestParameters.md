---
title: rest参数
publish: false
---
*ES6引入rest参数，用于**获取函数的实参**，以**数组的形式返回**，用来代替arguments*

arguments获取实参的方式（以对象的形式获取）

```js
function date(){
    console.log(arguments);
}
date('1', '11', '111');//[object Arguments]{0:"1", 1:"11", 2:"111"}
```



rest参数

*扩展运算符？*

>写法：foo(...参数名){}

```js
function date(...arr){
    console.log(arr);
}
date('1', '11', '111');//[object Array]:["1", "11", "111"];
```

注意：rest参数**必须放在参数最后**

```js
function fun(a, b, ...args){
    console.log(a); //1
    console.log(b); //2
    console.log(args);  //[object Array]:[3，4，5，6];
}
fun(1, 2, 3, 4, 5, 6);
```

