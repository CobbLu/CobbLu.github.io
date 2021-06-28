---
title: form表单
publish: false
---

form表单标签是所有标签最核心标签之一。它是用来实现前后端交互的一个重要标签

## form常用属性

name:表单名称

action:value	属性规定当提交表单时，**向何处发送表单数据**

- 绝对 URL - 指向其他站点（比如 src="www.example.com/example.htm"）
- 相对 URL - 指向站点内的文件（比如 src="example.htm"）

methon:前端提交数据到后端的方法，主要有：get和post，默认是get

## 表单元素

​	input类	
​	textarea类
​	select类
​	button类label:用于提示输入文字

​	lable：为鼠标用户改进了可用性。如果您在 label 元素内点击文本，就会触发此控件。就是说，当用户选择该标签时，浏览器就会自动将焦点转到和标签相关的表单控件上。

## get与post的区别

​	1.get是以**字节**为单位提交，只接受ASCII；而post是以**字符**为单位提交

​	2.**get是明文方式**，提交的**数据会显示在地址栏中**

​		post是暗文方式提交

​	3.get在浏览器中回退是无害的，而post会再次提交请求

​	4.get会被浏览器主动缓存，post不会，需要手动设置

​	5.get和post在传输字数上一般没有限制，个别浏览器会。

​	可理解为get一般不超过2k，而post一般不超过2M

