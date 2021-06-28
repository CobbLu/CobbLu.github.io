---
title: Vue-cli
publish: false
---

## 1.下载cnpm

*国内镜像加速*

> npm install cnpm -g

`-g`:全局安装
安装在c盘用户文件夹的AppData\Roaming\npm中



### 1.1禁止运行脚本问题

* 以管理员身份运行power shell
* 输入set-ExecutionPolicy RemoteSigned然后输入A 回车



## 2.安装vue-cli

**第二个@后可以指定版本**

>cnpm install @vue/cli@3.2.1 -g



**拉取vue-cli2.x模板**

>cnpm install @vue/cli-init -g



**打开项目管理器**

>vue ui



## 3.可视化创建项目

![image-20210321154950429](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210321154950429.png)

![image-20210321154808919](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210321154808919.png)

![image-20210321155103031](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210321155103031.png)



## 4.vue-cli2.0

### 4.1创建

*在终端当前指定的目录下创建*

>vue init webpack 文件名

![image-20210330192811767](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210330192811767.png)



### 4.2目录结构

![image-20210330192649839](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210330192649839.png)



### 4.3ESlint规范

 ```js
function doSmth() {
  var foo = 2;
}

 ```

*最后一行代码后需要敲一个**回车***

#### 4.3.1关闭ESlint 

在webpack公共配置中注释掉createLintingRule中的内容



### 4.4runtimecompiler和runtimeonly的区分

#### 4.4.1vue程序的执行过程

*template  ->  [AST-抽象语法树](https://blog.csdn.net/cmdssd1/article/details/45716679)  ->  render  ->  virtual dom  ->  real dom（UI）*

![image-20210331193025071](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210331193025071.png)

#### 4.4.2render

*有一个createElement参数，函数类型的。且可以接收模板*

在main.js中

![image-20210331194745934](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210331194745934.png)

#### 4.4.3runtime-compiler

*使用`-compiler`vue程序从ttemplatek开始执行*

在main.js中

![image-20210331194945015](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210331194945015.png)

#### 4.4.4runtime-only

*使用`-only`vue程序直接从render开始执行，性能会更高*
**在main.js中引入的App已经不是模板而是render函数**（vue-compiler-template实现的）



## 5.vue-cli3.0

### 5.1创建

>vue create 文件名

![image-20210401091648123](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210401091648123.png)

*4、5保存的预设可以到C盘用户文件夹中的.vuerc文件删除*

### 5.2 3.0与2.0的区别

* vue-cli 3是基于**webpack 4**打造, vue-cli 2还是webapck 3
* vue-cli 3的设计原则是"**0配置**”, 移除的配置文件根目录下的, build和config等目录（3的配置文件放在了node_modules/@vue/cli-service/webpack.config.js）
  * 如需修改配置，可在根目录下创建`vue.config.js`文件，在该文件内部导出自定义的配置，系统会自动与webpack.config.js文件合并
* vue-cli 3提供了**vue ui**命令,提供了可视化配置,更加人性化
* 移除了**static**文件夹,新增了**public**文件夹,并且index.html移动到public中



## 6.vue-router

*路由*

### 6.1前/后端渲染和路由

后端路由：后端处理URL和页面之间的映射关系中；
后端渲染：服务器直接生产渲染好对应的HTML页面,返回给客户端进行展示；

SPA单页面
*https://developer.aliyun.com/ask/288920,整个网页只有一个html页面*

前端路由：前端管理url和页面(组件)的映射关系

![image-20210401110337930](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210401110337930.png)



### 6.2在url后添加数据

通过`href`修改，网页**会动态刷新**(Network请求)

```js
location.href = ''
```

通过`hash`修改，网页**不会动态刷新**

```js
location.hash = ''
```

通过HTML5中的`history.pushState()`修改，类似于数据压入栈中，且网页**不会动态刷新**

>history.pushState({}, '', '添加的数据')

通过HTML5中的`history.replaceState()`修改，页面**不能回退**，且网页**不会动态刷新**

>history.replaceState({}, '', '添加的数据')

`history.back()`让浏览器回退，等于浏览器的返回按钮

```js
history.back() //等同于 history.go(-1)
```

`history.forward()`让浏览器前进，等于浏览器的前进按钮

```js
history.forward()//等同于 history.go(1)
```



### 6.3使用vue-router的步骤

* 创建路由组件

* 在roter文件中的index.js导入组件

  ![image-20210401231747826](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210401231747826.png)

* 配置路由映射:组件和路径映射关系

  ![image-20210401231804202](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210401231804202.png)

  **component不用引号的原因**：https://blog.csdn.net/qyl_0316/article/details/104440157

* 在App.vue使用路由

  * ><router-link to='组件的path'></router-link>
    
  * ><router-view></router-view>//展示通过path路由的组件
  
    ![image-20210401232125114](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210401232125114.png)

### 6.4使用代码跳转路由

为显示的标签绑定事件方法，在方法内通过`this.$router.push/replace('path')`实现路由

* 创建路由组件

* 在roter文件中的index.js导入组件

* 配置路由映射:组件和路径映射关系

* 在App.vue使用路由

  ```html
  //模板中
  <button @click="homeClick">首页</button>
  <button @click="aboutClick">关于</button>
  <router-view></router-view>
  ```
  
  ```js
  //通过方法实现路由
  methods: {
      homeClick(){
        this.$router.push('/home')
      },
      //push中可以通过对象的写法传参
      aboutClick(){
        this.$router.push({
          path: '/about',
            query: {
               //变量名: 值
               //......
            }
        })
      }
  }
  ```
  
  

### 6.5router的标签

#### 6.5.1 -link

`<router-link></router-like>`

`to:`	指定跳转路径

`tag:`	指定-link标签渲染成什么组件(`"li"`，`"button"`,....)，默认值`"a"`

`replace:`	replace不会留下history记录,所以指定replace的情况下(replaceStatew())，后退键返回不能返回到上一个页面中，默认值false(history.pushState())

`active-class:`	设置链接激活时使用的CSS类名。默认值可以通过路由的构造选项(index.js)linkActiveClass来全局配
置，也可以单个元素独自设置。（全局设置的优先级小于行内设置）

#### 6.5.2 -view

<router-view></router-view>，显示路由的组件



### 6.6路由默认路径

*让页面默认显示指定组件的内容*

* 在routes中又配置了一个映射.
* path配置的是根路径:` /`
* `redirect`是重定向,也就是我们将根路径重定向到`想要默认显示的页面的路径`（path）下

>const rotes= [
>	{
>        path: '/',
>        redirect: '目标组件的path'
>    }
>    {
>    	path: '/***',
>    	components: 组件名
>    }
>]



### 6.7路径的模式

*系统默认使用`哈希模式`展示地址栏，可以通过修改`mode:`来改变模式*

>//router/index.js
>export default new Router({
>  routes: [...],
>  mode: '路径模式'  //(eg:'history',)
>})

#### 6.7.1 hash模式

*地址和path之间会有一个`#/`隔开*（通过router-link解析的a[href]前也有`#/`)

