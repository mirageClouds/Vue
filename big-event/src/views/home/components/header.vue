<template>
  <div>
    <el-dropdown>
      <i class="el-icon-arrow-down" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>退出登录</el-dropdown-item>
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
