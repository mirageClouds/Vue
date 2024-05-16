<script setup>
/*
* 父传子
* 给子组件，添加属性的方式传值
* 在子助教，通过props接收
* */
// 局部组件(导入即可使用)
import SonCom from '@/components/son-com.vue'
import {ref} from "vue";

const money = ref(100)

/*
* 子传父
* 在子组件内部通过emit触发事件(编译器宏获取)
* 在父组件通过@监听
* */

const changeFn = (newMoney) => {
  money.value = newMoney
}

</script>

<template>
  <div>
    <son-com :money="money" msg="this is a message" @changeMoney="changeFn"></son-com>
  </div>
</template>