![image-20210402103557700](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210402103557700.png)

#### 6.7.2 history模式

*由html提供，地址与path只用`/` 隔开*
![image-20210402103731577](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210402103731577.png)



### 6.8传递参数

#### 6.8.1 params方式

**步骤**

* 在`routes:[]`中设置动态获取的参数

  * ```json
    {
        //动态路由，获取userId的值
        path: '/user/:userId',
        component: User,
    },
    ```

    **注：参数要用`/:`隔开**

* 在App.vue的data()中设置userId，并在router-link中为to绑定拼接了userId的path值

  * ```js
    data () {
        return {
            userId: "张新建",
        }
    },
    ```

  * ```html
     <div id="app">
         <!--通过模板字符串拼接userId-->
        <router-link :to="`/user/${userId}`">用户</router-link>
        <router-view></router-view>
      </div>
    ```
    
    **注意：传递参数时，-link的to属性要用v-bind绑定**

* 在User.vue组件中通过`this.$route.params.userId`定义计算属性userId，获取在App.vue定义的userId的值

  * ```js
    computed: {
        userId() {
            //通过$route.params访问routes:[]中当前路由的参数(path`:`后面的参数)
            return this.$route.params.userId
        }
    },
    ```

  * 最后在User.vue中使用App.vue传递来的参数

  ```html <div>
   <div>
       <h1>User</h1>
       <p>USER</p>
       <!-- 获取计算属性的userId -->
       <h2>{{userId}}</h2>
   </div>
  ```

  **结果**
  ![image-20210402145252926](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210402145252926.png)



#### 6.8.2 query方式

**步骤**

* 在App.vue页面中通过`router-link`标签v-bind绑定to属性传入path和 query中的参数

>:to="{path:'', querry: {变量名:值, ......, 变量名:值}}"

```html
<router-link :to="{path: '/profile', query: {name: 'Coob', age: 22, height:177}}">档案</router-link>
```

