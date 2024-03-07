<template>
  <div>
    <h1 v-text="msg"></h1>
    <button @click="showDom">111</button>
    <school ref="box"/>
  </div>
</template>

<script>

import School from "@/components/School.vue";

export default {
  name: 'App',
  components: {School},
  data() {
    return {
      msg: 'clouds'
    }
  },
  methods: {
    showDom() {
      console.log(this.$refs.box)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
