---
title: set
publish: false
---
*自动去重的集合*

## 1.声明

```js
let s = new Set();
let song = new Set(['Dieforyou', 'starboy', 'starboy', 'Dieforyou'])
//Set(2) {"Dieforyou", "starboy"}
```



## 2.属性和方法

### 2.1.返回元素个数

```js
console.log(song.size)	//2
```

### 2.2.添加元素

```js
song.add('Ican’tfellmyface')//Set(3) {"Dieforyou", "starboy", "Ican’tfellmyface"}
```

### 2.3.删除元素

```js
song.delete('Dieforyou')//Set(2) {"starboy", "Ican’tfellmyface"}
```

### 2.4.检查

```js
song.has('inyoureyes')//false
```

### 2.5.清空

```js
song.clear()	//Set(0) {}
```

### 2.6.实现了iterator接口

## 3.常用操作

### 3.1.数组去重

*将数组变为集合，然后通过扩展运算符变为数组*

```js
let arr = [1,2,3,4,5,4,3,2,1]
let result = [...new Set(result)]
result //(5) [1, 2, 3, 4, 5]
```

### 3.2.交集

```js
let arr = [1,2,3,4,5,4,3,2,1]
let arr2 = [4,5,6,5,6,7]

let intersection = [...new Set(arr)].filter(item => new Set(arr2).has(item))
intersection   //(2) [4, 5]
```

### 3.3.并集

```js
let union = [...new Set([...arr, ...arr2])]
union 	//(7) [1, 2, 3, 4, 5, 6, 7]
```

### 3.4.差集

*只在arr有不在arr2有的元素*

```js
let diff = [...new Set(arr)].filter(item=> !(new Set(arr2).has(item)))
diff	//(3) [1, 2, 3]
```



