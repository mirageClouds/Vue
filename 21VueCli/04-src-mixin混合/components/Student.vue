<script>
export default {
  name: "Student",
  data() {
    return {
      school: 'mirage',
      name: 'clouds'
    }
  },
  methods: {
    showName() {
      alert(this.name)
    }
  }
}
</script>

<template>
  <div>
    <h2 @click="showName">学校名称{{ name }}</h2>
    <h2>学校{{ school }}</h2>
  </div>
</template>

<style lang="scss" scoped>

</style>
