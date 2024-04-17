<script>
export default {
  name: "nav-menu",
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<template>
  <div>
    <el-menu :collapse="isCollapse" :router="true" class="el-menu-vertical-demo" default-active="1-4-1"
             @close="handleClose" @open="handleOpen">
      <el-menu-item index="/index">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">图书管理</span>
        </template>
        <el-menu-item index="/index/bookInfo">图书信息管理</el-menu-item>
        <el-menu-item index="/index/bookType">图书类型管理</el-menu-item>
        <el-menu-item index="/index/borrowInfo">借阅信息管理</el-menu-item>
      </el-submenu>
      <el-submenu index="1-4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">其他管理</span>
        </template>
        <el-menu-item index="/index/userManage">用户管理</el-menu-item>
        <el-menu-item index="/index/updatePassword">修改密码</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<style lang="css" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 250px;
  min-height: 400px;
  overflow: hidden;
}
</style>
