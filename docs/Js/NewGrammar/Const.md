---
title: const声明常量
publish: false
---

1. **一定要赋初值**
2. **一般常量名用大写**
3. **值不能修改**
4. **块级作用域**
5. **对于数组和对象的元素修改，不算对常量的修改，不会报错**

```js
const SONG = ['starboy', 'Die for you', 'I Feel it Coming', 'loft Music']
SONG.push('True Color')
```



