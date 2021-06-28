---
title: 变量声明提升和函数提升
publish: false
---

通过执行上下文的预处理操作实现提升

## 1.变量声明提升

*概念：在变量定义之前，可以提前访问到该变量*

值：undefined



## 2.函数提升

*概念：在通过function声明的函数之前，可以直接调用该函数*

值：函数定义（对象）

**注意：**只有通过**函数声明**的方式声明函数才能有变量提升

```javascript
        fn();		//fn()
	   /*函数声明创建函数*/
       function fn(){
           console.log('fn()');
       }

       fn1();		//fun1() is not a function
	  /*函数表达式创建函数*/
       var fn1 = function(){
           console.log('fn1()');
       }
```

## 3.例题

1)**先执行变量提升，再执行函数提升**（a变量先提升，被后提升的a函数覆盖）

```javascript
<script>
    function a(){}
    var a;
    console.log(typeof a);//function
</script>
```

2）

```javascript
<script>
       if(!(b in window)){  //b in window is true
           var b = 1;
       }
       console.log(b);//undefined
</Script>
```

3）

```javascript
var  c = 1;
       function c(c){
           console.log(c);
           var c = 3;
       }
       c(2);//c is not a function
```

解析：

```javascript
var  c;
       function c(c){
           console.log(c);
           var c = 3;
       }
c = 1;
    c(2);//c is not a function
```