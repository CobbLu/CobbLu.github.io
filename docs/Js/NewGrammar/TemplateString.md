---
title: 模板字符串
publish: false
---

*ES6引入新的声明字符串的方式`反引号`  ` `` `*

## 1.内容中可以换行

```反引号`中的空格也会被输出

```js
let str = `	<ul>
<li>1</li>
<li>2</li>
</ul>`
```

## 2.变量拼接

```js
let a = "you"
let b = "me"
console.log("Die for " + a + "," + "Pray for " + b);
console.log(`Die for ${a},Pray for ${b}`)
```