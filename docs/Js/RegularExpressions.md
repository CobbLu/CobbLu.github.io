---
title: 正则表达式
publish: false
---

*用于定义一些字符串的规则，计算机可以根据正则表达式，来检查一个字符串是否符合规则，将字符串中符合规则的内容提取出来.*



## 1.创建

### 1.1.构造函数

>let 变量 = new RegExp("正则表达式" ,"匹配模式");
>
>-------------------------
>
>第二个参数可以是：
>
>i 忽略大小写
>
>g 全局匹配模式

### 1.2.字面量

>let 变量 = /正则表达式/匹配模式

```js
reg = /a/i;
console.log(typeof reg);        /*object*/
```

## 2.表达

### 2.1.符号

| express |          mean          |
| :-----: | :--------------------: |
|  `[ ]`  | [ ] 里的内容是或的关系 |
|   `|`   |       表或的关系       |
|  `[^]`  |          除了          |
|         |                        |
|         |                        |
|         |                        |

```js
let reg1 = /a|b/;                    //含有a或b
let reg2 = /[abcd]/;                 //等价于a|b|c|d
let reg3 = /[a-z]/;                 //含有任意小写字母
let reg4 = /a[bde]c/;               //含有 abc或 abc 或 aec
let reg5 = /[^0-9]/;                //不含有数字
console.log(reg1.test("ax"));       /*true*/
console.log(reg2.test("ca"));       /*true*/
console.log(reg3.test("Aa"));       /*true*/
console.log(reg4.test("ac"));       /*false*/
console.log(reg5.test("1"))         /*false*/
```

### 2.2.量词 

*设置一个内容的出现次数*

**量词只对它前边的一个内容起作用**

| express  |           mean           |
| :------: | :----------------------: |
|  `{n}`   |       正好出现n次        |
| `{m，n}` |        出现m-n次         |
| `{m，}`  |        m次及以上         |
|   `+`    | 至少一个，相当于`{1，}`  |
|   `*0`   | 0个或多个，相当于`{0，}` |
|   `?`    | 0个或1个，相当于`{0，1}` |
|   `^`    |           开头           |
|   `$`    |           结尾           |
|          |                          |

```js
let reg = /a{3}/;               /*找是否有连续3个a*/
let reg1 = /(ab){2}/            /*找是否有连续2个ab*/
let reg2 = /ab{2}c/            /*找是否有abbc*/
let reg3 = /ab{1,3}c/		   /*找一个a和1|2|3个b和一个c*/
console.log(reg.test("aaa451ee"));          /*true*/
console.log(reg1.test("ababab@1213#"));     /*true*/
console.log(reg2.test("abbbc"));            /*false*/
console.log(reg3.test("abbc"));            /*true*/
```

```js
let reg = /^a/;
let reg1 = /a$/;
let reg2 = /^a$/;           /*只能是a*/
let reg3 = /^a|b$/;         /*a开头b结尾(有待测验)*/
console.log(reg.test("a2dlk20")); /*true*/
console.log(reg1.test("lk20a"));  /*true*/
console.log(reg2.test("a"));      /*true*/
console.log(reg3.test("ajioj0023&*(b"));    /*true*/
```

### 2.3.转义字符

* 检查一个字符串是否含有"."

  "."表示任意字符

  正则表达式要用"\."表"."

  注：使用构造函数时，由于参数是一个字符串，而\是字符串转义字符；\要用\\代替

* \W 除了字母，数字，_

* \w  任意字母，数字，_

* \D  除了数字

* \d

* \S  除了空格

* \s   

* \B  除了单词边界

* \b

  ```js
  let reg1 = /child/;
  let reg2 = /\bchild/;
  let reg3 = /\bchild\b/;
  console.log(reg1.test("hello children"));		/*true*/
  console.log(reg2.test("hello child"));			/*true*/
  console.log(reg2.test("hellochild"));			/*false*/
  ```

```js
let a = "       Coob   sj                       ";
a = a.replace(/^\s* | \s*$/g, "");  /*去除前面多个空隔或后面多个空格(全局设置)*/
console.log(a);             /*Coob   sj*/
```



## 3.方法

### 3.1.test()

*检查一个字符串是否符合正则表达式的规则，符合返回true，否则false*

```js
let reg = new RegExp("a");			/*规定有"a"的字符串*/
let str = "a";
console.log(reg.test(str));			/*true*/
console.log(reg.test("coob"));		/*false*/
```



## 4.字符串和正则相关方法

### 4.1.split()+正则

不指定全局匹配，也会全部拆分

```js
let str = "1a2b3c4d5c";
a = str.split(/[A-z]/);	/*以任意字母为基拆分字符串*/
console.log(a);	/*[ "1", "2", "3", "4", "5" ]*/
```

### 4.2.search()+正则

可以搜索字符串中是否含有指定内容

只能查找第一个，即使设置全局匹配

```js
let str = "hello hello aec afc ";
a = str.search(/a[bef]c/);/*搜索a[bef]c第一次出现的位置*/
console.log(a);    /*12*/
```

### 4.3.match()+正则

根据正则表达式，从一个字符串中将符合条件的内容提取出来

​		默认情况下match只会找到第一个符合要求的内容(不设g的情况)，可以设置正则表达式为全局匹配模式，这就会匹配到所有的内容

注：match()会将匹配到的内容封装到一个数组中返回

```js
let str = "1a2b3d4d5e6f7A8B9";
a = str.match(/[a-z]/ig); /*找到所有字母（g全局匹配）*/
console.log(a);    /*[ "a", "b", "d", "d", "e", "f", "A", "B" ]*/
```

### 4.4.replace()+正则

将字符串中指定内容替换为新的内容

replace()参数：

​			1.被替换的内容，可以接受一个正则表达式为参数

​			2.新的内容

默认替换一个

```js
let str = "1a2b3d4d5e6f7A8B9";
a = str.replace(/[a-z]/ig, "$");/*将所有字母替换为$*/
console.log(a);				/*1$2$3$4$5$6$7$8$9*/
```

## 5.邮件正则

* 电子邮件定义规则:

  hello @abc.com.cn

  任意字母数字下划线 .任意字母数字下划线 @ 任意字母数字 .任意字母(2-5) .任意字母(2-5位)

  \w{3,}                     (\.\w)+*                          @   [A-z0-9]+		(\.\[A-z]{2,5}){1,2}

* 实现

  ```js
  let email = "1374799103@qq.com";
  let reg = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/
  console.log(reg.test(email));
  ```

