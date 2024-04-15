<script>

import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "test",
  data() {
    return {
      n: 1
    }
  },
  methods: {
    ...mapMutations('testOption', {increment: "increment", decrement: "decrement"}),
    ...mapActions('testOption', ['incrementWait', 'incrementOdd']),

  },
  computed: {
    ...mapState('testOption', ['sum']),
    ...mapState('personOption', ['personList']),
    ...mapGetters('testOption', ['bigsum'])
  }
}
</script>

<template>
  <div>
    <h2>当前求和为{{ sum }}</h2>
    <h2>当前求和为{{ bigsum }}</h2>
    <h2>person组件中的名字长度{{ personList.length }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数时加</button>
    <button @click="incrementWait(n)">等一等再加</button>

  </div>
</template>

<style lang="css" scoped>


</style>
