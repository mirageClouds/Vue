<template>
  <div id="app">
    <github-search/>
    <github-list/>
  </div>
</template>

<script>

import githubList from "@/components/github-list.vue";
import githubSearch from "@/components/github-search.vue";

export default {
  name: 'App',
  components: {
    githubSearch, githubList
  }
}
</script>

<style>

</style>
