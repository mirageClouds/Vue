# Vue基础（核心）

## 	**初识Vue.js**

* 想让Vue工作，就必须创建一个Vue实例，而且需要传入一个配置对象。

* root容器里面的代码依然符合HTML规范，只不过混入了一些特殊的Vue语法

* root容器里面的代码被称为Vue模板

* Vue实例和容器是一一对应的

* 真实开发中只有一个Vue实例，并会配合组件一起使用

* {{ XXX }}中的XXX要                                                                                                                                                                                                                                                                                                                                     写js表达式，且XXX可以自动读取到data中的所有属性

* 一旦data中的数据发生改变，那么页面中用到数据的地方也会自动更新

* 区分js表达式和js代码(语句)

  * 表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方

    * ~~~javascript
      (1):a
      (2):a+b
      (3):demo(1)
      (4)：x===y ? 'a' : 'b'
      ~~~

  * js代码(语句)

    * ~~~
      if(){}
      for(){}
      ~~~

****

## **导入Vue.js**

### **Vue2.js下载**

* **开发者版本**：https://v2.cn.vuejs.org/js/vue.js			包含完整的警告和调试模式
* **生产者版本**：https://v2.cn.vuejs.org/js/vue.min.js    删除了警告，37.51KB min+gzip

### **Vue3.js下载**

* 进去后又键保存为本地文件进行导入

  * **Staticfile CDN（国内）** : https://cdn.staticfile.org/vue/3.0.5/vue.global.js
  * **unpkg**：https://unpkg.com/vue@next, 会保持和 npm 发布的最新的版本一致。
  * **cdnjs** : https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.5/vue.global.js

* **Vue导入**

  * ~~~html
    <script src="../vue.js"></script>
    ~~~

****

## **模板字符串**

* **语法**

  * ~~~html
    <p>{{ message }}</p>
    ~~~

* **参考代码**

  * ~~~html
    <div id="app">
    	<h1>你好,{{name}}</h1>
    	<hr/>
    	<p>{{school.name}}</p>
    	<a v-bind:href="school.url.toUpperCase()">点击</a>
    		<button></button>
    </div>
    
    
    <script>
    	new Vue({
    		el:'#app',
    		data:{
    			name:'兮心',
    			school:{
    				name:'Mirage',
    				url:'https://www.bing.com/#!'
    			}
    			
    		}
    	})
    </script>
    ~~~

****

## **数据绑定**

### **单向绑定**

* **语法**

  * ~~~html
    <input type="text" :value="name">
    ~~~

* 用法

  * ~~~html
    <div id="app">
        <p>单向绑定</p>
        <input type="text" :value="name"><br>
    </div>
    
    <script>
        new Vue({
           el:'#app',
           data:{
              name:'Mirage'
           }
        })
    </script>
    ~~~

### 双向绑定

* **语法**

  * ~~~html
    <input type="text" v-model="name">
    ~~~

* **用法**

  * ~~~html
    <div id="app">
        <p>双向绑定</p>
        <input type="text" v-model="name">
    </div>
    
    <script>
        new Vue({
           el:'#app',
           data:{
              name:'Mirage'
           }
        })
    </script>
    ~~~

### 参考代码

* ```html
  <body>
      <div id="app">
         <p>单向绑定</p>
         <input type="text" :value="name"><br>
         <p>双向绑定</p>
         <input type="text" v-model="name">
      </div>
      
      <script>
         new Vue({
            el:'#app',
            data:{
               name:'Mirage'
            }
         })
      </script>
  </body>
  ```

****

## **el与data的两种写法**

### el的写法

* **第一种**

  * ~~~html
    <div id="root">
        <p>{{name}}</p>
    </div>
    
    <script>
        let v = new Vue({
           el:'#root'
        })
    </script>
    ~~~

* **第二种**

  * ~~~html
    <div id="root">
        <p>{{name}}</p>
    </div>
    
    <script>
        let v = new Vue({})
        v.$mount('#root')
    </script>
    ~~~

### data的写法

* **第一种**

  * ~~~html
    <div id="root">
        <p>{{name}}</p>
    </div>
    
    <script>
        let v = new Vue({
           el:'#root',
           data:{
           	    name:'Mirage'
           }
        })
    </script>
    ~~~

* **第二种**

  * ~~~html
    <div id="root">
        <p>{{name}}</p>
    </div>
    
    <script>
        let v = new Vue({
           data:function (){
              return{
              
              }
           }
           
        })
    </script>
    ~~~

### 参考代码

* ```html
  <body>
  
  <div id="root">
      <p>{{name}}</p>
  </div>
  
  <script>
      let v = new Vue({
         el:'#root', //第一种写法
         // data:{   //data的第一种写法
         //     name:'Mirage'
         // }
         
         data:function (){   //data的第二种写法
            return{
            
            }
         }
         
      })
      v.$mount('#root')   //第二种el的写法
  </script>
  </body>
  ```

****

## MVVM模型

* **M：模型(Model)：对应data中的数据**

* **V： 视图(View)：模板**

* **VM: 视图模型(ViewModel)：Vue实例对象**

* **data中所有属性，最后都出现在了vm身上**

* **vm身上的所有属性，包括Vue原型上的所有属性，在Vue模板中都可以直接使用**

* **模板字符串可以读取到vm中的所有东西 **

* **参考代码**

  * ~~~html
    <div id="root">
      <h1>{{ name }}</h1>
      <h1>{{ address }}</h1>
    </div>
    
    
    <script>
        const vm = new Vue({
           el:'#root',
           data:{
              name:'兮心',
              address:'Mirage'
           }
        })
        console.log(vm)
    </script>
    ~~~


****

## **数据代理**

#### 回顾Object.defineProperty方法

* **enumerable    控制是否可以被枚举（遍历），默认值为false**

* **writable           控制属性是否被修改，默认值为false**

* **configurable   控制属性是否被删除，默认值false**

* **当有人读取属性时，get（getter）就会被调用，且返回值是属性的值**

* **当有人修改属性时，set（setter）就会被调用，且会收到修改的具体值**

* **参考代码**

  * ~~~html
    <script>
        let person = {
           name:'张三',
           sex:'男'
        }
        Object.defineProperty(person,'age',{        //这种写法不会被遍历，不会被修改
           value:18,
           enumerable:true,
           writable:true,
           configurable:true,
           
           get:function (){        //function可以直接省略不写
              console.log("有人读取age属性了")
           },
           
           set:function () {        //function可以直接省略不写
              console.log('有人修改age属性 ')
           }
        })
    </script>
    ~~~


#### **何为数据代理**

* **数据代理**：通过一个对象代理对另一个对象中属性的操作（读/写）

* 参考代码

  * ~~~html
    /*
    	修改obj1.x的值时，obj2.x的值等于obj1.x的值
    */
    <script>
        let obj1 = {x:300}
        let obj2 = {y:200}
    
        Object.defineProperty(obj2,'x',{
           get(){
              return obj1.x
           },
           set(v) {
              obj1.x = v
           }
        })
    </script>
    ~~~


#### Vue中的数据代理

* 修改name时，调用set方法将data中的name修改，然后通过get方法重新渲染DOM
  * ![image-20231202191112413](C:\Users\21592\AppData\Roaming\Typora\typora-user-images\image-20231202191112413.png)

* **getter**
  * 当读取属性时，会执行get中的方法，获取到数据，并渲染页面

* **setter**
  * 当修改属性时，会执行set中的方法，将修改的数据返回出去

* ![image-20231114190405746](C:\Users\21592\AppData\Roaming\Typora\typora-user-images\image-20231114190405746.png)

****

## **事件处理**

#### **事件的基本使用**

* **使用v-on:xxx 或者@xxx绑定事件，其中xxx是事件名**
* **事件的回调需要配置在methods对象中，最终会在vm上**
* **methods中配置的函数，不要用箭头函数，不然this就不是vm了**
* **methods中配置的函数，都是被Vue所管理的函数，this的指向是vm 或 组件实例对象**
* **@click = "demo" 和 @click = "demo($event)" 效果一致，但后者可以传参**

#### 事件的基本使用参考代码

* ~~~html
  <body>
  <div id="root">
      <h2>{{ name }}</h2>
      <button @click="ButtonInfo">点击提示信息(不传参)</button>
      <button @click="ButtonInfo1($event)">点击提示信息（传参）</button>
  </div>
  
  <script>
      
      const vm = new Vue({
         el:'#root',
         data:{
            name:'兮心'
         },
         methods:{
            ButtonInfo(){
               console.log(events)
            },
            ButtonInfo1(){
               console.log(events)
            }
         }
      })
  </script>
  </body>
  ~~~

#### **事件修饰符**

* **prevent**:阻止默认事件(常用)

  * ~~~html
    <a @click.prevent="showInfo" href="https://www.blilblil.com">点击</a>
    ~~~

* **stop**:阻止事件冒泡(常用)

  * ~~~html
    <div @click="showInfo" class="demo1">
        <button @click.stop="showInfo">点我提示信息</button>
    </div>
    ~~~

* **once**：事件只触发一次(常用)

  * ~~~html
    <button @click.once="showInfo">点我提示信息</button>
    ~~~

* **capture**：使用事件的捕获模式

  * ~~~html
    <div class="box1" @click.capture="showMsg(1)">
         div1
         <div @click="showMsg(2)" class="box2">div2</div>
    </div>
    ~~~

* **self**：只有enent.target是当前操作的元素才触发事件

  * ~~~html
    <div class="demo1" @click.self="showInfo">
       <button @click="showInfo">点我提示信息</button>
    </div>
    ~~~

* **passive**:事件的默认行为立即执行，无需等待时间回调执行完毕

  * ~~~html
    <div class="demo1" @click.passive="showInfo">
         <button @click="showInfo">点我提示信息</button>
    </div>
    ~~~


#### 键盘修饰符参考代码

* ~~~html
  <body>
      <div id="root">
         <h2>欢迎来到{{ name }}</h2>
         <!-- 阻止默认事件(常用) -->
         <a @click.prevent="showInfo" href="https://www.blilblil.com">点击</a>
         <!-- 阻止事件冒泡(常用)-->
         <div @click="showInfo" class="demo1">
            <button @click.stop="showInfo">点我提示信息</button>
         </div>
         <!-- 事件只触发一次常用) -->
         <button @click.once="showInfo">点我提示信息</button>
         
         <!-- 阻止事件冒泡(常用)-->
         <div @click="showInfo" class="demo1">
            <button @clickstop="showInfo">点我提示信息</button>
         </div>
         <!-- 事件只触发一次(常用)-->
         <button @click.once="showInfo">点我提示信息</button>
         <!-- 使用事件的捕获模式 -->
         <div class="box1" @click.capture="showMsg(1)">
            div1
            <div @click="showMsg(2)" class="box2">div2</div>
         </div>
         <!-- 只有event.target是当前操作的元素时才触发事件; -->
         <div class="demo1" @click.self="showInfo">
            <button @click="showInfo">点我提示信息</button>
         </div>
         <!-- 事件的默认行为立即执行，无需等待事件回调执行完毕;-->
         <ul @scroll="demo" class="list">
            <li>1</li>
            <li>2</li>
            <li>3</li>
         </ul>
      </div>
      
      <script>
         new Vue({
            el: '#root',
            data: {
               name: 'mirage'
            },
            methods: {
               showInfo(e) {
                  console.log(123)
                  console.log(e.target)
               },
               showMsg(msg){
                  console.log(msg)
               },
               demo(){
                  for (let i = 0;i<1000;i++){
                     console.log("@")
                  }
                  console.log('累坏了')
               }
               
            }
         })
      </script>
  
  </body>
  ~~~

#### **键盘事件**

* **Vue中常用的按键别名**

  * **回车 => enter**
  * **删除 => delete（捕获“删除”和退格）**
  * **退出 => esc**
  * **空格 => space**
  * **换行 => tap**
  * **上 => up**
  * **下 => dowm**
  * **左 => left**
  * **右 => right**

* **Vue未提供别名的按键，可以使用按键的原始的key值去绑定，但是注意要转为kebab-case(短横线命名)**

* **系统修饰见（用法特殊）：ctrl、alt、shift、meta（win键）**

  * **配合keyup使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才能被触发**

  * **配合keydowm使用：正常触发事件**

    * ```HTML
      <!-- 只有在 `key` 是 `Enter` 时调用 `vm.submit()` -->
      <input v-on:keyup.enter="submit">
      ```

* **也可以使用keyCode去指定具体的按键（不推荐）**

* **Vue.config.keyCodes.自定义键名 = 键码，可以去定制按键别名**

#### 键盘事件参考代码

* ~~~html
  <body>
  
      <div id="root">
      <h2>{{ name }}</h2>
      <input type="text" placeholder="按下回车提示输入" @keyup.enter="showInfo"></div>
      <script>
         new Vue({
            el:'#root',
            data:{
               name:'mirage'
            },
            methods:{
               showInfo(e) {
                  console.log(e.target.value)
               }
            }
         })
      </script>
  
  </body>
  ~~~

****

## **计算属性**

* **只要data中的值改变，模板字符串就会重新解析**
* **定义：要用的属性不存在，要通过已有属性计算得来**
* **原理：底层借助了Objcet.defineproperty方法提供getter和setter**
* **get函数什么时候执行？**
  * **初次读取时会执行一次**
  * **当依赖的数据发生改变时会被再次调用**
