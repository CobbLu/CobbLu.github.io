---
title: input标签
publish: false
---

**主要用来输入，选择或发出指令**

**type属性中包含**：text  	password 	radio 	checkbox 	file 	button 	image 	submit 	reset

## text

*作用：单行文本输入框*

type="text"可以不写，**默认为text**

 **属性:**placeholder(提示)	name（命名）

min/maxlenth(最小/最大输入的字符个数)

disabled(失效，属性值可为空)

readonly(只读，属性值可为空)

value(默认值)	pattern(正则匹配)

## password

*作用：密码框*	

属性与text一致

## radio

*单选按钮，通常是两项以上*

**属性：**name（必须有） value 

​    checked(选中，无属性值 )

​    disabled（失效）

​     readonly	
​	*注意：单选按钮的选择有多个时，不同的选择的name要一致

```html
<form id="form1">
你更喜欢哪种颜色？<br>
<input type="radio" name="colors" id="red">红色<br>
<input type="radio" name="colors" id="blue">蓝色<br>
<input type="radio" name="colors" id="green">绿色
</form>
```

## checkbox

*复选框，可用来选中0项、1项、多项*
​**属性：**name（必须有） value

​    checked(默认选中，无属性值 )

​     disabled（失效）readonly	

## file

*文件上传按钮*

## buttton

*普通按钮，用于调用脚本代码*

**常用属性有：**value（按钮的标题）/disabled(失效)

## image

*图片按钮，用法与button一样*

有一个特殊属性：src（用来加载显示图片，用它替换了value）

有提交功能，与submit功能一样

## submit

*提交按钮就，用来将表单数据提交到后台*

**常用属性有**：value（按钮的标题）/disabled(失效)

## reset

*重置按钮，将表单所有组件输入的内容全部清空，还原初始状态*

**常用属性有：**value（按钮的标题）/disabled(失效)

​		