<script setup>
import {userCounterStore} from "@/store/index.js";

const counterStore = userCounterStore();
</script>

<template>
  <div>这里是son2 --- {{ counterStore.count }}</div>
  <button @click="counterStore.sub">-</button>
</template>

<style lang="scss" scoped>

</style>
