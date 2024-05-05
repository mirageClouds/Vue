<template>
  <el-menu
      active-text-color="#ffd04b"
      background-color="rgb(83,91,99)"
      class="el-menu-vertical-demo"
      default-active="1-1"
      router
      text-color="#fff"
      @close="handleClose"
      @open="handleOpen"
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
        <i class="el-icon-location"></i>
        <span>个人中心</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/user/info">
          基本资料
        </el-menu-item>
        <el-menu-item index="/user/avatar">
          更换头像
        </el-menu-item>
        <el-menu-item index="/user/resetPassword">
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
</style>
