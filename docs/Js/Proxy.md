---
title: Proxy代理
publish: false
---

**Proxy** 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）

### 1.对象代理

>new Proxy(代理的对象, { 
>
>​	get(对象, 属性){} 
>
>​	set(对象, 属性, 设置后传入的属性){}
>
>})



### 2.函数代理

*调用代理就是调用代理的函数*

>new Proxy(代理的函数, {......})

```js
function factorial(num) {
    return num === 1 ? 1 : num * factorial(num - 1)
}
let proxy = new Proxy(factorial, {

})
let a = proxy(5)
a	//120
```



### 3.数组代理



### 4.实例

#### 4.1.实现v-model

```html
<input type="text" v-model="san">
<input type="text" v-model="san">
<input type="text" v-model="title"/>
<input type="text" v-model="title"/>
<h4 v-bind="title">此处会根据input更新</h4>
```

```js
function View(){
    let proxy = new Proxy({}, {
        get(obj, property){},
        //value:输入框输入的内容;property:v-model的值
        set(obj, property, value){
            //渲染
            //v-model
            document
                .querySelectorAll(`[v-model="${property}"]`)
                .forEach(item => {
                item.value = value
            })
            //v-bind
            document
                .querySelectorAll(`[v-bind="${property}"]`)
                .forEach(item => {
                item.innerHTML = value
            })
        },
    })
    //绑定事件
    this.init = () => {
        const els = document.querySelectorAll("[v-model]")
        els.forEach(item => {
            item.addEventListener("keyup", function(){
                //将输入的内容遍历赋值给含有v-model属性的元素
                proxy[this.getAttribute("v-model")] = this.value
            })
        })
    }
}
new View().init()
```

