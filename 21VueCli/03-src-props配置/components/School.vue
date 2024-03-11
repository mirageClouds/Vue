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
