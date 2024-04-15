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
    // increment() {
    //   this.$store.commit("increment", this.n);
    // },
    // decrement() {
    //   this.$store.commit("decrement", this.n);
    // },
    /*----------------------------------*/
    // 使用mapMutations生成对应的方法，方法会调用commit去联系mutations(对象写法)
    ...mapMutations({increment: "increment", decrement: "decrement"}),
    // 使用mapMutations生成对应的方法，方法会调用commit去联系mutations(数组写法)
    // ...mapMutations(["increment", 'decrement']),

    // incrementOdd() {
    //   this.$store.dispatch("incrementOdd", this.n);
    // },
    // incrementWait() {
    //   this.$store.dispatch("incrementWait", this.n);
    // }
    /*------------------------------------*/
    //使用mapActions生成对应的方法，方法会调用dispatch去联系actions(对象写法)
    // ...mapActions({incrementOdd: "incrementOdd", incrementWait: "incrementWait"}),
    //使用mapActions生成对应的方法，方法会调用dispatch去联系actions(数组写法)
    ...mapActions(['incrementWait', 'incrementOdd']),

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
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数时加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<style lang="css" scoped>


</style>
