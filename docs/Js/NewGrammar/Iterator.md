---
title: 迭代器iterator
publish: false
---

*接口，为不同数据结构提供统一的访问机制；对象中的属性Symbol.iterator*

![image-20210309115244042](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210309115244042.png)

## 1.具备iterator的数据

Array	Arguments	Set	Map	String	TypeArray	NodeList



## 2.两种遍历命令

*对于数组*

for……in：遍历**键名**

for……of：遍历**键值**

```js
const song = ['Die for you', 'Emotion', 'I cant live'];
    for(let i in song){
        console.log(i);//0 1 2
    }
    for(let i of song){
        console.log(i);//Die for you...
    }
```



## 3.原理

（1）创建一个指针对象，指向当前数据结构的起始位置

（2）第一次调用对象的next方法，指针自动指向数据结构的第一个成员

（3）接下来不断调用next方法，指针一直往后移动，直到指向最后一个成员

（4）每调用next方法返回一个包含**value和done属性的对象**
![image-20210309115418899](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210309115418899.png)

```js
const song = ['Die for you', 'Emotion', 'I cant live'];
    //获取对象
    let iterator = song[Symbol.iterator]();
    //调用对象的next方法
    console.log(iterator.next());//[object Object]: {done: false, value: "Die for you"}
    console.log(iterator.next());//[object Object]: {done: false, value: "Emotion"}
    console.log(iterator.next());
    console.log(iterator.next());//[object Object]: {done: true, value: undefined}

```



## 4.迭代器自定义遍历对象*

```js
const banji = {
        name:"高359",
        stus:[
            '王大锤',
            '贾静雯',
            '胡鸿钧',
            '张静初'
        ],
        //实现遍历banji中的stus对象
        [Symbol.iterator](){
            //索引变量
            let index = 0;
            //保存this
            let _this = this;
            return{
                next:function(){
                    if(index < _this.stus.length){
                        const result = {value: _this.stus[index], done: false};
                        //下标自增
                        index++;
                        //返回结果
                        return result;
                    }else{
                        return {value: undefined, done:true};
                    }
                }
            };
        }
    }    
    //遍历对象
    for(let i of banji){
        console.log(i);     //王大锤……
    }
```

