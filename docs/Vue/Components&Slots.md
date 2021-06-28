---
title: 组件&插槽
publish: false
---

## 1.组件化的基本使用

*模板标签名不能用大写？？*

```html
<div id="app">
    <!-- 3.使用组件 -->
    <my-cpn></my-cpn>
    <my-cpn></my-cpn>
    <my-cpn></my-cpn>
</div>
```

```js
 //1.创建组件构造器对象
const cpnC = Vue.extend( {
    template:`
                <div>
                <h2>我是标题</h2> 
                <p>我是内容，哈哈哈哈</p>
                <p>我是内容，呵呵呵呵</p> 
                </div>
                `
})
//2.注册组件(全局组件),局部组件需要在vue实例的components中注册
//组件标签名		组件构造器
Vue.component("my-cpn", cpnC)

let app = new Vue({
    el: "#app"
})
```

### 1.1.创建组件语法糖

*全局的component不加s*

#### 1.1.1.全局

>Vue.component('组件标签名', {
>	template: ''
>})

#### 1.1.2.局部

>components:{
>	'组件标签名': {
>		template: ''
>	}
>}


### 1.2.分离模板的写法

思考：分离模板写法支持局部组件吗？？？

注意：**组件模板应该只包含一个根元素！！！！**

#### 1.2.1.script标签

```html
<div id="app">
    <Cpn></Cpn>
 </div>
<script type="text/x-template" id= "模板id">
    <div>
        <h2>我是标题</h2>
        <p>我是内容，哈哈哈</p>
    </div>
</script>
```

```js
//创建全局组件
Vue.component('组件标签名',{
    template: '#模板id'
})
let app = new Vue({
    el: '#app',
    //创建局部局组件
    components:{
        '组件标签名': {
            template: '#模板id'
        }
    }
})
```

#### 1.2.2.template标签

```html
<div id="app">
    <Cpn></Cpn>
</div>
<template id="#模板id">
    <div>
        <h2>template标签</h2>
        <p>wwwww</p>
    </div>
</template>
```

js代码同上


## 2.组件数据的存放

*组件不能直接使用实例中的数据，因而组件对象中也有一个data属性（methods属性也有）*

注意：**data必须是一个函数**（确保组件复用时数据不会互相影响。每个组件中的函数在内存中的地址是不一样的，因而返回数据不会互相影响），而这个函数**返回的对象内部保存着数据**

```html
<template id="temp1">
        <div>
            <h1>Doja cat</h1>
            <p>{{ song }}</p>
        </div>
</template>

<script>
//全局组件对象
Vue.component('mycnp',{
    template: '#temp1',
    data(){
        return {
            song: 'sayso'
        }
    }
})

//局部组件对象
components: {
    'mycnp': {
        template: '#temp1',
            data() {
            return {
                song: 'say so'
            }
        }
    }
}
</script>
```


## 3.父子组件的通信

**数据需要从上层传递到下层**

1. 服务器请求到了很多的数据
2. 其中一部分数据,并非是我们整个页面的大组件来展示的,而是需要下面的子组件进行展示
3. 这个时候,并不会让子组件再次发送一个网络请求 ,而是直接**让大组件(父组件)将数据传递给小组件(子组件)**

### 3.1.方法

![image-20210324194227945](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210324194227945.png)

### 3.2.父--->子

**注意：父组件给子组件传的值要写在子组件的模板中**

#### 3.2.1.定义`props`

*子组件创建接收父元素数据的`props`*

props的两种定义形式：

>props:['存放父元素数据的变量名1','变量名2']
>//变量名

>proops:{
>//1.类型限制
>	变量名1:数据类型,
>	变量名2:数据类型
>	........
>//2.提供默认值(实例标签没有绑定元素时的值),以及必传值
>	变量名1:{
>		type: 数据类型，
>		default: 默认值
>		required: true/默认false
>	}
>	变量名2：{
>		.......
>	}
>	//注意：
>	类型是Object或Array时，默认值必须是一个函数
>	变量名4:{
>		type: Array,
>		default(){
>			return []
>		}
>	}
>
>}
>
>支持的type：String,Number.......

#### 3.2.2.绑定props[]

*在实例模板标签中将父元素数据与props[]中的元素绑定*

注意：

>实例模板标签中**v-bind或v-on绑定元素或事件**时的变量名不能存在大写所以不支持驼峰标识；v-bind需要通过`-`进行改写；如`mySongs`->`my-songs`；v-on则不能存在大写

#### 3.2.3.使用

*在模板中渲染父元素数据（用的是props[]的元素）*

