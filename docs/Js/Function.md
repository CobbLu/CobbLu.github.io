---
title: 函数
publish: false
---

*函数也是对象*

## 1.函数的操作

### 1.1.创建函数

#### 1.1.1.函数对象

*创建函数对象，通过构造函数来创建对象(使用的比较少)*

>let foo = Function(参数，语句)

```js
let foo = Function('a', 'b', 'return a * b')
f(2, 7)	//14
```



#### 1.1.2.函数声明

*使用**函数声明**来创建函数*

>//具名函数
>
>function foo(参数){语句}

**注**：使用函数声明的函数,它会在所有代码执行前就被创建**可在函数声明前调用(函数提升)**



#### 1.1.3.函数表达式

 *使用**函数表达式**来创建函数*

>//匿名函数
>
>let foo= function (参数){语句}

**注：**此方法不能在声明前调用**(不存在函数提升)**



#### 1.1.4.箭头函数

>​	let foo = (参数) => {语句}



### 1.2.调用方法/函数

*对象中的函数叫方法*

```js
let obj = {
    name: 'Coob',
    showname() {
        console.log(this.name)    
    }
}
function foo() {
    console.log(obj.name)
}
//调方法
obj.showname()	//Coob
//调函数
foo()	//Coob
```

注意 ：在调用函数时，浏览器每次都会传递**两个隐含的参数**

>1. 函数上下文对象**this**
>
>2. 封装实参的对象**argument**



### 1.3.枚举

#### 1.3.1.for(……in)

>for (let 变量 in 对象) {语句……} 
>

for……in语句 对象中有几个属性，循环就执行几次

注意：每次执行，会将对象的一个属性值赋值给变量

```js
let obj = {
    name:"卡尔斯",
    age:"11",
    gender:"male"
};
for(let n in obj){
    console.log(`属性名${n}`);
}
for(let n in obj){
    console.log(obj[n]);
}
```

>属性名name
>属性名age 
>属性名gender
>
>卡尔斯 
>11 
>male



## 2.函数中的值

### 2.1.return

*函数中**return后的语句不会执行**，使用return可以结束整个函数*（'"=>"创建的函数可以执行？）



### 2.2.实参

*函数接收到的值，可以是一个对象，也可以是一个函数*



#### 2.2.3.arguments

*封装函数的**传入的实参**，返回一个**对象***





### 2.3.形参

*定义函数时自己设置的参数名称*

*函数定义了形参就相当于在**函数作用域中声明了变量***

```js
let e = 33;
/*设置了形参函数声明了内部变量e但是调用是没有传值给内部变量e*/
function fun (e){	
    alert(e);		//error
}
fun()
```

```js
let e = 33;
/*未设置形参函数没有声明内部变量e所以调用了全局变量e*/
function fun (){   
    alert(e);		//33
}
fun(6)
```

```js
let e = 33;
function fun (e){
    alert(e);			//6
}
fun(6)
```

​            

## 3.作用域

### 3.1.全局作用域（script）

*全局作用域在页面打开时创建，在页面关闭时销毁*

>全局对象widow：全局变量都是**widow对象的属性**，script下的函数也会作为widow的方法
>
>全局变量：全局作用域中的变量

### 3.2.局部作用域

*函数范围内的作用域*

1. 函数局部作用域可以**访问到全局作用域的变量**

   ```js
   let c = 33;
   function  fun(){
       console.log(`c=${c}`);	//33
   }
   ```

2. 函数作用域也有声明提前的特性，声明的变量，会在函数中所有的代码执行前被声明；**函数声明**也会在函数中所有的代码执行之前执行(函数提升)*

#### 3.2.1.练习

###### (1)

>解析：虽然局部作用域能访问到全局作用域的变量，但是当**局部中的变量名和全局中变量名一样**时，局部作用域**只会使用局部变量**

```js
let c = 33;
function  fun(){
    //var c
    console.log(`c=${c}`);  //c=undefined		
    var c = 10;							
}
fun();
```

```js
let c = 33;
function  fun(){
    let c = 10;
    console.log(`c=${c}`);	//10
}
```



## 4.this

*通过方法调用多个不同对象中的同名属性,可以通过this来实现*

根据**函数的调用方式**不同，this会指向不同的对象

1. 以**函数的形式**调用，this永远是**window**
2. 以**方法**的形式调用，this永远是**方法调用的那个对象**
3. 以**构造的形式**调用时，this是新创建的那个对象
4. 使用**call和apply**调用时，this是指定的那个对象


