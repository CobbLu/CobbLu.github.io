---
title: 生成器函数
publish: false
---

*异步编程*

## 1.声明

```js
function * gen(){
    console.log('hello')
}
```

## 2.调用

通过调用`next()`方法执行

```js
//gen() 直接调用，无反应
let iterator = gen()
iterator.next() //hello
```

## 3.代码分隔符

`yield`

（1）调用next()函数，**执行完遇见的第一个yield或后面没有代码才停止**，一个next一个yield，没有yield就undefined

```js
function * gen(){
    console.log(111)
    console.log(11)
    concole.log(1)
    yield 'Die for you'
    console.log(222)
    yield 'in your eyes'
}
let iterator = gen()
iterator.next()//111	11	1
iterator.next()//222
```

（2）打印next()函数，会返回一个对象，包含done(标识yield是否全部执行完)、value(调用next向下执行碰到的第一个yield的值)属性

```js
function * gen(){
    //console.log(111)
    yield 'Die for you'
    //console.log(222)
    yield 'in your eyes'
}
let iterator = gen()

console.log(iterator.next())//[object Object]: {done: false, value: "Die for you"}
console.log(iterator.next())//[object Object]: {done: false, value: "in your eyes"}
console.log(iterator.next())//[object Object]: {done: true, value: undefined}

//yield是生成函数的键名
for(let i of gen()){
    console.log(i)//Die for you
    			//in your eyes
}
```



## 4.传参

通过函数可穿参给第一个yied前的代码，而通过**next()传参会传递到上一个yield的返回值中**(第n个next传值到第n-1个yield中)

```js
function * fun1(a){
    console.log(a)
    let one = yield 111
    console.log(one)
    let two = yield 222
    console.log(two)
}
let iterator = fun1('AAA')
console.log(iterator.next())
console.log(iterator.next('BBB'))
console.log(iterator.next('CCC'))
//yield可以收传入的参数？
```

输出：

![image-20210313084749144](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210313084749144.png)



## 5.实例

### 5.1.

1s 后台输出111	2s后台输出222	3s后输出33

```js
function one(){
    setTimeout(()=>{
        console.log(111)
        iterator.next()
    },1000)
}

function two(){
    setTimeout(()=>{
        console.log(222)
        iterator.next()
    },2000)
}

function tree(){
    setTimeout(()=>{
        console.log(333)
    },3000)
}

function * gen(){
    yield one()
    yield two()
    yield tree()
}
let iterator = gen()
iterator.next() 
```



### 5.2.

增加了传递参数的**1)**

```js
function getUsers(){
    setTimeout(()=>{
        let data = '用户'
        //调用next方法，并将数据传入
        iterator.next(data)
    },1000)
}

function getOrders(){
    setTimeout(()=>{
        let data = '订单编号'
        iterator.next(data)
    },1000)
}

function getGoods(){
    setTimeout(()=>{
        let data = '商品信息'
        iterator.next(data)
    },1000)
}

function * gen(){
    let users = yield getUsers()
    console.log(users)
    let Orders = yield getOrders() 
    console.log(Orders)
    let Goods = yield getGoods()
    console.log(Goods)
}
let iterator = gen()
iterator.next() 
```