```html
<div id="app">
    <!--2.在实例模板标签中将父元素数据与props[]中的元素绑定 -->
    <mycnp :fsinger="singer" ></mycnp>
</div>

<template id="temp1">
    <div>
        <!-- 3.在模板中渲染父元素数据（用的是props[]的元素） -->
        <h1>{{ fsinger }}</h1>
        <ul v-for="item in fsongs">
            <li>{{ item }}</li>
        </ul>
    </div>
</template>

<script>
    const mycnp = {
        template: '#temp1',
        //data函数没有东西也要返回空
        data() {
            return {}
        },
        //1.创建接收父元素数据的props[]
        //props:['fsinger', 'fsongs']
        props:{
            fsinger: {
                tyep: String,
                default: '无',
                required: true
            },
            fsongs: {
                tyep: Array,
                default() {
                    return ['I Cant Feel My Face']
                }
            }
        }
    }

    const app = new Vue({
        el: "#app",
        data: {
            singer: 'The weeknd',
            songs: ['Die for you', 'In your eyse', 'Blinding lights']
        },
        components: {
            //Es对象加强写法
            mycnp
        }
    })
</script>
```



### 3.3.子--->父

*通过自定义组件*

>1. 将子组件模板中需要传输数据的标签，**绑定响应事件**
>2. 子组件内创建函数，接收响应事件传过来的数据
>3. 在2.创建的函数中，自定义事件**`this.$emit('自定义事件名', 传递的数据)`**，将响应事件获取的数据传递到父组件
>4. 父组使用子组件，并件绑定子组件创建的自定义事件
>5. 父组件创建函数，处理自定义事件传递来的数据

```html
<div id="app">
    <!-- 4.父组件绑定子组件创建的自定义事件 -->
    <mycpn @item-click="cpnClick"></mycpn>
  </div>

  <!-- 子组件模板 -->
  <template id="temp1">
    <div>
      <!--1.将子组件模板中需要传输数据的标签，绑定响应事件 -->
      <button v-for="item in categories" @click="lickClick(item)">{{ item.name }}</button>
    </div>
  </template>

  <script>
    const mycpn = {
      template: '#temp1',
      data() {
        return{
          categories: [
            {id: '01', name: 'In your eyes'},
            {id: '02', name: 'blinding lights'},
            {id: '03', name: 'save you tears'},
            {id: '04', name: 'Too late'}
          ]
        }
      },
      methods: {
        //2.子组件内创建函数，接收响应事件传过来的数据
        lickClick(item) {
          //3.自定义事件this.$emit('自定义事件名', 传递的数据)，将响应事件获取的数据传递到父组件
          this.$emit('item-click', item)
        }
      }
    }

    const app = new Vue({
      el: "#app",
      data: {
        singer: 'The Weeknd',
        songs : ['Die for you', 'Starboy']
      },
      methods: {
        // 5.父组件创建函数，处理自定义事件传递来的数据
        cpnClick(item){
          console.log('cpnClick',item);
        }
      },
      components: {
        mycpn
      }
    })
  </script>
```



### 3.4.父子组件通信的v-model

*不能通过`props`将父组件的数据**直接**双向绑定到子组件中，
还需要再**用子组件的`data(){}`初始化一次数据***

子组件的数据改变，如何反向传给父组件？

```html
<div id="app">
    <!-- 1.绑定父组件的数据 -->
    <mycpn :number1="num1" :number2="num2"
    @num1change="num1change"
    @num2change="num2change"></mycpn>
  </div>

  <!-- 子组件模板 -->
  <template id="temp1">
    <div>
      <h2>props:{{ number1 }}</h2>
      <h2>data:{{ dnumber1 }}</h2>
      <!-- <input type="text" v-model="dnumber1"> 与下面一行等价-->
      <input type="text" :value="dnumber1" @input="num1Input">
      <h2>props:{{ number2 }}</h2>
      <h2>data:{{ dnumber2 }}</h2>
      <!-- <input type="text" v-model="dnumber2"> 与下面一行等价-->
      <input type="text" :value="dnumber2" @input="num2Input">
    </div>
  </template>

  <script>

    const app = new Vue({
      el: "#app",
      data: {
        num1: 122,
        num2: 232
      },
      methods: {
        num1change(value){
          //将从子组件获取的数据转换为float类型
          this.num1 = parseFloat(value)
        },
        num2change(value){
          this.num2 = parseFloat(value)
        },
      },
      components: {
        mycpn: {
          template: '#temp1',
          props: {
            //2.接收父组件的数据,设置number1和2的type
            number1: Number,
            number2: Number
          },
          data() {
            return {
              //3.将父元素的数据通过子组件的data,再做一次初始化
              dnumber1: this.number1,
              dnumber2: this.number2
            }
          },
          methods: {
            num1Input(event){
              //将input中的value赋值到dnumber中
              this.dnumber1 = event.target.value
              //为了让父组件可以修改值，发出一个事件
              this.$emit('num1change', this.dnumber1)
              //使dum2的值是dum1的100倍
              this.dnumber2 = this.dnumber1 * 100;
              this.$emit('num2change', this.dnumber2)
            },
            num2Input(event){
              this.dnumber2 = event.target.value
              this.$emit('num2change', this.dnumber2)
              //使dum1的值是dum2的100倍
              this.dnumber1 = this.dnumber2 / 100;
              this.$emit('num1change', this.dnumber2)
            }
          }
        }
      }
    })
  </script>
```

![image-20210326133433691](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210326133433691.png)



## 4.组件访问

### 4.1.父访问子

#### 4.1.1.$children

*`this.$children`访问所有子组件，以`数组形式`返回*

