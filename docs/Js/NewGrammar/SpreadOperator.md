---
title: ...扩展运算符
publish: false
---

*`...`扩展运算符将**数组转换为逗号分隔的参数序列***

注意与rest参数的区分，**rest参数只用在函数声明的形参位置**

```js
const song = ['Die for you', 'I Feel it Coming', 'Too Late'];
function like(){
    console.log(arguments);
}
like(...song); //等同于like('Die for you', 'I Feel it Coming', 'Too Late');
```

```js
//放
let arr1 = [1, 2, 3]
let [a, b, c] = [...arr1]
a ,b, c	//1, 2, 3
console.log(arr1)	//[1, 2, 3]
//收
let [i , ...arr2] = [1, 2, 3, 4]
console.log(i)	//1
console.log(arr2)	//[2, 3, 4]
```



## 扩展运算符实例

```js
//1.数组的合并
const songlist = ['Die for you', 'StarBoy'];
const songlist2 = ['Circle', 'Fly me to the moon'];
//使用concat拼接数组
//const like = songlist.concat(songlist2);
//扩展运算符拼接数组
const like = [...songlist, ...songlist2];
console.log(like);//[object Array]: ["Die for you", "StarBoy", "Circle", "Fly me to the moon"]
```

```js
 //2.数组的克隆
const singer = ['The weeknd', '2pac', 'lil peep'];
const singer2 = [...singer];
console.log(singer2);//[object Array]: ["The weeknd", "2pac", "lil peep"]
```

```html
//3.将伪数组转为真数组
<body>
    <div></div>
    <div></div>
    <div></div>
</body>
<script>
    //3.将伪数组转为真数组
    const divs = document.querySelectorAll('div');
    console.log(divs);      //<NodeList length="3"></NodeList>
    const divArr = [...divs];
    console.log(divArr);    //[object Array]
</script>
```



