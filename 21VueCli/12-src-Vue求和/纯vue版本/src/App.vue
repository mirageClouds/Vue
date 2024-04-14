<template>
  <div class="wp">
    <test/>
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