```js
function fun(){
    console.log(this.name);
}
let obj = {
  name:"阿斯克",
  sayName:fun
};

let name = "卡尔斯";
fun();			//此时this=window    卡尔斯
obj.sayName();  //此时this=obj fun(){obj.name} 阿斯克
```



## 5.函数的方法

### 5.1.call()

*call()方法可以将实参在对象之后传递*

>foo.call(对象, 参数1, ......, 参数n) 
>
>对象：foo()指针改变后指向的对象
>
>参数：传递给foo()的参数

### 5.2.apply()

*apply()方法需要将实参封装到一个**数组**中*

>foo.apply(对象, [参数1, ......, 参数n] )     

### 5.3.call/apply的特点

（1）这两个方法都是函数对象的方法，需要通过函数对象来调用

（2）调用call()和apply()可以将**第一个对象**(第一个对象后可以接参数)指定为函数参数，此时这个**对象将会成为函数执行时的this**，且**立刻执行这个函数**

```js
function fun(){
    console.log(this);
}
function fun1(a, b){
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
}
let obj1 = {
    name:"伊丽莎白",
    sayName: function(){
        console.log(this.name);
    }
};
fun();                      
fun.call(obj1);             
fun.apply(obj1);            

fun1.call(obj1, 1, 2);     
/*fun1.apply(obj1, 3, 4)    error*/
fun1.apply(obj1, [3, 4]);  
```

>Window 
>{name: "伊丽莎白", sayName: ƒ}
>{name: "伊丽莎白", sayName: ƒ}
>
>a = 1
>b = 2
>
>a = 3
>b = 4



#### 5.3.1.使用例

###### (1)

*点击按钮获取弹出对话框获取文本内容*

```html
<button>Coob</button>
<button>SJ</button>
```

```js
function show() {
    alert(this.innerHTML)
}
let buttons = document.querySelectorAll('button')
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", event => {
        show.apply(event.target)
        //show.call(event.target)
    })
}
```



###### (2)

*返回数组最大值*

```js
let arr = [1, 2, 3 ,5]
console.log(Math.max.apply(Math, arr))	//5
```

>arr是数组，因此只能用apply()传递参数





## 6.回调函数

*被一个函数当作参数的函数，回调函数会在某个时刻调用*



## 7.递归

### 7.1.练习

#### 7.1.1.阶乘

```js
let foo =  n => n === 1 ? 1 : n * foo(--n)
 foo(5)	//120
```

#### 7.1.2.求和

```js
let sum = (...arr) => arr.length === 0 ? 0 : arr.pop() + sum(...arr)
sum(92, 8 , 50)	//150
```





## 8.生命周期

*函数调用时会开辟一个**全新的内存空间**（调用同一个函数多次其内存空间也会不同）来存放变量，**调用完成后就被清除***

实现调用一次函数累加n

```js
function foo() {
    let n = 1
    function add() {
        console.log(++n)
    }
    add()
}
foo();
foo();
```

>输出：
>
>2	
>
>2
>
>调用两次foo()创建了两个不同的内存空间，n上一次累加的值(调用完成后被清空)不会被保存到下一次调用foo()

![image-20210502093418928](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210502093418928.png)

*将函数的内存空间保留*

```js
function foo() {
    let n = 1
    return function add() {
        console.log(++n)
    }
}
let f = foo()
f
f()
f()
let b = foo()
b()
```

>输出：
>
>ƒ add() {
>              console.log(++n)
>  }
>
>2	
>3
>
>2
>
>将foo()的返回值保留到变量f中，返回的add()函数代码会被保存到f中；foo()的n能被add()访问到，那么多次调用f()也就是add()，n的值就会被保留在f变量中

访问变量父级作用域的变量

 ```js
function foo() {
    let n = 1
    return function add() {
        let m = 1
        return function show() {
            console.log("m：" + (++m))
            console.log("n：" + (++n))
        }
    }
}
let f = foo()()
console.log(f)
f()
f()
 ```

>输出：
>
>ƒ show() {
>                  console.log("m：" + (++m))
>                  console.log("n：" + (++n))
>   }
>m：2
>n：2
>m：3
>n：3
>
>最里层的作用域可以访问到所有外级作用域的变量

构造函数实现调用一次函数累加n

```js
function Foo() {
    let n = 1
    this.add = function() {
        console.log(++n)
    }
}
//等价于
// function Foo() {
//     let n = 1
//     function add() {
//         console.log(++n)
//     }
//     return {
//         add
//     }
// }
let f = new Foo()
console.log(f)
f.add()
f.add()
let b = Foo()
b.add()
```

>输出：
>
>add: ƒ add()__proto__: Object
>2
>3
>
>2

