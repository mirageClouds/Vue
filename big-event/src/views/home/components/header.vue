<template>
  <div>
    <el-dropdown trigger="click">
      <i class="el-icon-arrow-down" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="logOut">
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-avatar :src="userAvatar" fit="fill"></el-avatar>
  </div>
</template>

<script>
import {userInfoService} from "@/api/user";

export default {
  name: "home-header",
  created() {
    userInfoService(localStorage.getItem("token")).then(
        res => {
          this.userAvatar = res.data.userPic
        }
    )
  },
  data() {
    return {
      userAvatar: ''
    }
  },
  methods: {
    logOut() {
      this.$confirm('此操作将退出登录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '退出登录成功'
        });
        this.$router.push('/login')
        localStorage.removeItem('token')
        this.$store.commit('setToken', '')
      }).catch(() => {
        this.$message.success('已取消')
      })
    }
  }
}
</script>

<style lang="css" scoped>
.el-dropdown, .el-avatar {
  float: right;
}

.el-avatar {
  margin-right: 10px;
  margin-top: 10px;
}
</style>
