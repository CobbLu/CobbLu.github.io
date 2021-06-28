---
title: Vue
publish: false
---

https://cn.vuejs.org/

## 1.1引入

```html
<!-- 开发环境版本，包含了有帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

```html
<!-- 生产环境版本，优化了尺寸和速度 -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```



## 1.2.Hello Vew

```html
<div id="app">
        {{ msg }}
</div>
<script>
    //创建vue实例
    let app = new Vue({
        el:"#app",
        data:{
            msg:"Hello Monther Fuck"
        }
    })
</script>
```



## 1.3.Vue实例传入的options

[其他的options](https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E6%95%B0%E6%8D%AE)

### 1.3.1.`el:""`

*挂载器*

*设置vue实例挂载的元素，通过css选择器选择标签（建议id选择器）为其加载数据*

>特点:
>
>作用域：el选中的标签，及其**后代的标签***
>
>不可作用于单标签，且不可作用于body和html标签



### 1.3.2.`data:{}`

*存放Vue实例对应的数据对象*

实例接受对象

```js
data(){
    
}
```

**组件的定义只接受 `function`**

```js
data () {
    return {
        
    }
}
```



### 1.3.3`methods:{}`

*定义属于Vue的一些方法，可以在其它地方调用，也可以在指令中使用*

#### 方法？函数？

在对象中叫方法，在对象外叫函数





### 1.3.4.`computed:{}`

*计算属性,存放计算数据的函数，函数名尽量不用动词，调用时可不用括号*

1)特点

* `计算属性`多次调用只*会执行一次*，而`methods`*调用几次就执行几次*

2)set和get

```html
<div id="app">
    <h2>{{ fullName }}</h2>
</div>
```

```js
const app = new Vue({
    el: "#app",
    data: {
        firstname: "sjcoob
        lastname: "sj"
    },
    computed: {
        //完整写法，包含set读入,set含有一个参数可用于读取数据;get输出
        fullName: {
            set: function(value){
                const name = value.split(' ')
                this.firstname = name[0]
                this.lastname = name[1]
            },
            get: function(){
                return this.firstname + ' '  + this.lastname
            }
        }
    }
})


```

```js
//计算属性简写
fullName : function(){
    return this.firstname + ' '  + this.lastname
}
fullName() {
    return this.firstname + ' '  + this.lastname
}
```

![image-20210427201820428](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210427201820428.png)



#### 计算属性传参

*vue中computed计算属性无法直接进行传参，如果有传参数的需求可以使用闭包函数（也叫匿名函数）实现*

```js
computed: {
    statusColor() {
      return function(val) {
        console.log(val);//根据val进行操作
      };
    },
  },
```





### 1.3.5.`filter:{}`

>过滤的属性 | 过滤器方法名 

```html
<td>{{ item.price | showPrice }}</td>
```

```js
//过滤器
filters: {
    showPrice(price){
        return "￥" + price.toFixed(2)
    }
},
```





### 1.3.6.`components:{}`

*在Vue实例中注册组件，**局部组件**（只能用于当前Vue实例中）*

>//实例外面创建组件构造器对象
>const 组件名 = Vue.extend({
>	template:`组件内容`
>}) 
>
>components:{
>	组件标签名: 组件名
>}

>//es6增强写法
>components: {
>	组件标签名/组件名
>}

```js
//注册一个叫Cpn3的局部组件
components: {
    Cpn3: Vue.extend({
        template: `<h2>shabi</h2>`
    })
}
```

*在组件构造器中注册组件，该组件可在当前构造器的`template`中使用，作为当前构造器的子组件*

```html
<div id="app">
    <cpn2></cpn2>
</div>
```

```js
const cpnC1 = Vue.extend({
    template:
    `<div>
		<h2>我是标题1</h2>
		<p>内容1</p>
	 </div>`
})
//cpn1是cpn2的子组件
const cpnC2 = Vue.extend({
    template:
    `<div>
		<h2>我是标题2</h2>
		<p>内容2</p>
		<cpn1></cpn1>
	</div>`,
    //cpn1只能在此作用域内有效（相当于局部组件），app作用域中虽然父组件cpn2注册了，但是cpn1不能在app中用的
    components: {
        cpn1: cpnC1
    }
})

