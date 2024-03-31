<script>
import axios from "axios";

export default {
  name: "github-search",
  data() {
    return {
      KeyWord: ''
    }
  },
  methods: {
    searchUsere() {
      axios.get(`https://api.github.com/search/users?q=${this.KeyWord}`).then(
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
    <h1>搜索github用户</h1>
    <label>
      <input v-model="KeyWord" type="text">
      <button @click="searchUsere">搜索</button>
    </label>
  </div>
</template>

<style scoped>
div {
  width: 100%;
  height: 150px;
  background: rgba(0, 0, 0, 40%);
}

label {
  display: flex;
}
</style>
