<template>
  <div>
    <test/>
    <test1/>
  </div>
</template>

<script>

import test from "@/components/test.vue";
import test1 from "@/components/test1.vue";

export default {
  name: 'App',
  components: {test, test1},
}
</script>

<style lang="scss">

</style>
