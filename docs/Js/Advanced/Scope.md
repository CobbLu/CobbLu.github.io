---
title: 作用域
publish: false
---

*ES5之前只有function有块级作用域，if和for都是没有的；必须借助function作用域来应对外部变量的问题*

*拥有块级作用域的let可以解决外部变量问题*

## 全局

*定义的**全局变量**可被局部作用域使用且不会被回收*



## 局部

*定义的**局部变量**只能被当前局部作用域使用且如果是函数当调用完成后变量会被清除*



## 块级

*`for`,`for in`, `for of`都是块级作用域*

```js
{
    let/const a = 1
}
console.log(a)	//a is not defined
```

*注：var没有块级作用域，在块级作用域使用var会当作**全局变量***

```js
{
    var a = 1
}
console.log(a)	//1
```

### for循环的应用

*注意var没有块级作用域这一点*

```js
//for中的var相当于全局定义了i变量
for(var i = 1; i <= 3; i++){
    console.log(i)	//1 2 3
}
console.log(window.i)	//4

for(let j = 1; j<=3; j++){
    console.log(j)	//1 2 3
}
```

for中嵌套setTimeout()

```js
for(var i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(i)      //4 4 4      
    }, 1000)
}
//立即实行函数(产生块级)接收
for(var k = 1; k <= 3; k++) {
    (function(a){
        setTimeout(() => {
            console.log(a)      //1 2 3 
        }, 1000)
    })(k)
}
//let
for(let j = 1; j <= 3; j++) {
    setTimeout(() => {
        console.log(j)      //1 2 3      
    }, 1000)
}
```

>解析：
>
>(1)由于var没有块级作用域，setTimeout()向外寻找i变量时全局的var已经循环结束了
>
>![image-20210502110641996](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210502110641996.png)
>
>(2)将全局变量k通过立即执行函数的a接收保存
>
>![image-20210502112322246](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210502112322246.png)
>
>(3)let存在块级作用域，setTimeout()向外寻找到块级的i，不会找到全局去；**for循环执行一次就会产生一个新的块级作用域**，每个作用域下包含一个setTimeout()
>
>![image-20210502105352616](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210502105352616.png)
>
>

## 例题

### 1.1.

*点击按钮获取其对应下标*

```html
<button>1</button>
<button>2</button>
<button>3</button>
```

```js
let btns = document.getElementsByTagName('button')
//用var定义变量i，i在每次调用修改时，其前面已经循环过的i也会被修改，以至于在循环结束后点击每一个按钮其值都是退出循环时的i值
for(var i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function(){
        console.log('第'+ (i+1) + '个按钮被点击')
    })
}

//通过闭包解决外部函数问题
// for(var i = 0; i < btns.length; i++){
//   (function(num){
//     btns[i].addEventListener('click', function(){
//       console.log('第'+ (num+1) + '个按钮被点击')
//     })
//   })(i)
// }

//通过let解决外部函数问题
// for(let i = 0; i < btns.length; i++){
//   btns[i].addEventListener('click', function(){
//     console.log('第'+ (i+1) + '个按钮被点击')
//   })
// }
```


### 1.2.

```javascript
var x = 10;
       function fn(){
           console.log(x);
       }
       function show(f){	//可以用函数作为形参
           var x = 20;
           f();
       }
       show(fn);//10	
```

### 1.3.

```javascript
var fn = function(){
           console.log(fn);
       }
       fn();    //function fn()

       var obj = {
           fn2:function(){
               //console.log(fn2);    //fn2 is not defined
               console.log(this.fn2); //function fn2()
           }
       }
       obj.fn2();
```

解析

>fn2:function{}的作用域中找不到fun2定义的函数，因而转到全局作用域，然而全局作用域也没有=>fn2 is not defined
>
>this.fn2使得this的值变为obj，obj中有fn2定义的函数=>function fn2()

