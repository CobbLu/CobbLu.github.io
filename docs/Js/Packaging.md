---
title: 包装类
publish: false
---

（1）三个包装类String()、Number()、Boolean()可将基本数据类型转换为对象

>let foo = new String()/Number()/Boolean()

String()

将基本数据类型字符串转换为String对象

Number()

将基本数据类型数字转换为Number对象

Boolean()

将基本数据类型布尔值转换为Boolean对象

```js
let num = new Number(3);
let num1 = 1;
console.log(typeof num);			/*objetc*/
num.name = "杰斯";                  
num1.name = "www"                 
console.log(num.name);				/*杰斯*/
console.log(num1.name);				 /*undefined*/
```

**注意：基本不会使用，大坑**

（2）自己不要使用，但系统自动使用？

​	方法和数需只能添加给对象，不能添加给基本数据类型

​	因而，当我们对一些**基本数据类型的值去调用属性和方法时**，浏览器会临时**使用包装类将其转换为对象**，然后再调用对象的属性和方法，调用完后，再将其	转换为基本数据类型

```js
let s = 123;
s = s.toString();	/*s基本数据类型不能调用方法，要通过解析器临时将s包装成Number对象，再调用Number对象的toString，这样基本数据类型才能调方法*/
console.log(s);                     /*123*/
console.log(typeof s);              /*String*/
```

