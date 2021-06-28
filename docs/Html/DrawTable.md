---
title: 绘制表格
publish: false
---

## table的组成

table 主要用于呈现格式化数据。表格由行和列组成

caption：表名，位于表格外部的上方居中

tr：table row

th：tabel header cell	(th的内容会自动加粗和居中显示)

td：tabel data cell

* 格式：
  ```html
    	<tabel>
    	   <tr>
    		<th></th>	
    		<th></th>
    	   </tr>	
    	   <tr>			//tr:行，td列
    		<td></td>
    		<td></td>
    		 ……
    	   </tr>
    	   ……
  ```

## table属性

* tabel中的属性：
  		cellpadding = "value"：单元格中文本内容与边框的距离（上，左，右）
      	**cellspacing** = "value"：单元格边框线的间距
    	border："value(px)"
    	width："value(px)"
    	**align**：表格对齐方式（left(默认值)/center/right）

* 跨行/跨列属性主要用来绘制复杂表格
  	    rowspan = "value"跨行	在跨行的第一个单元格写入（当前行跨越到后面的行，上下）
  
   ​    colspan = "value"跨列	在跨列的第一个单元格写入（左右）
  
   ​    **valingn** :垂直对齐方式（top/middle/bottom）


* 完整表格组成：

  caption（标题）、thead（表头）、tbody（表体）、tfoot（表尾）（四个标签同级）
  
  
  

## 注意的问题

（1）当table插入图片撑大表格时，可对其**单元格设置宽度**，再将**图片的宽度与单元格匹配**

（2）设置表格边框颜色

* ```html
  <table cellspacing="0"; style="border: 1px solid red;">
  ```

  该方法只能设置table的外边框

  ![image-20210303150513133](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210303150513133.png)

* ```html
  <style>
  	table, table tr th, table tr td{
          border: 1px solid red;
      }
  </style>   
  ```

  该方法会将边框变成两倍，可以设置`border-collapse: collapse`来解决

![image-20210303151059310](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210303151059310.png)



