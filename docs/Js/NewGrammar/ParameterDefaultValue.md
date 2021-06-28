---
title: 参数默认值
publish: false
---

*ES6允许给函数参数赋初始值*

如果参数本身已经有值，则优先使用本身的值

## 1.形参初始值

具有默认值的参数，**一般要靠后**

```js
function add(a, b, c = 10){
        return a + b + c;
    }
    let result = add(1, 2);
	let result2 = add(1, 2, 3);
    console.log(result);//13
	console.log(result2);//6
	
```



## 2.与解构赋值结合

```js
/*在函数参数中传入对象的属性，且可以赋初值*/
function connect({host = "127.0.0.1", username, password, port}){
        console.log(host);
        console.log(username);
        console.log(password);
        console.log(port);
    }
    connect({
        username:'root',
        password:'123',
        port:366
    })
```