* **优势：与methods实现相比，内部有缓存机制（复用），效率更高，调试方便**
* **备注**
  * **计算属性最终会出现在vm上，直接读取使用即可**
  * **如果计算属性要修改，那必须写set函数去响应修改，且set中要引起计算式依赖的数据发生改变**

#### 参考代码

* ~~~html
  <body>
  <div id="root">
  	姓：<input type="text" v-model="fristName">
  	名：<input type="text" v-model="lastName">
  	<span>{{ fullName }}</span>
  </div>
  <script>
  	new Vue({
  		el:'#root',
  		data:{
  			fristName:'张',
  			lastName:'三'
  		},
  		methods:{
  			fullName(){
  				return this.fristName +'-' + this.lastName
  			}
  		},
  		computed:{
  			fullName:{
  				//当有人读取full name时，get就会被调用且返回值就作为for name的值。
  				get(){
  					return this.fristName +'-' + this.lastName
  				},
  				set(value){
  					const arr = value.split('-')
  					this.fristName =arr[0]
  					this.lastName = arr[1]
  				}
  			},
  			// 简写
  			fullName(){
  				return this.fristName +'-' + this.lastName
  			}
  		}
  		
  	})
  </script>
  </body>
  ~~~

#### 计算属性简写

* ~~~xml
  fullName(){
  	return this.fristName +'-' + this.lastName
  }
  ~~~

****

## **监视属性**

#### 监视属性watch

* 当被监视的属性变化时，回调函数自动调用，进行相关操作

* 监视的属性必须存在，才能进行监视

* watch的Handler属性会在监视的属性发生改变时会被调用

* watch的Immediate属性为true时，handler会立即调用

* 监视的两种写法

  * new Vue时传入watch属性

    * ~~~html
      <div id="root">
          <h2>今天的天气{{ info }}</h2>
          <button @click="changWeather">切换天气</button>
          <hr>
          <h3>a的值是{{ numbers.a }}</h3>
          <button @click="numbers.a++">点我让a加一</button>
      </div>
      <script>
      const vm = new Vue({
      		el:"#root",
      		data:{
      			isHost:true
      		},
      		methods:{
      			changWeather(){
      				this.isHost = !this.isHost
      			}
      		},
      		//第一种，当有确定的监视的属性时写
      		watch:{
      			isHost: {
      				//Handler在isHot发生改变时会被调用。
      				handled(newValue,oldValue){
      					console.log(newValue,oldValue)
      				},
      				//当Immediate等于true时使handler立即执行。
      				immediate:true
      			}
      		}
      	})
      </script>
      ~~~

  * 通过vm.$watch监视

    * ```VUE
      //第二种，没有确定的属性时写
      vm.$watch('isHot',{
          //Handler在isHot发生改变时会被调用。
          handled(newValue,oldValue){
             console.log(newValue,oldValue)
          },
          //当Immediate等于true时使handler立即执行。
          immediate:true
      })
      ```

#### **深度监视**

* Vue中的watch默认不监测对象内部值的改变（一层）

  * ~~~
    watch:{
    	isHost: {
          	handled(newValue,oldValue){
          	console.log(newValue,oldValue)
        },
        immediate:true
    },
    ~~~

* 配置deep:true可以监测对象内部值的改变（多层）

  * 监视多级结构中某个属性的变化

    * ~~~html
      'numbers.a':{
      	handled(newValue, oldValue) {
      		console.log('a改变了')
      	}
      },
      
      ~~~

  * 监视多级结构中所有属性的变化

    * ~~~
      numbers: {
      	deep:true,
      	handled(){
      		console.log('number改变了')
      	}
      }
      ~~~

* Vue自身可以监测对象内部值的改变，但Vue提供的watch默认不可以

* 使用watch时根据数据的具体结构，决定是否采用深度监视

#### **深度监视简写**

```html
isHost(){
	console.log("这是简写方式")
}
vm.$watch('isHot',function (){
	console.log('ishot被监视')
})
</script>
```

#### 参考代码

* ```html
  <body>
  <div id="root">
      <h2>今天的天气{{ info }}</h2>
      <button @click="changWeather">切换天气</button>
  </div>
  <script>
      const vm = new Vue({
         el:"#root",
         data:{
            isHost:true
         },
         methods:{
            changWeather(){
               this.isHost = !this.isHost
            }
         },
         //第一种，当有确定的监视的属性时写
         watch:{
            isHost: {
               //Handler在isHot发生改变时会被调用。
               handled(newValue,oldValue){
                  console.log(newValue,oldValue)
               },
               //当Immediate等于true时使handler立即执行。
               immediate:true
            }
         }
      })
      //第二种，没有确定的属性时写
      vm.$watch('isHot',{
         //Handler在isHot发生改变时会被调用。
         handled(newValue,oldValue){
            console.log(newValue,oldValue)
         },
         //当Immediate等于true时使handler立即执行。
         immediate:true
      })
  </script>
  </body>
  ```

****

## **watch对比computed**

* computed能完成的功能，watch都可以完成
* watch能完成的任务computer不一定能完成，例如：watch可以进行异步操作
* 两个重要的原则
  * 所有被Vue管理的函数，最好写成普通函数，这样this的指向才是vm 或 组件实例对象
  * 所有不被Vue所管理的函数（定时器的回调函数、ajax的回调函数等），最好写成箭头函数，这样this的指向才是vm 或 组件实例对象

### 参考代码

* ```html
  <body>
  <div id="root">
      姓：<input type="text" v-model="fristName">
      名：<input type="text" v-model="lastName">
      <span>{{ fullName }}</span>
  </div>
  <script>
      new Vue({
         el:'#root',
         data:{
            fristName:'张',
            lastName:'三',
            fullName:'张-三'
         },
         watch:{
            fristName(newValue){
               setTimeout(()=>{
                  this.fristName=newValue+'-'+this.lastName
               },1234)
            },
            lastName(newValue){
               this.fullName=this.lastName+'-'+newValue
            }
         }
         
      })
  </script>
  </body>
  ```

****

## **样式绑定**

#### class样式

* 写法：:class="XXX" XXX可以是字符串、对象、数组

  * 字符串写法适用于：类名不确定，要动态获取

    * ~~~html
      <div class="basic" :class="a" @click="changMood">{{ name }}</div>
      ~~~

  * 对象写法适用于：要绑定多个样式，个数不确定，名字也不确定

    * ~~~html
      <div class="basic" :class="classObjer">{{ name }}</div>
      //样式对象
      classObjer:{
      	fontSize: "40px",
      	color:'red',
      	backgroundColor:'skybule'
      }
      ~~~

  * 数组写法适用于：要绑定多个样式，个数确定，名字也确定，但不确定用不用

    * ~~~html
      <div class="basic" :class="classArr" >{{ name }}</div>
      //样式数组
      classArr:["happy","sad","normal"]
      ~~~

#### style样式

* :style ="{fontSize:XXX}" 其中XXX是动态值，指的是这个样式的值

  * ~~~html
    <div class="basic" :style="styObj">{{ name }}</div>
    
    styObj:{
    	fontSize: "40px",
    	color:'red',
    	backgroundColor:'skybule'
    }
    ~~~

* :style="[a,b]"其中a,b是样式对象

  * ~~~html
    <div class="basic" :style="[styArr]">{{ name }}</div>
    
    styArr:[
    	{
    		fontSize: "40px",
    		color:'red',
    		backgroundColor:'skybule'
    	},
    	{
    		border:'1px solid stybule'
    	}
    ]
    ~~~

### 参考代码

* ~~~html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Title</title>
      <script src="../vue.js"></script>
      <style>
         .basic{
            width: 200px;
            height: 200px;
            border: 1px solid pink;
         }
         .happy{
            background-color: #6cf;
         }
         .sad{
            background-color: skyblue;
         }
         .normal{
            background-color: blue;
         }
      </style>
  </head>
  <body>
      <div id="root">
         <!--常用-->
         <!--绑定class样式--字符串写法，适用于：样式的类名不确定，需要动态指定-->
         <div class="basic" :class="a" @click="changMood">{{ name }}</div>
         
         <!--绑定class样式--数组写法,适用于：要绑定的样式个数不确定，名字不确定-->
         <div class="basic" :class="classArr" >{{ name }}</div>
         
         <!--绑定class样式--对象写法,适用于：要绑定的样式个数确定名字确定，但要动态决定用不用-->
         <div class="basic" :class="classObjer">{{ name }}</div>
         
         
         <!--绑定style样式--对象写法-->
         <div class="basic" :style="styObj">{{ name }}</div>
         <!--不常用-->
         <!--绑定style样式--数组写法-->
         <div class="basic" :style="[styArr]">{{ name }}</div>
      </div>
      
      <script>
         new Vue({
            el:'root',
            data:{
               name:'Mirage',
               a:'happy',
               //样式数组
               classArr:["happy","sad","normal"],
               //样式对象
               styObj:{
                  fontSize: "40px",
                  color:'red',
                  backgroundColor:'skybule'
               },
               styArr:[
                  {
                     fontSize: "40px",
                     color:'red',
                     backgroundColor:'skybule'
                  },
                  {
                     border:'1px solid stybule'
                  }
               ]
            },
            methods:{
               changMood(){
                  // this.a='sad'
                  const arr = ["happy","sad","normal"]
                  let index = Math.floor(Math.random()*3)
                  this.a = arr[index]
               }
            }
         })
      </script>
  </body>
  </html>
  ~~~

****

## **条件渲染**

* v-if
  * 写法
    * v-if = "表达式"
    * v-else-if="表达式"
    * v-else="表达式"
  * 适用于：切换频率较低的场景
  * 特点：不展示的DOM元素直接被移除
  * 注意：v-if可以和:v-else-if、v-else一起使用，但结构要求不能被打断
* v-show
  * 写法：v-show = "表达式"
  * 适用于：切换频率较高的场景
  * 特点：不展示的DOM元素未被移除，仅仅是使用样式隐藏掉
* 备注：使用v-if时，元素可能无法获取到，但是使用v-show一定可以获取到

### 参考代码

* ~~~html
  <div id="root">
      <div>当前n的值为:{{ n }}</div>
      <button @click="n+1">点击使n+1</button>
      <!--使用v-show进行条件渲染-->
      <h2 v-show="false">{{ name }}</h2>
      <h2 v-show="a">{{ name }}</h2>
      
      <!--使用v-if进行条件渲染-->
      <h2 v-if="false">{{ name }}</h2>
      <h2 v-if="1 === 1">{{ name }}</h2>
      
      <!--v-else和v-else-if进行渲染-->
      <h2 v-if="n===1">{{ name }}</h2>
      <h2 v-else-if="n===2">{{ name }}</h2>
      <h2 v-else>{{ name }}</h2>
      
      <!--v-if与template的配合使用-->
      <template v-if=" n === 1">
         <h2>你好</h2>
         <h2>{{ name }}</h2>
         <h2>clouds</h2>
      </template>
  </div>
  <script>
      new Vue({
         el:"#root",
         data:{
            name:'Mirage',
            n:0,
            a:false
         },
      })
  </script>
  ~~~

****

## **列表渲染**

### 基本列表渲染

* v-for指令

  * 用于展示列表数据

  * 语法：v-for="(item，index) in XXX” :key="yyy"

  * 可遍历：数组、对象、字符串（少）、指定次数

  * key是给节点一个标识,当key的值为index时，在dom渲染时会自动干掉，如果不写key，vue自动将key的值设为index，但是vue不知道哪个是唯一的主键

  * 遍历数组

    * ~~~
      <li v-for="(p,index) in persons" :key="index">
      persons: [
      		{id: '001', name: 'mirage', age: '18'},
      		{id: '001', name: 'mirage', age: '18'}
      ]
      ~~~

  * 遍历对象

    * ~~~
      <li v-for="(value,key) in car" key="key">
      car: {
      	name: 'mirage',
      	color: 'skybule'
      },
      ~~~

  * 遍历字符串(少)

    * ~~~
      <li v-for="(char,index) in str" key="index">
      str: 'hello'
      ~~~

  * 遍历指定次数(少)

    * ~~~
      <li v-for="(a,b) in 5" key="a">
      ~~~

* 参考代码

  * ~~~html
    <div id="root">
    	<ul>
    		<!--遍历数组-->
    		<li v-for="(p,index) in persons" :key="index">  <!--key是给节点一个标识,当key的值为index时，在dom渲染时会自动干掉，如果不写key，vue自动将key的值设为index，但是vue不知道哪个是唯一的主键-->
    			{{ p }}
    			{{ p.name }} - {{ p.id }}
    		</li>
    		<li v-for="p in persons">
    			{{ p }}
    			{{ p.name }} - {{ p.id }}
    		</li>
    		<!--遍历对象-->
    		<li v-for="(value,key) in car" key="key">
    			{{ value }} - {{ key }}
    		</li>
    		<!--遍历字符串(少)-->
    		<li v-for="(char,index) in str" key="index">
    			{{ char }} - {{ index }}
    		</li>
    		<!--遍历指定次数(少)-->
    		<li v-for="(a,b) in 5" key="a">
    			{{ a }} - {{ b }}
    		</li>
    	</ul>
    </div>
    
    <script>
    	new Vue({
    		el: '#root',
    		data: {
    			persons: [
    				{id: '001', name: 'mirage', age: '18'},
    				{id: '001', name: 'mirage', age: '18'}
    			],
    			car: {
    				name: 'mirage',
    				color: 'skybule'
    			},
    			str: 'hello'
    		}
    	})
    </script>
    ~~~


****

### key的原理

* **key是唯一的**

* **react、vue中的key有什么作用?(key的内部原理)**

  * **虚拟DOM中的key的作用**

    * key是虚拟DOM对象的标识，当状态中的数据发生变化时，V就会根据新数据生成新的虚拟DOM，随后Vue进行新虚拟DOM和旧虚拟DOM的差异进行比较

  * **对比规则：**

    *  旧虚拟DOM中找到了与新虚拟DOM相同的key
       * 若虚拟DOM中内容没有变，直接使用之前的真实DOM
       * 若虚拟DOM中的内容变了，则生成新的真实DOM，随后替换掉页面值之前的真实DOM
    *  就虚拟DOM中未找到与新虚拟DOM相同的key
       * 创建新的真实DOM，随后渲染到页面

  * **用index作为key可能会引发的问题**

    * 若对数据进行：逆序添加、逆序删除等破坏顺序操作
      *  会产生没有必要的真实DOM更新 ==>界面效果没有问题，但是效率低
    * 如果结构中包含着输入类DOM
      * 产生错误的DOM跟训 ==> 界面有问题

  * **开发中如何选择key**

    * 最好使用每条数据的唯一标识作为key，如id、手机号、身份证号、学号等唯一值
    * 如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用index作为key是没有问题的

  * **图解**

    * ![image-20231125160428733](C:\Users\21592\AppData\Roaming\Typora\typora-user-images\image-20231125160428733.png)
    * ![image-20231125160821157](C:\Users\21592\AppData\Roaming\Typora\typora-user-images\image-20231125160821157.png)

  * 参考代码

    * ~~~html
      <div id="root">
          <!--添加一个东西-->
          <button @click.once="add">添加一个东西</button>
          <ul>
             <!--遍历数组-->
             <li v-for="p in persons" :key="p">  <!--key是给节点一个标识,当key的值为index时，在dom渲染时会自动干掉-->
                {{ p.name }} - {{ p.id }}
                <label>
                   <input type="text">
                </label>
             </li>
          </ul>
      </div>
      
      <script>
          new Vue({
             el: '#root',
             data: {
                persons: [
                   {id: '001', name: 'mirage', age: '18'},
                   {id: '001', name: 'mirage', age: '18'}
                ]
             },
             methods: {
                add() {
                   const p = {id: '001', name: 'cloud', age: '17'}
                   // this.persons.unshift(p)
                   this.persons.push(p)
                }
             }
          })
      </script>
      ~~~

### 列表过滤

* 使用监视属性watch和计算属性computed两种方式进行过滤

* filter进行过滤，indexOf()功能：返回字符串中匹配子串的第一个字符的下标,indexOf中空字符串为0不为-1

* watch方式

  * ~~~html
    <div id="root">
        <label>
           <input type="text" placeholder="请输入名字" v-model="keyWord"></input>
        </label>
        <ul>
           <!--遍历数组-->
           <li v-for="(p,index) in filePersons" :key="index">  <!--key是唯一的-->
              {{ p }}
              {{ p.name }} - {{ p.id }} - {{ p.sex }}
           </li>
        </ul>
    </div>
    
    <script>
        new Vue({
           el: '#root',
           data: {
              keyWord: '',
              persons: [
                 {id: '001', name: '御坂美琴', sex: '女'},
                 {id: '002', name: '结城明日奈', sex: '女'},
                 {id: '003', name: '桐谷和人', sex: '男'},
                 {id: '004', name: '上条当麻', sex: '男'}
              ],
              filePersons:[]
           },
           watch: {
               keyWord(val) {
                   this.persons = this.persons.filter(p => {   
                      return p.name.indexOf(val) !== -1  
                   })
               }
              keyWord: {
                 immediate:true,
                 handled(val) {
                    this.filePersons = this.persons.filter(p => {     
                       return p.name.indexOf(val) !== -1 
                       })
                    }
                 }
              },
           })
        })
    </script>
    ~~~

