---
title: 执行上下文栈
publish: false
---

![image-20210227140936775](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210227140936775.png)

```javascript
	<script>
       var a = 10;              //1.进入全局执行上下文
       var fun1 = function(x){
           var b = 5;
           fun2(x + b);         //3.进入fun2执行上下文          
       }
       var fun2 = function(y){
           var c = 5;
           console.log(a + c + y);
       }
       fun1(10);//30            //2.进入fun1执行上下文  
    </script>
```

* 在全局代码执行前，js引擎就会创建一个栈来存储管理所有的执行上下文
* 在全局执行上下文(window)确定后，将其添加到栈中
* 在函数执行上下文创建后，将其添加到栈中
* 在当前函数执行完成后，将栈顶的对象移除
* 所有的代码执行完后，栈中只剩下window![图像 1](https://gitee.com/bad_morty/cblog-images/raw/master/img/%E5%9B%BE%E5%83%8F%201.png)

## 1.例题

### 1.1.递归调用

```javascript
console.log('gb' + i);
    var i = 1;
    fun(1);
    function fun(i){
        if(i == 4){
            return;
        }
        console.log('fb:' + i);
        fun(i + 1);
        console.log('fe:' + i);
    }  
console.log('ge' + i);
```

#### ![image-20210227142309253](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210227142309253.png)

**原理：**

一共五个执行上下文

![image-20210227143722005](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210227143722005.png)

