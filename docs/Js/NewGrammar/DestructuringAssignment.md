---
title: 解构赋值
publish: false
---

*ES6允许按照一定模式从数组和对象中提取值，对变量进行赋值*

## 1.数组的解构

```js
const S3 = ['I Feel It Coming', 'Die for you', 'Call out my name']
//数组S3可赋值给另一个匿名数组
let [song01, song02, song03] = S3	//注意方括号
console.log(song02);//Die for you
```

## 2.对象的解构

```js
const xing = {
    name:'coob',
    age:'12'
    xiaopin:function(){
        console.log("小品");
    }
}
//对象xing可赋值给另一个匿名对象
let {name, age, xiaopin} = xing;//注意这里的花括号
console.log(name);
console.log(age);
xiaopin()		//调用xiaopin
```