##### 4.1.2.$refs

*`this.$refs`可访问指定子组件，通过在子组件标签加入ref属性，$refs可根据ref的属性值访问到该子组件；以`对象形式`返回*

><子组件标签 ref="自定义名称"></子组件标签名>

```html
<body>
  <div id="app">
    <cpn></cpn>
    <cpn></cpn>
    <cpn ref="third"></cpn>
    <button @click="btn1click">$children</button>
    <button @click="btn2click">$refs</button>
  </div>

  <!-- 子组件模板 -->
<template id="cpn">
 <div>子组件</div>
</template>

<script>
  const app = new Vue({
    el: '#app', 
    data: {
    },
    methods:{
      btn1click() {
        //通过this.$children访问所有子组件，以数组形式返回
        console.log(this.$children)
        //通过this.$children遍历调用子组件的showMessage()函数，打印name属性
        for(i of this.$children){
          console.log(i.name)
          i.showMessage()
        }
      },
      btn2click() {
        //访问ref="third"的组件
        console.log(this.$refs)
        console.log(this.$refs.third.name)
        this.$refs.third.showMessage()
      }
    },
    components: {
      cpn: {
        template: '#cpn',
        data() {
          return{
            name: "子组件的name"
          }
        },
        methods:{
          showMessage() { 
            console.log('showMessage')
          }
        }
      }
    },
  })
</script> 
</body>
```


### 4.2.子访问父

#### 4.2.1.$parent

*`this.$parent`，访问父组件，以对象形式返回* 

##### 4.2.2.$root

*`this.$root`，访问根组件，以对象形式返回*



## 5.组件的插槽slot

*slot插槽标签是为了让封装的组件更加具有扩展性*

### 5.1.基本使用

* 模板内定义`<slot></solt>`，组件中写入对应插入的元素

* 插槽可定义默认值`<slot>`插入的内容`</solt>`，如果组件中有插入的内容，插槽默认值会被替换掉

* 如果有多个值，同时放入到组件中，则这几个值一并作为插槽替换，且会覆盖掉默认值

* 如果有多个插槽，且没有名字的插槽会被组件中的值替换掉

  ```html
  <body>
    <div id="app">
      <cpn><button>2</button></cpn>
      <cpn>
        <p>覆盖了按钮10</p>
        <h1>覆盖了按钮10</h1>
        <h2>覆盖了按钮10</h2>
        <h3>覆盖了按钮10</h3>
      </cpn>
      <cpn></cpn>
      <cpn></cpn>
    </div>
  
    <template id="cpn">
      <div id="cpn-div" style="background-color: aqua;">
        <h2>组件</h2>
        <slot><button>10</button></slot>
      </div>
    </template>
  
    <script>
      const app = new Vue({
        el: "#app",
        data: {
  
        },
        components: {
          cpn: {
            template: "#cpn",
            data() {
              return {}
            },
          }
        }
      })
    </script>
  </body>
  ```



### 5.2.具名化插槽

*为插槽命名，模板标签通过使用slot属性值对应插槽name的属性值替换*

```html
<div id="app">
<cpn><span slot="center">标题</ span></cpn>
<cpn><button slot="left">返回</button></cpn>
</div>
<template id="cpn">
I
<div>
<slot name="left"><span>左边</span></slot>
<slot name="center"><span> 中间</span></slot>
<slot name= "right"><span>右边</span></slot>
</div>
</template>
```

![image-20210326151932777](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210326151932777.png)



### 5.3.插槽内设置属性

插槽内设置属性在被插入时可能被替换成其他内容导致设置的属性失效
一般为插槽设置属性通过**在外嵌套一层div**，将插槽的属性写入div中，这样设置的属性就不会失效。

```html
<!-- <slot foo="test"></slot> -->
<div foo="test">
    <slot></slot>
</div>
```



## 6.编译作用域

*父组件模板的所用东西都会在父级作用域内编译；子组件模板的所有东西都会在子级作用域内编译*



## 7.作用域插槽的使用

*父元素替换插槽的标签，但是内容由子组件来提供*

```html
<div id="app">
    <cpn>
      <!-- 2.在子组件中使用template标签并通过slot-scope="slot"获取子组件数据。 -->
      <template slot-scope="slot">
        <!-- 3.使用子组件的数据，自定义数据展示方式（通过.的方式调用自定义的命名） -->
        <span>{{ slot.data.join(" | ")}}</span>
      </template>
    </cpn>
    
    <!-- 使用插槽默认值 -->
    <cpn></cpn>
  </div>

  <template id="cpn">
    <div>
      <!-- 1.绑定模板组件的pLanguages，并自定义命名 -->
      <slot :data="pLanguages">
        <ul>
          <li v-for="item in pLanguages">{{ item }}</li>
        </ul>
      </slot>
    </div>
  </template>

  <script>
    const app = new Vue({
      el: '#app',
      components: {
        cpn: {
          template: '#cpn',
          data() {
            return {
              pLanguages: [' JavaScript', 'C++', 'Java', 'C#', ' Python', 'Go',' Swift ']
            }
          }
        }
      }
    })
  </script>
```
