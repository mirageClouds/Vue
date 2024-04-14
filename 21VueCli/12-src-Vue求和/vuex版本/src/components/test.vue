<script>
export default {
  name: "test",
  data() {
    return {
      n: 1
    }
  },
  methods: {
    increment() {
      this.$store.commit("increment", this.n);
    },
    decrement() {
      this.$store.commit("decrement", this.n);
    },
    incrementOdd() {
      this.$store.dispatch("incrementOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("incrementWait", this.n);
    }
  }
}
</script>

<template>
  <div>
    <h2>当前求和为{{ $store.state.sum }}</h2>
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
