<script>
export default {
  name: "github-list",
  data() {
    return {
      users: []
    }
  },
  mounted() {
    this.$bus.$on('getUser', (users) => {
      console.log(users)
      this.users = users
    })
  }
}
</script>

<template>
  <div>
    <ul>
      <li v-for="user in users" :key="user.login">
        <p>{{ user.login }}</p>
        <a :href="user.html_url">
          <img :alt="user.html_url" :src="user.avatar_url">
        </a>
        <p>{{ user.url }}</p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

</style>
