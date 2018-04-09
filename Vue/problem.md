# Vue 
##### 1.Vue的生命周期(生命钩子、hook等等)有哪些？
* beforeCreate
* Created
* BeforeMount
* Mounted
* BeforeUpdate
* Updated
* BeforeDestroy
* Destroyed

![Alt text](./lifecycle.png)

> 注意: 在```BeforeMount```之后才会实例化```$el```实例

##### 2.常用Vue指令有哪些？是否有简写？
* v-on(可简写为:@): 绑定事件  ```<div v-on:click="submit"  @click="submit"></div>```
* v-bind(可简写为: :): 绑定数据  ```<div v-bind:dataA="dataA"  :dataA="dataA"></div>```
* v-text: 添加文本  ```<div v-text="123"></div>```  相当于jQuery中的```$('div').text('123')```
* v-html: 添加文本  ```<div v-html="<a href="aa">"></div>```  相当于jQuery中的```$('div').html('<a href="aa">')```
* v-if(配合有v-else,v-else-if): 条件为true的时候才会渲染(v-if为惰性渲染,若开始条件为假,则第一次不会做渲染)  ```<div v-if="data"></div>```  
* v-show: 条件为true的时候才会渲染(v-show不管初始条件是true还是false第一次均会渲染)  ```<div v-show="data"></div>```  
* v-for: 循环渲染列表,在循环中建议加上:key,便于数据修改时可以方便重新渲染  ```<div v-for="array||Object"></div>```  
* v-model: 双向绑定输入框中的数据  ```<input v-model="dataA" />```  

##### 3.如何自定义指令？
```javascript
1.全局指令注册: v-focus
    Vue.directive('focus',{ inserted: function(el){el.focus()} }); 
2.在组件中注册局部指令,组件中接受一个directives选项    
    directives:{focus:{ inserted: function(el){el.focus()} }}
```
* 一个指令定义对象可以提供如下几个钩子函数 (均为可选)：
  
  bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
  
  inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
  
  update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
  
  componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。
  
  unbind：只调用一次，指令与元素解绑时调用。
  
* el：指令所绑定的元素，可以用来直接操作 DOM 。

* binding：一个对象，包含以下属性：
    * name：指令名，不包括 v- 前缀。
    * value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
    * oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
    * expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
    * arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
    * modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
    
* vnode：Vue 编译生成的虚拟节点。

* oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。

##### 4.如何发射自定义事件？
> 使用```$emit```
```html
    1. 假设存在组件,名为my_component;
    <div id="parent">
        {{all}}
        <my_component @incress='incress'></my_component> 
    </div>
    
    <script>
        Vue.component('my_component',{
            template:'<button @click="incress">{{num}}</button>',
            data:function(){return{num:0}},
            methods:{
                incress: function(){this.num+=1;this.$emit('incress')}
            }
        });
        var el = new Vue({
            el:'parent',
            data: { all:0 },
            methods: { incress: function(){this.all+=1;} }
        })
    </script>       
```

> tip: 自定义发射事件可以进行简单的父子组件之间的通信,若进行大量状态变更请参考Vuex

##### 5.假设一个场景: 需要变更data里面的一个数据，如何在数据变更之后操作更新后的Dom元素？
```
    1.  在需要操作的dom元素上添加ref,使用$ref进行访问
    2.  使用nextTick($nextTick)
```

##### 6.v-model是vue提供给开发者的一个语法糖，简述一下实现原理
```
    v-bind和监听input的oninput事件的结合
```








































