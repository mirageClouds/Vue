<script setup>
/*
* 注意：由于写了setup，所以无法直接配置props选项
* 所以：此处要借助编译器宏函数接受父组件传递的数据
* */
const props = defineProps({
  msg: String,
  money: Number
})
console.log(props.msg)

const emit = defineEmits(['changeMoney'])

const buy = () => {
  emit('changeMoney', 5)
}
</script>

<template>
  <div>我是子组件</div>
  <div>{{ msg }}</div>
  <div>{{ money }}</div>
  <button @click="buy"> 12</button>
</template>

<style lang="css" scoped>

</style>
