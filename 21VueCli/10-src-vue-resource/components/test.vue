<script>
export default {
  name: "test",
  data() {
    return {
      KeyWord: ''
    }
  },
  methods: {
    searchUsere() {
      console.log(this)
      this.$http.get(`https://api.github.com/search/users?q=${this.KeyWord}`).then(
          response => {
            console.log('请求成功', response.data.items)
            this.$bus.$emit('getUser', response.data.items)
          },
          error => {
            console.log('请求失败', error.message)
          }
      )
    }
  },
}
</script>

<template>
  <div>
    <label>
      <input v-model="KeyWord" type="text">
      <button @click="searchUsere">搜索</button>
    </label>
  </div>
</template>

<style lang="scss" scoped>

</style>
