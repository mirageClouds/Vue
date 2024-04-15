<script>
import {mapState} from 'vuex'
import {nanoid} from "nanoid";

export default {
  name: "person",
  data() {
    return {
      name: ''
    }
  },
  computed: {
    ...mapState(['personList', 'sum'])
  },
  methods: {
    add() {
      const personObj = {id: nanoid(), name: this.name};
      this.$store.commit('add_person', personObj);
    }
  }
}
</script>

<template>
  <div>
    {{ sum }}
    <input v-model="name" placeholder="请输入名字" type="text"/>
    <button @click="add(name)">提交</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

</style>