let app = new Vue({
    el: '#app',
    components:{
        cpn2: cpnC2
    }
})
```



## 1.4.`{{}}`

*mustache语法*

### 1.4.1.基本用法

```html
<h2>{{ Song1 }}</h2>
```

```js
data: {
    Song1: 'SaveYourTears',
    Song2: 'BlindingLights'
    a : true
},
```

### 1.4.2.拼接字符串

*变量+字符串*

```html
<h2>{{ Song1 + Song2 }}</h2> //SaveYourTearsBlindingLights
```

*变量加变量*

```html
<h2>{{ Song1 + ' Weeknd' }}</h2>//SaveYourTears Weeknd
```

### 1.4.3.支持表达式

```html
<h2>{{ !a }}</h2> //false
```





## 1.5.Vue指令

*类似于标签中的属性，vue实例中的数据可作用于其属性值*

### 1.5.1.v-once

*该指令表示的元素和组件**只渲染一次**，不会随着数据的改变而改变（在不刷新页面的情况下）*

*且无需跟任何表达式*

```html
<div id="app">
    <h2>{{ msg }}</h2>
    <h2 v-once>{{ msg }}</h2>
</div>
```

```js
const app = new Vue({
    el: "#app",
    data: {
        msg: "很尴尬"
    }
})
```

![image-20210427204138924](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210427204138924.png)



### 1.5.2.v-pre

*跳过元素和它子元素的编译过程，显示原本的Mustache语法，且无需跟任何表达式**



### 1.5.3.v-cloak

*遮住未编译的Mustache语法，使其不会显示在页面上。在vue解析之后，该属性就会消失。且无需跟任何表达式*



### 1.5.4.v-text

*设置标签文本值*

**使用**

```html
<div id="app">
        <h3 v-text="msg"></h3>
        <h3>{{ msg }}</h3>
</div>
```

![image-20210319105244028](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210319105244028.png)

**区分`{{ }}`Mustache语法**
`v-text`默认的写法会替换全部内容，使用`{{ }}`可以替换指定内容

```html
<div id="app">
        <h3 v-text="songs[0]">The Weeknd </h3>
        <h3>{{ songs[0] }} The Weeknd </h3>
</div>
```

![image-20210319110055624](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210319110055624.png)

拼接字符串都是通过`+''`

```html
<h3 v-text="songs[0] + 'jj' "></h3>
<h3>{{ songs[0] + 'hh'}}</h3>
```

![image-20210319110321566](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210319110321566.png)



### 1.5.5.v-html

*设置标签的innerHTML*

```html
<div id="app">
         <p v-html="content1"></p>
         <p v-html="content2"></p>       
</div>
-------------------------------------------------
data:{
content1:"<a href='http://typora.io'>Typora</a>",
content2:'Tpora'
}
```

![image-20210319111030411](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210319111030411.png)

### 1.5.6.v-on

*为元素绑定事件*

```
v-on:事件名="vue实例中定义的方法"
简写：
@事件名="vue实例中定义的方法"
```

```html
<div id="app">
           <input type="button" value="v-on指令" v-on:click="Showsong">
           <input type="button" value="v-on简写" @click="Showsong">
           <input type="button" value="双击事件" @dblclick="Showsong">
    	   <h2 @click="ChangeSong">{{ song }}</h2>
</div>
<script>
        let app = new Vue({
            el:"#app",
            data:{
                song:"Fly me to the moon"
            },
            methods:{
                Showsong:function(){
                    alert("Astronauts Ocean")
                },
                ChangeSong:function(){
                    this.song += "好听！！"
                }
            }
        })
</script>
```

![image-20210319114903547](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210319114903547.png)

#### 传递自定义参数

* 绑定事件的方法写成`函数调用的形式`，可以传入自定义参数
* 定义方法时需要`定义形参`来接收传入的实参

#### 事件修饰符

https://cn.vuejs.org/v2/api/#v-on

```
@事件名.事件修饰符="vue实例中定义的方法"
```

```html
<div id="app">
        <input type="button" value="点击" @click="fun('喜喜', 2)">
        <!-- 键盘输入回车时，调用sayHi() -->
        <input type="text" @keyup.enter="sayHi">
    </div>
