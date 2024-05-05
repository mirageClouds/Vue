<template>
  <el-container style="height: 100%;position: absolute;left: 0;right: 0;top: 0;">
    <el-aside style="background-color: rgb(83,91,99)" width="200px">
      <home-menu/>
    </el-aside>

    <el-container>
      <el-header>
        <home-header/>
      </el-header>

      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import HomeMenu from "@/views/home/components/menu.vue";
import HomeHeader from "@/views/home/components/header.vue";

export default {
  name: "home-index",
  components: {
    HomeHeader,
    HomeMenu,
  }
}
</script>

<style lang="css" scoped>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
