---
title: Promise
publish: false
---

*语法上是一个构造函数，用来封装**异步操作**并获取其成功或失败的结果*

*`promise` 非常适合需要一定执行时间的异步任务*

*JavaScript是一门单线程的语言*



## 异步编程

**异步**，举例来说类似于做家务：洗衣，煮饭，扫地，可以在扫地前将衣服放入洗衣机，先淘米放入电饭锅。扫完地后通过洗衣机和电饭煲的显示知晓任务完成

**同步**，像排队一样，让每一件事都完成才去做下一件事



## 1.实例化

两个参数的都是**函数**

> `resolve`将Promise的状态转为成功

> `reject`转为拒绝；这两个参数也是函数

```js
const p = new Promise((resolve, reject) => {
    setTimeout(function(){
        //let data = '数据库中的用户数据'
        //resolve(data)
        let err = '数据读取失败'
        reject(err)
    }, 1000)
})
```

## 2.Promise.then()

*`then`方法有两个回调**函数***

> Promise调用resolve函数=>执行第一回调函数=>`value`等于`resolve()`传来的数据

> Promise调用reject函数=>执行第二回调函数=>`reason`等于`reject()`传来的数据

Promise**不调用改变状态的函数**，`value`和`reason`里的代码是**不会执行的**

```js
p.then(value =>{
  //console.log(value)	//数据库中的用户数据
}, reason =>{
  console.log(reason)	//数据读取失败
})

//或者这样写: then()处理成功回调，catch()处理失败回调
p.then( value =>{
  console.log(value)
})
p.catch( reason =>{
  console.log(reason)
})
```

### 2.1.then方法的返回结果

*调用then方法的返回结果是新的`Promise`实例（注意，不是原来那个`Promise`实例）。对象的状态由回调函数的执行结果决定*

**后面的then是对前面的then返回结果的处理**

#### 2.1.1.非Promise类型的属性

*如果回调函数中的返回结果是非Promise类型的属性，状态为**成功fulfilled***

*可以理解成，**默认状态为成功***

注：不写return语句默认返回的是undefined(也是结果也是**成功**)

```js
const p = new Promise((resolve, reject) => {
    resolve('用户数据')
})

const result = p.then(value => {
    console.log(value)  
	return '一个String类型'  
}, reason => {
    console.error(reason)
})
console.log(result) 
```

输出：
![image-20210408102743140](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210408102743140.png)



#### 2.1.2.promise实例

*状态与返回的Promise实列一致*

**返回Promise实例的简写**

```js
//value是上一层promise的value
return new Promise(resolve => {
   resolve(value + '222')

//上面return 返回Promise的简写
return Promise.resolve(value + '222')
// return Promise.reject('')	//处理错误回调时

//上面return 返回Promise的终极简写（js会内部自行封装Promise）
return value + '222'
```

```js
const result = p.then(value => {
    console.log(value)  
    return new Promise((resolve, reject) => {
        //resolve('ok')
        reject('error')
    }) 
}, reason => {
    console.error(reason)
})
console.log(result)
```

输出：
返回的promise调用reject()
![image-20210408103742192](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210408103742192.png)

返回的promise调用resolve()
![image-20210408103529937](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210408103529937.png)



#### 2.1.3.抛出异常

*then抛出异常时，状态为`rejected`*

```js
const result = p.then(value => {
    console.log(value)  
    throw '出错了'
}, reason => {
    //reason可以捕获throw抛出的异常
    console.error(reason)
})
console.log(result) 
```

输出：
![image-20210312103608330](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210312103608330.png)



### 2.2.Promise的状态

Promise包含`pending`、`fulfilled`、`rejected`三种状态

- `pending` 指初始等待状态，初始化 `promise` 时的状态
- `resolve` 指已经解决，将 `promise` 状态设置为`fulfilled`
- `reject` 指拒绝处理，将 `promise` 状态设置为`rejected`
- `promise` 是生产者，通过 `resolve` 与 `reject` 函数告之结果
- *状态一旦改变将不可更改*



### 2.3.链式调用

*调用then方法的返回结果是新的`Promise`实例（注意，不是原来那个`Promise`实例）。因此可以采用链式写法，即`then`方法后面再调用另一个`then`方法，*



## 3.Promise.catch()

*语法糖，类似于then()方法只写第二个参数`then(null,reason=>{})`*

*在链式调用的最后一个末尾应用catch()，可以接收前面多个没有设置错误捕获处理的Promise的**第一个错误***

```js
const p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject('出错了')
    },1000)
})
p.catch((reason)=>{
    console.warn(reason)
})
```

输出：![image-20210313091915433](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210313091915433.png)



## 4.Promise.all([])

*`Promise.all([])`可以将**多个Promise实例**包装成一个新的Promise实例。成功的时候返回的是一个成功结果数组，而失败的时候则返回最先被设置reject失败状态的值（all中只要有一个reject则resolve就都不会被使用）*

