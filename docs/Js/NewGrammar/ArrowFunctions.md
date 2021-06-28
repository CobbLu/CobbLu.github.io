---
title: 箭头函数
publish: false
---

*ES6允许使用`=>`定义函数*

```js
let fn = function(a, b){}
/*箭头函数*/
let fn = (a, b) =>{  
}
```


## 1.this是静态的

*this是**静态的**，this始终指向函数声明时**所在作用域下**的this的值*

父级作用域的this

```js
function getName(){
    console.log(this.name);
}

let getName2 = () =>{
    console.log(this.name);
}

/*设置window对象的name属性*/
window.name = "Coob";
const firstname = {
    name: "王大翠"
}

/*直接调用*/
getName();		//Coob,getName()中没有this.name的定义，找到外层的window.name
getName2();		//Coob,getName2()箭头函数,始终指向外一层的name也就是window.name

/*call方法调用*/
getName.call(firstname);//王大翠
getName2.call(firstname);//Coob
```



## 2.不能作为构造函数实例化对象

```js
let Person = (name, age) => {
    this.name = name;
    this.age = age;
}
let me = new Person("xiao", 13);
console.log(me);	//Person is not a constructor
```



## 3.不能使用arguments变量

```js
let fn = () => {
    console.log(arguments);
}
fn(1, 2, 3);	//arguments is not defined
```



## 4.箭头函数的简写

(1)省略小括号，当**形参有且只有一个的时候**

```js
let add = n => {
    return n + n;
}
console.log(add(9));//18
```

(2)省略花括号，当代码体只有一条语句的时候，此时return必须省略，且语句的执行结果就是函数的返回值

```js
let pow = n => n * n;
console.log(pow(8));//64
```



## 5.箭头函数实例

(1)点击div 2s 后颜色变为红色

```js
//(使用普通函数写法)
let ad = document.getElementById('ad');
//绑定事件
ad.addEventListener("click", function(){
    //保存this的值，此时的this在addEvent中指向的是ad
    let _this = this;
    //定时器
    setTimeout(function(){
        //修改背景颜色 this
        //console.log(this);  //setTimeout中的this指向window
        //this.style.background = 'red';    //window无style方法，error

        _this.style.background = 'red';//_this在定时器中找不到定义，因而出到外层找到addEvent下的_this,此时_this指向的是ad
    }, 2000);
});
```

```js
//(箭头函数写法)
let ad = document.getElementById('ad');
//绑定事件
ad.addEventListener("click", function(){
    //定时器
    //箭头函数的this是静态的，始终指向声明时所在作用域下的this的值（可以理解为向外一层的this），也就是addEvent中的this的值（ad）
    setTimeout(() => {
        this.style.background = 'red';
    }, 2000);
});
```



（2）从数组中返回偶数的元素

```js
//(使用普通函数写法)
const arr = [1, 6, 9, 10, 100, 25];
const result = arr.filter(function(item){
    if(item % 2 === 0){
        return true;
    }
});
console.log(result);    //[6, 10, 100]
```

```js
//(箭头函数写法)
const arr = [1, 6, 9, 10, 100, 25];
const result = arr.filter(item => item % 2 === 0);
console.log(result);	//[6, 10, 100]
```

小结：箭头函数适合与this无关的回调。 定时器，数组的方法回调

​			箭头函数不适合与this有关的回调。 事件回调，对象的方法

