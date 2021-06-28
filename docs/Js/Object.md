---
title: 对象
publish: false
---

*Object属于一种**引用数据类型**，String Number……属于基本数据类型*

### 1.对象的分类

* 内建对象：由ES标准定义，如Math String Number Boolean

* 宿主对象：由JS运行环境提供，如 BOM DOM

* 自建对象：自己搞出来的

  

### 2.对象的操作

#### 2.1.创建对象

##### 2.1.1.Object构造函数

选创建空Object对象，再动态添加属性/方法。适用于起始时不确定对象内部数据的情况

（使用new关键字调用的函数,是构造函数constructor。构造函数是用来创建对象的函数）

```js
var obj = new Object();
/*ES6语法糖*/
//let obj = Object();
obj.name = 'Tom';
obj.age = 12;
obj.setName = function(name){
    this.name = name;
}
```

弊端：语句太多



##### 2.1.2.对象字面量

*使用对象字面量创建对象*

```js
let obj = {};
/*使用对象字面量，可以在创建对象时，直接指定对象中的属性*/
/*{属性名:属性值,属性名:属性值,……};*/
let obj2 = {
       "name":"Coob",			/*属性名可以加引号也可省略*/
        age:19,
        setname:function(name){
              this.name = name;
        },
        test:{name:"jacky"}
};
obj2.setname('xixi');
console.log(obj2.name);
```

弊端：如果创建多个对象，有重复代码



##### 2.1.3.工厂模式

*通过构造方法动态创建对象并**返回创建的新对象**（工厂模式）*

```js
function CreatePerson(name, age, gender) {
    return {
        name,age,gender,
        show: function(){
            console.log(this.name)
        } 
    }
}
let obj1 = CreatePerson("Coob", 21, "male");
obj1.show()	//Coob
obj1	//{name: "Coob", age: 21, gender: "male", show: ƒ}
```

弊端：所创建的对象都是Object类型，导致**无法区分多种不同类型的对象**



##### 2.1.4.构造函数模式

创建构造函数(建议**首字母大写**)，专门用来创建不同的对象

**构造函数需要用new关键字调用，普通函数直接调**

*构造函数的执行流程：*

1. 立即创建一个新的对象
2. 将新建的对象设置为函数的this,在构造函数中可以用this来引用新建的对象
3. 逐行执行函数中的代码

4. 将新建的对象作为返回值返回

```js
/*写法1----------------------------------------------------*/
function Person(name , age){
    this.name = name;
    this.age = age;
    this.sayName = function(){
        alert(this.name);
    };
}
/*写法2----------------------------------------------------*/
function Person(name , age){
    this.name = name;
    this.age = age;
    this.sayName = fun;
}
/*将函数写在全局作用域中不安全,此写法也有缺陷*/
function fun(){
    alert(this.name);
}
/*写法3----------------------------------------------------*/
function Person(name, age){
    this.name = name;
    this.age = age;
}
/*将实例共有函数写在原型中*/
Person.prototype.sayName = functino(){
    alert(this.name);
}
/*------------------------------------------------------------*/
function Dog(){}
/*per1叫做Person类的实例*/
let per1 = new Person("杰斯", 66);/*构造函数Person*/
let per2 = new Person("查理", 16);
let dog1 = new Dog();
console.log(per1);
console.log(dog1);
/*instanceof判断实例是否属于类*/
console.log(per1 instanceof Person);	/*true*/
console.log(dog1 instanceof Person);	/*false*/
console.log(per2 instanceof Object);	/*true*/
```



#### 2.2.向对象添加属性

>对象.属性名 = 属性值

注：属性名不强制遵守标识符规范，且属性值可是任意数据类型包括对象

*使用特殊的属性名*:对象["属性名"] = 属性值

```JS
obj["123"] = 1;
obj["123"]	//1
/*读取时引号也要带上*/
```



#### 2.3.读取对象中的属性

>对象.属性名
>
>对象["属性名"]

注：读取对象中没有的属性，返回undefined



#### 2.4.修改对象的属性值

>对象.属性名 = 新值



#### 2.5.删除对象的属性

>delete 对象.属性名



