---
title: Map
publish: false
---

*类似于对象，也是键值对的集合；但“建”的范围不限于字符串，各种类型的值（包括对象）都可以*
*有iterator接口，可以使用扩展运算符*

## 1.声明

```js
let m = new Map()
```

## 2.添加

```js
m.set('name', 'Coob')
m.set('PhoneCall', ()=>{
    console.log('+86 1374699103')
})
let key = {
    Album:'After Hours'
}
m.set(key, ['BlindingLights','InYourEyes','SaveYourTears'])
```

## 3.属性和方法

### 3.1.m.size

*返回元素个数*

### 3.2.删除

```js
m.delete('name')//Map(2) {"PhoneCall" => ƒ, {…} => Array(3)}
```

### 3.3.获取

*通过键名获取对应的键值*

```js
m.get('PhoneCall')
m.get(key)
```

![image-20210313103412599](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210313103412599.png)

### 3.4.清空

```js
m.clear()
```

