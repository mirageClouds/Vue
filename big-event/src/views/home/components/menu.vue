<template>
  <el-menu
      :default-active="this.$route.path"
      active-text-color="#ffd04b"
      background-color="#99CCFF"
      class="el-menu-vertical-demo"
      router
      text-color="#fff"
  >
    <el-menu-item index="/index" style="height: 110px;padding: 20px ">
      <el-image :src="require('@/assets/logo.png')"></el-image>
    </el-menu-item>
    <el-menu-item index="/article/category">
      <i class="el-icon-menu"></i>
      <span slot="title">文章分类</span>
    </el-menu-item>
    <el-menu-item index="/article/manage">
      <i class="el-icon-document"></i>
      <span slot="title">文章管理</span>
    </el-menu-item>
    <el-submenu index="/user">
      <template slot="title">
        <i class="el-icon-user-solid"></i>
        <span>个人中心</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/user/info">
          <i class="el-icon-user"></i>
          基本资料
        </el-menu-item>
        <el-menu-item index="/user/avatar">
          <i class="el-icon-picture-outline-round"></i>
          更换头像
        </el-menu-item>
        <el-menu-item index="/user/resetPassword">
          <i class="el-icon-lock"></i>
          重置密码
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "home-menu",
  data() {
    return {}
  }
}
</script>

<style lang="css" scoped>
.el-menu-item, .el-submenu {
  min-width: 200px;
}

.el-menu-item.is-active {
  background-color: #41a3fb !important;
  color: #FF80FF !important;
}

.el-menu-item:hover {
  background-color: #41a3fb !important;
}

.el-submenu /deep/ .el-submenu__title:hover {
  background-color: #41a3fb !important;
}

</style>
