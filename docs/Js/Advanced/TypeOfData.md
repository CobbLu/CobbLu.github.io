---
title: 数据类型
publish: false
---

*js包含的7个数据类型：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）、Symbol(ES6)*

## 1.分类

### 1.1.基本数据类型[6]

* undefined：undefined（代表定义未赋值）

* null：null（表定义并赋值，只是值为null）

  * 思考：什么时候给变量赋值为null？

    * 1.表明变量将要赋值为对象
    * 2.释放内存空间

    ```js
    var c = null;   //初始值为null，表明将要赋值为对象
    c = ['xixi', 22];
    c = null;		//让b指向的对象成为垃圾对象（被回收）
    ```

* Boolean：true/false

* String：任意字符串

* Number：任意数字

* Symbol

### 1.2.引用(对象)数据类型[1]

​	其中对象有多种具体类型

* Object：任意对象
* Function：特别的对象（可执行）
* Array：特别的对象（内部元素有序）

### 1.3.区分变量类型与数据类型

数据类型：基本数据类型 + 对象数据类型

变量类型：基本数据类型 + **引用数据类型(保存的是地址的值)**

## 2.判断数据类型

*知道数据类型才方便对其进行操作*

### 2.1.typeof

*typeof返回数据类型的**字符串表达***，注意返回的字符串都是**小写**

>typeof 变量名

用于判断：undefined / Number / String / Boolean / function

```js
var a;
console.log(a, typeof a, typeof a === 'undefined', a === undefined);//undefined undefined true true 第二个undefined是字符串('undefined')
a = 99;
console.log(typeof a === 'number');
a = 'Die'
console.log(typeof a === 'string');
function b(){};
console.log(typeof b === 'function')
a = null;
console.log(typeof a, a === 'null');  //object false
a = [];
console.log(typeof a, a === 'Array');   //object false
a = Symbol()
console.log(typeof a, typeof a === 'symbol') //symbol true
```

**不能判断**：**null与object** / **array与object **

```js
var a;
a = null
console.log(typeof a, a === null);  //object true
a = []
console.log(typeof a, a === Array);   //object false
```



### 2.2.instanceof

*用于判断：对象的具体类型*

>实例 instanceof Object/Array/Function

返回一个**Boolean值**

```js
var obj = {
    arr:[1, 'haha', console.log],
    fun:function(){
        console.log('fun');
    }
}
//instance：实例
console.log(obj instanceof Object, obj instanceof Array);//T F
console.log(obj.arr instanceof Array, obj.arr instanceof Object);//T T 数组也是对象
console.log(obj.fun instanceof Function, obj.fun instanceof Object) ;//T T 函数也是对象

console.log(typeof obj.arr[2] === 'function');//T console.log是一个函数
```



### 2.3.===

用于判断：undefined / null

```js
var a = null
console.log(a === null)			//true
a = undefined
console.log(a === undefined) 	//true
```

思考：用let声明a为什么会报错

![image-20210427144827187](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210427144827187.png)



## 3.boolean

### 3.1.类型转换

*可用于条件判断*

```js
Boolean(null)
Boolean(undefined)
/*数值0*/
Boolean(0)
/*空字符串*/
Boolean("")
/*空数组*/
Boolean([])
/*空对象*/
Boolean({})
```

>false
>false
>false
>false
>true
>true



## 4.Number

### 4.1.number的方法

#### 4.1.1.parseInt()

*截取字符串**头部的整数**，返回Number类型*

>parseInt(字符串/变量)

```js
parseInt('89元')					//89
parseInt('第95名')			//NaN
```

#### 4.1.2.parseFloat()

*截取字符串**头部的小数**，返回Number类型*

>parseFloat(字符串/变量)

```js
parseFloat('95.78分')		//95.78
parseFloat('价格是18.5')	//NaN
```

#### 4.1.3.toFixed()

*为Number类型设置**保留几位小数***

>变量名.toFixed(保留的位数)

```js
let a = 18.875
a.toFixed(2)	//18.88
```


### 4.2.类型转换

```js
Number('89')
Number('89TTC')
Number([])
/*数组中只有一个元素，其Number类型就是该元素的值*/
Number([15])
Number([1,15,78])
Number({})
```

>89
>
>NaN
>
>1
>
>15
>
>NaN
>
>NaN



### 4.3.NaN

*not a number*

*Number()数值转换时出现**NaN**的情况*

```
Number('Faith')
Number(2 / 'Faith' )
```