#### 2.6.打印对象

console.log()打印对象时，实际上是输出对象的toString()方法的返回值(以前是)，现在是直接输出对象中的属性和属性值

```js
function  Person(name, age){
	this.name = name;
    this.age = age;
}
let per = new Person("阿米娅", 44);
console.log(per);				//Person {name: "阿米娅", age: 44}
console.log(per.toString());	 //[object Object]
```



#### 2.7.检查

##### 2.7.1.in

*使用**in检查对象中是否有某个属性**时，如果对象中没有但是**原型有**，也会返回true*

>'属性/方法名' in 实例

```js
function MyClass(){}
MyClass.prototype.a = 123;
let mc = new MyClass();
console.log("a" in mc);				/*true*/
```

##### 2.7.2.hasOwnProperty()

*使用对象的**hasOwnProperty()来检查对象自身是否有该属性**,**只有对象自身含有**属性，才会返回true*

>实例.hasOwnProperty('属性/方法名')

```js
function MyClass(){}
MyClass.prototype.a = 123;
let mc = new MyClass();
console.log(mc.hasOwnProperty("a"));	/*false*/
```

##### 2.7.3.isPrototypeOf()

*检测一个对象是否存在于另一个对象的原型链中，返回一个boolean值*

>obj1.isPrototypeOf(obj2)
>
>obj2是否在obj1的原型链中



#### 2.8.遍历对象

##### 2.8.1.for.....in.....

```js
let user = {
    name: 'coob',
    age: '21',
    getName() {
        console.log(this.name)
    }
}
for (const i in user) {
    console.log(user[i])
}
```

>**注意：**对象调用遍历项`i`时要用`[]`的写法**(值)**，i是**键名**
>
>输出：
>
>coob
>21
>ƒ getName() {
>console.log(this.name)
>}



##### 2.8.2.for.....of.....

*直接使用for of遍历对象会报错，要借助对象的entries()函数*

```js
for(const i of user){
    console.log(user[i])	//user is not iterable
}
```

```js
for(const [keys, values] of Object.entries(user)){
    console.log(keys, values)
}
```

>输出：
>
>name coob
>age 21
>getName ƒ getName() {
>                		console.log(this.name)
>           	 }







#### 2.9.拷贝

##### 2.9.1.浅拷贝

*拷贝后的对象的修改**不会影响被拷贝的对象***

*扩展运算符*

```js
let info = { name: 'Coob', age: 21 }
let info1 = {...info}
info1.name = 'jack'
info//{name: "Coob", age: 21}
info1//{name: "jack", age: 21}
```

*Object.assign()*

```js
let info1 = Object.assign({}, info)
info1//{name: "jack", age: 21}
```

*遍历*

```js
let info1 = {}
for(const key in info){
    info1[key] = info[key]
}
```



#####  2.9.2.深拷贝

当**对象中包含对象**时，通过浅拷贝会将**对象中的地址值**复制给拷贝后的对象。此时**新旧对象里的对象共用一个地址值**，所以修改时会一起改变

```js
let info = {
    name: 'Coob', age: 21,
    learnlist: {
        lesson: 'JS',
        time: '2h'
    }
}
let info1 = { ...info }
info1.learnlist.lesson = 'vue'
info
info1
```

>输出：
>
>![image-20210506161157742](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210506161157742.png)

*深拷贝可以解决上述问题，浅拷贝只复制一层对象的属性，而深拷贝则**递归拷贝了所有层级***

**实现深拷贝**(支持对象中含有对象/数组)

```js
let info = {
    name: 'Coob', age: 21,
    learnlist: {
        lesson: 'JS',
        time: '2h'
    },
    arr: []
}
function copy(obj) {
    //判断是数组还是对象
    let res = obj instanceof Array ? [] : {}
    // 解构遍历键，值
    for(const[key, value] of Object.entries(obj)){
        //递归：如果属性是对象(数组也是对象)则递归，不是则浅拷贝
        res[key] = typeof value === 'object' ? copy(value) : value
    }
    return res
}
let info1 = copy(info)
info1.learnlist.lesson = 'Vue'
info1.arr.push('1')
info
info1
```

