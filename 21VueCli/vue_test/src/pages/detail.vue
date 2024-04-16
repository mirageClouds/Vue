<script>
export default {
  name: "detail"
}
</script>

<template>
  <ul>
    <li>消息编号:{{ $route.params.id }}</li>
    <li>消息标题:{{ $route.params.title }}</li>
  </ul>
</template>

<style lang="scss" scoped>

</style>
