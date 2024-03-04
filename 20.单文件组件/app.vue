<template>
  <div>
    <school/>
    <student/>
  </div>
</template>

<script>
import school from "./School.vue";
import Student from "./student.vue";

export default {
  name: "app",
  components: {Student},
  computed: {
    school,
    student
  }
}
</script>

<style lang="scss" scoped>

</style>