* computed方式

  * ~~~html
    <div id="root">
        <label>
           <input type="text" placeholder="请输入名字" v-model="keyWord"></input>
        </label>
        <ul>
           <!--遍历数组-->
           <li v-for="(p,index) in filePersons" :key="index">  <!--key是唯一的-->
              {{ p }}
              {{ p.name }} - {{ p.id }} - {{ p.sex }}
           </li>
        </ul>
    </div>
    
    <script>
        new Vue({
           el: '#root',
           data: {
              keyWord: '',
              persons: [
                 {id: '001', name: '御坂美琴', sex: '女'},
                 {id: '002', name: '结城明日奈', sex: '女'},
                 {id: '003', name: '桐谷和人', sex: '男'},
                 {id: '004', name: '上条当麻', sex: '男'}
              ],
           },
           computed: {
              filePersons() {
                 return this.persons.filter((p) => {
                    return p.name.indexOf(this.keyWord) !== -1
                 })
              }
           }
        })
    </script>
    ~~~

### 列表排序

- 使用数组方法sort进行排序

- 参考代码

  - ~~~html
    <div id="root">
        <label>
           <input type="text" placeholder="请输入名字" v-model="keyWord"></input>
        </label>
        <button @click="keySort=1">年龄升序</button>
        <button @click="keySort=2">年龄降序</button>
        <button @click="keySort=0">原顺序</button>
        <ul>
           <!--遍历数组-->
           <li v-for="(p,index) in filePersons" :key="index">  <!--key是唯一的-->
              {{ p }}
              {{ p.name }} - {{ p.id }} - {{ p.sex }}
           </li>
        </ul>
    </div>
    <script>
        //用computed实现
        new Vue({
           el: '#root',
           data: {
              keyWord: '',
              keySort: 0,//0 原顺序 1 升序 2 降序
              persons: [
                 {id: '001', name: '御坂美琴', sex: '女'},
                 {id: '002', name: '结城明日奈', sex: '女'},
                 {id: '003', name: '桐谷和人', sex: '男'},
                 {id: '004', name: '上条当麻', sex: '男'}
              ],
           },
           computed: {
              filePersons() {
                 const arr = this.persons.filter((p) => {
                    return p.name.indexOf(this.keyWord) !== -1
                 })
                 //判断是否需要排序
                 if (this.keySort) {
                    arr.sort((a, b) => {
                       return this.keySort !== 1 ? a.age - b.age : b.age - a.age
                    })
                 }
                 return arr
              }
           }
        })
    </script>
    ~~~

### 模拟Vue数据监视

* 使用Observer.defineProperty对Vue的数据监视进行模仿

* 参考代码

  * ~~~html
    <script>
        let data = {
           name: Mirage,
        }
        
        //创建一个监视的实例对象，用于监视data中的属性变化
        const obs = new Object(data)
        console.log(obj)
        
        vm._data = data = obs
        
        
        function Observer(obj) {
           //汇总对象中所有属性形成一个数组
           const keys = Object.keys(obj)
           //遍历
           keys.forEach((k) => {
              Observer.defineProperty(this, k, {
                 get() {
                    return obj[k]
                 },
                 set(v) {
                    obj[k] = v
                 }
              })
           })
        }
    </script>
    ~~~

### Vue中监测数据改变的原理_对象

* ![image-20231204184939920](C:\Users\21592\AppData\Roaming\Typora\typora-user-images\image-20231204184939920.png)

* 参考代码

  * ```html
    <body>
    <div id="root">
        <!--   <button @click="addRess">添加一个属性</button>-->
        <h2>名称:{{ student.name }}</h2>
        <h2>性别:{{ student.sex }}</h2>
        <h2>年龄:{{ student.age.rage }}</h2>
        <h2>年龄:{{ student.age.sage }}</h2>
        <h2>爱好:</h2>
        <ul>
           <li v-for="(h,index) in student.hobby" :key="index">
              {{ h }}
           </li>
        </ul>
        <h2>{{ undefined }}</h2>    <!--undefined在Vue中默认不显示-->
    </div>
    
    <script !src="">
        const vm = new Vue({
           el: '#root',
           data: {
              student: {
                 name: 'mirage',
                 sex: '男',
                 age: {
                    rage: '12',
                    sage: '18'
                 }
              }
           },
           methods: {}
        })
    </script>
    </body>
    ```

### Vue中的set()方法

* 第一种

  * ~~~
    Vue.set(位置, 添加的属性, 属性的内容) 
    ~~~

  * 参考代码

    * ~~~html
      <div id="root">
          <button @click="addRess">添加一个属性</button>
          <h2>名称:{{ student.name }}</h2>
          <h2>性别:{{ student.sex }}</h2>
          <h2>年龄:{{ student.age }}</h2>
          <h2>年龄:{{ student.address }}</h2>
          <h2>{{ undefined }}</h2>    <!--undefined在Vue中默认不显示-->
      </div>
      
      <script !src="">
          const vm = new Vue({
             el: '#root',
             data: {
                student: {
                   name: 'mirage',
                   sex: '男',
                   age: '20'
                }
             },
             methods: {
                addRess() {
                   Vue.set(this.student, 'address', '111')
                }
             }
          })
      </script>
      ~~~

* 第二种

  * ~~~
    this.$set(位置, 添加的属性, 属性的内容)
    ~~~

  * 参考代码

    * ~~~html
      <div id="root">
          <button @click="addRess">添加一个属性</button>
          <h2>名称:{{ student.name }}</h2>
          <h2>性别:{{ student.sex }}</h2>
          <h2>年龄:{{ student.age }}</h2>
          <h2>年龄:{{ student.address }}</h2>
          <h2>{{ undefined }}</h2>    <!--undefined在Vue中默认不显示-->
      </div>
      
      <script !src="">
          const vm = new Vue({
             el: '#root',
             data: {
                student: {
                   name: 'mirage',
                   sex: '男',
                   age: '20'
                }
             },
             methods: {
                addRess() {
                   this.$set(this.student, 'address', '111')
                }
             }
          })
      </script>
      ~~~

### Vue中监测数据改变的原理_数组

* 对于data中的数组，要修改需要调用数组的方法

  * pust：往数组后添加东西
  * pop：移除数组最后一个元素
  * shift：在数组头添加东西
  * unshift：删除数组的第一个元素
  * splice：对数组的元素进行删除和增加
  * sort：对数组进行排序，a-b是升序，b-a是降序
  * reverse：反转数组中的元素
  * filter：不会对数组进行修改，要用这个需要将过滤后的数组重新赋值给原数组

* Vue中的数组不是数组中的方法了，是数组原型中的方法

  * ![image-20231204190922151](C:\Users\21592\AppData\Roaming\Typora\typora-user-images\image-20231204190922151.png)

* 参考代码

  * ```html
    <body>
    <div id="root">
        <!--   <button @click="addRess">添加一个属性</button>-->
        <h2>名称:{{ student.name }}</h2>
        <h2>性别:{{ student.sex }}</h2>
        <h2>年龄:{{ student.age }}</h2>
        <h2>爱好:</h2>
        <ul>
           <li v-for="(h,index) in student.hobby" :key="index">
              {{ h }}
           </li>
        </ul>
        <h2>{{ undefined }}</h2>    <!--undefined在Vue中默认不显示-->
    </div>
    
    <script !src="">
        const vm = new Vue({
           el: '#root',
           data: {
              student: {
                 name: 'mirage',
                 sex: '男',
                 age: '19',
                 hobby: ['唱', '跳', 'RAP']
              }
           },
           methods: {}
        })
    </script>
    </body>
    ```

### 数据监视原理总结

* Vue会监视data中所有层次的数据

  * ```
    data: {
        student: {
           name: 'mirage',
           age: '19',
           hobby: ['唱', '跳', 'RAP'],
           friends: [
              {name: 'Mirage', age: '18'},
              {name: 'Clouds', age: '17'}
           ]
        }
    }
    ```

* 如何检测对象中的数据

  * 通过setter实现监视，且要在new Vue时就传入要检测的数据
    * 对象中后追加的属性，Vue不做响应式的处理
    * 如需要给后添加的属性做响应式处理，请调用以下的api
      * Vue.set(修改的位置,名称或者索引,内容)
      * vm.$set(修改的位置,名称或者索引,内容)

* 如何检测数组中的数据

  * 通过包裹数组更新元素的方法实现，本质上做了两件事：
    * 调用原生对应的方法对数组进行更新
    * 重新解析模板，进而更新页面

* 在Vue中更新数组一定要用如下方法

  * 使用数组的api：
    * push()
    * pop()
    * shift()
    * unshift()
    * splice()
    * sort()
    * reverse()
  * Vue.set或vm.$set
  * 如果要使用filter这类不会对原来的数组进行修改的，需要重新赋值给这个数组

* 特别注意：Vue.set()和vm.$set()不能给vm 或 vm根数据对象添加属性

