<template>
  <div class="wp">
    <test/>
    <person/>
  </div>
</template>

<script>

import test from "@/components/test.vue";
import person from "@/components/person.vue";

export default {
  name: 'App',
  components: {test, person},
  mounted() {
    console.log(this);
  }
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
