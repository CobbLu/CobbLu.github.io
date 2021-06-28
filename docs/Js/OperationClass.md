---
title: 操作类
publish: false
---

## 修改元素的样式

​		不调用Style，而是在样式中定义好新的类名样式后，再修改元素的类名。（该方法可以同时修改多个样式，且只需要浏览器渲染页面一次）

写法：在原先的样式中添加新的样式

​		   元素名.className += " 新的类名";

注：新类名的前面一定要加空格，表示新类名于旧类名同时存在

```html
<style>
        .b1{
            width: 100px;
            height: 100px;
            background-color: #666666;
        }
        .b2{
            width: 200px;
            height: 123px;
            background-color: red;
        }
        .b3{
            height: 30px;
            background-color: #2267b5;
        }
    </style>
    <script>
        window.onload = function (){
            let box1 = document.getElementById("box1");
            let btn01 = document.getElementById("btn01");
            let btn02 = document.getElementById("btn02");
            btn01.onclick = function (){
                addClass(box1, "b3");
            }
            btn02.onclick = function (){
                removeClass(box1, "b3");
            }
            btn03.onclick = function (){
                toggleClass(box1, "b3");
            }

            //添加新class函数
            function addClass(obj, cn){
                //判断obj是否含有指定class属性值，有返回true，没有则false；防止多次点击，生成多个同样的cn
                if(!hasClass(obj, cn))
                    obj.className += " " + cn;
            }
            //判断一个元素是否含有指定class属性值，有返回true，没有则false
            function  hasClass(obj, cn){
                //\b：单词边界
                let reg = new RegExp("\\b" + cn + "\\b");
                return reg.test(obj.className);
            }
            //删除一个元素中指定class属性
            function removeClass(obj, cn){
                let reg = new RegExp("\\b" + cn + "\\b");
                //删除class，将cn替换成" "
                obj.className = obj.className.replace(reg, " ");
            }
            //切换一个类，如果元素中有该类则删除，没有则添加
            function toggleClass(obj, cn){
                if(hasClass(obj, cn))
                    removeClass(obj, cn);
                else
                    addClass(obj, cn);
            }
        }
    </script>
<body>
    <button id="btn01">修改box的样式</button>
    <button id="btn02">删除新加的样式</button>
    <button id="btn03">切换样式</button><br>
    <div id="box1" class="b1"></div>
</body>
```