<template>
  <div>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";

export default {
  name: "App",
  components: {
    School,
    Student
  }
}
</script>

<style lang="scss" scoped>

</style>
