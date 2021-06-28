---
title: 浏览器对象模型BOM
publish: false
---

*浏览器对象模型，通过JS操作浏览器*

## 1.BOM对象

### 1.1.Window

*代表整个浏览器的窗口，window上网页中的全局对象*



#### 1.1.1.setInterval()

*定时调用（定时器），将一个函数，每隔一段时间执行一次*

>参数：1.回调函数	2.每次调用间隔的时间（ms）
>
>返回值：Number类型的数据

注：定时器开启前，要在其前一行设置关闭定时器

#### 1.1.2.clearInterval()

*关闭一个定时器*

>参数：定时器的标识（如果参数不是一个有效标识，则什么也不做）

```html
<script>
        window.onload = function (){
            let count = document.getElementById("count");
            let num = 1;
            let timer = setInterval(function (){
                count.innerHTML = num++;
                if(num === 11)
                    clearInterval(timer);
            }, 1000);
        }
</script>
```

#### 1.1.3.setTimeout()

*延时调用，调用一个函数隔一段时间执行，而且只会执行一次*

#### 1.1.4.clearTimeout()

*关闭延时调用*



### 1.2.Navigator

*代表当前浏览器的信息，可以用来识别不同的浏览器*

navigator.appName已经淘汰

navigator.userAgent是一个字符串，描述浏览器信息的内容

```html
<script>
    console.log(navigator.userAgent);
</script>
//Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:83.0) Gecko/20100101 Firefox/83.0
```

判断IE 含有则是

"ActiveXObject" in window;

### 1.3.Location

*代表当前浏览器的地址栏信息，通过Location可以获取地址栏信息，或者操作浏览器跳转页面*

### 1.4.History

*代表浏览器历史记录，可操作浏览器的历史记录，但不能获取到具体的历史记录，只能操作浏览器向前或向后翻页*

属性：length获取单次访问链接的数量

方法：back()回退到上一个页面

​	  	forword()

​		  go()跳转到指定页面，需要一个整数作为参数，可设置负数（2：向前跳转2个界面）

### 1.5.Screen

*代表用户的屏幕的信息，可以获取到用户的显示器相关信息*

特点：这些对象在浏览器都是作为window对象的属性保存的，可以通过window对象来使用，也可以直接使用

