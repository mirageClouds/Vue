<script>
export default {
  name: "test",
  data() {
    return {
      sum: 0,
      n: 1
    }
  },
  methods: {
    increment() {
      this.sum += this.n
    },
    decrement() {
      this.sum -= this.n
    },
    incrementOdd() {
      if (this.sum % 2) {
        this.sum += this.n
      }
    },
    incrementWait() {
      setTimeout(() => this.sum += this.n, 500)
    }
  }
}

</script>

<template>
  <div>
    <h2>当前求和为{{ sum }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数时加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<style lang="css" scoped>


</style>
