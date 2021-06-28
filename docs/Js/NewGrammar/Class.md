---
title: Class类
publish: false
---

*让对象原型的写法更加清晰，更像面向对象编程的语法*

## 1.定义

### 1.1.类的声明

```js
//类名建议大写
Class Person{}
```

>typeof 类名	//function
>
>所以：
>
>类名.prototype.`__proto__` === Object.prototype
>
>类名.`__proto__` === Function.prototype

### 1.2.内部的属性/方法

各属性/方法不用`,`隔开（注意区分对象中的写法）

```js
class Person{
    name = 'Coob'
    foo(){
        ....
    }
}
```

### 1.3.实例化对象

*与构造方法一样*

```js
let stu = new Person()
```



## 2.添加属性/方法

*在**类**中定义的**方法**会被添加到类的**显式原型**中，因而通过类创造的**实例对象**可以调用类中定义的方法*

```js
class Phone {
    name = 'Coob'
    call() {
        console.log('Calling')
    }
}
let onepluse = new Phone()
let iphone = new Phone()
onepluse.call()	//Calling
iphone.call()	//Calling
```

*在**类**中定义的**属性** (public公有属性)会被添加到类的**实例对象中**，且实例对象修改这个属性，不会影响其他实例对象*

```js
onepluse.name = 'jack'
iphone.name	//Coob
```





## 3.constructor

*类通过constructor**构建实例对象的属性/方法***

```js
class Phone {
    //构造方法,方法名固定
    constructor(brand, price) {
        this.brand = brand
        this.price = price
    }
    call() {
        console.log(this.brand, 'Calling')
    }
}
let onepluse = new Phone('1+', 5999)
onepluse.call() //1+ Calling
onepluse
```

>输出：![image-20210515095033249](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210515095033249.png)



## 4.class的特点

1. 类中定义的属性/方法**不可遍历**

2. class默认使用**严格模式**

   >**对象中的方法里的函数的this**原本指向**window**，在严格模式下指向undefined
   >
   >```js
   >function Foo() {}
   >    Foo.prototype.show = function () {
   >        function test() {
   >            console.log(this)
   >        }
   >        test()
   >}
   >let l = new Foo()
   >l.show()	//window
   >```
   >
   >```js
   >class Foo {
   >        show() {
   >            function test() {
   >                console.log(this)
   >            }
   >            test()
   >        }
   >}
   >let x = new Foo()
   >x.show()	//undefined
   >```

3. 



## 5.静态属性/方法

*静态属性/方法：直接定义在构造函数中的且只有构造函数可访问所有实例**不能访问**的属性/方法，(注意与**直接**在类中添加的属性/方法区分)*

>class定义静态属性/方法：
>
>static 属性/方法

### 5.1.静态属性

```js
class Request{
    static host = 'https://xxx.com'
	api(path){
    	return Request.host + `/${path}`
	}
}
let admin = new Request()
admin.api('admin') //https://xxx.com/admin
let list = new Request()
list.api('list')   //https://xxx.com/list
```

### 5.2.静态方法

```js
class User {
    show() {
        console.log('prototype.show')
    }
    static show() {
        console.log('static.show')
    }
}
let coob = new User()
coob.show()	//prototype.show
User.show()	//static.show
```

使用类静态方法处理商品信息数组

```js
const data = [
    { name: 'js', price: 100 },
    { name: 'nodejs', price: 211 },
    { name: 'vue', price: 333 }
]
class Lesson {
    constructor(data) {
        this.info = data
    }
    //将商品数组的每一项，创建为Lesson的实例对象
    static createBatch() {
        return data.map(item => new Lesson(item))
    }
    static total() {
        return data.reduce((t, c) => t + c.price, 0)
    }
    static maxPrice() {
        return data.reduce((t, c) => t > c.price ? t : c.price, 0)
    }
}
let Lessons = Lesson.createBatch(data)
console.log(Lesson.total()) //644
console.log(Lesson.maxPrice())  //333   
```



## 6.类的访问器

访问器返回的变量名不能与constructor中的属性**重名**

```js
class webSite{
    constructor(host){
        this.data = {}
        this.host = host
    }
    set host(path){
        if(!/^https:?\/\//i.test(path)){
            throw new Error('地址错误')
        }
        //this.host = path
        this.data.host = path
    }
    get host(){
        return this.data.host
    }
}
let xx = new webSite('https://xxx.com', 'wzz')
xx
xx.host	//https://xxx.com
```

>输出：![image-20210515192537236](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210515192537236.png)



## 7. 访问属性分类

### 7.1.protected

*protected受保护属性，类和子类可以访问外部不可访问*

#### 7.1.1.通过访问器

*属性名以`_`开头,标识私有属性*

