---
title: IIFE
publish: false
---

# IIFE

*（Immediately-Invoked Function Expression）***立即执行函数**



### 1.作用

#### 1.1.隐藏实现

```js
(function (){
    var a = 1;
    function test(){
        console.log(++a);
    }
    window.$ = function(){      //向外暴露一个全局函数
        return{
            test: test
        }
    }
})()
$().test()//2 $是一个函数,$执行返回一个对象(对象中有一个test的方法)
```

#### 1.2.不会污染外部（全局）命名空间

```js
(function (){       //匿名函数自调用
    var a = 3;
    console.log(a + 1);
})()

var a = 5;
console.log(5);
```

#### 1.3.用它来编写js模块