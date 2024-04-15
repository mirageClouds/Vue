<script>
import {nanoid} from "nanoid";
import {mapState} from 'vuex'

export default {
  name: "person",
  data() {
    return {
      name: '',
      watcher: {
        lon: '',
        lat: ''
      }
    }
  },
  computed: {
    personList() {
      return this.$store.state.personOption.personList
    },
    sum() {
      return this.$store.state.testOption.sum
    },
    firstPerson() {
      return this.$store.getters['personOption/firest_person']
    },
    ...mapState('personOption', ['weather']),
  },
  methods: {
    add() {
      const personObj = {id: nanoid(), name: this.name};
      this.$store.commit('personOption/add_person', personObj);
      this.name = ''
    },
    addLiu() {
      const personObj = {id: nanoid(), name: this.name};
      this.$store.dispatch('personOption/add_person_liu', personObj);
      this.name = ''
    },
    addserve(v) {
      this.$store.dispatch('personOption/add_person_server', v);
    }
  }
}
</script>

<template>
  <div>
    {{ sum }}
    <input v-model="name" placeholder="请输入名字" type="text"/>
    <input v-model="watcher.lat" placeholder="请输入纬度" type="text"/>
    <input v-model="watcher.lon" placeholder="请输入经度" type="text"/>
    <button @click="add(name)">提交</button>
    <h2>列表中第一个是{{ firstPerson }}</h2>
    <button @click="addLiu">添加一个姓刘的人</button>
    <button @click="addserve(watcher)">添加一个天气</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
    <ul>
      <li v-for="(p, index) in weather" :key="index">{{ p }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

</style>