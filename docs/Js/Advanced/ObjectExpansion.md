---
title: 对象知识补充
publish: false
---

## 访问对象内部数据

（1）对象名.属性名

（2）对象名.['属性名']

使用['属性名']的方式

* 属性名包含特殊字符：- 或 空格

  ```js
   var p = {};
          //给p对象添加一个属性 content type: text/json;
          //p.content type = 'text/json';
          p['content-type'] = 'text/json'
  ```

* 变量名不确定（变量名被一个变量存储），(1)也可以实现

  ```js
  var p = {};    
          var propName = 'mymind';
          var value = 133;
          //p.propName = value;
          //console.log(p.propName);      133
  
          p['propName'] = value;
          console.log(p.propName);        //133
  
  ```

  注意：此处p[]中的propName不加引号，属性会加不进去。打印提示undefined

