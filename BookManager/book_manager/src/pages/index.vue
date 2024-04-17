<script>
import navMenu from "@/components/nav-menu.vue";
import navBar from "@/components/nav-bar.vue";

export default {
  name: "index",
  components: {
    navMenu, navBar
  }
}
</script>

<template>
  <el-container>
    <el-aside style="overflow: hidden" width="250px ">
      <nav-menu></nav-menu>
      <!--      <router-link to="bookInfo">111</router-link>-->
    </el-aside>
    <el-container>
      <el-header>
        <nav-bar></nav-bar>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="css" scoped>
* {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
