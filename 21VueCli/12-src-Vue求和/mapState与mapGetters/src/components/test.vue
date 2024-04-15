<script>

import {mapGetters, mapState} from "vuex";

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
  },
  computed: {
    //借mapState生成计算属性，从state中获取数据(第一种写法,对象写法)
    // ...mapState({sum: 'sum'}),
    //借mapState生成计算属性，从state中获取数据(第二种写法,数组写法)
    ...mapState(['sum']),
    ...mapGetters({bigsum: 'bigsum'})
  }
}
</script>

<template>
  <div>
    <h2>当前求和为{{ sum }}</h2>
    <h2>当前求和为{{ bigsum }}</h2>
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
