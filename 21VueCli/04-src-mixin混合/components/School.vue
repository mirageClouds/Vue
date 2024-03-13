<template>
  <div>
    <h2 @click="showName">学校名称{{ name }}</h2>
    <h2>学校{{ school }}</h2>
  </div>
</template>

<script>
import {mixin} from "../../mixin";

export default {
  name: 'School',
  data() {
    return {
      school: 'mirage',
      name: 'mirage'
    }
  },
  // 配置局部混合
  mixins: [mixin]
}
</script>

<style lang="scss" scoped>

</style>
