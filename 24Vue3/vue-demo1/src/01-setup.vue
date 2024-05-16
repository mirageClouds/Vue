<!--<script>
/*
* setup
* 执行时机,比beforeCreate还要早
* setup函数中，获取不到this(this)为undefined
* 数据和函数需要在setup最后return才能使用
* 问题：每次都要return，麻烦
* 通过setup语法糖简化代码
* */
export default {
  setup() {
    const message = 'hello vue3.js'
    const logMessage = () => {
      console.log(message)
    }
    return {
      message, logMessage
    }
  }
}
</script>-->

<script setup>
const message = 'this is a message'
const logMessage = () => {
  console.log(message)
}
</script>

<template>
  <div>学习vue3</div>
  <div>{{ message }}</div>
  <button @click="logMessage">12</button>
</template>
