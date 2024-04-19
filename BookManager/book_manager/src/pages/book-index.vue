<script>
import navMenu from "@/components/nav-menu.vue";
import navBar from "@/components/nav-bar.vue";

export default {
  name: "index",
  data() {
    return {
      isCollapse: false,
    }
  },
  components: {
    navMenu, navBar
  }
}
</script>

<template>
  <el-container>
    <el-aside style="overflow: hidden" width="250px ">
      <nav-menu></nav-menu>
    </el-aside>
    <el-container>
      <el-header>
        <nav-bar></nav-bar>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="css" scoped>
* {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.el-header {
  background-color: #fff;
  height: 5%;
  text-align: center;
  line-height: 5%;
  border-bottom: 0.2px solid #eee;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  color: #333;
  height: 95%;
  overflow: auto;
}
</style>