* 参考代码

  * ```html
    <body>
    <div id="root">
        <button @click="student.age++">年龄加一</button>
        <button @click="addSex">添加性别</button>
        <button @click="student.sex = '未知'">修改性别</button>
        <button @click="addFriends">在列表首位添加朋友</button>
        <button @click="updataFriendsName">修改第一个好友名字</button>
        <button @click="addHobby">添加一个爱好</button>
        <button @click="updataHobby">修改第一个爱好</button>
        <button @click="removeHobby">过滤一个爱好</button>
        
        
        <!--   <button @click="addRess">添加一个属性</button>-->
        <h2>名称:{{ student.name }}</h2>
        <h2 v-if="student.sex">性别:{{ student.sex }}</h2>
        <h2>年龄:{{ student.age }}</h2>
        <h2>爱好:</h2>
        <ul>
           <li v-for="(h,index) in student.hobby" :key="index">
              {{ h }}
           </li>
        </ul>
        <h2>朋友</h2>
        <ul>
           <li v-for="(f,index) in student.friends" :ket="index">
              {{ f.name }} --- {{ f.age }}
           </li>
        </ul>
        <h2>{{ undefined }}</h2>    <!--undefined在Vue中默认不显示-->
    </div>
    
    <script !src="">
        const vm = new Vue({
           el: '#root',
           data: {
              student: {
                 name: 'mirage',
                 age: '19',
                 hobby: ['唱', '跳', 'RAP'],
                 friends: [
                    {name: 'Mirage', age: '18'},
                    {name: 'Clouds', age: '17'}
                 ]
              }
           },
           methods: {
              addSex() {
                 // Vue.set(this.student, 'sex', '男')
                 vm.$set(this.student, 'sex', '男')
              },
              addFriends() {
                 this.student.friends.unshift({name: '1', age: '2'})
              },
              updataFriendsName() {
                 this.student.friends[0].name = '张三'
              },
              addHobby() {
                 this.student.hobby.push('学习')
              },
              updataHobby() {
                 // this.student.hobby.splice(0,1,'打游戏')
                 // Vue.set(this.student.hobby,0,'打游戏')
                 vm.$set(this.student.hobby, 0, '打游戏')
              },
              removeHobby() {
                 this.student.hobby = this.student.hobby.filter((h) => {
                    return h !== 'RAP'
                 })
              }
           }
        })
    </script>
    </body>
    ```

****

## 表单收集

* 若：<input type="text"/> ，则v-model收集的是value值，用户输入的就是value的值

* 若：<input type="radio"/> ，则v-model收集的是value值，且要给标签配置value值

* 若：<input type="checkbox"/> 

  * 没有配置value属性，则收集的是checkbox（勾选or未勾选 布尔值类型）
  * 配置了value属性：
    * v-model的初始值是非数组，则收集的是checkbox（勾选or未勾选 布尔值类型）
    * v-model的初始值是数组，那么收集的是value组成的数组
  * 备注：v-model的三个修饰符
    * v-model.lazy：失去焦点时收集数据
    * v-model.number：输入字符串转为有效数字
    * v-model.trim：输入首位空格过滤

* 参考代码

  * ```html
    <body>
    <div id="root">
        <form @submit.prevent="demo">
           <label for="demo">账号：</label>
           <input type="text" id="demo" v-model.trim="accout">
           <label for="demo1">密码：</label>
           <input type="password" id="demo1" v-model="password">
           年龄: <input type="number" v-model.number="age">
           性别：
           男<input type="radio" name="sex" value="男" v-model="sex">
           女<input type="radio" name="sex" value="女" v-model="sex">
           爱好：
           学习 <input type="checkbox" value="study" v-model="hobby">
           吃饭 <input type="checkbox" value="eat" v-model="hobby">
           下拉框：
           <select v-model='sel'>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
           </select>
           其他：
           <textarea name="" id="" cols="30" rows="10" v-model.lazy="text"></textarea>
           同意：
           <input type="checkbox" v-model="agree">
           <button>点击</button>
        </form>
    </div>
    
    <script>
        const vm = new Vue({
           el: '#root',
           data: {
              accout: '',
              password: '',
              sex: '',
              hobby: [],
              sel: '',
              text: '',
              agree: '',
              age: ''
           },
           methods: {
              demo() {
                 alert(JSON.stringify(this._data))	//转为JSON数据打印到弹窗
              }
           }
        })
    </script>
    </body>
    ```

## 过滤器

* 定义：对要显示的数据进行特定的格式化后再显示(适用于一些简单的逻辑)

* 语法

  * 注册过滤器Vue.filter(name,回调函数) 或 new Vue{filters:{}}

    * ```
      //创建全局过滤器
      Vue.filter('mySlice', function (value) {
          return value.slice(0, 4)
      })
      ```

    * ```html
      const vm = new Vue({
      		el: '#root',
      		data: {
      			time: 1702028420972,
      		},
      		//过滤器实现
      		filters: {
      			//局部过滤器
      			timeFormater(value, str = 'YYYY-MM-DD HH:mm:ss') {
      				return dayjs(value).format(str)
      			}
      		}
      	})
      ```

  * 使用过滤器：{{ xxx | 过滤器名 }} 或 v-bind:属性 = "xxx | 过滤器名"

    * ```html
      <div id="root">
          <!--   <h1>现在的时间是:{{ fmtTime() }}</h1>-->
          <!--过滤器实现-->
          <h3>现在是{{ time | timeFormater }}</h3>
          <!--过滤器传参-->
          <h3>现在是{{ time | timeFormater('YYYY_MM_DD') | mySlice}}</h3>
          <h3 :x="name | mySlice"> 11 </h3>
      </div>
      ```

* 备注：

  * 过滤器可以接受额外的参数（第一个值是过滤器前面的值，第二个值是过滤器中括号里面传的值）

  * 多个过滤器可以串联

    * ```
      <h3>现在是{{ time | timeFormater('YYYY_MM_DD') | mySlice}}</h3>
      ```

    * 先执行完timeFormater的过滤器，再执行mySlice的过滤器

  * 并没有改变原来的数据，是产生新的对应的数据

## 内置指令

* v-bind指令：单向绑定解析表达式，可简写为	:xxx

* v-model指令：双向数据绑定

* v-for指令：遍历数组、对象、字符串

* v-on指令：绑定事件监听，可简写为@

* v-if指令：条件渲染（动态控制节点是否存在）

* v-else指令：条件渲染(动态控制节点是否存在)

* v-show指令：条件渲染(动态控制节点是否展示)

* v-text指令：向所在的节点中渲染文本内容

  * 与插值语法的区别，v-text会替换掉文本中的内容，{{xx}}则不会

* v-html指令：向指定节点中渲染包含html结构的内容

  * 与插值语法区别
    * v-html会替换掉节点的内容，{{xx}}则不会
    * v-html会识别html结构
  * 严重注意v-html有安全性的问题
    * 在网站上动态渲染任意html是非常危险的，容易导致xss攻击
    * 一定要在可信的内容上使用v-html，永远不要在用户提交的内容上

* v-cloak指令：(没有值)

  * 本质是一个特殊的属性，Vue实例创建完毕并接管容器后，会删掉v-cloak属性

  * 使用css配合v-cloak属性可以解决网速慢的时候页面展现出{{ xxx }}的问题

    * ```html
      <style>
          [v-cloak] {
             display: none;
          }
      </style>
      <body>
          <div id="root">
              <h2 v-cloak>{{name}}</h2>
          </div>
      </body>
      ```

* v-once指令：

  * v-once节点在初次动态渲染后，就视为静态内容
  * 以后数据的改变不会引起v-once所在结构的更新，可以用于优化性能

* v-pre指令：

  * 跳过其所在节点的编译过程
  * 可利用它跳过：没有使用指令语法、没有使用插值语法的节点，会加快编译

## 自定义指令

* 语法总结

  * 局部指令：

    * ~~~
      new Vue({
      	directives:{
      		指令名：配置对象
      	}
      })
      ~~~

    * ~~~
      new Vue({
      	directives(){
      		指令名:回调
      	}
      })
      ~~~

  * 全局指令：

    * ~~~
      Vue.directive(指令名，配置对象)
      ~~~

    * ~~~
      Vue.directive(指令名，回调函数)
      ~~~

* 配置对象中的三个回调

  * bind：指令与元素成功绑定时（一上来）调用
  * inserted：指令所在元素被插入页面时调用
  * updata：指令所在的模板被重新解析时调用

* 备注

  * 指令定义时不加v-，但使用时要加v-
  * 指令名如果是多个单词，要使用kebab-case命名方式，不要用camelCase命名

* 参考代码

  * ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
        <style>
            .demo {
                background: skyblue;
            }
        </style> 
    </head>、
    <body>
    <button id="btn">点我创建一个输入框</button>
    <script>
        const btn = document.querySelector('#btn')
        btn.addEventListener('click', function () {
            const input = document.createElement('input')
    
            //不需要input渲染到页面后才有效,bind区域
            input.value = '99'
            input.className = 'demo'
            input.addEventListener('click', function () {
                alert(1)
            })
    
            document.body.appendChild(input)
            //需要在input渲染到页面后才有效 inserted区域
            input.focus()
            input.parentElement.style.backgroundColor = "skyblue"
        })
    </script>
    </body>
    </html>
    ```

  * ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
        <script src="../vue.js"></script>
        <style></style>
    </head>
    <body>
    <!--
        需求1：定义一个v-big指令，和v-text功能类似，但会把绑定的数值放大10倍
        需求2：定义一个v-fbind指令，和v-bind功能类似，但可以让其所绑定的input元素默认获取焦点
    -->
    <div id="root">
        <h2>当前的n值是：<span v-text="n"></span></h2>
        <h2>放大10倍后的n值是：<span v-big="n"></span></h2>
        <button @click="n++">点击n+1</button>
        <hr>
        <label>
            <input type="text" v-fbind:value="n"/>
        </label>
    </div>
    </body>
    <script>
    
        Vue.directive()
    
        const vm = new Vue({
            el: '#root',
            data: {
                n: 0
            },
            directives: {
                //big函数何时会被调用？1.指令与元素成功绑定时（一上来）2.指令所在的模板被重新解析时
                big(element, binding) {
                    element.innerText = binding.value * 10
                    console.log(element, binding)
                },
                fbind: {
                    //指令与元素成功绑定时（一上来）
                    bind(element, binding) {
                        element.value = binding.value
                    },
                    //指令所在元素被插入页面时
                    inserted(element, binding) {
                        element.focus()
                    },
                    //指令所在的模板被重新解析时
                    update(element, binding) {
                        element.value = binding.value
                    }
                }
            }
        })
    </script>
    </html>
    ```



## 生命周期

### 引出生命周期

* 又名：生命周期回调函数、生命周期函数、生命周期构子

* 是什么：Vue在关机时刻帮我们调用的一些特殊名称的函数

* 生命周期函数的名字不可以更改，但函数的具体内容是根据需求编写的

* 生命周期中的this指向的是vm或组件实例对象

* 参考代码

  * ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
        <script src="../vue.js"></script>
    </head>
    <body>
    <div id="root">
        <h2 :style="{opacity}">111</h2>
    </div>
    
    <script>
        const vm = new Vue({
            el: "#root",
            data: {
                opacity: 1
            },
            methods: {},
            //Vue解析完模板后，把真实DOM放入到页面(挂载完毕)后调用
            mounted() {
                setInterval(() => {
                    this.opacity -= 0.01
                    if (this.opacity <= 0) {
                        this.opacity = 1
                    }
                }, 16)
            }
        })
    
    
        //通过外部定时器实现（不推荐）
        // setInterval(() => {
        //     vm.opacity -= 0.01
        //     if (vm.opacity <= 0) {
        //         vm.opacity = 1
        //     }
        // }, 16)
    </script>
    </body>
    </html>
    ```

### 生命周期总结

* 常用生命周期钩子

  * mouted：发送ajax请求、启动定时器、绑定自定义事件、订阅消息等初始化操作
  * beforeDestroy：清除定时器、解绑自定义事件、取消订阅消息等

* 关于销毁Vue实例

  * 销毁后借助Vue开发者工具看不到任何信息
  * 销毁后自定义事件会失效，但原生Dom事件依然有效
  * 一般不会再beforeDestroy操作数据，因为即使操作数据也不会触发更新流程了

* 参考代码

  * ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
        <script src="../vue.js"></script>
    </head>
    <body>
    <div id="root">
        <h2>n的值为：{{n}}</h2>
        <button @click="add" type="button">点击n+1</button>
    </div>
    
    <script>
        const vm = new Vue({
            el: "#root",
            data: {
                n: 1
            },
            methods: {
                add() {
                    this.n += 1
                }
            },
            //初始化生命周期函数,无法访问data中的数据
            beforeCreate() {
                console.log(this)
                debugger
            },
            //初始化数据监测、代理，可以访问到data中的数据
            created() {
                console.log(this)
                debugger
            },
            //页面中展示的是未编译的dom属性
            beforeMount() {
                console.log(this)
                debugger
            },
            //页面中展示的是编译后的dom属性
            mounted() {
                console.log(this)
                debugger
            },
            //数据更新了，但还未渲染到页面
            beforeUpdate() {
                console.log('beforeUpdate')
                console.log(this.n)
                debugger
            },
            //数据更新并渲染到页面
            updated() {
                console.log("updated")
                console.log(this.n)
                debugger
            },
            //Vue销毁销毁前，可以读取到属性，但是页面不再更新，所以对数据的修改没有任何作用
            beforeDestroy() {
                console.log('beforeDestroy')
            },
            //Vue销毁后
            destroy() {
                console.log('destroy')
            }
        })
    </script>
    </body>
    </html>
    ```

****

# **Vue组件化编程**

## 非单文件组件

### 基本使用

* Vue中使用组件的三大步骤

  * 定义组件(创建组件)
  * 注册组件
  * 使用组件（写组件标签）

