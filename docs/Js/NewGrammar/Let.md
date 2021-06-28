---
title: let声明变量
publish: false
---

## 1.变量不能重复声明

```js
let a = 1;
let a = 1;		//error
```
var可用重复声明变量

## 2.只在块级作用域有效

js的作用域大致包括：全局，函数，eval(ES5)

if else while for中也算在块级中

```js
{
 let a = 1;
 var b = 2;
}
console.log(a);     //error
console.log(b);
```

## 3.不存在变量提升*

变量提升：函数及变量的声明被提升到作用域的最顶部

```js
<script>
/*var b;*/
/*未声明变量直接使用，变量提升会在作用域顶部自动申明*/
console.log(b);             //undefined
    var b = 2;

console.log(a);             //error
    let a = 1;
</script>
```

## 4.不影响作用域链*

虽然let只在块级作用域有效,但不影响作用域链

```js
let name = "李俊基";
    function fn(){
        console.log(name);
    }
    fn();			//李俊基
```

## 5.与var的区别

var声明的变量会被提升到当前函数作用域顶端，如果在全局那么这个变量将会成为window的一个属性。

对于let声明的变量，它会将变量提升至当前块级作用域，且如果在全局，当前变量不会成为window的属性。

```js
<script>
        var test1 = '1';
        let test2 = '2';
        console.log(window.test1);//1
        console.log(window.test2);//undefined
        console.log(test1);//1
        console.log(test2);//2
</script>
```

