---
title: 执行上下文
publish: false
---

## 1.全局执行上下文

***在执行全局代码前* 将window确定为全局执行上下文，再对全局数据进行预处理**

* var定义的全局变量==>undefined，添加window的属性
* function声明的全局函数==>赋值(fun)，添加为window的方法
* this==>赋值(window)

**预处理完成后执行全局代码**



## 2.函数执行上下文

***在调用函数，准备执行函数之前*，创建对应的函数执行上下文对象（虚拟的，存在于栈中），再对局部数据进行预处理**

* 形参变量==>赋值(实参)==>添加为执行上下文的属性
* arguments==>赋值(实参列表)==>添加为执行上下文的属性
* var定义的全局变量==>undefined，添加执行上下文的属性
* function声明的全局函数==>赋值(fun)，添加为执行上下文的方法
* this==>赋值(调用函数的对象)

**预处理完成后执行函数体代码**

```javascript
	  function fn(a){
           console.log(a);   //2
           console.log(b);  //undefined
           c();             //c()
           console.log(this);   //window
           console.log(arguments);  //伪数组(2,3)

           var b = 11;
            function c(){
                console.log('c()');
            }
       }
       fn(2, 3);
```

