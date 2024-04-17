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
    <el-menu :collapse="isCollapse" class="el-menu-vertical-demo" default-active="1-4-1" @close="handleClose"
             @open="handleOpen">
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item index="1-3">选项3</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu index="1-4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item index="1-3">选项3</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
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