* 如何定义一个组件

  * 使用Vue.extend(options)创建，其中options和new Vue(options)时传入的options几乎一样，但也要些区别
  * 区别如下
    * el不要写，最终所有的组件都要经过一个vm的管理，由vm中的el决定服务哪个容器
    * data必须写成函数，避免组件被赋用时，素具存在引用关系
  * 如何注册组件
    * 局部注册：靠new Vue的时候窜如components选项
    * 全局注册：靠Vue.components('组件名'，组件)
  * 编写组件标签
    * <组件名></组件名>

* 参考代码

  * ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
        <script src="../vue.js"></script>
    </head>
    <body>
    <div id="root">
        <student></student>
        <school></school>
    </div>
    
    <script>
        //创建组件
        const student = Vue.extend({
            template: `
              <div>
                <h2>你好呀！{{ name }}</h2>
              </div>
            `,
            data() {
                return {
                    name: 'Mirage'
                }
            }
        })
    
        const school = Vue.extend({
            template: `
                <div>
                    <h2>这是学校</h2>
                </div>
            `
        })
    
        //注册全局组件
        Vue.component('school', school)
    
        const vm = new Vue({
            el: "#root",
            //注册局部组件
            components: {
                student
            }
        })
    </script>
    </body>
    </html>
    ```

### 注意点

* 关于组件名：

  * 一个单词组成
    * 第一种写法(首字母小写)：school
    * 第二种写法(首字母大写):School
  * 多个单词组成
    * 第一种写法(kebab-case命名)：my-school
    * 第二种写法(CamelCase命名)：MySchool（需要脚手架支持）
  * 备注
    * 组件名劲量回避HTML中已有的元素，例如h2、H2都不行
    * 可以使用name配置项指定组件在开发者工具中呈现的名字

* 关于组件标签

  * 第一种写法：<school></school>
  * 第二种写法：<school/>
  * 备注：不使用脚手架时<school/>会导致后续的组件无法渲染

* 一个简写方式：

  * const school = Vue.extend(options)可简写为: const school = options

* 参考代码

  * ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
        <script src="../vue.js"></script>
    </head>
    <body>
    <div id="root">
        <School></School>
        <hello></hello>
    </div>
    
    <script>
        const School = Vue.extend({
            name: 'Mirage_clouds',
            template: `
              <div>
                <h1>{{ name }}</h1>
              </div>
            `,
            data() {
                return {
                    name: 'Mirage'
                }
            }
        })
    
        //简写
        const hello = {
            template: `
              <div>
                <h2>{{ name }}</h2>
              </div>
            `,
            data() {
                return {
                    name: 'clouds'
                }
            }
        }
    
        const vm = new Vue({
            el: "#root",
            data: {},
            methods: {},
            components: {
                School,
                hello,
                //多个单词写法
                'my-school': School,
                //脚手架中
                // MySchool:School
            }
        })
    </script>
    </body>
    </html>
    ```

### 组件的嵌套

* 参考代码

  * ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
        <script src="../vue.js"></script>
    </head>
    <body>
    <div id="root">
        <school></school>
    </div>
    
    <script>
        const stu = {
            name: 'Clouds',
            template: `
              <div>
                <h2>{{ name }}</h2>
              </div>
            `,
            data() {
                return {
                    name: '123'
                }
            },
        }
    
        //定义s组件
        const s = {
            name: 'Mirage',
            template: `
              <div>
                <h1>{{ name }}</h1>
                <stu></stu>
              </div>
            `,
            data() {
                return {
                    name: 'Mirage'
                }
            },
            components: {
                stu
            }
        }
    
        const student = {
            template: `
                <div>
                    <h1>hello</h1>
                </div>
            `
        }
    
        const app = {
            template: `
              <div>
                <school></school>
                <student></student>
              </div>
            `,
            components: {
                school: s,
                student
            }
        }
    
        const vm = new Vue({
            template: `
              <div>
                <app></app>
              </div>
            `,
            el: "#root",
            data: {},
            methods: {},
            //组成组件，局部
            components: {
                app
            }
        })
    </script>
    </body>
    </html>
    ```

### VueComponent

* 组件本质是一个名为VueComponent的构造函数，且不是程序员定义的，是Vue.extend生产的

* 我们只需要写<组件名/>或<组件名></组件名>，Vue解析时会帮我们创建组件实例对象，即Vue帮我们执行new VueComponent(options)

* 特别注意，每次调用extend时，Vue都会为我们创建一个全新的VueComponent

* 关于this

  * 组件配置中：
    * data函数、methods函数、wath函数、computed函数、他们的this都是VueComponent实例对象
  * new Vue(options)配置中:
    * data函数、methods函数、wath函数、computed函数、他们的this都是Vue实例对象

* VueComponent实例对象，以后简称vc（也可以称为组件实例对象）

* Vue实例对象，以后简称vm  

* 参考代码

  * ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
        <script src="../vue.js"></script>
    </head>
    <body>
    <div id="root">
    
    </div>
    
    <script>
        const name = {
            template: `
              <div>
                <h1></h1>
                <button @click="a">点击</button>
              </div>
            `,
            data() {
                return {}
            },
            components: {},
            methods: {
                a() {
                    console.log(this)
                }
            }
        }
    
        const app = {
            template: `
              <div>
                <name></name>
              </div>
            `,
            data() {
                return {}
            },
            components: {
                name
            }
        }
    
        const vm = new Vue({
            template: `
              <div>
                <app></app>
              </div>
            `,
            el: "#root",
            data: {},
            methods: {},
            components: {
                app
            }
        })
    </script>
    </body>
    </html>
    ```

### 一个重要的内置关系

* 一个重要的内置关系：VueComponent.prototype.__ _proto_ _ _ === Vue.prototype
* 为什么要有这个关系：让组件实例对象(VueComponent)能够访问到Vue原型对象上的属性、方法



## 单文件组件

* Vue 的单文件组件 (即 *.vue 文件，英文 Single-File Component，简称 SFC) 是一种**特殊的文件格式，使我们能够将一个 Vue 组件的模板、逻辑与样式封装在单个文件中**。

* 参考代码

  * ```vue
    <script>
    //组件交互的代码(数据、方法)
    export default {
      name: "School",
      data() {
        return {
          name: 'Mirage'
        }
      }
    }
    </script>
    
    <template>
      <!--组件的结构-->
      <h2>{{ name }}</h2>
    </template>
    
    <style lang="scss" scoped>
    //组件的样式2
    </style>
    ```

* 外部文件导入

  * 参考代码

    * ```vue
      <template>
        <div>
          <school/>
          <student/>
        </div>
      </template>
      
      <script>
      import school from "./School.vue";
      import Student from "./student.vue";
      
      export default {
        name: "app",
        components: {Student},
        computed: {
          school,
          student
        }
      }
      </script>
      
      <style lang="scss" scoped>
      
      </style>
      ```

****

# 使用Vue脚手架

## 初始化脚手架

* 全局安装脚手架@vue/cil

  * ~~~
    npm install -g @vue/cil
    ~~~

* **切换到需要创建项目的目录**，使用命令创建脚手架

  * ~~~
    cd 目录位置
    ~~~

  * ~~~
    vue create xxx
    ~~~

* 启动项目

  * ~~~
    run npm serve
    ~~~

* 备注

  * 如果下载慢，可以配置使用淘宝镜像

    * ~~~
      npm config set registy https://registry.npm.taobao.org
      ~~~

  * 脚手架隐藏了所有webpack配置，若要查看具体的webpack配置，请执行

    * ~~~vue
      vue inspect > output.js
      ~~~

## VueCli文件解析

* .gitignore：git忽略文件，不需要上传git仓库的在这个文件里面写好

* babel.config.js：babel的配置文件

  * babel：es6语法转es5语法
  * babel的中文文档：https://babel.nodejs.cn/docs

* package.json：包含了包名、常用短命令、包的版本

  * serve：在本地启动项目
  * build：生产版本，代码完成后执行的编译
  * lint：代码检查（不常用）

* package-lock.json：包含了包的版本信息、包的下载地址、包的node.js版本

  * version：包的版本
  * resolved：包的下载地址
  * integrity：用来验证资源的完整性，即是否是我期望加载的资源，而不是被别人篡改了内容
  * dependencies：当前包的生产依赖树
  * devDependencies：当前包的生产依赖
  * engines：node.js的版本

* readme.md：项目的介绍|教程

* **src**：

  * main.js：项目的主入口文件，在这里创建Vue实例对象

    * render函数：

      * 在创建Vue实例的位置没有使用render函数+$mount进行挂着会导致报错

        * ~~~
          You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
          翻译为： 您使用的是 Vue 的仅运行时构建，在该构建中模板编译器不可用。要么将模板预编译为render函数，要么使用包含编译器的构建。
          ~~~

        * 原因是导入的Vue.js不是完整版的Vue.js而是vue.runtime.esm

        * 使用es6语法引入Vue的方式只是引用了Vue的文件，具体引用了哪个Vue是靠Vue文件架下面的package包中module的来控制，默认dist/vue.runtime.esm.js

        * esm指的是在es6语法下默认的模块

        * vue.runtime.esm.js默认没有模板解析器

        * 完整版的VUE是vue目录下dist中的vue.js文件

      * 只要render函数

        * rander函数传参：
          * createElement：元素名、元素内容
        * rander必须要有返回值
        * rander简写：
          * render:函数名=>函数名(参数)

      * vue版本区别：node_modules下vue文件下dist文件

        * vue.js与vue.runtime.xxx.js的区别
          * vue.js是完整版本的Vue，包含：核心功能+模板解析器
          * vue.runtime.xxx.js是运行版的Vue，只包含核心功能，不包含模板解析器
        * 因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体内容
        * 只有在main.js中才使用rander函数

  * App.vue：所有组件的父组件

  * components：存放子组件的位置

  * assets：存放静态资源的位置

* **public**：

  * favicon.ico：网页的图标位置

  * index.html：项目的主文件，项目最终会运行在这个文件上

    * ```html
      <head>
          <meta charset="utf-8">
          <!--针对IE浏览器的一个特殊配置，含义是让IE浏览器以最高渲染级别渲染页面-->
          <meta content="IE=edge" http-equiv="X-UA-Compatible">
          <!--开启移动端的理性接口-->
          <meta content="width=device-width,initial-scale=1.0" name="viewport">
          <!--配置页签图标，<%= BASE_URL %>在Vue中自动代理位public-->
          <link href="<%= BASE_URL %>favicon.ico" rel="icon">
          <!--配置网页标题-->
          <title><%= htmlWebpackPlugin.options.title %></title>
      </head>
      <body>
      <!--当浏览器不支持js时，noscript中的元素会被渲染-->
      <noscript>
          <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled.
             Please enable it to continue.</strong>
      </noscript>
      <!--Vue容器-->
      <div id="app"></div>
      <!-- built files will be auto injected -->
      </body>
      ```

* node_modules：第三方依赖包

* output.js：被脚手架隐藏的webpack配置项，里面包含了VueCli的webpack配置，在这个文件里面更并不奏效，这个文件只是输出出来给我们看的

  * 使用vue inspect > output.js就可以查看vue脚手架默认配置

* vue脚手架中哪些文件不能更改：

  * public文件下的内容不能更改，但是可以被同名文件替换
  * src文件名字不能更改
  * main.js名字不能更改

* 对vue脚手架进行个性化定制：package同文件下创建vue.config.js

  * vue.config.js(可选择是否使用，如不使用则使用默认配置)：

    * 配置项查询连接：https://cli.vuejs.org/zh/config/#vue-config-js

    * 使用的暴露方式：

      * ```
        module.exports = defineConfig({
        })
        ```

* 参考代码:

  * main.js：

    * ```
      /*
      * 该文件是整个项目的入口文件
      * */
      //引入Vue
      import Vue from 'vue'
      // 引入App组件，它是所有组件的父组件
      import App from "@/App.vue";
      // 关闭vue的开发者提示
      Vue.config.productionTip = false
      // 创建Vue的实例对象
      new Vue({
          render: h => h(App),
          // render(createElement, hack) {
          //     return createElement('h1', '你好啊')
          // }
      }).$mount('#app')
      ```

  * App.vue：

    * ```
      <template>
        <div>
          <School></School>
          <Student></Student>
        </div>
      </template>
      
      <script>
      import Student from "./components/Student.vue";
      import School from "./components/School.vue";
      
      export default {
        name: "App",
        components: {
          School,
          Student
        }
      }
      </script>
      
      <style lang="scss" scoped>
      
      </style>
      ```

  * School：

    * ```vue
      <script>
      //组件交互的代码(数据、方法)
      export default {
        name: "School",
        data() {
          return {
            name: 'Mirage'
          }
        },
      }
      </script>
      
      <template>
        <!--组件的结构-->
        <h2>{{ name }}</h2>
      </template>
      
      <style lang="scss" scoped>
      /*组件的样式2*/
      </style>
      ```

  * Student：

    * ```
      <script>
      //组件交互的代码(数据、方法)
      export default {
        name: "Student",
        data() {
          return {
            name: 'clouds'
          }
        },
      }
      </script>
      
      <template>
        <!--组件的结构-->
        <h2>{{ name }}</h2>
      </template>
      
      <style lang="scss" scoped>
      /*组件的样式2*/
      </style>
      ```

  * vue.config.js：

    * ```
      const {defineConfig} = require('@vue/cli-service')
      module.exports = defineConfig({
          //转es5语法时忽略node_modules
          transpileDependencies: true,
          // 停止代码检查
          lintOnSave: false
      })
      ```


