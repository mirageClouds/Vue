<script>
export default {
  name: "nav-menu",
  data() {
    return {
      isCollapse: false,
    };
  }
}

</script>

<template>
  <div>
    <el-menu :collapse="isCollapse" :default-active="$route.path" :router="true"
             class="el-menu-vertical-demo">
      <el-menu-item index="/bookIndex/index">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">图书管理</span>
        </template>
        <el-menu-item index="/bookIndex/bookmanage/bookInfo">图书信息管理</el-menu-item>
        <el-menu-item index="/bookIndex/bookmanage/bookType">图书类型管理</el-menu-item>
        <el-menu-item index="/bookIndex/bookmanage/borrowInfo">借阅信息管理</el-menu-item>
      </el-submenu>
      <el-submenu index="1-4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">用户管理</span>
        </template>
        <el-menu-item index="/bookIndex/userInfoManage/userManage">用户管理</el-menu-item>
        <el-menu-item index="/bookIndex/userInfoManage/updatePassword">修改密码</el-menu-item>
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
