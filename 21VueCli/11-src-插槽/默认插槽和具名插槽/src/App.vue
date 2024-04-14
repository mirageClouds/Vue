<template>
  <div class="wp">
    <test :listData="food" :title="title[0]">
      <img alt="" src="https://i.ibb.co/BKHZd7B/1698069793786.jpg">
    </test>
    <test :listData="game" :title="title[1]"/>
    <test :listData="movies" :title="title[2]">
      <video controls src="https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <test slot="footer">
        <h1>hello world</h1>
      </test>
      <template v-slot:footer>
        <h1>hello vue</h1>
      </template>
    </test>

  </div>
</template>

<script>

import test from "@/components/test.vue";

export default {
  name: 'App',
  components: {test},
  data() {
    return {
      title: ['美食', '游戏', '电影'],
      food: ['吮指原味鸡', '香辣鸡腿堡', '红烧牛肉面', '小鸡蘑菇面'],
      game: ['千恋*万花', 'Granblue Fantasy:Relink', 'Counter-strike2', 'Apex 英雄'],
      movies: ['你想活出怎么样的人生', '铃芽之旅', '千与千寻', '龙猫']
    }
  }
}
</script>

<style lang="css">
.wp {
  display: flex;
  justify-content: space-around;
}

img {
  width: 100%;
}
</style>
