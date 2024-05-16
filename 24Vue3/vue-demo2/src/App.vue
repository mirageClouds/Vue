<script setup>

import Son1Com from "@/components/son1-com.vue";
import Son2Com from "@/components/son2-com.vue";
import {userChannelStore, userCounterStore} from '@/store'

const counterStore = userCounterStore()
const channelStore = userChannelStore()
</script>

<template>
  <div>根组件 -- {{ counterStore.count }}</div>
  <div>{{ counterStore.double }}</div>
  <son1-com></son1-com>
  <son2-com></son2-com>
  <hr>
  <button @click="channelStore.getList()">获取频道数据</button>
  <ul>
    <li v-for="item in channelStore.channelList" :key="item.id">{{ item.name }}</li>
  </ul>

</template>

<style scoped>

</style>
