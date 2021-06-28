---
title: JSON
publish: false
---

*JavaScript Object Notation, JS 对象简谱*

## 1.基本概念

*JSON是一个特殊格式的字符串，这个字符串可以被任意的语言识别，并可以转换为任意语言的对象，JOSN主要用来数据的交互*

*JSON和JS对象格式一样，只不过JSON字符串中的**属性名必须加双引号**，且整个语句要用单引号括起来*

```js
let obj = '{"name": "shaBi", "age":19, "gender:":"male"}'
console.log(typeof obj);     //string
```



## 2.分类

（1）对象{ }

（2）数组[ ]

注：json允许的值：1.字符串	2.数值	3.布尔值	4.null								5.对象		6.数组



## 3.转换方法

（1）json-->js对象

>JSON.parse(text[, reviver])
>
>**text:**必需， 一个有效的 JSON 字符串。
>
>reviver: 可选，一个转换结果的函数， 将为对象的每个成员调用此函数。

```js
let obj = '{"name": "shaBi", "age":19, "gender:":"male"}'
let arr = `[1, 232, "hello", true, 55]`
let person = JSON.parse(obj);
let array = JSON.parse(arr);
person
array
```

>输出：
>
>{name: "shaBi", age: 19, gender:: "male"}
>(5) [1, 232, "hello", true, 55]

```js
let person = JSON.parse(obj, (key, value)=>{
    if(key === "name") {
        value = 'nishi' + value
    }
    return value
});
person.name	//nishishaBi
```





（2）js对象-->json

>JSON.stringify(value, [replacer.....], space)	//i can fly
>
>
>
>value: 必需, 要转换的对象/数组
>
>replacer: 可选。用于转换结果的函数或数组。null则是全部转换
>
>如果 replacer 为函数，则 JSON.stringify 将调用该函数，并传入每个成员的键和值。使用返回值而不是原始值。如果此函数返回 undefined，则排除成员。根对象的键是一个空字符串：""。
>
>如果 replacer 是一个数组，则仅转换该数组中具有键值的成员。成员的转换顺序与键在数组中的顺序一样
>
>space: 文本添加缩进、空格和换行符

```js
let Per = { name: "shaBi", age: 19, gender: "male" };
let person1 = JSON.stringify(Per);
person1

let person2 = JSON.stringify(Per, ['name', 'age'], 2)
person2
```

>输出：
>
>{"name":"shaBi","age":19,"gender":"male"}
>{
>  "name": "shaBi",
>  "age": 19
>}

```js
let Per = {
    name: "shaBi", age: 19, gender: "male", 
    toJSON: function() {
        return {
            name: this.name,
            age: this.age
        }
    },
}
let person = JSON.stringify(Per, null, 2)
console.log(person)
```

>{
>  "name": "shaBi",
>  "age": 19
>}

## 4.兼容

IE7及以下不支持JSON

可以通过引入外部JS文件来兼容json2