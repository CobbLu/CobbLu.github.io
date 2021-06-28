---
title: Webpack
publish: false
---

*Javascript应用的静态模块打包工具；依赖于node环境*
https://webpack.js.org/
https://www.webpackjs.com/



## 安装

@指定版本	-g全局安装  

>npm install webpack@3.6.0 -g				//全局安装



--save-dev，会在devDependencies(开发依赖)里面添加依赖

-D，会在devDependencies里面添加依赖

--save，会在dependencies(线上依赖)里面添加依赖

-S，会在dependencies里面添加依赖

>npm install webpack@3.6.0 --save-dev		//本地安装



### 文件命名规则

dist文件夹：存放打包好的js模块

src：存放源码

index.html：主页

![image-20210328163005331](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210328163005331.png)



## 打包

让浏览器不认识的各个模块的require经过打包整合在一个指定文件，html页面通过script加载这个文件，各个模块的功能就能实现

*根目录下打开终端*

![image-20210328163151941](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210328163151941.png)

>webpack 模块相对路径	定义打包好的模块文件名和其存放相对路径

注：main.js导入的模块本身有依赖存在的话，其依赖也会被打包



### 创建webpack.config.js配置文件

#### 设置默认打包路径

```js
//导入node模块
const path = require('path')
module.exports = {
    entry: './src/js/main.js',
    output: {
        //设置打包文件bundle.js存放的绝对地址
        path: path.resolve(__dirname, 'dist'),
        
        //设置打包文件的名字
        filename: 'bundle.js',
        
        //publiPath设置页面里面引入的资源的路径做对应的补全
        //使用插件打包html文件时该属性要删除
        publicPath: 'dist/'
    },
    ..........
}

```

>webpack   //终端输入即可打包（全局打包）



### 创建package.json

*用于搭建node模块环境*

>npm init     //初始化



#### 更改打包指令

*在package.json中的’`"scripts{}"`里更改webpage打包指令*

```json
"scripts": {
    "build": "webpack"
},
```

>node_modules/.bin/webpack	//终端输入，通过本地安装的webpack本地打包
>npm run build   //终端输入，优先使用本地打包再考虑全局



## 版本问题

**安装时的loader版本要与webpack的版本匹配!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!**

与3.6.0webpack匹配的loader

![image-20210329193934845](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210329193934845.png)

webpack-merge@4.1.5
webpack-dev-server@2.9.3

#### 卸载的tip

在package中删除将要删除的`文件版本信息`,然后再用cnpm执行删除命令,成功删除的概率高一点





## loader

https://www.webpackjs.com/concepts/loaders/



### css&style

>cnpm install --save-dev css-loader@3.0.0
>cnpm install --save-dev style-loader@2.0.0



### less

>cnpm install --save-dev less-loader@4.1.0 less



### 图片

>cnpm install --save-dev url-loader@2.1.0

当图片容量大于limit时，要按安装file-loader来处理图片(limit的单位是字节)

>cnpm install --save-dev file-loader@1.1.5

在`option`中的`name:` 设置被打包图片的格式

>路径/[图片原名称].[截取8位打包哈希值].[后缀]

>eg:name:'img/[name].[hash:8].[ext]'

![image-20210329205207180](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210329205207180.png)



### ES6语法处理

*babel-loader将es6打包成es5，用于解决浏览器兼容问题*
安装7版本的babel兼容webpack3.6.0

babel-preset-es2015

>cnpm install --save-dev babel-loader@7 babel-core babel-preset-es2015



### 配置vue.js

*安装开发依赖的vue*

>cnpm install vue@2.6.12 --save

#### js文件中引入

```js
import Vue from 'vue'
```

#### 版本问题

* runtime-only	代码中，不能有template
* runtime-compiler     代码中，可有template

在webpack.config.js配置，使用runtime-compiler

```js
module.export = {
    entry: '...',
    output: {...},
    module: {...},
    resolve:{
        //alias：别名
        alias:{
            //找到node_modules中的vue.esm.js
            'vue$': 'vue/dis/vue.esm.js'
        }
    }
}
```

#### .vue文件封装处理

>cnpm install vue-loader@13.0.0 vue-template-compiler --save-dev

#### el和template

*在js文件中使用vue实例中写入`template`来展示页面的内容，而不是在html文件的`el`选中的div写入内容*

![image-20210329213713457](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210329213713457.png)

![image-20210329213723056](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210329213723056.png)

浏览器解析：div中的属性不会显示，而是显示实例中定义的模板内容

![image-20210329213745136](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210329213745136.png)



### webpack.config.js配置

多个loader时，时从**右到左加载**的，先style后css、less
css-loader：负责css文件进行加载
style-loader:负责将样式添加到DOM中

