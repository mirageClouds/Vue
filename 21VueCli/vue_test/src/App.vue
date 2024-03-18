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

<style lang="scss" scoped>

</style>
