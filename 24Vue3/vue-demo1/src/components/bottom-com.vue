<script setup>
import {inject} from "vue";

const themeColor = inject("theme-color");
const count = inject("count");
const changeCount = inject("changeCount");
</script>

<template>
  我是底层组件 -- {{ themeColor }} -- {{ count }}

  <button @click="changeCount(200)">321</button>
</template>

<style lang="scss" scoped>

</style>
