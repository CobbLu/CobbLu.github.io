---
title: Vuex
publish: false
---

*一个为Vue.js应用程序开发的**状态管理模式***

*可以简单的将其看成把需要多个组件共享的变量全部存储在一个对象里面。再将这个对象放在顶层的Vue实例中，让其他组件可以使用。Vuex就是为了提供一个在多个组件间共享状态的插件*

## 1.核心概念

**状态管理**

![image-20210409093733793](图片/image-20210409093733793.png)

  

### 1.1.State

*`单一状态树Single Source Truth`，**数据源存放地***

*里面的属性会被加入到**响应式**系统中，当属性发生变化时，会通知所有界面中用到该属性的地方，让界面发生刷新*

*用一个对象就包含了全部的应用层级状，每个应用将仅仅包含**一个 store 实例***

组件中访问state中的变量

```js
//组件中使用state中的变量
$store.state.变量名
```

### 1.2.Getters

*处理从store中的 state里派生出一些状态，可以认为是**store的计算属性**`*

getters中定义的函数有**两个参数**：`state`,`getters`

```js
//组件中使用getters中的方法
$store.getters.方法名
```

当getters中的函数需要接收外部参数时，要**返回一个匿名函数**并接收其他页面传的参数

```js
//其他页面传递参数
{{ $store.getters.overAgeStu(20) }}

//返回age>20的学生信息
overAgeStu(state) {
      return age => {
        return state.Student.filter(s => s.age > age)
      }
}
```

### 1.3.Mutations

*Vuex的store**状态更新的唯一方式：提交mutation***

mutations中定义的函数有**一个默认参数**：`state`

#### 1.3.1.`payload`

*mutations的载荷，用于更新数据时携带一些额外的参数。多个参数时`payload`可用对象形式传递*

提交(法1)：`this.$store.commit('mutations中的方法名', 参数名)`

```js
addStudent() {
      const stu = {name: 'bibi', age: '27'}
      this.$store.commit('addStudent', stu)
}
```

提交(法2)：以对象的方式提交，`type: ''`是mutations中的方法名

```js
addStudent() {
    const stu = {name: 'bibi', age: '27'}
    this.$store.commit({
        type: 'addStudent',
        stu
    })
}
```

接收(法1)：`方法名(state, 参数名)`

```js
 addStudent(state, stu) {
      state.Student.push(stu)
}
```

接收(法2)：接收的是一个对象

```js
 addStudent(state, payload) {
      state.Student.push(payload.stu)
}
```

![image-20210409163824865](图片/image-20210409163824865.png)



#### 1.3.2.类型常量

*为了避免**提交**和**定义**mutations中的方法名的不一致，可将其**定义成常量使用***

（1）创建`store/mutations-types.js`文件，用于存放定义的常量

（2）定义常量

```js
export const 常量名 = 'mutations中的方法名'
```

（3）提交方使用常量

```js
//导入
import {常量名} from './store/mutations-type'

//提交
组件中的方法名() {
      this.$store.commit(常量名)
},
```

（4）接收方使用常量

```js
//导入
import{常量名} from './mutations-type'

//接收
[常量名](state) {
      .......
},
```

### 1.3.3.注意

#### 避免异步操作

*主要的原因是devtools可以帮助我们捕捉mutation的快照.*

*但是如果是异步操作,那么devtools将不能很好的追踪这个操作什么时候会被完成.也就是说**devtools显示的state**可能与**响应到页面的state**不同*



### 1.4.Actions

*`actions`与`mutations`类似，来代替`mutations`进行**异步操作***

actions中定义的函数有**一个默认参数**：`context`

context是一个对象
![image-20210410114832576](图片/image-20210410114832576.png)



#### 1.4.1.使用

*VueComponents->actions->mutations*

（1）在组件中通过`this.$store.dispatch`提交到actions的方法中，且可以接收参数写法与mutations类似

```js
组件中的方法名() {
    this.$store.dispatch('actinos中的方法名', 'hello')
}
```

（2）在actions中通过`context.commit('mutations中的方法名')`提交到mutatinos的方法中

```js
actinos中的方法名(context, payload) {
    setTimeout(() => {
        context.commit('mutations中的方法名')
        console.log(payload)	//hello
    }, 2000)
}
--------------------------------------------------------
//context可以结构使用，这样使用内部属性时就不用写`context.`
actinos中的方法名({state, getters, commit, ......}, payload) {
    .......
}
```

（3）mutations中的方法对state进行处理



#### 1.4.2.结合Promise使用

*返回异步操作的状态，actions中的方法返回一个`new Promise`，组件中的方法通过`this.$store.dispatch().then()`接收状态*

（1）组件中的方法，调用actions方法中返回Promise的`then`

```js
addCityInfo() {
      this.$store
      .dispatch('actionAddCityInfo', 'hello')
      //调用actionAddCityInfo方法中返回Promise的then
      .then(value => {
        //弹出成功状态的信息
        alert(value)
      })
},
```

（2）actions中的方法，返回一个`new Promise`

```js
actions: {
    actionAddCityInfo(context, payload) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                //通过commit提交到mutations的方法中
                context.commit('addCityInfo')
                //打印dispatch传递的参数
                console.log(payload)

                resolve('添加成功')
            }, 2000)
        })
    }
},
```

（3）mutations中的方法对state进行处理



### 1.5.Modules

*当应用变得非常复杂时,store对象就有可能变得相当臃肿
为了解决这个问题, Vuex允许我们**将store分割成模块(Modules)**,而每个模块拥有自己的state、mutations、actions、getters等*

#### 1.5.1.使用

（1）在store对象外定义模块，并在`modules: {}`中绑定

```js
const moduleA = {
  state: {},
  mutations: {},
  getters: {},
  actions: {},
}