```js
Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('成功1')
    }, 1000)
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('成功2')
    }, 1000)
  }),
  // new Promise((resolve, reject) =>{
  //   setTimeout(() => {
  //     reject('error')
  //   }, 1000)
  // })
]).then(value => {
  console.log(value)
}).catch(reason => {
  console.log(reason)
})
```

![image-20210408115238131](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210408115238131.png)





## 5.宏任务与微任务

*promise生成微任务队列`microtask`*

* **生成微任务**：`resolve`或`reject`改变promise状
* **执行微任务**：then调用`value`或者`reason`

*宏任务队列`macrotask`，如`setTimeout()`，`setInterval()`、`setImmediate()`、DOM事件*

**同步优先级** >**微任务队列**>**宏任务队列**

```js
//即使即使计时器设置零秒,宏任务的优先级也不会提高
setTimeout(() => {
    console.log("宏任务")
}, 0)

//立即执行的Promise
new Promise(resolve => {
    //将then()执行的代码放入微任务队列
    resolve();
    console.log("同步任务1")
}).then(value => console.log("微任务"))

console.log("同步任务2")
```

> 输出：
>
> 同步任务1
>
> 同步任务2
>
> 微任务
>
> 宏任务

```js
new Promise(resolve => {
setTimeout(() => {
//在宏任务中开启微任务，要等到宏任务完成后
resolve()
console.log('爷是宏任务')
}, 0)
    
console.log('爷是同步任务1')
}).then(value => console.log("爷是微任务"))

console.log('爷是同步任务2')
```

> 输出：
>
> 爷是同步任务1
> 爷是同步任务2
> 爷是宏任务
> 爷是微任务



## 6.async和await

### 6.1.async

*可让函数具有异步特征*

使用return返回了值，这个返回值会被`Promise.resolve()`包装成一个Promise对象

```js
new Promise(resolve => {
    resolve('abc')
}).then(value => console.log(value))

// 等价于
async function foo() {
    return 'abc'
}
foo().then(value => console.log(value))

console.log(foo())	
```

![image-20210424132238261](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210424132238261.png)



Promise的`reject`**不会**被ascyc定义的函数**捕获**；但是通过`throw`抛出的错误会被捕获

```js
async function foo() {
	Promise.reject(1)
}
foo().catch(console.log)
```

输出：

>Uncaught (in promise) 1



### 6.2.await

*await就是then的语法糖*；

```js
new Promise(resolve => {
    resolve()
})
    .then(value => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('The')
        }, 2000)
    })
})
    .then(value => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(value + 'Weeknd')
        }, 2000)
    })
})
    .then(value => console.log(value))


//await就是then的语法糖
async function foo() {
    let str = await new Promise(resolve => {
        setTimeout(() => {
            resolve('The')
        }, 2000)
    })
    let str2 = await new Promise(resolve => {
        setTimeout(() => {
            resolve('Weeknd')
        }, 2000)
    })
    //等待四秒
    console.log(str + str2)
}
foo()
```

输出：

>TheWeeknd
>
>TheWeeknd
>
>注意：async定义函数会先输出，应为console语句是同步的，而newPromise中的console是在微任务then里面



## 例子

### （1）Promise读取文件

```js
//注意fs是node的模块，浏览器运行会显示not defend
var fs = require('fs')
//使用Promise封装，读取文件
const p = new Promise((resolve, reject)=>{
    fs.readFile('./文言文.mds', (err, data)=>{
        //判断失败
        if(err) reject(err)
        //如果成功
        resolve(data)
    })
})
p.then(function(value){
    console.log(value.toString())
},function(reason){
    console.error("读取失败")
})
```

### （2）Promise读取多个文件并拼接

*运用promise.then方法的链式调用*

```js
const fs = require('fs')

//读取多个文件，使用回调的方法（文件多的情况，不方便书写，一直回调影响性能）
// fs.readFile('./文言文.md', (err, data1)=>{
//     fs.readFile('./文言文2.md', (err, data2)=>{
//         fs.readFile('./文言文3.md', (err, data3)=>{
//             let result = `${data1}\n${data2}\n${data3}`
//             console.log(result)
//         })
//     })
// })

const p = new Promise((resolve, reject)=>{
    fs.readFile("./文言文.md", (err,data)=>{
        resolve(data)
    })
})

//value是文言文的内容
p.then(value=>{
    return new Promise((resolve, reject)=>{
        fs.readFile("./文言文2.md", (err,data)=>{
             //data是文言文2的内容,两个文本的内容拼接成数组
            resolve([value, data])
        })
    })
    //value接受的是上一个then通过resolve成功传过来的包含2个文本的数组
}).then(value=>{
    return new Promise((resolve, reject)=>{
        fs.readFile('./文言文3.md', (err, data)=>{
            //data是文言文3的内容
            value.push(data)
            resolve(value)
        })
    })
    //value接受的是上一个then通过resolve成功传过来的包含3个文本的数组
}).then(value=>{
    //console.log(value)
    console.log(value.join('\n'))   //将数组转为一个字符串,'\n'为换行符
})
```

