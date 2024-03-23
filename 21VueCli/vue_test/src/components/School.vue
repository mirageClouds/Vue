<template>
  <div>
    <h2>学校{{ school }}</h2>
    <button @click="update">123</button>
  </div>
</template>

<script>
import PubSub from "pubsub-js";

export default {
  name: 'School',
  data() {
    return {
      school: 'mirage',
      name: 'mirage'
    }
  },
  methods: {
    update() {
      // this.$bus.$emit('demo', 333)
      PubSub.publish('hello', 555)
    }
  },
  beforeDestroy() {
    this.$bus.$off('demo')
  }
}
</script>

<style lang="scss" scoped>
div {
  background: pink;
}
</style>