```js
class webSite{
    _path = 'htttp://xxx.com'
    set path(path){
        if(!/^https:?\/\//i.test(path)){
            throw new Error('地址错误')
        }
        this._path = path
    }
}
let xx = new webSite()
console.log(xx) 
```

>输出：![image-20210515195707083](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210515195707083.png)
>
>此方法外部还是可以**跳过访问器**修改到_path的值
>
>```js
>xx._path = '跳过了访问器'	
>```



#### 7.1.2.Symbol定义受保护属性

**

```js
const protecteds = Symbol('受保护的对象')
class Common {
    constructor() {
        //protecteds对象定义为Symbol
        this[protecteds] = {}
        this[protecteds].path = 'https://xxx.com'
    }
    set path(path) {
        if (!/^https:?\/\//i.test(path)) {
            throw new Error('地址错误')
        }
        this[protecteds].path = path
    }
    get path() {
        return this[protecteds].path
    }
}
class User extends Common {
    constructor(name) {
        //子类需要在constructor通过super()调用父类的constructor（哪怕父类没有）
        super()
        //使用父类的对象保护name
        this[protecteds].name = name
    }
    get name() {
        return this[protecteds].name
    }
}
let x = new User('Coob')
x.path = 'https://xxxxx.com'
console.log(x.path)
console.log(x.name)
console.log(x)
```

>输出：
>
>https://xxxxx.com
>
>Coob
>
>![image-20210516104205858](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210516104205858.png)



### 7.2.public

*公有属性，类的内部外部包括其子类都可访问*

*类中直接定义的属性就是公有属性*



### 7.3.私有属性

*私有属性，只属于某一个类*

???



 

## 8.类的继承

>写法:
>
>Class 子类 extends 父类 {}



### 8.1.属性继承原理

```js
class User {
    constructor(name) {
        this.name = name
    }
}
class Admin extends User {
    constructor(name) {
        super(name)
    }
}
let Coob = new Admin('Coob')
console.dir(Coob)
```

>输出：![image-20210516135209169](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210516135209169.png)

类似于

```js
function User1(name) {
    this.name = name
}
function Admin1(name) {
    User1.call(this, name)
}
Admin1.prototype.__proto__ = User1.prototype

let jack = new Admin1('Jack')
console.dir(jack)
```

>输出：![image-20210516135229208](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210516135229208.png)



### 8.2.方法继承原理

*与原型继承一摸一样*



### 8.3.super()

*访问父类*

*写在子类constructor中可以**调用父类的constructor***

>写法：
>
>调用父类的constructor:
>
>```js
>//子类中
>constructor() {
>    	super()
>}
>```
>
>调用父类的方法：
>
>```js
>super.方法名()
>```

>注意：
>
>1. 子类声明了constructor就必须要写super()
>2. 子类中constructor的this要写在super()之前，防止父类定义同名属性覆盖子类属性(通常我们是通过子类覆盖父类)
>
>```js
>class User1 {
>    constructor(name) {
>        this.name = name
>        this.site = 'user'
>    }
>}
>class Admin1 extends User {
>    constructor(...args){
>        super(...args)
>        this.site = 'admin'
>    }
>}
>let xx = new Admin1('jack')
>xx	//Admin1 {name: "jack", site: "admin"}
>
>//等价于
>function User(name){
>    this.name = name
>    this.site = 'user'
>}
>function Admin(...args){
>    User.apply(this, args)
>    this.site = 'admin'
>}
>Admin.prototype.__proto__ = User.prototype
>
>let x = new Admin('coob')
>x	//Admin {name: "coob", site: "admin"}
>```



#### 8.3.1.原理

Class中，子类型**继承使用父方法时**，父方法的`this`指向的不是父类型而是**当前子类型**

通过call方法改变父方法的this，不可使用多层继承

```js
let person = {
    show() {
        console.log(this)
        console.log('person.show()')
    }
}

let user = {
    name: 'user.Coob',
    __proto__: person, 
    show() {
        //this.__proto__.show.call(this)
        super.show()
        console.log('User.show()')
    }
}
let admin = {
    name: 'admin.Coob',
    __proto__: user,
    show() {
        // 将父方法show()的this指向子类型,并调用父类的show()
        //this.__proto__.show.call(this)
        super.show()
        console.log('Admin.show()')
    }
}
admin.show() 
```

>解析：
>
>如果使用call方法改变父方法的this指向admin的show()会死循环
>
>user的show()的this指向了admin。因此user改变personshow()方法this的指向时，this还是指向admin
>
>输出：![image-20210519141742022](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210519141742022.png)

等价于

