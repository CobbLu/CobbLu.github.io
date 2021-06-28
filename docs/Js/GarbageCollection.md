---
title: 垃圾回收&内存
publish: false
---

### 1.垃圾的产生

*当一个对象没有任何的变量或属性对它进行引用，此时外面将永远无法操作该对象，此时这种对象一个垃圾，这种对象过多会占用大量的内存空间，导致程序运行变慢*

```js
let obj = Object();
obj = null;    /*此时obj就是垃圾*/
```



### 2.清理办法

*JS拥有垃圾自动回收机制，会自动将这些垃圾从内存中销毁掉*

*需要做的是只要将**不再使用的对象设置null**即可*



### 3.内存溢出

```javascript
//计算机运行内存暴增
var obj = {};
       for(var i = 0; i < 10000000; i++){
           obj[i] = new Array(10000000);
           console.log(1);
       }
```

### 4.内存泄漏

* 意外的局部变量

  ```javascript
  function fn(){
  	a = 3;			//漏写关键字声明变量，使得a为全局变量
  	console.log(a)
  }
  fn();				//函数执行完后a没有得到释放
  ```

* 没有及时清理的计时器或回调函数

  ```javascript
  var interval = setInterval(function(){
  	console.log('`');
  }, 1000);
  //clearInterval(interval)
  ```

* 闭包用完没有及时释放内部函数

  ```javascript
  function fn1(){
             var a = 1;
             function fn2(){
                 console.log(++a);
             }
             return fn2;
         }
         var f = fn1();
         f();
         //f = null;
  ```

  

