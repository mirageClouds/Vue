<template>
  <div>
    <school/>
    <Student/>
  </div>
</template>

<script>
import school from "./School.vue";
import Student from "./student.vue";

export default {
  name: "app",
  components: {Student, school},
}
</script>

<style lang="scss" scoped>

</style>
