---
title: Symbol
publish: false
---

https://es6.ruanyifeng.com/#docs/symbol#

*ES6 引入了一种新的原始数据类型Symbol，**表示独一无二的值(字符串)**。它是 JavaScript 语言的第七种数据类型*

前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）、ES2020加上的Bigint



## 1.创建

*Symbol 值通过`Symbol函数`生成*

### 1.1.Symbol()

```js
let s = Symbol();
console.log(typeof s)//symbol
```

Symbol函数可以接受一个**字符串**作为参数

```js
let s1 = Symbol('ss');
let s2 = Symbol('ww');
console.log(s1.toString());//Symbol(ss)
console.log(s2.toString());//Symbol(ww)
```

s1和s2是两个 Symbol 值。如果不加参数，它们在控制台的输出都是Symbol()，不利于区分。有了参数以后，就等于为它们加上了描述，输出的时候就能够分清，到底是哪一个值

注意：Symbol函数的参数只是表示对当前 Symbol **值的描述**，因此**相同参数的Symbol函数**的**返回值是不相等的**。

```js
let s1 = Symbol('ss');
let s2 = Symbol('ss');
console.log(s1.toString(), s2.toString());//Symbol(ss) Symbol(ss)
console.log(s1 === s2);//false
```

#### description

*提取Symbol的**描述**，字符串形式返回*

```js
s1.description	//ss
```



### 1.2.Symbol.for()

和 `Symbol()` 不同的是，用 `Symbol.for()` 方法创建的的 symbol 会被放入一个**全局 symbol 注册表中**。Symbol.for() 并不是每次都会创建一个新的 symbol，它会首先**检查给定的 key 是否已经在注册表中**了。假如是，则会直接**返回上次存储**的那个。否则，它会再**新建一个**

```js
let s1 = Symbol.for('ss');
let s2 = Symbol.for('ss');
console.log(s1.toString(), s2.toString());//Symbol(ss) Symbol(ss)
console.log(s1 === s2);//true
```

#### Symbol.keyFor()

`Symbol.keyFor()`方法返回一个已登记的 Symbol 类型值的`key`

```js
let s1 = Symbol.for('ss');
let s2 = Symbol.for('ss');
console.log(Symbol.keyFor(s1),Symbol.keyFor(s2))//ss ss
```



## 2.使用

*Symbol 值可以作为标识符，用于对象的属性名，就能保证不会出现同名的属性*

### 2.1写法

Symbol 值作为对象属性名时，**不能用点运算符**

>对象内部定义属性:
>
>```js
>[foo]: 
>```
>
>对象内部定义方法:
>
>```js
>[foo](){...}
>```
>
>对象调用属性/方法：
>
>```js
>obj[foo]
>obj[foo]()
>```
>
>

#### 2.1.1.作为属性名

点运算符后面总是字符串，所以不会读取`mySymbol`作为标识名所指代的那个值，导致`a`的属性名实际上是一个**字符串**，而不是一个 Symbol 值。

```js
let mySymbol = Symbol()
//写法一
let a = {}
a[mySymbol] = 'hello'
//a.mySymbol = 'hello'	

//写法二
let a = {
    [mySymbol]: 'hello'
}

//写法三
let a ={}
Object.defineProperty(a, mySymbol, {value:'hello'})

console.log(a[mySymbol])//hello
```

#### 2.1.2.对象内部定义属性

```js
let Showname = Symbol()

let obj = {
    name:'coob',
    [Showname](){
        console.log(this.name)
    }
}
obj[Showname]()//coob
```





## 3.特点

（1）可以显式转换为**字符串，布尔值**，但是不能转为数值

```js
let sym = Symbol('My symbol');
console.log(String(sym)) // Symbol(My symbol)
console.log(Boolean(sym))//true
console.log(sym.toString()) // Symbol(My symbol)
```

（2）不能与其他数据进行运算

（3）不能通过`for in/of`**直接遍历**

*可用于对象私有化存储*

```js
let site = Symbol('Symbol类型')
let webSite =  {
    [site]: 'xxx.com',
    name: '桃饱'
}
for(const i in webSite){
    console.log(i)  //name
}
for(const i of Object.values(webSite)){
    console.log(i)  //桃饱
}
//Object.getOwnPropertySymbols遍历Symbol
for(const i of Object.getOwnPropertySymbols(webSite)){
    console.log(i)  //Symbol(Symbol类型)
}
//遍历所有数据Reflect.ownKeys
for(const i of Reflect.ownKeys(webSite)){
    console.log(i)  //name Symbol(Symbol类型)
}
```







## 4.实例属性

#### （1）Symbol.prototype.decription

*返回Symbol的描述*



## 5.实例

（1）向对象中添加up down方法

```js
let game = {
            name:'Coob',
            up:function(){
                
            },
            dowm:function(){

            }
        };
        
        let methods = {
            //在methods对象中添加两个Symbol类型的属性
            up: Symbol(),
            dowm: Symbol()
        };

        game[methods.up] = function(){
            console.log("上");
        }
        game[methods.dowm] = function(){
            console.log("下");
        }
        console.log(game);
```

（2）

```js
let youxi = {
            name:"fornite",
            [Symbol('say')]: function(){
                console.log("喜喜");
            },
            [Symbol('zaima')]:function(){
                console.log("不在");
            }
        }

        console.log(youxi);
```



## 6.symbol内置值


