<template>
<!--在传递数据的时候，如要传输的非字符串，那就使用v-bind进行绑定传输-->
  <School :age="18" sex="box"/>
</template>

<script>

import School from "@/components/School.vue";

export default {
  name: 'App',
  components: {School},
}
</script>

<style lang="scss" scoped>

</style>
