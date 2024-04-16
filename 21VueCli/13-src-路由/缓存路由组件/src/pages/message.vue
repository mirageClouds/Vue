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
  },
  methods: {
    pushShow(item) {
      setTimeout(() => {
        this.$router.push({
          name: 'detail',
          params: {
            id: item.id,
            title: item.title,
          }
        })
      }, 1000)
    },
    replaceShow(item) {
      setTimeout(() => {
        this.$router.replace({
          name: 'detail',
          params: {
            id: item.id,
            title: item.title,
          }
        })
      }, 1000)
    }
  }
}
</script>

<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">
        <!--跳转路由并携带params参数，to字符串写法-->
        <!-- <router-link :to="`/home/message/detail/${item.id}/${item.title}`">{{ item.title }}</router-link>-->
        <!--跳转路由并携带query参数，to的对象写法-->
        <router-link :to="{
          name:'detail',
          params: {
            id: item.id,
            title: item.title,
          },
        }" replace>{{ item.title }}
        </router-link>
        <button @click="pushShow(item)">push</button>
        <button @click="replaceShow(item)">replace</button>
      </li>
      <router-view></router-view>
    </ul>
  </div>
</template>