<script>
    let app = new Vue({
        el:"#app",
        methods:{
            fun:function(a, b){
                console.log(a)
                console.log(b)
            },
            sayHi:function(){
                alert("Hello")
            }
        }
    })
</script>
```



### 1.5.7.v-show

*根据表达值(也可以表达式)的真假，切换元素的显示true和隐藏false*
*原理：修改display的值*

```html
<!--按钮控制div的显示和隐藏-->
<div id="app">
        <div v-show="isShow" id="box" style="width: 100px;height: 100px;background-color: slateblue;"></div>
        <input @click="changeIsShow" type="button" value="切换显示状态"></input>
</div>
<script>
    let app = new Vue({
        el:"#app",
        data:{
            isShow:false
        },
        methods:{
            changeIsShow:function(){
                this.isShow = !this.isShow
            }
        }
    })
</script>
```



### 1.5.8.v-if和v-else

*v-if根据表达值的真假，切换元素的显示和隐藏，与V-show的使用方法一致*
*原理：通过操作DOM树（将显示的内容添加到文档，隐藏的内容从文档删除）*

*v-else用于显示v-if为false的元素或组件,且无需跟任何表达式**

```html
<div id="app">
    <span v-if="isUser">
      <label for="username">用户账号</label>
        <!-- key用于解决vue的复用问题 -->
      <input type="text" id="username" placeholder="账号" key="username">
    </span>
    <span v-else>
      <label for="email">邮箱</label>
      <input type="text" id="email" placeholder="邮箱" key="email">
    </span>
    <button @click="isUser=!isUser">切换类型</button>
  </div>
  <script>
    const app = new Vue({
      el: "#app",
      data: {
        isUser: true
      },
    })
  </script>
```

#### v-else-if

```html
<div id="app">
    <h2 v-if="score>=90">优秀</h2>
    <h2 v-else-if="score>=80">良好</h2>
    <h2 v-else-if="score>=60">及格</h2>
    <h2 v-else>不及格</h2>
</div>
  <script>
    const app = new Vue({
      el: "#app",
      data: {
        score: 90
      },
    })
  </script>
```



### 1.5.9.v-bind

*设置元素的属性*

**修改属性值**

```
v-bind:属性名="vue实例中定义的数据"
简写：
:属性名="vue实例中定义的数据"
```

**类名的绑定**

```
:class="vue实例中定义的布尔值?'类名':' ' "
:class="{类名:vue实例中定义的布尔值}"
```

```html
<style>
        .active{
            width: 100px;
            height: 100px;
        }
</style>

<div id="app">
    <input type="button" :value="inpValue" :class="isActive?'active':' '" @click="toggleActive">
    <input type="button" :value="inpValue" :class="{active:isActive}" @click="toggleActive">
</div>
<script>
    let app = new Vue({
        el:"#app",
        data:{
            inpValue:"变大",
            isActive:false
        },
        methods:{
            toggleActive:function(){
                this.isActive = !this.isActive
                this.isActive ? this.inpValue = "变小" : this.inpValue = "变大"
            }
        }
    })
</script>
```



### 1.5.9.v-for

*遍历，写法和python `in`类似*

```
v-for="(遍历项,下标) in 数组名"			//下标可以省略
```

```html
<div id="app">
        <input type="button" value="添加" @click="add">
        <input type="button" value="移除" @click="remove">

        <ul>
            <li v-for="(item, index) in songs">
                {{ index+1 }} my喜欢的歌手：{{ item }}
            </li>
        </ul>
        <ul>
            <li v-for="item in singer" :title="item.name">
                {{ item.name }}
            </li>
        </ul>
    </div>
    <script>
        let app = new Vue({
            el:"#app",
            data:{
                songs:["Die for you", "Circle", "OH NO! HO YES!", "D.N.A"],
                singer:[
                    {name:"The Weeknd"},
                    {name:"中森名菜"},
                    {name:"kandrick Lamar"}
                ]
            },
            methods:{
                add:function(){
                    this.singer.push({name:"Post Malon"})
                },
                remove:function(){
                    this.singer.shift()
                }
            }
        })
    </script>