## ref属性

* 用来给元素或子组件注册引用信息（id的替代者）

* 应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象（vc）

* 使用方法：

  * 标识：

    * ~~~
      <组件名字 ref="" />
      ~~~

    * ~~~
      <h1 ref="xxx"></h1>
      ~~~

  * 获取方式：this.$refs.xxx

* 参考代码：

  * App.vue：

    * ```
      <template>
        <div>
          <h1 v-text="msg"></h1>
          <button @click="showDom">111</button>
          <school ref="box"/>
        </div>
      </template>
      
      <script>
      
      import School from "@/components/School.vue";
      
      export default {
        name: 'App',
        components: {School},
        data() {
          return {
            msg: 'clouds'
          }
        },
        methods: {
          showDom() {
            console.log(this.$refs.box)
          }
        }
      }
      </script>
      
      <style lang="scss" scoped>
      
      </style>
      ```

  * School：

    * ```
      <template>
        <div>{{ school }}</div>
      </template>
      
      <script>
      export default {
        name: 'School',
        data() {
          return {
            school: 'mirage'
          }
        }
      }
      </script>
      
      <style lang="scss" scoped>
      
      </style>
      ```

## prope配置项

* 功能：让组件接受外部传过来的数据

  * 传递数据：

    * 传递字符串方式

      * ~~~
        <School name="xxx"/>
        ~~~

    * 传递其他类型

      * ~~~
        <School :age="xxx"/>
        ~~~

  * 接收数据：

    * 第一种接收方式(只接收)：

      * ~~~
        props:['name']
        ~~~

    * 第二种方式(限制类型)：

      * ~~~
        props:{
        	name:String
        }
        ~~~

    * 第三种方式(限制类型、限制必要性、指定默认值)

      * ~~~
        props:{
        	type:String,//类型
        	required:true,//必要性
        	default:'老王'//默认值
        }
        ~~~

* 备注：

  * props是只读的，Vue底层会检测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data值的数据。

* 参考代码

  * App.vue：

    * ```
      <template>
      <!--在传递数据的时候，如要传输的非字符串，那就使用v-bind进行绑定传输-->
        <School :age="18" sex="box"/>
      </template>
      
      <script>
      
      import School from "@/components/School.vue";
      
      export default {
        name: 'App',
        components: {School},
      }
      </script>
      
      <style lang="scss" scoped>
      
      </style>
      ```

  * School：

    * ```
      <template>
        <div>
          <div>{{ school }}</div>
          <div>{{ my_age }}</div>
          <div>{{ sex }}</div>
        </div>
      </template>
      
      <script>
      export default {
        name: 'School',
        data() {
          return {
            school: 'mirage',
            my_age:this.age
          }
        },
        // 简单声明接收
        // props:['age']
        // 介绍同时对数据进行类型限定
        // props:{
        //   age:Number,
        // }
        // 接收的同时对数据：进行类型限制+默认值指定+必要性的限制
        props:{
          age:{
            type:Number,//类型
            default:99//默认值
          },
          sex:{
            type:String,
            required:true//让sex成为必填项
          }
        }
      }
      </script>
      
      <style lang="scss" scoped>
      
      </style>
      ```

## mixin(混入)

* 功能：可以把多个组件的共用配置提取成一个混入对象

* 使用方式：

  * 第一步定义混合

    * ~~~
      {
      	data(){…………},
      	methods:{},
      	……
      }
      ~~~

  * 第二步使用混入，例如：

    * 全局混入：

      * ~~~
        Vue.mixin(xxx)
        ~~~

    * 局部混入：

      * ~~~
        mixin:[xxx]
        ~~~

* 参考代码：

  * main.js:

    * ~~~
      /*
      * 该文件是整个项目的入口文件
      * */
      //引入Vue
      import Vue from 'vue'
      // 引入App组件，它是所有组件的父组件
      import App from "@/App.vue";
      // 导入混合文件并全局配置混合
      import {mixin} from "../mixin";
      
      Vue.mixin(mixin)
      // 关闭vue的开发者提示
      Vue.config.productionTip = false
      // 创建Vue的实例对象
      new Vue({
      	render: h => h(App),
      }).$mount('#app')
      ~~~

  * School.vue

    * ~~~
      <template>
        <div>
          <h2 @click="showName">学校名称{{ name }}</h2>
          <h2>学校{{ school }}</h2>
        </div>
      </template>
      
      <script>
      import {mixin} from "../../mixin";
      
      export default {
        name: 'School',
        data() {
          return {
            school: 'mirage',
            name: 'mirage'
          }
        },
        // 配置局部混合
        mixins: [mixin]
      }
      </script>
      ~~~

  * mixin.js：

    * ~~~
      export const mixin = {
          methods:{
              showName() {
                  alert(this.name)
              }
          }
      }
      ~~~

## Vue插件

* 功能：用于增强Vue

* 本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据

* 定义插件：

  * ~~~
    对象.install = function(Vue,options){
    	//1.添加全局过滤器
    	Vue.filter(……)
    	//2.添加全局指令
    	Vue.directive(……)
    	//3.配置全局混入
    	Vue.mixin(……)
    	//4.添加实例方法
    	Vue.prototype.$myHethod = function(){……}
    	Vue.prototype.$myProperty = xxx
    }
    ~~~

* 使用插件：

  * ~~~
    Vue.use(插件名字)
    ~~~

## scoped样式

* 作用：让样式在局部生效，防止冲突

* 写法：

  * ~~~	
    <!--lang内写样式语言，不写lang默认css-->
    <style lang="css" scoped>
    ~~~

## 总结ToDoList案例

* 组件化编码流程：
  * 拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突
  * 实现动态组件：考虑好数据存放的位置，数据是一个组件在用还是一些组件在用
    * 一个组件在用：放在自身组件即可
    * 一些组件在用：放在他们共同的父组件上
  * 实现交互：重绑定事件开始
* props适用于：
  * 父组件==>子组件通信
  * 子组件==>父组件通信(要求父组件先给子组件一个函数)
* 使用v-modle注意：v-modle是不能是props传过来的值，因为props是不可以被修改的
* props传过来的值若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这么做

## webStorage

* 存储内容大小一般支持5MB左右(不同浏览器可能不一样)

* 浏览器通过Windows.sesslonStorage和Windows.localStorage属性来实现本地存储机制

* 相关api：

  * `xxxStorage.setItem('key','value')` ：该方法接受一个键和值作为参数，会把键值对添加到存储库中，如果键名存在，则更新其对应的值
  * `xxxStorage.getItem('key')`：该方法接受一个键名为参数，返回键名对应的值
  * `xxxStorage.removeItem('key')`：该方法接受一个键名作为参数，并把键名从储存中删除
  * `xxxStorage.clear()`：该方法会清空存储中所有数据

* 备注：

  * SessionStorage存储的内容会随着浏览器窗口关闭而消失
  * LocalStorage存储的内容需要手动清除才会消失
  * `xxxStorage.getItem('key')`如果key对应的value获取不到，那么getter的返回值是null
  * `JSON.parse(null)`的结果 依然是null

* 参考代码

  * localStorage：

    * ~~~
      <body>
      <button onclick="saveData()">点我保存一个数据</button>
      <button onclick="readData()">点我读取一个数据</button>
      <button onclick="deleteData()">点我删除一个数据</button>
      <button onclick="deleteAllData()">点我清空数据</button>
      <script>
      	function saveData() {
      		let p = {name: '张三', age: 18}
      		window.localStorage.setItem('msg', 'hello')
      		window.localStorage.setItem('msg2', 555)
      		window.localStorage.setItem('msg3', JSON.stringify(p))
      	}
      	
      	function readData() {
      		console.log(localStorage.getItem('msg'))
      		console.log(localStorage.getItem('msg2'))
      		console.log(JSON.parse(localStorage.getItem('msg3')))
      	}
      	
      	function deleteData() {
      		localStorage.removeItem('msg')
      	}
      	
      	function deleteAllData() {
      		localStorage.clear()
      	}
      </script>
      </body>
      ~~~

  * sessionStorage：

    * ~~~
      <body>
      <button onclick="saveData()">点我保存一个数据</button>
      <button onclick="readData()">点我读取一个数据</button>
      <button onclick="deleteData()">点我删除一个数据</button>
      <button onclick="deleteAllData()">点我清空数据</button>
      <script>
      	function saveData() {
      		let p = {name: '张三', age: 18}
      		window.sessionStorage.setItem('msg', 'hello')
      		window.sessionStorage.setItem('msg2', 555)
      		window.sessionStorage.setItem('msg3', JSON.stringify(p))
      	}
      	
      	function readData() {
      		console.log(sessionStorage.getItem('msg'))
      		console.log(sessionStorage.getItem('msg2'))
      		console.log(JSON.parse(sessionStorage.getItem('msg3')))
      	}
      	
      	function deleteData() {
      		sessionStorage.removeItem('msg')
      	}
      	
      	function deleteAllData() {
      		sessionStorage.clear()
      	}
      </script>
      </body>
      ~~~

## 组件的自定义事件

* 一种组件间通信的方式，适用于子组件==>父组件

* 使用场景：A是父组件、B是子组件，B像给A传数据，那么就要在A中给B绑定自定义事件（事件的回调在A中）

* 绑定自定义事件的方式：

  * 第一种：在父组件中：`<Student @clouds="m1"/>`或`<Student v-on:mirage="demo"/>`

  * 第二种：在父组件中：

    * ~~~
      <Student ref="mirage"/>
      …………
       mounted() {
          // 使用$refs.名字.$on(事件名，触发的事件)
          // this.$refs.mirage.$on('mirage', this.demo)
          //写成普通函数，this指向的是调用函数着
          this.$refs.mirage.$on('mirage', function () {
            console.log(this)
          })
          // 写成箭头函数，因为箭头函数没有this，向外找，mounted钩子的this是vm，所以指向的是vm
          this.$refs.mirage.$on('mirage', () => {
            console.log(this)
          })
        }
      ~~~

  * 若想要自定义事件只能触发一次`once`修饰符，或`$once`方法

* 触发自定义事件：`this.$emit('事件名','数据')`

* 解绑自定义事件：`this.$off('事件名')`

* 组件上也可以绑定DOM事件，需要使用`native`方法

* 注意：通过`this.$refs.xxx.$on('事件名',回调)`绑定事件时，回调要么配置在methods中，要么使用箭头函数，否则this指向会出问题

* 参考代码

  * student.vue:

    * ```
      <script>
      export default {
        name: "Student",
        data() {
          return {
            school: 'mirage',
            name: 'clouds'
          }
        },
        methods: {
          sendStudentName() {
            // 触发Student组件实例上的mirage事件
            this.$emit('mirage')
            this.$emit('clouds')
          },
          unbind() {
            this.$off('mirage') //解绑一个自定义事件
            this.$off(['mirage', 'clouds']) //解绑多个事件
            this.$off() //解绑所有事件
          },
          death() {
            this.$destroy() //销毁当前student组件的实例，销毁后所有student实例的自定义事件全部奏效
          }
        }
      }
      </script>
      
      <template>
        <div>
          <h2>学校{{ school }}</h2>
          <button @click="sendStudentName">111</button>
          <button @click="unbind">111</button>
          <button @click="death">111</button>
        </div>
      </template>
      ```

  * App.vue:

    * ```
      <template>
        <div>
          <School/>
          <!--通过父组件给子组件绑定一个自定义事件实现子组件给父组件传递数据-->
          <!--<Student @clouds="m1" @mirage="demo"/>-->
          <!--通过父组件给子组件绑定一个自定义事件实现子组件给父组件传递数据-->
          <!--使用原生dom事件的时候需要在后面加上.native，否则会当成自定义事件使用-->
          <Student ref="mirage" @click.native="m1"/>
        </div>
      </template>
      
      <script>
      
      import School from "@/components/School.vue";
      import Student from "@/components/Student.vue";
      
      export default {
        name: 'App',
        components: {School, Student},
        methods: {
          demo() {
            console.log('demo被调用了')
          },
          m1() {
            console.log('1')
          }
        },
        mounted() {
          // 使用$refs.名字.$on(事件名，触发的事件)
          // this.$refs.mirage.$on('mirage', this.demo)
          //写成普通函数，this指向的是调用函数着
          this.$refs.mirage.$on('mirage', function () {
            console.log(this)
          })
          // 写成箭头函数，因为箭头函数没有this，向外找，mounted钩子的this是vm，所以指向的是vm
          this.$refs.mirage.$on('mirage', () => {
            console.log(this)
          })
        }
      }
      </script>
      ```

## 全局事件总线(GlobalEventBus)

* 一种组件间通信的方式，适用于任意组件间通信

* 安装全局事件总线：

  * ~~~
    new Vue({
    	……
    	beforeCreate() {
    		Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前的vm
    	},
    	……
    })
    ~~~

* 使用事件总线：

  * 接受数据：A组件想接受数据，则在A组件中给$bus绑定自定义事件，事件的回调留在A组件自身

    * ~~~vue
      methods(){
      	demo(demo){……}
      }
      ……
      mounted(){
      	this.$bus.$on('xxxx',this.demo)
      }
      ~~~

  * 提供数据：`this.$bus.$emit('xxx',数据)`

