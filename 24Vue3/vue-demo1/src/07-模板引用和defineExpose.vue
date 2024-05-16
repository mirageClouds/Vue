<script setup>
/*
* 模板引用(可以获取dom，也可以获取对象)
* 调用ref函数，生成一个ref对象
* 通过ref标识，进行绑定
* 通过ref对象.value既可以访问到绑定的元素(必须渲染完页面后才有用）
* */

import {onMounted, ref} from 'vue'
import TestCom from "@/components/test-com.vue";

const inp = ref(null)
onMounted(() => {
  console.log(inp)
})

const clickFn = () => {
  inp.value.focus()
}

const testRef = ref(null)

const getCom = () => {
  console.log(testRef.value.count)
}
</script>

<template>
  <div>
    <input ref="inp" type="text">
    <button @click="clickFn">点击输入框聚焦</button>
    <test-com ref="testRef"></test-com>
    <button @click="getCom">获取组件</button>
  </div>
</template>
