---
title: 模块化
publish: false
---

*模块化是为了提高代码的复用性和解决变量重复定义使用问题*

## 1.匿名函数模块化

1. 在匿名函数内部,定义一个对象
2. 给对象添加各种需要暴露到外面的属性和方法(不需要暴露的直接定义即可)
3. 最后将这个对象返回,并且在外面使用了一个自定义名称接收
4. 使用：只需要使用属于自己模块的属性和方法即可



## 2.模块化规范

导入·导出

`CommonJS`	`AMD`	`CMD`	`ES6的Modules`



### 2.1.CommonJS

导出

```js
module.exports = {
	变量名/函数名/对象名
	.......
}
```

导入

```js
const {变量名/函数名/对象名, ..... ,  } = require('模块相对路径.js')
```



### 2.2.Modules

设置模块作用域

```js
<script src="模块绝对地址.js" type="module"></script>
```

导出	

```js
//法1：导出定义好的变量/函数
export{
	函数名/变量名,
	.........
	........
}

//法2：在定义变量时直接导出
export var/let/const 变量名 = 值
export function 函数名(){}
exprot class 类名{}

//法3：一个模块中包含某个的功能/变量,我们并不希望给这个功能/变量命名,而且让导入者可以自己来命名
export default function(){}
exprot default 变量名

import 自定义命名 from '模块相对路径.js'
//注：default在同一个模块，不允许出现第二个
```

导入

```js
import {函数名/变量名} from '模块相对路径.js'
//统一全部导入
import * as 自定义名 from '模块相对路径.js'
```

