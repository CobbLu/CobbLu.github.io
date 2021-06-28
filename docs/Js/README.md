---
title: What is JavaScript？
publish: false
---

### 1.JS文档MDN 

### 2.简介：解释脚本语言，无需编译

### 3.赋值

var    let（变量可以重新赋值）    const（常量）

### 4.输出

document.writ()输出到网页/console.log()控制台输出

### 5.原始数据类型

String（单引或双引）	Numbers（JS没有浮点和整型）	Boolean	null	undefined（无定义）

### 6.字符串拼接

* console.log（‘字符串’ + 变量名 + ‘字符串’）
* 模板字符串：(`：反引号)
  * (1)console.log(`字符串${变量名}字符串`)
  * (2)const 常量名 = `字符串${变量名}字符串`         console.log(常量名)

### 7.字符串

* const s = 'Hello World!'
* console.log(s.lenth)                //11
* console.log(s.toUpperCase())                //HELLO WORLD!
* console.log(s.toLowerCase())                //hello world!
* console.log(s.substring(0, 5))                //Hello
* console.log(s.substring(0,5).toUpperCase())             //HELLO
* 字符串分割创建字符串数组 const s = 'technology, computers, it, code'      console.log(s.split(', '))                     //["technology", "computers", "it", "code"]

### 8.数组

* 定义
  * const a = new Array(1, 2, 3 , 4, 5)
  * const b = ['apple', 'oranges', 'pear', 10, true]   //数组可存不同类型的数据
  * const fruits = ['apple', 'oranges', 'pear']
* 访问
  * console.log(fruits[1])				//oranges
* 插入
  * fruits[3] = 'peatch'             //['apple', 'oranges', 'pear', 'peatch']
  * fruits.push('mangos')插入尾部     //['apple', 'oranges', 'pear', 'peatch', 'mangos']
  * fruits.unshift('watermalon')插入头部     //['watermalon', 'apple',.…… 'mangos']
  * fruits.pop()输出尾部                  //['watermalon', 'apple','oranges', 'pear', 'peatch']
* 查找下标
  * fruits.indexOf('watermalon')			//0

### 9.对象定义

* 数组对象

  * ```js
    const todos = [
        {
            id:1,
            text:'take out trash',
            isCompleted:true
        }，
        {
            id:2,
            text:'2222',
            isCompleted:true
        }，
        {
            id:3,
            text:'take trash',
            isCompleted:false
        }，
    ];
    ```

    

* ```js
  const person = {
  	firstName: 'Coob',
  	lastName: 'Doe',
  	age: 19,
  	hobbies:['music', 'movies', 'sports'],
  	address:{
  		street:'50 main st',
  		city:'Boston',
  		state:'MA'
  	}
  }
  console.log(person.hobbies[0])			//music
  console.log(person.address.city)        //Boston
  //解构
  const {firstName, lastName, address:{city} = person
  console.log(city)						//Boston
  //键入
  person.email = '1374799103@qq.com'
  ```

### 10.数组遍历

* forEach() map filter

  * forEach()

    ```JS
    todos.forEach(function(i){
    	console.log(i.text)         //take out trash                                				 //2222                                							  //take trash
    })
    ```

  * map

    ```JS
    const todoText = todos.map(function(i){
    	return i.text
    })
    console.log(todoText)			 //take out trash                                				 	//2222  
    								//take trash
    ```

  * filter

    ```JS
    const todoCompleted = todos.filter(function(i){
        return i.isCompleted === true;
    })
    console.log(todoCompleted)			//[{id=1……},{id=2……}]
    
    const todoCompleted = todos.filter(function(i){
        return i.isCompleted === true;
    }).map(function(i){
      	return i.text;  
    })
    console.log(todoCopleted)			//take out trash
    									//2222
    ```

    

* ```js
  for(let i of todos){
  	consonle.log(i.text)		//take out trash
  								//2222
  								//take trash
  }
  ```


### 11.DOM选择元素

* document.getElementById()
* document.querySelector()
* document.querySelectorAll()
* document.getElementByClassName()



