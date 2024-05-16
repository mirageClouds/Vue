<script setup>
import {ref, watch} from 'vue'

const count = ref(0)
const nickName = ref('张三')
const userInfo = ref({
  name: 'mirage',
  age: 19
})


const changeCount = () => {
  count.value++
}

const changeNickName = () => {
  nickName.value = 'mirage'
}

const setUserInfo = () => {
  userInfo.value.age++
}

/*
* 监视单个数据的变化
* watch(ref对象,(newValue,oldValue)=>{})
* */
//
// watch(count,(newVal, oldVal) => {
//   console.log(newVal, oldVal)
// })

/*
* 监视多个数据的变化
* watch([ref对象1,ref对象2],(newValue,oldValue) =>{})
* */
// watch([count,nickName],(newVal, oldVal) => {
//   console.log(newVal, oldVal)
// })

/*immediate 立即执行*/
// watch(count, (newValue,oldValue) => {
//   console.log(newValue,oldValue)
// },{immediate:true})

/*deep深度监视，默认watch进行的是浅层监视
* const ref1 = ref(简单类型) 可以直接监视
* const ref2 = ref(复杂类型) 监视不到复杂类型内部数据的变化
* */

//
// watch(userInfo, (newValue) => {
//   console.log(newValue)
// }, {
//   immediate: true,
//   deep: true
// })

/*对于对象中的数据，进行监视*/
watch(() => userInfo.value.age, (newValue) => {
  console.log(newValue)
})
</script>

<template>
  <div>{{ count }}</div>
  <div>{{ nickName }}</div>
  <div>{{ userInfo }}</div>
  <button @click="setUserInfo">312</button>
</template>