```js
class Person {
    show() {
        console.log(this)
        console.log('Person.show()')
    }
}
class User extends Person{
    show() {
        super.show()
        console.log('User.show()')
    }
}
class Admin extends User {
    constructor(name) {
        super()
        this.name = name
    }
    show() {
        // 调用父方法,该方法的this指向子类型
        super.show()
        console.log('Admin.show()')
    }
}
let Coob = new Admin('Coob')
Coob.show()
```

>输出：![image-20210519141742022](E:/Typora的工作文件夹/JavaScript/ES6/图片/image-20210519141742022.png)



### 8.4.方法重写

*将父类的方法在子类重新编写，从而覆盖掉父类的方法*

```js
const data = [
    { name: 'js', price: 100 },
    { name: 'nodejs', price: 211 },
    { name: 'vue', price: 333 }
]
class Common {
    sum() {
        return this.data.reduce((t, c) => t + c.price, 0)
    }
    //返回name中包含指定关键字的信息
    getByKey(key) {
        return this.data.filter(item => item.name.includes(key))
    }
}
class Lesson extends Common {
    constructor(data) {
        super()
        this.data = data
    }
    info() {
        return {
            totalPrice: super.sum(),
            info: this.data
        }
    }
    //重写getBykey获取包含指定关键字信息的name
    getByKey(key) {
        return super.getByKey(key).map(item => item.name)
    }
}
let xx = new Lesson(data)
xx.info()
xx.getByKey('js')
```

>输出：![image-20210519152857558](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210519152857558.png)



### 8.5.内置类的继承

*继承js内置的类(Array, Function, String........)*

```js
class Arr extends Array{
    // constructor(...args){
    //     super(...args)
    // }
    first(){
        return this[0]
    }
    max(){
        return this.sort((a, b) => b - a)[0]
    }
}
let a = new Arr(23, 323, 2, 22, 113, 34)
console.log(a.first())  //23
console.log(a.max())    //323
```

等价于

```js
function Arr(...args){
    //将传入的参数，压入数组
    args.forEach(itme => this.push(itme))
    this.first = function(){
        return this[0]
    }
    this.max = function(){
        return this.sort((a, b) => b - a)[0]
    }
}
//将新建的父级指向Array原型的对象赋值给Arr的原型,Arr的实例就可以使用数组的方法
Arr.prototype = Object.create(Array.prototype)
let a = new Arr(23, 323, 2, 22, 113, 34)
console.log(a.first())  //23
console.log(a.max())    //323
```



## 9.类的mixin混合模式

```js
const data = [
    { name: 'js', price: 100, click: 232 },
    { name: 'nodejs', price: 211, click: 78 },
    { name: 'vue', price: 333, click: 29 }
]
let Tool = {
    max(key){
        return this.data.sort((a, b) =>b[key] - a[key])[0]
    }
}
let Arr = {
    count(key) {
        return this.data.reduce((t, c) => t + c[key], 0)
    }
}
class Lesson {
    constructor(data) {
        this.Lesson = data
    }
    get data() {
        return this.Lesson
    }
}
Object.assign(Lesson.prototype, Tool, Arr)
let xx = new Lesson(data)
console.log(xx.count('price'))	//644
console.log(xx.max('price'))	//{name: "vue", price: 333, click: 29}
```







## 10.对比原型

### 10.1.原型写法

```js
//手机构造函数
function Phone(brand, price){
    this.brand = brand
    this.price = price
}
//添加方法
Phone.prototype.call = ()=>{
    console.log('calling')
}
//实例化对象
let Xiaomi = new Phone('xiaomi', 2499);
Xiaomi.call()
console.log(Xiaomi)
```

### 10.2.Class类写法

```js
//class
class Phone{
    //构造方法,方法名固定
    constructor(brand, price){
        this.brand = brand
        this.price = price
    }
    //方法只能使用该语法，不能使用对象完整形式
    call(){
        console.log('Calling')
    }
}
let onepluse = new Phone('1+',5999)
onepluse.call()
console.log(onepluse)
```





## 11.例子

### 11.1.class定义访问器

```js
"user strict"
const DATA = Symbol()
class User {
    constructor(name, age){
        this[DATA] = {name, age}
    }
    get name() {
        return this[DATA].name
    }
    set name(value) {
        if(value.trim() === '' || value.length > 20) {
            throw new Error('用户不能为空且小于20个字符')
        }
        this[DATA].name = value
    }
    get age() {
        return this[DATA].age
    }
    set age(value) {
        if(typeof value !== 'number' || value <= 0 || value >= 110){
            throw new Error('输入的年龄有误')
        }
        this[DATA].age = value
    }
}
let Coob = new User('Coob', 21)
Coob.name = 'Coob sj'
Coob.age = 12
Coob
```

>输出：![image-20210507103729341](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210507103729341.png)