------------------------------------------------------------------------

modules: {
    a: moduleA
}
```

（2）组件中使用模块state中的变量

```js
$store.state.模块名.变量名
```

（3）**模块mutations中的方法**，使用方法与store中mutations一样

（4）**模块中的getters**除了`state`，`getter`外还有一个`rootState`参数，用于**访问store中的state**

（5）**模块中的actions**的`context.commit()`只能提交到**模板中的mutations**。

![image-20210410115643443](图片/image-20210410115643443.png)



## 2.安装&配置



```
cnpm install vuex --save
```

在assets目录下创建`store\index.js`文件

```js
import Vue from 'vue'
//1.导入vuex
import Vuex from 'vuex'

//2.安装插件
Vue.use(Vuex)

//3.创建对象
const stroe = new Vuex.Store({

})

//4.导出store对象
export default stroe
```

`main.js`中导入使用store

```js
import store from './store'

new Vue({
  ......
  store,
  ......
})

```

### 2.1.安装Devtools

*调试vue程序的浏览器插件*

![image-20210409100929985](图片/image-20210409100929985.png)



## 3.使用例 

### 3.1.加减按钮   

（1）在store对象的`state`中设置共享的属性	

```js
 state: {
    counter: 1000,
 },
```

（2）在store对象的`mutations`中定义方法更改store中的状态

更改Vuex的store中的状态的唯一方法是提交 mutation

```js
mutations: {
    //此处的state前不用写this.
    increment(state) {
      state.counter++
    },
    decrement(state){
      state.counter--
    }
},
```

（3）组件中`使用state中的属性`

```html
<!--$store.state.属性名-->

<h2>{{ $store.state.counter }}</h2>
```

（4）组件中定义方法，通过`this.$store.commit('')`提交mutation改变store的状态

```js
<button @click="addition()">+</button>
<button @click="subtraction()">-</button>

-----------------------------------------------------------

methods: {
    addition() {
      this.$store.commit('increment')
    },
    subtraction() {
      this.$store.commit('decrement')
    }
},
```

### 3.2响应式更新state的数据

在state中的数据是响应式的，对其**响应式的更新**可以通过

```js
import Vue from 'vue'

//添加
Vue.set(数组名, '添加的属性', '属性值')
//删除
Vue.delete(数组名, '删除的属性')
```

```js
<button @click="addCityInfo()">添加城市信息</button>
<button @click="removeCityInfo()">删除城市信息</button>

--------------------------------------------------------

//提交状态
addCityInfo() {
     this.$store.commit('addCityInfo')
},
removeCityInfo() {
     this.$store.commit('removeCityInfo')
}

--------------------------------------------------------

//响应式添加/删除CityInfo的数据
addCityInfo(state) {
    Vue.set(state.cityInfo, 'Temperature', '30C')
},
removeCityInfo(state) {
    Vue.delete(state.cityInfo, 'City')
}
```



## 4.Vuex文件结构

*store 文件太大，只需将 `actions`、`mutations` 和 `getters` 分割到单独的文件，并创建modules文件夹存放模块文件。*

![image-20210410144727372](图片/image-20210410144727372.png)

（1）抽取各个核心，以mutations为例

```js
//导入mutations的类型常量
import{常量名} from './mutations-types'

//响应式更新数据需要用到Vue.set和Vue.delete
import Vue from 'vue'

//导出
export default {
    .........
}
```

（2）导入到index.js并使用

![image-20210410145316966](图片/image-20210410145316966.png)