>输出：
>
>![image-20210506163825227](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210506163825227.png)



#### 2.10.方法

*Object的一些方法*



##### 2.10.1.keys()/values()

*读取对象里的所有**键名/值**,以**数组**形式返回*

>Obejct.keys(对象实例)
>
>Object.values(对象实例)

```js
let msg = {
    name: 'Coob',
    age: 21
}
Object.keys(msg)
Object.values(msg)
```

>输出：
>
>![image-20210506151531642](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210506151531642.png)



##### 2.10.2.*assign()*

*使用一个/多个新的对象(sources)的值覆盖旧有对象(target)*

>Object.assign(target, ...sources)

```js
var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, target对象自身会被修改
```

避免o1被改变

```js
var obj = Object.assign({},o1,o2,o3);//给一个空对象作为target，这样改变的是空对象
console.log(obj);// { a: 1, b: 2, c: 3 }
console.log(o1); // { a: 1}
```



##### 2.10.3.entries()

*返回一个给定对象自身可枚举属性的**键数组**和**值数组***

>Object.entries(可枚举属性的键值对的对象)

```js
let obj = {
    name: 'Coob',
    age: 21
}
Object.entries(obj)
```

>输出：（先keys后values）
>
>![image-20210506170440771](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210506170440771.png)



##### 2.10.4.getPrototypeOf()

*获取当前对象的原型*

>Object.getPrototypeOf(对象)

```js
let foo = {}
Object.getPrototypeOf(foo)
```

>输出：![image-20210507161850038](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210507161850038.png)
>



##### 2.10.5.create()

*创建一个新对象，使用现有的对象来提供新创建的对象的`__proto__`*

>Object.create(proto，[propertiesObject])
>
>proto: 新创建对象的原型对象(可以设置为null)
>
>propertiesObject: 参照`Object.defineProperties()`的第二个参数，第二个参数可以为空

```js
let foo = {
    name: '我自己'
}
let foo1 = Object.create(foo, {
    name: {
        value: 'Coob'
    }
})
foo1
```

>输出：![image-20210508093317275](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210508093317275.png)



##### 2.10.6.setPrototypeOf()

*设置对象的原型*

>Object.setPrototypeOf(当前对象，原型对象)

```js
let foo = {name: 'Coob'}
let parent = {name: 'JacKey'}
Object.setPrototypeOf(foo, parent)
foo
```

>输出：![image-20210507173611869](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210507173611869.png)







### 3.基本数据类型与引用数据类型

* 基本数据类型的值直接存储在栈内存中，且值与值是独立存在，修改一个变量不会影响其他变量

  ```JS
  let a = 123；
  let b = a；
  a--;					//a = 122; b = 123
  ```

  | 栈内存 |      |
  | ------ | :--: |
  | 变量   |  值  |
  | a      | 122  |
  | b      | 123  |
  |        |      |

