---
title: 字符串
publish: false
---

*字面量中可以嵌套字面量*

### 创建

```js
//法一
var str = ''
console.log(typeof str) //string

//法二
var str = new String('')
console.log(typeof str) //object
```





### 1.字符串中的相关方法

#### 1.1.charAt()

*返回字符串中**指定位置的字符***

```js
let song = 'Die for you'
console.log(song.charAt(0))	//D
//等价于
console.log(song[0])
```



#### 1.2.charCodeAt()

*获取指定**字符的编码**并返回（Unicode编码）*

```js
let song = 'Die for you'
console.log(song.charCodeAt(0))	//68
```



#### 1.3.concat()

链接一个或多个字符串作用和+一样



#### 1.4.indexOf()

*检索一个字符串中是否含有指定内容*

如果字符串含有该内容，则会返回其**第一次出现的索引**，没找到**返回-1**

>参数：
>
>1. 查找的内容
>2. 从何处开始（下标，省略的话默认从0开始）

```js
let str = 'xinjie'
console.log(str.indexOf('j', 4))	//-1
```

##### includes()

*检索一个字符串中是否含有指定内容*

*返回的是boolean值，参数和indexOf()一样*

```js
let str = 'xinjie'
console.log(str.includes('j', 3))	//true
```



#### 1.5.lastindexOf()

与indexOf()一致，只是从后开始



#### 1.6.slice()

截取指定内容，将截取内容返回，不影响原字符串（与数组的slice类似）



#### 1.7.substring()

截取一个字符串，与slice()类似，不同的是这个方法**不能接收负值**（0, 0）

自动调整参数的位置，如果第二个小于第一个1，则自动交换



#### 1.8.split()

*将字符串**拆分成为一个数组***

```js
//如果传递一个空串作为参数，则每个字符都会拆分成数组中的一个元素
str = "abcaa332"
//str没有分割符，所以split中的`""不能加任何东西
let a = str.split("")
console.log(a)
```

>["a", "b", "c", "a", "a", "3", "3", "2"]

#### 1.9.toUpperCase()



#### 1.10.toLowerCase()



#### 1.11.length和trim()

*获取长度(**包含空格**)*

***清空**字符串中的**空格***

```js
let str = '    Heyguys '
console.log(str.length)
console.log(str.trim())
console.log(str.trim().length)
```

>12
>Heyguys
>7

字符串**中间的空格**trim()不会清除

```js
let str = 'Hey   guys'
let strt = str.trim()
console.log(str.length)
console.log(strt.trim().length)
```

>10
>
>10



#### 1.12.replace()



#### 1.13.toString()

*将其他类型的值**转换为字符串***

>变量名.toString()



### 2.转义

*字符串使用单引号或者双引号来起始或者结束，如果字符串中有引号则需要通过`\`来转义*

```js
//let srt = ''Call out my 'name' '	//error
let str = 'Call out my \'name\''
console.log(str)	// Call out my 'name'
```

| 代码 | 输出   |
| :--- | :----- |
| `\'` | 单引号 |
| `\"` | 双引号 |
| `\&` | 和号   |
| `\\` | 反斜杠 |
| `\n` | 换行符 |
| `\r` | 回车符 |
| `\t` | 制表符 |
| `\b` | 退格符 |
| `\f` | 换页符 |



### 3.拼接

>1. `+`
>2. es6模板字符串



### 4.类型转换

#### 4.1.String&Number

字符串转数值

 >1. 乘以一个数值型数据
 >2. 通过包装类Number()

```js
let str = "2"
console.log(str * 1 + 78)   //80
console.log(Number(str) + 78)   //80
```

数值转字符串

>1. 加上一个空字符串
>2. 通过包装类

```js
let num = 80
console.log(num + '' + "80")   //8080
console.log(Number(num) + "80")   //8080
```

