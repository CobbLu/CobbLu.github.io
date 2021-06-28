---
title: 数组
publish: false
---

*Array()数组也是一个对象,可以存放任意数据类型*

## 1.创建

### 1.1.new Array

>let 数组名 = new Array(元素1,……元素n);
>
>-------------------------------------------------------------
>
>ES6语法糖
>
>let 数组名 = Array(元素1,……元素n);

### 1.2.字面量创建

>let 数组名 = [元素1,……元素n];



## 2.基本方法

### 2.1.length

*获取数组长度*

>数组名.length

>修改数组长度: 数组名.length = number
>
>修改的长度>数组元素个数，多出部分的值为empty

>数组末尾添加元素：数组名[数组名.length] = value



### 2.2.push()

*向数组的**末尾添加**一个多个元素*

*并**返回**数组的**新的长度***



### 2.3.pop()

**删除**数组**最后一个**元素

*并**返回**被**删除的元素***



### 2.4.unshift()

*向数组的**首部添加**一个或多个元素*

*并**返回**数组的**新的长度***



### 2.5.shift()

**删除**数组**第一个**元素

*并**返回**被**删除的元素***



### 2.6.slice()

*从数组中**提取指定元素***

**不改变原数组**，而是将截取部分封装成一个新数组

>参数：左闭右开 `[)`
>
>1. 截取开始位置的索引，包含开始索引
>2. 截取结束位置的索引，不包含结束索引

**注**：传递赋负值，则从后往前计算

```js
let a = Array(1, 2, 3, 4)
b = a.slice(0, 2)
console.log(b)	//[1, 2]
console.log(a)	//[1, 2, 3, 4]
```



### 2.7.splice()

*删除数组中的指定元素（可以替换/添加）*

**指定元素**从原数组中**删除**，将被**删除元素返回**

>参数：
>
>1. 开始位置的索引
>2. 删除的数量，包含开始索引
>3. 可以传递新的元素，这些元素将会自动插入到开始索引位置之后

```js
let a = Array(1, 2, 3, 4)
b = a.splice(0, 2, 'Mind')
console.log(b)	//[1, 2]
console.log(a)	//["Mind", 3, 4]
```



### 2.8.concat()

**链接**两个或多个数组，并将**新的数组返回**

>数组1.concat(数组2,数组3……,数组n);
>
>数组1.concat(元素1,元素2……,元素n);

```js
let a = Array(1, 2, 3, 4)
let b = Array(5, 6)
let c = 7
a.concat(a, c)	//[1, 2, 3, 4, 1, 2, 3, 4, 7]
```



### 2.9.join()

*把数组中的所有**元素放入一个字符串***

*不会改变原数组*

>参数：
>
>指定一个字符串作为参数，这个字符串将成为数组中**各元素的连接符**，默认为`，`
>
>-------------------------------
>
>常见的连接符：`(' ')`, `('\n')`

```js
let a = Array(1, 2, 3, 4)
str1 = a.join()
str2 = a.join('')
console.log(str1)	//1,2,3,4
console.log(str2)	//1 2 3 4
```



### 2.10.reverse()

*将数组**反转**，该方法会直接**修改原数组***





### *2.11.sort()

*数组排序（升序），按照字典序排（数字按照首字母排），即unicode编码*

*直接修改原数组*

>可添加**回调函数**，来指定排序规则
>
>1. 回调函数需要*两个形参*
>2. 数组中，第一个形参一定在第二个形参前面
>4. 排序规则跟前回调函数返回值确定（第一个值减去第二个值），**>0从大到小**，**<0从小到大**，=0元素相等位置不变
>4. 浏览器将会分别使用**数组中的元素作为实参**调用回调函数

```js
let arr1 = [2, 11, 55, 0];
let arr2 = [2, 11, 55, 0];
let sheng = arr1.sort(function(a, b){
    return a - b;           //第一个数大于第二个数 则交换位置，升序
});
let jiang = arr2.sort(function(a, b){
    return b - a;           //第一个数小于第二个数 则交换位置，降序
});
console.log(sheng);
console.log(jiang);
```

#### 2.11.1.使用sort()排序对象

```js
let cart = [
    { name: 'iphone', price: 13 },
    { name: 'imac', price: 21 },
    { name: 'ipad', price: 5 }
]
cart = cart.sort((a, b) => {
    return a.price - b.price
})
console.table(cart)
```

| (index) | name     | price |
| :------ | :------- | :---- |
| 0       | "ipad"   | 5     |
| 1       | "iphone" | 13    |
| 2       | "imac"   | 21    |



##### 2.11.2.原理

*冒泡排序*

```js
function sort(array, callback) {
    for (const n in array) { 
        for(const m in array) {
            // 小于零升序，大于零降序
            if(callback(array[n], array[m]) < 0) {
                const temp = array[n]
                array[n] = array[m]
                array[m] = temp
            }
        }
    }
    return array
}
let arr = [2, 11, 55, 0]
arr = sort(arr, (a, b) => {
    return a - b
})
console.log(arr)	//[0, 2, 11, 55]
```

#### *2.12.filter()

*建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素*

filter中的回调函数必须**返回一个boolean值**，且*为true时函数内部会自动将这次回调的元素加入到新的数组中*

>array.filter(function(currentValue,index,arr), thisValue)