* 最好在beforeDestroy钩子中，用$off去解绑当前组件所用到的事件

## 消息订阅与发布(pubsub)

* 一种组件间通信的方式，适用于任意组件间通信

* 使用步骤

  * 安装pubsub：`npm i pubsub-js`

  * 引入：`import pubsub from 'pubsub-js'`

  * 接受数据：A组件想接受数据，则在A组件中订阅消息，订阅的回调留在A组件自身

    * ~~~vue
      methods(){
      	demo(data){}
      }
      ……
      mounted(){
      	this.pid = pubsub.subscribe('xxx',this.demo)//订阅消息
      }
      ~~~

  * 提供数据：`pubsub.publish('xxx',数据)`

  * 最好在beforeDestroy钩子中，用`pubsub.unsubscribe(pid)`去取消订阅 



## nextTick

* 语法：`this.$nextTick(回调函数)`
* 作用：在下一次DOM更新结束后执行指定的回调
* 什么时候用，当改变数据后，要基于更新后的新DOM进行某些操作的时候，要在nextTick所指定的回调函数中执行

## Vue封装的过度与动画

* 作用：在插入、更新或移除DOM元素的时候，在合适的时候给元素添加样式类名

* 写法：

  * 准备好样式：

    * 元素进入的样式
      * v-enter：进入的起点
      * v-enter-active：进入的过程中
      * v-enter-to：进入的终点
    * 元素离开的样式
      * v-leave：离开的起点
      * v-leave-active：离开过程中
      * v-leave-to：离开的终点

  * 使用`<transition>`包裹要过度的元素，并配置name属性：

    * ~~~vue
      <transition name='hello' appear>
      	<h1 v-show="!isShow" key="1">你好</h1>
      </transition>
      ~~~

  * 如果有多个元素需要过度，则需要使用:`<transition-group>`,且每个元素都要指定`key`值

## Vue脚手架配置代理

* 方法一

  * 在Vue.config.js中添加如下配置：

    * ~~~vue
      devServer:{
      	proxy:'url'
      }
      ~~~

  * 说明：

    * 优点：配置简单，请求资源时直接发给前段(8080)即可
    * 缺点：不能配置多个代理，不能灵活的控制是否走代理
    * 工作方式：若按照上述配置代理，当请求了前端资源时，那么请求会发给前端，优先匹配前端资源

* 方法二

  * 在Vue.config.js中添加如下配置：

    * ~~~js
      devServer: {
              proxy: {
                  '/api': { //请求前缀,匹配所有以'/api'开头的请求路径
                      target: 'url', //请求转发的地址，代理的基础路径
                      PathRewrite: {'^/api': ''}//重写请求路径
                      // ws:true, //用于支持websocket
                      // changeOrigin:true //用于控制控制头中的host值
                  }
              }
          }
      ~~~

  * 说明：

    * 优点：可以配置多个代理，且可以灵活的控制请求是否走代理
    * 缺点：配置略微繁琐，请求资源的时候必须携带请求头
    * changeOrigin：
      * 为true时：服务器收到的请求头中的host为：localhost:5000
      * 为false时：服务器收到的请求头中的host为：localhost:8080
      * 默认值为true

## 插槽

* 作用：让父组件可以向子组件指定位置插入HTML结构，也是一种组件间通信方式，适用于父组件===》子组件

* 分类：默认插槽、具名插槽、作用域插槽

* 使用方式：

  * 默认插槽：

    * ~~~	vue
      父组件中：
      	<test>
      		<div>
                  html结构
              </div>
      	</test>
      子组件中:
      	<test>
      		<template>
              	<!--定义插槽-->
      			<slot>插槽内容</slot>
              </template>
      	</test>
      ~~~

  * 具名插槽：

    * ~~~vue
      父组件中：
      	<test>
      		<template slot='content'>
              	<div>html结构1</div>
              </template>
              <template v-slot='footer'>
              	<div>html结构2</div>
              </template>
      	</test>
      子组件中:
      	<test>
      		<template>
              	<!--定义插槽-->
      			<slot name='content'>插槽内容1</slot>
      			<slot name='footer'>插槽内容2</slot>
              </template>
      	</test>
      ~~~

  * 作用域插槽：

    * 理解：数据在组件自身，但根据生成的结构需要组件的使用者来决定。

    * ~~~vue
      父组件中：
      	<test>
            <template v-slot:haha="{games}">
              <li v-for="(g,index) in games" :key=index>{{ g }}</li>
            </template>
          </test>
      子组件中：
      	<script>
          export default {
            name: "test",
            data() {
              return {
                game: ['千恋*万花', 'Granblue Fantasy:Relink', 'Counter-strike2', 'Apex 英雄']
              }
            }
          }
          </script>
      
          <template>
            <div>
              <h3>游戏</h3>
              <ul>
                <slot :games="game" name="haha"></slot>
              </ul>
            </div>
          </template>
      ~~~

## Vuex

* 搭建环境

  * 创建文件：`src/store/index,js`

  * ~~~js
    // 该文件用于创建Vuex中最为核心的store
    // 引入vue
    import Vue from 'vue'
    // 引入vuex
    import Vuex from 'vuex'
    // 使用vuex
    Vue.use(Vuex)
    //准备actions-用于响应组件中的动作
    const actions = {}
    //准备mutations-用于操作数据(state)
    const mutations = {}
    
    //准备state-用于存储数据
    const state = {}
    
    // 创建store并暴露store
    export default new Vuex.Store({
    	actions,
    	mutations,
    	state,
    })
    ~~~

  * 在`main.js`中创建vm时传入`store`配置项

  * ~~~js
    // 引入store
    import store from "@/store";
    // 创建Vue的实例对象
    new Vue({
    	render: h => h(App),
    	//使用store
    	store,
    	beforeCreate() {
    		Vue.prototype.$bus = this
    	}
    }).$mount('#app')
    
    ~~~

* 基本使用

  * ```js
    // 该文件用于创建Vuex中最为核心的store
    // 引入vue
    import Vue from 'vue'
    // 引入vuex
    import Vuex from 'vuex'
    // 使用vuex
    Vue.use(Vuex)
    //准备actions-用于响应组件中的动作
    const actions = {
        incrementOdd(context, v) {
           console.log('vuex 中的actions被调用了', context, v)
           if (context.state.sum % 2) {
              context.commit('incrementOdd', v)
           }
        },
        incrementWait(context, v) {
           console.log('vuex 中的actions被调用了', context, v)
           setTimeout(() => context.commit('incrementWait', v), 500)
        }
    }
    //准备mutations-用于操作数据(state)
    const mutations = {
        increment(state, v) {
           console.log('vuex 中的mutations被调用了', state, v)
           state.sum += v
           console.log(state.sum)
        },
        decrement(state, v) {
           console.log('vuex 中的mutations被调用了', state, v)
           state.sum -= v
           console.log(state.sum)
        },
        incrementOdd(state, v) {
           console.log('vuex 中的mutations被调用了', state, v)
           state.sum += v
           console.log(state.sum)
        },
        incrementWait(state, v) {
           console.log('vuex 中的mutations被调用了', state, v)
           state.sum += v
           console.log(state.sum)
        }
    }
    //准备state-用于存储数据
    const state = {
        sum: 0
    }
    
    // 创建store并暴露store
    export default new Vuex.Store({
        actions,
        mutations,
        state,
    })
    ```

  * 组件读取vuex中的数据：`$store.state.数据名`

  * 组件中修改vuex的数据：`$store.dispatch('action中的方法名',数据)`或`$store.commit('mutations中的方法名',数据)`

  * 注意：若没有网络请求或其他业务逻辑，组件中也可以越过actions，即不写`dispatch`，直接写`commit`

* getter的使用

  * 概念：当state中的数据需要进行加工后再使用，可以使用getter进行加工

  * 在store文件夹下的index.js中追加`geeters`配置

    * ```js
      // 准备getters-用于将state中的数据进行加工
      const getters = {
          bigsum(state) {
             return state.sum * 50
          }
      }
      
      // 创建store并暴露store
      export default new Vuex.Store({
          actions,
          mutations,
          state,
          getters
      })
      ```

  * 组件中读取数据：`$store.getters.bigsum`

* 四个map方法使用

  * mapState方法：帮助我们映射`state`中的数据为计算属性

    * ```js
      computed:{
          //借mapState生成计算属性，从state中获取数据(第一种写法,对象写法)
      ...mapState({sum: 'sum'}),
      //借mapState生成计算属性，从state中获取数据(第二种写法,数组写法)
      ...mapState(['sum']),
      }
      ```

  * mapGetter方法：帮助我们映射`getters`中的数据为计算属性

    * ~~~js
      computed:{
          //借mapGetters生成计算属性，从getters中获取数据(第一种写法,对象写法)
          // ...mapGetters({bigsum: 'bigsum'}),
          //借mapState生成计算属性，从state中获取数据(第二种写法,数组写法)
          ...mapGetters(['bigsum'])
      }
      ~~~

  * mapActions方法：帮助我们生产与`actions`对话的方法，即包含`$store.dispatch(xxx)`的函数

    * ~~~js
      methods:{
      	//使用mapActions生成对应的方法，方法会调用dispatch去联系actions(对象写法)
          ...mapActions({incrementOdd: "incrementOdd", incrementWait: "incrementWait"}),
          //使用mapActions生成对应的方法，方法会调用dispatch去联系actions(数组写法)
          ...mapActions(['incrementWait', 'incrementOdd']),
      
      }
      ~~~

  * mapMutations方法：帮助我们生产与`mutations`对话的方法，即包含`$store.commit(xxx)`的函数

    * ```js
      methods:{
          // 使用mapMutations生成对应的方法，方法会调用commit去联系mutations(对象写法)
          ...mapMutations({increment: "increment", decrement: "decrement"}),
          // 使用mapMutations生成对应的方法，方法会调用commit去联系mutations(数组写法)
          ...mapMutations(["increment", 'decrement']),
      }
      ```

  * 模块化+命名空间

    * 目的：让代码更好维护，让多种数据分类更加明确

    * 修改`store.js`

      * ~~~	js
        // 分类模块化
        const testOption = {
            // 开启命名空间，使mapxxx写法可以找到
            namespaced: true,
            actions: {……},
            mutations: {……},
            state: {……},
            getters: {……}
        }
        
        const personOption = {
            namespaced: true,
            actions: {……},
            mutations: {……},
            state: {……},
            getters: {……}
        }
        
        // 创建store并暴露store
        export default new Vuex.Store({
            modules: {
                testOption, personOption
            }
        })
        ~~~

    * 开启命名空间后，组件中读取state数据

      * ~~~js
        //方式一：自己直接读取
        this.$store.testOption.list
        //方式二：借助mapState读取
        ...mapState('testOption',['sum'])
        ~~~

    * 开启命名空间后，组件读取getters数据

      * ~~~js
        //方式一：自己读取
        this.$store.getters['testOption/sum']
        //方式二：借助mapGeeters读取
        ...mapGetters('testOption',['sum'])
        ~~~

    * 开启命名空间后，组件调用dispatch

      * ~~~js
        //方式一：自己直接调用dispatch
        this.$store.dispatch('testOption/sum',person)
        //方式二：借助mapActions读取
        ...mapActions('testOption',{sum:'sum'})
        ~~~

    * 开启命名空间后，组件调用commit

      * ~~~js
        //方式一：自己直接commit
        this.$store.commit('testOption/sum',person)
        //方式二：借助mapMutations
        ...mapMutations('testOption',{sum:'sum'})
        ~~~

## Vue-router

* 理解:vue的一个插件库，专门实现spa应用

* 对spa的理解：

  * 单页面Web应用(sing page web application,SPA)
  * 整个应用只有一个完整的页面
  * 点击页面中的导航链接不会刷新页面，只会做页面的局部更新
  * 数据需要通过ajax获取

* 路由的理解

  * 什么是路由
    * 一个路由就是一组映射关系(key-value)
    * key为路径，value可能是function或者component
  * 路由分类：
    * 后端路由
      * 理解：value就是function，用于处理客户端提交的请求
      * 工作过程：服务器接收到一个请求时，根据请求路径找到匹配的函数来处理请求，返回响应数据
    * 前端路由
      * 理解：value就是component，用于展示页面内容
      * 工作过程：当浏览器路径发生改变时，对应的组件就会展示

* 基本使用

  * 安装vue-router：`npm i vue-router`

  * 应用插件：`Vue.use(VueRouter)`

  * 编写router配置项：

    * ~~~js
      //该文件专门用于创建整个应用的路由器
      import VueRouter from "vue-router";
      // 引入组件
      import home from "@/components/home.vue"
      import about from "@/components/about.vue";
      // 创建一个路由器并暴露
      export default new VueRouter({
      	routes: [
      		{
      			path: "/home",
      			component: home
      		},
      		{
      			path: "/about",
      			component: about
      		}
      	]
      })
      ~~~

  * 实现切换(active-class 可以配置高亮样式)

    * ~~~vue
      <router-link active-class="active" to="/about">about</router-link>
      ~~~

  * 指定展示位置

    * ```vue
      <router-view></router-view>
      ```