```

![image-20210319194348305](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210319194348305.png)



#### v-for绑定key

* 绑定key以后，在当前循环数组或对象中插入元素时，只改变插入元素的位置；其后的元素通过key绑定，不会改变其位置
* 不绑定key，在当前循环数组或对象中插入元素时，其插入元素和它后面的元素的位置都会改变



##### 响应式的数组方法

|           响应式           |           非响应式           |
| :------------------------: | :--------------------------: |
| push()：在数组最后添加元素 | 通过索引值来修改数组中的元素 |
|    pop()：最后删除元素     |                              |
|    unshift()： 最前添加    |                              |
|     shift()：最前删除      |                              |
|     splice()：删/插/替     |                              |
|           sort()           |                              |
|         reverse()          |                              |
|         Vue.set()          |                              |
|        Vue.delete()        |                              |



### 1.5.10.v-model

*获取和设置**表单元素**的值（双向数据绑定）*

#### 1.text类型

```html
<div id="app">
       <input type="text" v-model="msg" @keyup.enter="getM">
       <h2>{{ msg }}</h2>
    </div>
<script>
    let app = new Vue({
        el:"#app",
        data:{
            msg:"Coob"
        },
        methods:{
            getM:function(){
                alert(this.msg)
            }
        }
    })
</script>
```

#### 2.radio

```html
<div id="app">
    <label for="male">
        <!-- 通过v-model后name="sex"属性可省略 -->
        <!-- name属性：只有两个复选框添加同一个name才会互斥 -->
        <input type="radio" id="male" value="男" v-model='sex'>男
    </label>
    <label for="female">
        <input type="radio" id="female" value="女" v-model='sex'>女
    </label>
    <h3>选择的是：{{ sex }}</h3>
</div>
<script>
    const app = new Vue({
        el: "#app",
        data: {
            sex: '女',
        }
    })
</script>
```

*将input的id与label的for绑定，点击input外的文字会自动聚焦到input标签*

#### 3.check

```html
<div id="app">
      <!--1. checkbox单选框-->
      <!-- <label for="agree">
      <input type="checkbox" id="agree" v-model="isAgree">同意协议
      </label>
      <h2>您选择的是: {{isAgree}}</h2>
      <button :disabled="!isAgree">下一步</button> -->

      <!--2. checkbox多选框-->
      <input type="checkbox" value= "篮球" v-model= "hobbies">篮球
      <input type="checkbox" value= "足球" v-model= "hobbies">足球
      <input type="checkbox" value= "乒乓球" v-model= "hobbies">乒乓球
      <input type="checkbox" value= "羽毛球" v-model= "hobbies">羽毛球
      <h2>您的爱好是: {{hobbies}}</h2>
  </div>
  <script>
  const app = new Vue( {
  el: '#app',
  data: {
  isAgree: false,
  hobbies:[]
  }
  })
  </script>
```

#### 4.select

```html
<div id="app">
  <!--1.选择多个-->
  <select name="abc" v-model="fruits" multiple>
  <option value="苹果">苹果</option>
  <option value="香蕉">香蕉</option>
  <option value="榴莲">榴莲</option>
  <option value="葡萄">葡萄</option>
  </select>
  <h2>您选择的水果是:{{fruits}}</h2>
</div>
<script>
  const app = new Vue({
  el: "#app",
  data: {
    fruits: [] 
  }
  })
</script>
```

#### 5.值绑定

通过`v-bind:value`动态的给value绑定值，不用自己一个一个的在html文件中输入

```html
<div id="app">
    <label v-for="item in originHobbies" :for="item">
      <input type="checkbox" :value="item" :id="item" v-model="hobbies">{{item}}
    </label>
    <h3>you的爱好是{{ hobbies }}</h3>
</div>
<script>
    const app = new Vue({
        el: "#app",
        data: {
            //将originHobbies的数据渲染绑定到页面，再用v-model将用户选取的数据存入hobbies中
            hobbies: [],
            originHobbies: ['篮球', '足球','乒乓球','羽毛球','台球','高尔夫球']
        }
    }) 
</script>
```


#### 6.事件修饰符

* `.lazy`修饰符: .
  	lazy修饰符可以让数据在失去焦点或者回车时才会更新

* `.number`修饰符:

  - 默认情况下,在输入框中无论输入的是字母还是数字,都会被 当做`字符串类型进行处理`。
  - number修饰符可以让在输入框中输入的内容自动转成数字类型

* `.tiem`修饰符

  * trim修饰符可以过滤内容左右两边的空格

