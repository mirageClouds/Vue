<script>
export default {
  name: "detail"
}
</script>

<template>
  <ul>
    <li>消息编号:{{ $route.query.id }}</li>
    <li>消息标题:{{ $route.query.title }}</li>
  </ul>
</template>

<style lang="scss" scoped>

</style>