* 对象保存在堆内存中，变量保存的是对象的内存地址（对象的引用）

  *n个引用变量指向同一个对象，通过一个变量修改对象内部数据，其他所有变量看到的是修改后的数据*

  eg1：![对象的存储](https://gitee.com/bad_morty/cblog-images/raw/master/img/%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%AD%98%E5%82%A8.png)
  
  简单来说，如果一个对象A的值赋给对象B。修改任意一个对象的属性值，AB中相应的属性值一起改变；
  
  注：对象之间的比较的是内存地址
  
  
  
  


### 4.原型对象

#### 4.1.概念

创建的每一个函数，解析器都会向函数中添加一个`prototype`属性这个属性对应着一个对象，这个对象就是原型对象



#### 4.2.特点

（1）当函数以构造函数调用时，它所创建的对象中都会有一个隐含的属性，指向该构造函数的原型对象。被创建的对象，可以通过`__proto__`来访问该属性

（2）当访问对象的一个属性或方法时，它会**优先在对象自身**中寻找，如果有则直接使用，没有则到原型对象中寻找

（3）原型对象相当于一个**公共区域**，所有同一个类的实例都可以访问到这个原型对象，可将对象中的共有的内容，统一放置到原型对象中

```js
function MyClass(){ 
}
/*将构造函数中的方法写入原型对象中，解决了构造函数中的方法写在全局作用域中的安全问题*/
MyClass.prototype.sayHello = function (){
    alert("Hello");
}
MyClass.prototype.a = 123;
let mc = new MyClass();
let mc2 = new MyClass();
mc.a = '我是mc中的a';
console.log(mc.__proto__ === MyClass.prototype);   /*true*/
console.log(mc.a);//我是mc中的a
console.log(mc2.a);//123
mc.sayHello();//Hello
```

![原型对象](https://gitee.com/bad_morty/cblog-images/raw/master/img/%E5%8E%9F%E5%9E%8B%E5%AF%B9%E8%B1%A1.png)



#### construct

*在原型中指回当前构造方法*

*改变原型指向时，**construct要重新指向回当前对象***

```js
function User(name) {
    this.name = name 
}
//原型赋值给了一个对象添加多个属性/方法(原型指向改变了)
User.prototype = {
    //construct要重新指向回当前对象
    constructor: User,
    show() {
        console.log(this.name)
    }
}
let Coob = new User.prototype.constructor('Coob')
Coob.show() //Coob
```

```js
//追加一个方法，此时原型的指向没有改变
User.prototype.show = function(){
    console.log(this.name)
}
let Coob = new User.prototype.constructor('Coob')
Coob.show() //Coob
```

*禁止construct遍历*



#### 4.3.原型链

原型对象也是对象，所以它也有原型

当使用一个对象的方法或属性时，寻找路径是从里到外的：

**自身=>隐式原型=>原型的原型=>……=>Object(如果在Object还没有找到，则返回undefind)**

```js
function Foo(){}
let fo = new Foo()
Foo.prototype.test = function() {
    console.log('test()')
}
fo.test()   //test()
```

>解析:![Foo原型链](https://gitee.com/bad_morty/cblog-images/raw/master/img/Foo%E5%8E%9F%E5%9E%8B%E9%93%BE.png)

##### 4.3.1.原型链属性问题

* **读取**对象的属性值时：会自动到原型链中查找

* **设置对象的属性值时**：不会查找原型链，如果当前对象中没有此属性，直接添加此属性并设置其值

  ```js
  function Fn(){};
  Fn.prototype.a = '123';
  var fn1 = new Fn();
  console.log(fn1.a, fn1);//123 Object{}
  
  var fn2 = new Fn();         
  fn2.a = '456';              
  console.log(fn2.a, fn2);//456 Object{a:'456'}
  ```

* 方法一般定义在原型中，属性一般通过构造函数定义在对象本身上

  ```js
  function Person(name, age){
      this.name = name;
      this.age = age;
  }
  Person.prototype.setName = function(name){  //方法一般定义在原型中
      this.name = name;
  }
  var p1 = new Person('Mike', 14);        //属性一般通过构造函数定义在对象本身上
  p1.setName('Coob');
  console.log(p1);
  
  var p2 = new Person("wdc", 19);
  p2.setName('aric');
  console.log(p2);
  
  console.log(p1.__proto__ === p2.__proto__);//true
  ```



##### 4.3.2.原型链继承

>继承的特点：
>
>1. **父级及以上(祖宗)不可使用子级的变量/方法**
>2. *子级可以使用/重写父级的方法*
>3. *原型的继承，不是改变构造函数的原型*

###### 4.3.2.1.实例对象

*关键：**子类型的显式原型**作为父类型的一个**实例对象***

```js
function Supper() {
    this.sup = 'Supper property';
}
Supper.prototype.showSupper = function () {
    console.log(this.sup);
}
function Sub() {
    this.sub = 'Sub property';
}

//将子类型的显式原型作为父类型的一个实例对象
Sub.prototype = new Supper();

//让子类型的原型的constructor指向子类型(如果不加此行，Sub.prototype.constructor会指向Supper)
Sub.prototype.constructor = Sub;

Sub.prototype.showSub = function () {
    console.log(this.sub);
}

var sub = new Sub();
var supper = new Supper();

sub.showSupper()
console.log(sub.sup)
supper.showSub()
console.log(supper.sub)
```

>输出：
>
>Supper property
>Supper property
>supper.showSub is not a function
>undefined
>
>解析：
>
>![原型链继承](https://gitee.com/bad_morty/cblog-images/raw/master/img/%E5%8E%9F%E5%9E%8B%E9%93%BE%E7%BB%A7%E6%89%BF.png)
>
>注意：虽然将子类型的显式原型作为父类型的一个实例对象，但是父类型的**新创建的实例对象**与子类型绑定的**实例地址不同**所以还是不能访问到showSub()



###### 4.3.2.2.setPrototypeOf

*通过setPrototype()方法实现继承*

```js
let a = { name: 'a' }
let c = { name: 'c' }
let b = {
    name: 'b',
    show() {
        console.log(this.name)
    }
}
//将b变为a的父级
Object.setPrototypeOf(a, b)
//将a变为c的父级,b变成了a的爷爷
Object.setPrototypeOf(c, a)
c.show()	//a
```

>解析：![setPrototype()方法实现继承](https://gitee.com/bad_morty/cblog-images/raw/master/img/setPrototype()%E6%96%B9%E6%B3%95%E5%AE%9E%E7%8E%B0%E7%BB%A7%E6%89%BF.png)



###### 4.3.2.3.混合继承

*（原型链继承+借用构造函数继承）*

```js
function Person(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype.setName = function(name){
    this.name = name;
}

function Student(name, age, price){
    Person.call(this, name, age)//相当于：this.Person(name, age)
    /*this.name = name, this.age = age*/
    this.price = price;
}

Student.prototype = new Person();
Student.prototype.constructor = Student;

Student.prototype.setPrice = function(price){
    this.price = price;
}
var s = new Student('tom', 20, '20k');
s.setName('coob');
s.setPrice('25k')
console.log(s.name, s.age, s.price);
```



###### 4.3.2.4.构造函数的原型的原型

*使用子类型构造函数的原型(显)的原型(隐)指向父类型构造函数的原型*

```js
function User() {}
function Admin() {}

User.prototype.name = function() {
    console.log('User.name')
}

Admin.prototype.role = function() {
    console.log('Admin.role')
}

//法一
//将Admin原型的原型(Object.prototype)指向User.prototype
Admin.prototype.__proto__ = User.prototype
let ad = new Admin()
ad.name()	//User.name
ad.role()	//Admin.role
```

>解析：![image-20210511103154409](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210511103154409.png)
>
>

```js
//法二
//create创建一个父级为当前父级的对象，再让其赋值给子级的原型
function User() {}
function Admin() {}
User.prototype.name = function() {
    console.log('User.name')
}

Admin.prototype = Object.create(User.prototype)
Admin.prototype.constructor = Admin

//此时在Admin.prototype添加属性/方法必须在create之后，否则会添加到旧的Admin.prototype上
Admin.prototype.role = function() {
    console.log('Admin.role')
}

let ad = new Admin()
ad.name()
ad.role()
```

>解析：![image-20210511103109058](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210511103109058.png)
>
>弊端：此方法改变子类型构造函数原型指向之前，**创建子类型实例**或在**原型中添加方法**都会添加到**旧的原型中**



###### 4.3.2.5.原型工厂封装继承

```js
function extend(sub, sup) {
    sub.prototype.__proto__ = sup.prototype
    Object.defineProperty(sub.prototype, 'constructor', {
        enumerable: false
    })
}
function User(name, age) {
    this.name = name
    this.age = age
}
User.prototype.show = function(){
    console.log(this.name, this.age)
}

function Admin(...args){
    //此处的this为Admin的实例
    User.apply(this, args)
}

extend(Admin, User)
let xj = new Admin('新建', 21)
xj.show()//新建 21
```



###### 4.3.2.6.对象工厂继承

*对象工厂派生对象实现继承*

```js
function User(name, age) {
    this.name = name
    this.age = age
}
User.prototype.show = function(){
    console.log(this.name, this.age)
}
function admin(...args){
    const instance = Object.create(User.prototype)
    User.apply(instance, args)
    return instance
}
let xj = admin('新建', 23)
xj.show()//新建 23
```



##### 4.3.3.多继承

*js不支持多继承*

>如果实现一个对象使用多个构造函数的方法？
>
>1. 为对象的最外一层父级继续添加父级（不推荐）
>2. 将创建好的**对象(存放方法或属性)**通过**Object.assign**添加到构造函数原型中(mixin实现多继承)

###### 4.3.3.1.mixin实现多继承

```js
function User(name, age) {
    this.name = name
    this.age = age
}
User.prototype.show = function(){
    console.log(this.name, this.age)
}

//Admin和Member继承User
function Admin(name, age){
    User.call(this, name, age)
}
Admin.prototype.__proto__ = User.prototype

function Member(name, age){
    User.call(this, name, age)
}
Member.prototype.__proto__ = User.prototype

//创建对象存放方法/属性
const Request = {
    ajax(){
        console.log('ajax')
    }
}

const Current = {
    total(){
        console.log('total')
    }
}

const Address = {
    getAddress(){
        console.log('getAddress')
    }
}

//将对象中的属性/方法添加到显式原型中
Admin.prototype = Object.assign(Admin.prototype, Request, Current)
Member.prototype = Object.assign(Member.prototype, Address)

let ad = new Admin('新建', 23)
let me = new Member('张', 21)
ad.ajax()
ad.total()
me.getAddress()
me.ajax()//error
```



###### 4.3.3.2.对象访问其他对象数据

*通过改变对象**隐式原型**访问(继承)其他对象*

>super关键字等于当前对象的隐式原型
>
>super === this.`__proto__`

```js
const Request = {
    ajax(){
        console.log('ajax')
    },
    count: 7
}                                                       

const Current = {
    //将Current对象的原型指向Request对象
    __proto__: Request,
    total(){
        //super === this.__proto__ === Current.__proto__
        console.log('total' + super.count)
    }
}
......
ad.total()//total17
```





##### 4.3.4.各类型的原型链

```js
let obj = {}	//let obj = new Object

let arr = []	//let arr = new Array

function foo(){}	//let foo = new Function

let boolean = true	//let boolean = new Boolean
```

>`->`代表左边式子调用`__prototype__`
>
>obj.`__proto__`  === Object.prototype -> null
>
>arr.`__proto__` === Array.prototype -> Object.prototype -> null
>
>foo.`__proto__` === Function.prototype -> Object.prototype -> null
>
>boolean.`__proto__` === Boolean.prototype -> Object.prototype -> null
>
>.........
>
>由此可知
>
>1. **任意类型的构造函数都是object的实例**
>2. **实例的隐式原型`__proto__`均指向构造其本身的构造函数的显式原型`prototype`**	





#### 4.4.图解原型

*____proto____隐式原型(属性)和prototype显式原型（属性）*

**实例的隐式原型`__proto__`均指向构造其本身的构造函数的显式原型prototype**

![prototype和_proto_](https://gitee.com/bad_morty/cblog-images/raw/master/img/prototype%E5%92%8C_proto_.jpg)

>解析：
>
>1. 构造函数Foo()
>     构造函数的原型属性Foo.prototype指向了原型对象，在原型对象里有共有的方法，所有构造函数声明的实例（这里是f1，f2）都可以共享这个方法
>2. 原型对象Foo.prototype
>     Foo.prototype保存着实例共享的方法，有一个指针`constructor`指回构造函数。
>3. 实例
>     f1和f2是Foo这个对象的两个实例，这两个对象也有属性`__proto__`，指向构造函数的原型对象，这样子就可以像上面1所说的访问原型对象的所有方法
>4. 另外：
>     构造函数Foo()除了是方法，也是对象，它也有`__proto__`属性，指向谁呢？
>     指向它的构造函数的原型对象。函数的构造函数不就是Function嘛，因此这里的`__proto__`指向了Function.prototype。
>     其实除了Foo()，Function(), Object()也是一样的道理。
>5. 原型对象也是对象，它的`__proto__`属性，又指向谁呢？
>     同理，指向它的构造函数的原型对象呗。这里是Object.prototype
>6. 最后，Object.prototype的`__proto__`属性指向`null`

**总结**
1.对象有属性`__proto__`,指向该对象的构造函数的原型对象

```js
let arr = []
arr.__proto__ === Array.prototype	//true

let reg = /a/i
reg.__proto__ === RegExp.prototype	//true

let str = ""
str.__proto__ === String.prototype 	//true
```

2.方法除了有属性`__proto__`,还有属性`prototype`，`prototype`指向该方法的原型对象。

3.所有函数的`__proto__`都是一样的    

```js
function Fn(){};        //内部语句：this.prototype = {};
console.log(Fn.prototype);  //指向一个空的Object对象
var fn = new Fn();      //内部语句：this.__proto__ = Fn.prototype
console.log(fn.__proto__);
console.log(Fn.prototype === fn.__proto__); //true
//给原型添加方法
Fn.prototype.test = function(){
    console.log('ggg');
}
fn.test();       //实例中没有test方法，因此找到原型对象的test
```



#### 4.5.多态

*根据不同的状态相应不同的结果*

父级调用子级，子级返回不同的结果

```js
function User() {}
function Admin() {}
function Member() {}
User.prototype.show = function() {
    console.log(this.desciption())
}

Admin.prototype.desciption = () => '管理员'
Admin.prototype.__proto__ = User.prototype

Member.prototype.desciption = () => '会员'
Member.prototype.__proto__ = User.prototype

let ad = new Admin()
let me = new Member()
ad.show()//管理员
me.show()//会员
```

使用父级构造函数的初始属性

```js
function User(name, age) {
    this.name = name
    this.age = age
}
User.prototype.show = function(){
    console.log(this.name, this.age)
}

function Admin(...args){
    //此处的this为Admin的实例
    User.apply(this, args)
}

Admin.prototype.__proto__ = User.prototype
let xj = new Admin('新建', 21)
xj.show()//新建 21
```

>注意：不能直接在子类型调用父类
>
>```js
>function Admin(name, age){
>    //User以函数调用，其this指向Window
>    User(name, age)
>}
>```







### 5.对象的属性特征



#### 5.1.获取

单个获取

>Object.getOwnPropertyDescriptor(对象名, '属性/方法')

多个获取

> Object.getOwnPropertyDescriptors(对象名, '属性/方法'......)
>
> 获取对象所有属性的属性特征
>
> Object.getOwnPropertyDescriptors(对象名)

```js
let user = {
    name: 'Coob',
    age: 21
}
console.log(JSON.stringify(Object.getOwnPropertyDescriptor(user, 'name'), null, 2))
```

>输出：![image-20210506175403106](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210506175403106.png)
>
>value：属性的值
>
>writable：是否可修改
>
>enumerable：是否可遍历
>
>configurable：是否可删除



#### 5.2.定义特征

单个定义

>Object.defineProperty(对象名, '属性/方法', {属性特征: true/false.....})

```js
Object.defineProperty(user, "name", {
    value: '老鼠人',
    writable: false,
    enumerable: false,
    configurable: false
})
user.name = '人上人'           //name不可修改
for(const key in user) {
    console.log(user[key])    //21  name不可遍历
}
delete user.name              //name不可删除
console.log(user)             //{age: 21, name: "老鼠人"}
```

批量定义

>Object.defineProperties(对象名, {
>
>​	属性/方法: {
>
>​		属性特征：true/false
>
>​	    ......	
>
>​	},
>
>})



### 6.对象API

#### 6.1.不允许添加属性

>Object.preventExtensions(对象名)

```js
'use strict'
let user = {
    name: 'Coob',
    age: 21
}
Object.preventExtensions(user)
user.gender = 'male'
user
```

>输出：
>
>Uncaught TypeError: Cannot add property gender, object is not extensible

判断preventExtensions是否设置，返回一个boolean值，**未设置true**反之false

>Object.isExtensible(对象名)

```js
//Object.preventExtensions(user)
if(Object.isExtensible(user)){
    user.gender = 'male'
}
user    //{name: "Coob", age: 21, gender: "male"}
```



#### 6.2.封闭对象

`"configurable": false`(**不可删除**)且**不可添加**新的属性/方法

>Object.seal(对象名)

判断seal是否设置，返回一个boolean值，**未设置false**反之true

>Object.isSealed(对象名)

```js
Object.seal(user)
//delete user.name
//user.score = 96.34
```



#### 6.3.冻结对象

`"writable": false`（**不可修改**）`"configurable": false`(**不可删除**)且**不可添加**新的属性/方法

>Object.freeze(对象名)

判断freeze是否设置，返回一个boolean值，**已设置true**反之false

>Object.isFrozen(对象名)



### 7.对象访问器

*set/get自定义对象内部属性的**设置和获取**的方式，在对象内设置*

>配置访问器:
>
>set 设置的属性名(){
>
>}
>
>get 获取的属性名(){
>
>}
>
>使用:
>
>对象名.设置/获取的属性名

**访问器优先级高于普通访问优先级**

```js
const user = {
    name: 'Coob', age: 21,
    set name(value){
        console.log(value + '⭐')
    },
}
user.name = 'Jack'
console.log(user)
```

>输出：
>
>Jack⭐
>{age: 21}
>
>user.name**优先调用的是访问器**

**注意：**配置访问器的属性要和访问器**通过一层对象隔开**，避免访问器调用和普通调用的冲突，方便保存经访问器处理后的数据

```js
'use strict'
let user = {
    data: { name: 'Coob', age: 21 },
    //设置，value的值是设置时传入的(user.age = 84)
    set age(value) {
        console.log('set...')
        if (typeof value !== 'number' || value < 10 || value > 100) {
            throw new Error('年龄格式有误！')
        }
        this.data.age = value
    },
    //获取
    get age() {
        console.log('get...')
        return this.data.age + '岁'
    }
};
user.age = 84	//设置
console.log(user.age)	//获取	84
```

使用**Symbol封装**访问器处理后的数据 

*让数据只能通过访问器调用和设置*

```js
'use strict'
let DATA = Symbol()
let user = {
    [DATA]: { age: 21 },
    name: 'Coob', 
    //设置，value的值是设置时传入的(user.age = 84)
    set age(value) {
        if (typeof value !== 'number' || value < 10 || value > 100) {
            throw new Error('年龄格式有误！')
        }
        this[DATA].age = value
    },
    //获取
    get age() {
        return this[DATA].age + '岁'
    }
};
user.age = 84	//设置
console.log(user.age)	//获取	84
```



### 8.Date对象

JS中表示一个时间的对象



#### 8.1.创建 

（1）构造函数创建一个Date对象

let 对象名 = new Date();

```js
let a = new Date();
/*代码执行当前时间*/
console.log(a);
/*Sat Nov 28 2020 14:09:55 GMT+0800 (中国标准时间)*/
```

（2）创建一个指定的时间对象

日期格式 	月份/日/年 时:分:秒

```js
let d = new Date("10/30/1999 00:00:00");
console.log(d);
/*Sat Oct 30 1999 00:00:00 GMT+0800 (中国标准时间)*/
```



#### 8.2.方法

* getDate()	    几号？1-31

* getDay()         星期几？0-6

* getMouth()     几月？0-11(通常需要+1)

* getFullYear()  几年？

* getHours()      0-23

* getMinutes()   0-59

* getSeconds()  0-59

* getTime()       返回1970/1/1 00:00:00 到现在的毫秒数（1s=1000ms）

* Date.now()    获取当前时间戳

  ```js
  /*获取程序执行时间*/
  let start = Date.now();
  for(let i = 0; i < 100; i++){
      console.log(i);
  }
  let end = Date.now();
  console.log(`执行了${end - start}毫秒`)
  ```



### 9.Math

与其他的对象不同，不是构造函数，属于一个工具类不用创建对象；封装了数学运算符和方法

* abs()绝对值

* ceil()向上取整，有小数位就进1

* floor()向下取整，小数部分舍去

* round()四舍五入取整

* random()生成0-1之间的随机数

  * 拓展：

    生成0-x之间的随机数        Math.round(Math.random()*x)

    生成x-y之间的随机数        Math.round(Math.random()*(y-x)+x)

* pow(x, y)返回x的y次幂

* sqrt(x)开方

