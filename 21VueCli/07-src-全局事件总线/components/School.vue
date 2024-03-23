<template>
  <div>
    <h2>学校{{ school }}</h2>
    <button @click="update">123</button>
  </div>
</template>

<script>

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
      this.$bus.$emit('demo', 333)
    }
  },
  beforeDestroy() {
    this.$bus.$off('demo')
  }
}
</script>

<style lang="scss" scoped>

</style>
