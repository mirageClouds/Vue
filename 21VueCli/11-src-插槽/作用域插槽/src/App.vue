<template>
  <div class="wp">
    <test>
      <template slot-scope="games">
        <li v-for="(g,index) in games.games" :key=index>{{ g }}</li>
      </template>
    </test>
    <test>
      <template scope="games">
        <li v-for="(g,index) in games.games" :key=index>{{ g }}</li>
      </template>
    </test>
    <test>
      <template v-slot="{games}">
        <li v-for="(g,index) in games" :key=index>{{ g }}</li>
      </template>
    </test>
    <test>
      <template v-slot:haha="{games}">
        <li v-for="(g,index) in games" :key=index>{{ g }}</li>
      </template>
    </test>
  </div>
</template>

<script>

import test from "@/components/test.vue";

export default {
  name: 'App',
  components: {test},
}
</script>

<style lang="css">
.wp {
  display: flex;
  justify-content: space-around;
}

img {
  width: 100%;
}
</style>
