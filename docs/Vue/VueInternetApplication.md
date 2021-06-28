---
title: Vue网络应用
publish: false
---

## 1.axios+vue

### 1.1.axios.all([])

*发送**并发请求**，以**数组**形式返回*

```js
axios.all([axios({}), ......, axios({})]).then(value => {})
```

### 1.2.axios.defaults.

*全局配置*

```js
axios.defaults.配置 = ......  

axios.defaults.baseURL = 'http://123.207.32.32:8000'  //默认前缀地址
```

### 1.3.创建axios实例

*创建对应的axios实例，存放**公共配置***

```js
const 实例名 = axios.create({ 配置信息 })

const instance1 = axios.create({
   baseURL: 'http://123.207.32.32:8000',
   timeout: 5000,
})
```

### 1.4.封装网络请求

*封装一个request网络请求模块，src下将创建一个文件夹`network/request.js`保存网络配置*

*为什么封装：更改第三方网络请求工具时，降低修改代码的工作量*

![image-20210411112306037](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210411112306037.png)

（1）创建一个函数返回存放公共配置的axios实例

```js
//引入axios
import axios from 'axios'

//config接收网络配置
export function request(config){
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  
  //网络请求
  return instance(config)
}
```

**注意：**  axios实例内部实现了Promise，所以**只需返回实例**。调用时通过**then接收**网络请求成功信息/失败信息

（2）网络请求，调用request函数，通过then接收请求的数据

```js
import { request } from './network/request'

request({
  url: '/home/multidata',
}).then(value => {
  console.log(value)
}, reason => {
  console.log(reason)
})
```

### 1.5.axios拦截器

*`interceptors`*

（1）请求拦截器

*`instance.interceptors.request.use(config=>{}, err=>{})`*

*在请求之前进行一些配置，配置完成后要**将config返回**反之则会被一直拦截*

```js
instance.interceptors.request.use(config => {
    //console.log(config)
    return config
}, err => {
	console.log(err)
})
```

思维发散：请求拦截的应用？

* 可为config中添加配置信息
* 发送网络请求时，在界面中显示请求的图标（加载转圈圈的动画）
* 某些网络请求(比如登录(token))，必须携带些特殊的信息



（2）响应拦截器

`instance.interceptors.request.use(res=>{}, err=>{})`

*在响应之后对数据进行一些处理，处理完成后要**将res返回***

```js
instance.interceptors.response.use(res => {
    //console.log(res)
    return res
  }, err => {
    console.log(err)
  })
```

（3）`config`和`res`的内容对比

![image-20210411150341604](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210411150341604.png)





### 1.5.应用

#### 1.5.1.获取笑话

![image-20210320100029069](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210320100029069.png)

```html
<!--点击按钮获取joke-->
<div id="app">
        <input type="button" value="获取笑话" @click="getJoke">
        <p>{{ joke }}</p>
    </div>
    <script>
        let app = new Vue({
            el:"#app",
            data:{
                joke:"笑话",
            },
            methods:{
                getJoke:function(){
                    let __this = this
                    axios.get("https://autumnfish.cn/api/joke").then
                    (function(value){
                        __this.joke = value.data
                    }, function(reason){
                        console.log(reason)
                    })
                }
            },
        })
    </script>
```

## 2.axios配置项

| express                                      | main                    |
| -------------------------------------------- | ----------------------- |
| url: ''/user',                               | 请求地址                |
| method: 'get',                               | 请求类型                |
| baseURL: 'ttp://ww.mt com/api',              | 请根路径                |
| transformRequest:[function(data){}           | 请求前的数据处理        |
| transformResponse:[function(data){}          | 请求后的数据处理        |
| headers:{'x Requested With:XMLHttpRequest'}, | 自定义的请求头          |
| params:{ id: 12 },                           | URL查询对象（get/post） |
| data:{id: 12},                               | 请求体查询对象(post)    |