* 注意点：

  * 路由组件通常存放在`pages`文件夹，一般组件存放在`components`文件夹
  * 通过切换，‘隐藏’了路由组件，默认是被销毁掉的，需要的时候再去挂载
  * 每个组件都有自己的`$route`属性，里面存储着自己的路由信息
  * 整个应用只有一个router，可以通过`$router`属性获取到

* 多级路由(嵌套路由)

  * 配置路由规则，使用`children配置项`

    * ~~~js
      routes: [
      		// 多级路由
      		{
      			path: "/home",
      			component: home,
                  //通过children配置子级路由
      			children: [
      				{
      					path: "news",//此处一定不要写/news
      					component: news
      				},
      				{
      					path: "message",
      					component: message
      				}
      			]
      		},
      		// 一级路由
      		{
      			path: "/about",
      			component: about
      		}
      	]
      ~~~

  * 跳转(要写完整路径)

    * ~~~vue
      <router-link to="/home/news">news</router-link>
      ~~~

* 路由的query参数

  * 传递参数

    * ~~~vue
      <!--跳转路由并传参第一种方式，to字符串写法-->
      <!--<router-link :to="`/home/message/detail?id=${item.id}&title=${item.title}`">{{ item.title }}</router-link>-->
      <!--跳转路由并传参第二种方式，to的对象写法-->
      <router-link :to="{
      	path:'/home/message/detail',
      	query: {
      		id: item.id,
              title: item.title,
      	},
      }">{{ item.title }}</router-link>
      ~~~

  * 接收参数：`$route.query.参数名`

* 路由的name属性

  * 作用：简化路由跳转

  * 如何使用

    * 给路由命名

      * ```js
        path: "/home",
        component: home,
        children: [
            {
               path: "news",
               component: news
            },
            {
               path: "message",
               component: message,
               children: [
                  {
                     name: 'detail',
                     path: 'detail',
                     component: detail
                  }
               ]
            }
        ]
        ```

    * 简化跳转

      * ~~~vue
        <!--简化前，需要通过完整的路径-->
        <router-link to="/home/message/detail">跳转</router-link>
        <!--简化后，直接通过名字跳转-->
        <router-link :to="{name:'detail',}">跳转</router-link>
        <!--简化配合传递参数-->
        <router-link :to="{
        	name:'detail',
        	query: {
        		id: item.id,
        		title: item.title,
        	},
        }">跳转</router-link>
        ~~~

* 路由的params参数

  * 配置路由，声明接受params参数

    * ```js
      {
          path: "/home",
          component: home,
          children: [
             {
                path: "news",
                component: news
             },
             {
                path: "message",
                component: message,
                children: [
                   {
                      name: 'detail',
                      path: 'detail/:id/:title',//此处使用占位符声明介绍params参数
                      component: detail
                   }
                ]
             }
          ]
      },
      ```

  * 传递参数

    * ```vue
      <!--跳转路由并携带params参数，to字符串写法-->
      <router-link :to="`/home/message/detail/${item.id}/${item.title}`">跳转</router-link>
      <!--跳转路由并携带query参数，to的对象写法-->
      <router-link :to="{
        name:'detail',
        params: {
          id: item.id,
          title: item.title,
        },
      }">{{ item.title }}
      </router-link>
      ```

    * 特别注意：路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置

  * 接受参数：`$route.params.参数名`

* 路由的props配置

  * 作用：让路由组件更方便的收到参数

  * ```js
    // props的第一种写法，值为对象，该对象中所有的key-value都会以props的形式传给detail组件
    // props: { title: 'Detail' }
    // props的第二种写法，值为布尔值，当布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给detail组件
    // props: true
    // props的第三种写法，值为函数，
    props($route) {
        return {
           id: $route.params.id,
           title: $route.params.title,
        }
    }
    // 结构赋值式写法，语义化不好不推荐
    /*props({params: {id, title}}) {
        return {
           id, title
        }
    }*/
    ```

* `router-link`的replace

  * 作用：控制路由跳转时操作浏览器历史记录的模式
  * 浏览器的历史记录有两种写入方式：分别为`push`和`replace`,`push`是追加历史记录，`replact`是替换当前历史记录，路由跳转跳转时候默认为`push`
  * 如何开启`replace`模式：`<reouter-link replace ……>news</reouter>`

* 编程式路由导航

  * 作用：不借助`<router-link>`实现路由跳转，让路由跳转更加灵活

  * 具体编码：

    * ```js
      //$router的两个api
      this.$router.push({
        name: 'detail',
        params: {
          id: item.id,
          title: item.title,
        }
      })
      this.$router.replace({
         name: 'detail',
         params: {
           id: item.id,
           title: item.title,
         }
      })
      //后退
      this.$router.back()
      //前进
      this.$router.forward()
      //可前进，可后退，看传递的值，正数前进负数后退
      this.$router.go(-3)
      ```

* 缓存路由组件

  * 作用：让不展示的路由组件保持挂载，不被销毁

  * 具体编码

    * ```vue
      <keep-alive include="news">
        <router-view></router-view>
      </keep-alie>
      ```

* 两个新的生命周期钩子

  * 作用：路由组件所独有的两个构子，用于捕获由组件的激活状态
  * 具体名字：
    * `activated`:路由组件激活时触发
    * `deactivated`:路由组件失活时触发

* 路由守卫

  * 作用：对路由进行权限控制

  * 分类：全局守卫、独享守卫、组件内守卫

  * 全局守卫

    * ```js
      //全局前置路由守卫-初始化的时候调用，每次路由切换前调用
      router.beforeEach((to, from, next) => {
          //判断当前是否需要进行权限控制
          if (to.meta.isAuth) {
              //权限控制具体规则
             if (localStorage.getItem("name") === 'mirage') {
                 //放行
                next()
             } else {
                alert('名字错误，无权限访问')
             }
          } else {
             next()
          }
      })
      //全局后置路由守卫-初始化的时候调用，每次路由切换后调用
      router.afterEach((to, from) => {
          console.log('后', to, from)
          //修改网页的title
          document.title = to.meta.title || 'vue_test'
      })
      ```

  * 独享路由守卫

    * ```js
      //独享路由守卫
      beforeEnter: (to, from, next) => {
             // console.log(to, from, next)
             if (to.meta.isAuth) {
                if (localStorage.getItem("name") === 'mirage') {
                   next()
                } else {
                   alert('名字错误，无权限访问')
                }
             } else {
                next()
             }
          }
      },
      ```

  * 组件内守卫

    * ```js
      beforeRouteEnter(to, from, next) {
        if (to.meta.isAuth) {
          if (localStorage.getItem("name") === 'mirage') {
            next()
          } else {
            alert(1)
          }
        } else {
          alert(2)
        }
      },
      // 通过路由规则，离开该组件的时候调用
      beforeRouteLeave(to, from, next) {
        next()
      }
      ```

* 路由器的两种工作方式

  * 对于一个url来说，什么是hash值？--`#`后面的内容就是hash值
  * hash值不会包含在HTTP请求中，即hash值不会带给服务器
  * hash模式：
    * 地址中永远带着#号，不美观
    * 若以后地址通过第三方手机app分享，若app校验严格，则地址标记不合法
    * 兼容性好
  * history模式：
    * 地址干净、美观
    * 兼容性和hash相比略差
    * 应用部署上线后需要后端人员支持，解决页面刷新404的问题

## Vue-UI组件库

* 移动端常用UI组件库
  * <a herf='https://youzan.github.io/vant'>Vant</a>
  * <a herf='https://didi.github.io/cube-ui'>Cube-UI</a>
  * <a herf='https://mint-ui.github.io'>Mint-UI</a>
* PC端常用UI组件库
  * <a herf='https://element.eleme.cn'>Element UI</a>
  * <a herf='https://www.iviewui.com'>IView UI</a>

# Vue3

## 使用create-vue创建项目

* 前提：node16.20以上
* 创建一个vue应用：npm init vue@latest

## setup

* setup执行时机:beforeCreate构子前 自动执行
* setup写代码的特点是什么:定义数据+函数 然后以对象形式返回
* `<script setup>`解决了什么问题：经过语法糖的封装，更简单的使用组合式api
* setup中的this还指向组件实例吗：指向undefined

## ref和reactive

* reactive和ref函数的共同作用是什么：用函数调用的方式生成响应式数据
* reactive vs ref：
  * reactive不能处理简单类型数据
  * ref参数类型支持更好单是必须通过.value进行修改
  * ref函数的内部实现依赖于reactive函数
* 实际工作中推荐使用哪个：推荐使用ref函数，更加灵活统一

## computed

* 计算数据中不应该有'副作用'：比如异步请求/修改dom
* 避免直接修改计算属性的值：计算属性应该是制只读的，如特殊写法可以配置get set

## watch

* 作为watch函数作为第一个参数，ref对象需要添加.value吗？
  * 不需要，第一个参数就是传的ref对象
* watch只能侦听单个数据吗？
  * 可以侦听单个或者多个
* 不开启deep，直接监视复杂类型，修改属性能触发回调吗？
  * 不能，默认是浅层监听
* 不开启deep，精确侦听对象的某个属性：可以把第一个参数写成函数的写法，返回要监听的具体属性，

## 生命周期钩子

* api

  * | 选项式               | 组合式          |
    | -------------------- | --------------- |
    | befroeCreate\|create | setup           |
    | beforeMount          | onBeforeMount   |
    | mounted              | onMounted       |
    | beforeUpdata         | onBeforeUpdata  |
    | updataed             | onUpdataed      |
    | beforeUnmount        | onBeforeUnmount |
    | unmounted            | onUnmounted     |

## 父传子和子传父

* 父传子
  * 父传子过程中通过什么方式接受props：`defineProps({属性名:类型})`
  * setup语法糖中如何使用父组件传过来数据
    * `const props = defineProps({属性名:类型})`
    * `props.xxx`
    * `<div>{{ xxx }}</div>`
* 子传父
  * 子传父的过程中通过什么方法得到emit方法:`defineEmit(['事件名称'])`
  * 怎么样触发事件:`emit('自定义事件名称',参数)`

## 模板引用和defineExpose

* 获取模板引用的时间是什么：组件挂载完毕
* defineExpose编译宏的作用是什么：显示暴露组件内部的属性和方法

## 跨层级传递数据

* 跨层级传递数据
  * 顶层：`provide('名称',数据内容)`
  * 底层：`const message = inject('名称')`
* 跨层级传递响应式数据
  * 顶层：`provide('名称',ref对象)`
  * 底层：`const message = inject('名称')`
* 跨层级传递方法
  * 顶层:`provide('名称',()={})`
  * 底层：`const message = inject('名称')`

## Vue3.3新特性-defineOptions

* 用来定义Options Api的选项吗，除了props，emits，expose，slots除外

* 用法：

  * ~~~js
    defineOptions({
    	name:'foo'
    })
    ~~~

## defineModel

* ~~~js
  // 声明 "modelValue" prop，由父组件通过 v-model 使用
  const model = defineModel()
  // 或者：声明带选项的 "modelValue" prop
  const model = defineModel({ type: String })
  
  // 在被修改时，触发 "update:modelValue" 事件
  model.value = "hello"
  
  // 声明 "count" prop，由父组件通过 v-model:count 使用
  const count = defineModel("count")
  // 或者：声明带选项的 "count" prop
  const count = defineModel("count", { type: Number, default: 0 })
  
  function inc() {
    // 在被修改时，触发 "update:count" 事件
    count.value++
  }
  ~~~

## pinia

* 文档：https://pinia.vuejs.org/zh/introduction.html

* 安装pinia

  * npm install pinia

  * main.js

    * ```js
      import {createApp} from 'vue'
      import {createPinia} from "pinia";
      import App from './App.vue'
      
      const app = createApp(App)
      const pinia = createPinia()
      
      app.use(pinia)
      
      app.mount('#app')
      ```

* 使用方式：

  * 声明

    * ```js
      import {defineStore} from 'pinia'
      import {computed, ref} from 'vue'
      import axios from "axios";
      
      /*
      * 定义store
      * defineStore(仓库的唯一表示,()=>{})
      * */
      export const userCounterStore = defineStore('counter', () => {
      //  声明数据state
          const count = ref(0)
      //  声明操作方法action
          const addCount = () => count.value++
          const sub = () => count.value--
      //  声明基于数据派生的计算属性getters
          const double = computed(() => count.value * 2)
      
          return {
             count, addCount, sub, double
          }
      })
      ```

  * 使用

    * ```vue
      <script setup>
      
      import {userChannelStore, userCounterStore} from '@/store'
      
      const counterStore = userCounterStore()
      const channelStore = userChannelStore()
      </script>
      
      <template>
        <div>根组件 -- {{ counterStore.count }}</div>
        <div>{{ counterStore.double }}</div>
        <hr>
        <button @click="channelStore.getList()">获取频道数据</button>
        <ul>
          <li v-for="item in channelStore.channelList" :key="item.id">{{ item.name }}</li>
        </ul>
      
      </template>
      ```

## 配置pinia持久化

* 文档：https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/

* 安装：npm i pinia-plugin-persistedstate

* 导入:

  * ```js
    import {createApp} from 'vue'
    import {createPinia} from "pinia";
    import App from './App.vue'
    import persist from 'pinia-plugin-persistedstate'
    
    const app = createApp(App)
    const pinia = createPinia()
    
    app.use(pinia.use(persist))
    
    app.mount('#app')
    ```

* 使用：` defineStore(仓库的唯一表示,()=>{},{persist:true})`