* 在与to绑定的页面中，通过`$route.query.变量名`使用传入的参数

  ```html
  <div>
       <h2>Profile.vue</h2>
       <p>{{$route.query.name}}</p>
       <p>{{$route.query.age}}</p>
       <p>{{$route.query.height}}</p>
   </div>
  ```

结果
![image-20210404181917693](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210404181917693.png)





### 6.9路由的懒加载

*当打包构建应用时, 随着功能的变多打包后的JS文件会变得非常大,影响页面加载
所以要把不同路由对应的组件分割成不同的代码块,然后当路由被访问的时候才加载对应组件,来提高效率*

#### 6.9.1实现

*在router的index.js中使用懒加载的方式导入组件，代替直接使用import导入组件的方式*

>const 组件名 = () => import('组件相对路径')

```js
// import Home from '../components/Home.vue'

//使用懒加载，导入组件
const Home = () => import('../components/Home.vue')
```

#### 6.9.2打包后的js文件

*使用懒加载并`npm run build`打包后的生成js文件*

![image-20210404164603259](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210404164603259.png)

与import直接导入组件的方式相比，多出了**每个组件独立的js文件**，而不是将所有组件的js代码集成到app.js文件中

app.js：存放打包后的业务代码
manifest.js：存放所有入口文件依赖的内容
vendor.js：存放开发第三方信息(vue......)



### 6.10嵌套路由

* 创建对应的子组件，并且在路由映射中配置对应的子路由(在父路由的`children:[]`中配置).

  ```js
  {
      path: '/home',
          component: Home,
              children:[
                  {
                      //子路由的path路径前不可加斜杠！！
                      path: 'news',
                      component: HomeNews
                  },
                  {
                      path: 'message',
                      component: HomeMessage
                  },
              ]
  },
  ```

* 在**父路由的组件**内部使用`<router-view>`标签

  ```html
  <router-link to="/home/news">新闻</router-link>
  <router-link to="/home/message">讯息</router-link>
  <router-view></router-view>
  ```



### 6.11$router与$route的区别

```js
//$router，所有页面的路由信息(index.js中的routes:[])
console.log(this.$router)
//$route，处于活跃的路由的信息（浏览器上当前显示的页面）
console.log(this.$route)
```



### 6.12[全局导航守卫](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB)



#### 6.12.1前置守卫

*监听路由改变前*

>router.beforeEach((to, from, next)=>{})

参数解析:
➢to: 即将要进入的目标的路由对象.
➢from: 当前导航即将要离开的路由对象.
➢next: 调用该方法后,才能进入下一个钩子.

**通过beforeEach可以配置路由跳转页面的网页标题**
（1）在每个页面的路由配置的meta[]中的title设置页面标题

```js
{
      path: '/home',
      component: Home,
      meta: {
        title: '首页'
      }
},
```

（2）调用beforeEach函数，获取当前路由页面meta中的title并设置为网页标题

```js
router.beforeEach((to, from, next)=>{
  //只使用matched的第一个元素的meta，使子路由显示父路由的标题
  document.title = to.matched[0].meta.title
  //console.log(to)
  //必须调用next方法
  next()
})
```

![image-20210404210051557](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210404210051557.png)



#### 6.12.2后置钩子

*监听路由改变后*

>router.afterEach((to, from)=>{})



## 7.keep-alive

*Vue的内置组件，使被包裹的组件保留状态。被包裹在keep-alive里的所有路径匹配到的视图组件都会被缓存*

两个非常重要的属性:
include -字符串或正则表达,只有匹配的组件会被缓存
exclude -字符串或正则表达式,任何匹配的组件都不会被缓存



### 7.1记录上一个页面选择的状态

（1）包裹想要缓存显示的标签

```html
<keep-alive>
    <div></div>
</keep-alive>
```



（2）在想要缓存显示的文件中保存离开路径

```js
activated() {
      //当前页面活跃时，保存当前路径
      this.$router.push(this.path)
      console.log( 'activated' )
},
beforeRouteLeave (to, from, next) {
    //记录离开时的路径
    console.log( this.$route.path) 
    this.path = this.$route.path
    next()
 },
```

生命周期函数由哪些？

```js
//这两个生命周期函数，只有该组件被保持了状态使用了keep-alive时，才是有效的
//当前页面活动时生效
activated() {
    console.log( 'activated' );
},
//当前页面不活动时生效    
deactivated() {
	console. log( 'deactivated' );
}
```

