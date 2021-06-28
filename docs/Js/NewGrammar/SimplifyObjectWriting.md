---
title: 简化对象写法
publish: false
---
*ES6允许在大括号里面，直接写入变量和函数，作为对象的属性和方法*

```js
let name = 'coob';
let change = function(){
    console.log('哈哈哈');
}
/*旧的写法*/
const school = {
    name: name,
    change: change,
    improve:function(){
        console.log("嘻嘻嘻");
    }
}
/*ES6*/
const school = {
    name,
    change,
    improve(){
        console.log("嘻嘻嘻");
    }
}
```

