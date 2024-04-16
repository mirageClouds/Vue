<script>
export default {
  name: "message",
  data() {
    return {
      list: [
        {id: '001', title: 'mirage'},
        {id: '002', title: 'clouds'},
        {id: '003', title: 'miku'},
      ]
    }
  }
}
</script>

<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">
        <!--跳转路由并携带query参数，to字符串写法-->
        <!--<router-link :to="`/home/message/detail?id=${item.id}&title=${item.title}`">{{ item.title }}</router-link>-->
        <!--跳转路由并携带query参数，to的对象写法-->
        <router-link :to="{
          name:'detail',
          query: {
            id: item.id,
            title: item.title,
          },
        }">
          {{ item.title }}
        </router-link>
      </li>
      <router-view></router-view>
    </ul>
  </div>
</template>

