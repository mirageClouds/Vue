<script>
export default {
  name: "nav-bar",
  computed: {
    // matched实现面包屑导航 https://juejin.cn/post/7011869963975655461
    breadcrumb() {
      let matchedArr = this.$route.matched.filter((item) => {
            return item.meta.showInbreadcrumb
          }
      )
      console.log(matchedArr);
      return matchedArr;
    },
  },
  methods: {
    goIndex() {
      if (this.$route.name !== 'index') {
        this.$router.replace({
          name: 'index',
        })
      } else {
        this.$message.error('当前已在首页')
      }
    },
    logout() {
      this.$axios({
        url: `/api/user/logout?token=${localStorage.getItem('token')}`,
        method: 'POST',
      }).then(
          res => {
            if (res.data.status === 200) {
              localStorage.removeItem('token');
              this.$message.success(res.data.message)
              this.$router.push('/')
            }
          }
      )
    }
  }

}
</script>

<template>
  <div>
    <el-breadcrumb id="bar" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="(item, index) in breadcrumb" :key="index" :to="item.path">
        {{ item.meta.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <div id="user-avatar">
      <el-avatar> user</el-avatar>
    </div>
    <el-col id="user-name">
      <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <span>user</span>
            <i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
        <el-dropdown-menu slot="dropdown">
          <div @click="goIndex">
            <el-dropdown-item icon="el-icon-s-home">首页</el-dropdown-item>
          </div>
          <div @click="logout">
            <el-dropdown-item icon="el-icon-s-promotion">退出登录</el-dropdown-item>
          </div>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </div>
</template>

<style lang="css" scoped>
#bar {
  margin-top: 25px;
}

#user-avatar {
  margin-top: -30px;
  float: right;
  margin-right: 50px;
}

#user-name {
  margin-top: -27.5px;
  margin-left: 49.2%;
}
</style>
