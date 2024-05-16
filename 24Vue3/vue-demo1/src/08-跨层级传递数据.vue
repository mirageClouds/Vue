<script setup>
import CenterCom from "@/components/center-com.vue";
import {provide, ref} from "vue";
/*跨层传递普通数据*/
provide('theme-color', 'pink')

/*跨层传递响应式数据*/
const count = ref(100)
provide('count', count)

/*跨层传递函数 =>给子孙后代可以修改数据*/
provide('changeCount', (newCount) => {
  count.value = newCount
})
</script>

<template>
  <div>我是顶层组件</div>
  <center-com></center-com>
</template>