```js
module: {
 
    rules: [
         //css和style
    	{
            test: /\.csS$/,
            use: ['style-loader', 'css-loader' ]
        },
         //less
        {
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        },
        //图片加载包含file-loader
        {
            test: /\.(png|jpg|gif|jpeg)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        //设置图片最小容量，当小于limit图片以base64存储，大于limit要按通过file-loader来使用
                        limit: 8192,
                        //设置被打包图片的命名规范:路径/[图片原名称].[截取8位打包哈希值].[后缀]
                      	name:'img/[name].[hash:8].[ext]'
                    }
                }
            ]
        },
        //babel-loaber
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    //es2015什么意思？
                    presets: ['es2015']
                }
            }
         },
        //vue
        {
            test: /\.vue$/,
            use: ['vue-loader']
        },
    ]
   
    
}
```

**注意：配置完成后需要再打包一次**



## plugins

*[ˈplʌɡɪn] 插件，用于对现有架构进行扩展*

### 添加版权

*在打包文件头顶添加版权信息(该插件webpack自带)*
![image-20210330103650134](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210330103650134.png)

webpack.config.js中

```js
const webpack = require('webpack')

module.exports = {
	...
    plugins: [
        new webpack.BannerPlugin('要添加到打包文件头顶的信息')
    ]
}
```



### html-webpack-plugin

*将index.html文件打包到dist文件夹中*

>cnpm install html-webpack-plugin@2.30.1 --save-dev

webpack.config.js中

```js
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	...
    plugins: [
        new HtmlWebpackPlugin()
    ]
}
```

#### 问题?

（1）打包后的html中script标签src的问题？

打包后的index文件中**script标签中src包含了'dist/**',删除publicPath即可.

**webpack.config.js中移除掉output中的publicpath**
![image-20210330105804742](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210330105804742.png)

**publicPath** 并不会对生成文件的路径造成影响，主要是对页面里面引入的资源的路径做对应的补全



（2）打包后的html中绑定了vue组件的div消失问题？

* **在原来的html中删除掉引用bundle.js的script标签**

  ![image-20210330110500609](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210330110500609.png)

* **webpack.config.js中配置plugins:[]**

  ```js
  module.exports = {
  	...
      plugins: [
          new HtmlWebpackPlugin({
              template: 'index.html'
          })
      ]
  }
  ```



解决以上问题打包后的html文件
![image-20210330112519976](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210330112519976.png)



### uglifyjs-webpack-plugin

*压缩打包后的js文件*

```
cnpm install uglifyjs-webpack-plugin@1.1.1 --save-dev
```

webpack.config.js中

```js
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
	...
    plugins: [
        new UglifyjsWebpackPlugin()
    ]
}
```

丑化后的打包js文件
![image-20210330113433428](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210330113433428.png)



## devServer

### webpack-dev-server

*基于node的express搭建本地服务器的工具,修改本地代码不用重新打包,通过本地服务器刷新实时更新*

>cnpm install webpack-dev-server@2.9.3 --save-dev

webpack.config.js中

```js
module.exports = {
	...
    //注意S要大写
    devServer: {
        
        //contentbase代表html页面所在的相对目录，如果我们不配置项，devServer默认html所在的目录就是项目的根目录
        contentBase: './dist',
        
        //inline设置页面是否实时刷新
        inline: true,
    },
}
```

package.json中更改运行服务器的命令

```js
"scripts": {
    "dev": "webpack-dev-server"
},
```

运行本地服务

>npm run dev



## webpack配置分离

*发布时的配置和开发时的配置需要分离*

![image-20210330141446178](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210330141446178.png)

base.config.js:存放**公共的配置(原webpackconfig.js中的配置)**

dev.config.js:存放**开发时的配置**

* 如:devServer下`webpack-dev-server`的配置

prod.config.js:存放**发布时的配置**

* 如:plugin下`uglifyjs-webpack-plugin`的配置



###  webpack-merge

*将公共配置与开发时或发布时的配置**合并***

>cnpm install webpack-merge@4.1.5 --save-dev

以dev.config.js为例

```js
//开发依赖设置

//获取webpackMerge
const webpackMerge = require('webpack-merge')

//获取公共配置文件
const baseconfig = require('./base.config.js')

module.exports = webpackMerge(baseconfig, {
    //设置本地服务器
    devServer: {
        contentBase: './dist',
        //inline设置页面是否实时刷新
        inline: true,
    },
})
```



### 更新指令

*分离配置文件后需要更新packge.json中script里的`运行指令`和`开启本地服务器的指令`,为其添加指定的配置文件路劲*

```js
"scripts": {
  	//使用发布时的配置
    "build": "webpack --config ./build/prod.config.js",
    //使用用开发时的配置
    "dev": "webpack-dev-server --open --config ./build/dev.config.js"
},
```



### 更新打包文件的存储位置

*因为是通过配置文件来设置打包文件的存储位置所以现在配置文件变更了output中的path也要更新*

```js
module.exports = {
    entry: '',
    output: {
        //设置打包文件bundle.js存放的绝对地址和文件夹名
        path: path.resolve(__dirname, '../dist'),
        //设置打包文件的名字
        filename: 'bundle.js',
},
```

#### 思考?

配置分离后,通过npm run dev运行本地服务器后dist文件中没有打包后的文件了?