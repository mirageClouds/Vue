<script>
export default {
  name: "about",
  // 通过路由规则，进入该组件的时候调用
  beforeRouteEnter(to, from, next) {
    if (to.meta.isAuth) {
      if (localStorage.getItem("name") === 'mirage') {
        next()
      } else {
        alert(1)
      }
    } else {
      alert(2)
    }
  },
  // 通过路由规则，离开该组件的时候调用
  beforeRouteLeave(to, from, next) {
    next()
  }
}
</script>

<template>
  <h2>我是About的内容</h2>
</template>

<style lang="scss" scoped>

</style>
