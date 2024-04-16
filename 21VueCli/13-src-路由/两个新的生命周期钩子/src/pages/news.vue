<script>
export default {
  name: "news",
  data() {
    return {
      opacity: 1
    }
  },
  activated() {
    console.log('news组件被激活')
    this.timer = setInterval(() => {
      console.log('@')
      this.opacity -= 0.01
      if (this.opacity <= 0) this.opacity = 1
    }, 10)
  },
  deactivated() {
    console.log('news组件失活')
    clearInterval(this.timer)
  }
}
</script>

<template>
  <ul>
    <li :style="{opacity}">欢迎使用vue</li>
    <li>news001<input type="text"></li>
    <li>news002<input type="text"></li>
    <li>news003<input type="text"></li>
  </ul>
</template>

<style lang="scss" scoped>

</style>
