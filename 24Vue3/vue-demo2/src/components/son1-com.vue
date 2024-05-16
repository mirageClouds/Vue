<script setup>
import {userCounterStore} from "@/store/index.js";

const counterStore = userCounterStore();
</script>

<template>
  <div>这里是son1 --- {{ counterStore.count }}</div>
  <button @click="counterStore.addCount">+</button>
</template>

<style lang="scss" scoped>

</style>
