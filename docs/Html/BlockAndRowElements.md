---
title: 块元素和行元素
publish: false
---

## 块元素

​	1.独占一行

​	2.宽度和高度可控，如果没设置其高度，默认铺满整行

​	3.其内可以包含块级和行级元素

**常见块元素：**

table	**pre**	**address**	ul	ol	div	p	h1-h6	

**块标签-->行标签：**

```html
<p style="display:inline"></p>
```



## 行元素

​	1.不会独占一行，与相邻的行级元素占同一行，直到行占满，会自动掉到下一行HTML

​	2.宽度和高度可控

​	3.其内可以包含块级和行级元素

**常见行元素：**

a	span	**b**	**strong**	**i**	**em**	**sub**	**sup**

**行标签-->块标签：**

```javascript
<span style="display:block"></span>
```

