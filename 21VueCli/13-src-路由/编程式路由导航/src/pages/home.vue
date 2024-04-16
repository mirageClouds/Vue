<script>
export default {
  name: "home"
}
</script>

<template>
  <div>
    <h2>我是Home的内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <router-link to="/home/news">news</router-link>
        <router-link to="/home/message">message</router-link>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
