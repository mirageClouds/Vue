<script setup>
/*
* beforeCreate和create的相关代码
* 一律放在setup中执行
* */
import {onMounted} from "vue";

const getList = () => {
  console.log('这里是create')
}
getList()

onMounted(() => {
  console.log('mounted声明周期钩子')
})
</script>

<template>

</template>
