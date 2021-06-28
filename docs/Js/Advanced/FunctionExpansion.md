---
title: 函数知识补充
publish: false
---

## 函数调用

（1）test()：直接调用

（2）obj.test()：通过对象调用

（3）new test()：new调用

（4）test.call/apply(obj)：临时让test成为obj的方法进行调用

```js
//让一个函数成为指定对象的方法进行调用
        var obj = {};
        function test2(){
            this.xxx = 'tensi';
        }
        test2.call(obj)//obj.test2() 可以让一个函数成为指定对象的方法进行调用
        console.log(obj.xxx);//tensi
```

## 回调函数

*你自己定义的，但是没有调用，却自己执行了*

常见回调函数：dom事件回调函数 定时器回调函数 ajax请求回调函数 生命周期回调函数

```html
/*点击按钮返回按钮信息，并在两秒后返回'xixi'*/
<button id="btn">点击</button>    
    <script>
        document.getElementById('btn').onclick = function(){
            alert(this.innerHTML);
            setTimeout(function(){
                alert('xixi');
            }, 2000)
        }
	</script>
```

