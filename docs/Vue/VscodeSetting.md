---
title: 自定义配置vscode快捷生成vue模板
publish: false
---

**（1）文件–>首选项—>用户代码片段**

**（2）新建全局代码片段文件vue.json**

复制如下代码到vue.json文件中

```js
"Print to console": {
			"prefix": "vue",
			"body": [
				"<template>",
				" <div>\n",
				" </div>",
				"</template>\n",
				"<script>",
				" export default {",
				"   name: '',",
				"   data () {",
				"     return {\n",
				"     }",
				"   },",
				"   methods: {\n",
				"   },",
				"   components: {\n",
				"   }",
				" }",
				"</script>\n",
				"<style>\n",
				" ",
				"</style>",
				"$2"
			],
			"description": "Log output to console"
		}
```

**（3）安装Vetur插件**

**（4）在新建的.vue文件中使用模板**

*输入vue+tab*