| value          | mean                                                         |
| -------------- | ------------------------------------------------------------ |
| *currentValue* | 必须。当前元素的值                                           |
| *index*        | 可选。当前元素的索引值                                       |
| *arr*          | 可选。当前元素属于的数组对象                                 |
| *thisValue*    | 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。 如果省略了 thisValue ，"this" 的值为 "undefined" |

```js
let array = [120, 2, 54, 512 ,66]
//将数组大于100的元素组成一个新数组
let array2 = array.filter((i)=>{
      return i > 100
    })
console.log(array2) //[120, 512]
```

##### 2.12.1.获取数组区间

```js
let arr = [1, 2, 3 ,5, 28, 232, 5]
function between(a, b) {
    return function(v){
        return v >= a && v <= b
    }
}
console.log(arr.filter(between(1, 5)))
```



#### *2.13.map()

*`map()`方法定义在JavaScript的`Array`中，它**返回一个新的数组**，数组中的元素为原始数组调用函数处理后的值*

*map是对数组中的**元素一个个进行处理**的函数*

>array.map(function(currentValue, index, arr), thisIndex)

注意：

* `map()`不会对空数组进行检测
* `map()`不会改变原始数组

| value          | mean                                                         |
| -------------- | ------------------------------------------------------------ |
| *currentValue* | 必须。当前元素的值                                           |
| *index*        | 可选。当前元素的索引值                                       |
| *arr*          | 可选。当前元素属于的数组对象                                 |
| *thisValue*    | 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。 如果省略了 thisValue ，"this" 的值为 "undefined" |

```jsx
let array = [1, 2, 3, 4, 5];
//返回由原数组中每个元素的平方组成的新数组
let newArray = array.map((item) => {
    return item * item;
})

console.log(newArray)  // [1, 4, 9, 16, 25]
```



#### *2.14.reduce()

*对数组中的所有内容进行汇总*

>array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

| value          | mean                                       |
| :------------- | :----------------------------------------- |
| *total*        | 必需。*初始值*, 或者计算结束后的**返回值** |
| *currentValue* | 必需。**当前元素**                         |
| *currentIndex* | 可选。当前元素的索引                       |
| *arr*          | 可选。当前元素所属的数组对象。             |
| *initialValue* | 可选。传递给函数的初始值                   |

```js
//求数组元素的总和
let array = [20, 40, 80, 100]
let sum = array.reduce((preValue, n)=>{
    return preValue + n
}, 0)
console.log(sum)//240
```

![image-20210323125944612](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210323125944612.png)

```js
//最大/最小值
let arr = [-1, 40, 10, 100]
function arrayMax(array) {
    return array.reduce((pre, cur) => {
        return pre < cur ? pre : cur
    })
}
console.log(arrayMax(arr))
```

```js
//统计某个元素出现的次数
let arr = [11, 2, 33, 11, 11, 33]
function arrayCount(array, item) {
    return array.reduce(function(total, cur) {
        total += item === cur ? 1 : 0
        return total
        /*initialValue一定要设置为0*/
    }, 0)
}
console.log(arrayCount(arr, 33))	//2
```



#### 2.15.[Array.form()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

*从一个**类似数组**或可**迭代对象**创建一个新的，浅拷贝的数组实例*



#### 2.16.every()/some()

*every()：必须**所有**都返回true才会返回true，哪怕有一个false，就会返回false*

*some()：只要**其中一个**为true 就会返回true的*

>array.every/some(function(value, index, arr){})

```js
 let arr = [11, 2, 33]
 let eve = arr.every((value, index, arr) => {
     return value > 11
 })
 let some = arr.some((value, index, arr) => {
     return value > 11 
 })
```

>eve	//false
>some //true



#### 2.17.indexOf()/includes()  

*字符串中有介绍*



### 3.遍历

#### 3.1.forEach()

>array.forEach(function(item, index, array){})

特点

1. 这种函数，由我们创建但不由我们调用的，称之为**回调函数**
2. 数组中有几个元素就会执行几次，每次执行，浏览器会将遍历到的元素以实参的形式传递进来，可以定义形参来读取数组中的内容

3. 浏览器会在回调函数中传递三个参数，**第一个**参数为当前**遍历的元素**；**第二个**参数为当前**遍历的索引**；**第三个**参数为**当前遍历的数组**；


```js
let arr = [1, 22, 333, 444];
arr.forEach(function(value, index, obj){
    console.log(value);
    console.log(index);
    console.log(obj);
})
```

>输出：
>  1									value
>  0									index
>[object Array]: [1, 22, 333, 444]	   obj
>  22								
>  1									
>  [object Array]: [1, 22, 333, 444]
>  333									
>  2									
>  [object Array]: [1, 22, 333, 444]
>  444									
>  3									
>  [object Array]: [1, 22, 333, 444]

### 4.数组去重

```js
let arr = [1, 2, 3, 2, 2, 1, 3, 4, 2, 5];
for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
        if(arr[i] === arr[j]){
            //当删除了j所在的元素以后，后面的元素会自动补位，此时将不会再比较这个元素
            arr.splice(j, 1);
            //添加使j自减，判断删除后补位上来的元素是否还是相等
            //j--;
        }
    }
}
console.log(arr);				/*[1, 2, 3, 2, 4, 5]*/
//添加j--后
//console.log(arr);				/*[1, 2, 3, 4, 5]*/
```

