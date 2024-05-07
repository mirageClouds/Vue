<template>
  <el-container style="height: 100%;position: absolute;left: 0;right: 0;top: 0;">
    <el-aside style="background-color:#99CCFF" width="200px">
      <home-menu/>
    </el-aside>

    <el-container>
      <el-header>
        <home-header/>
      </el-header>

      <el-main>
        <div>
          <el-row>
            <el-col :span="24">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <template v-for="(i,key) in this.$store.state.nav">
                  <el-breadcrumb-item v-if="i.meta.title" :key="key"
                                      :to="{name:i.name}">{{
                      i.meta.title
                    }}
                  </el-breadcrumb-item>
                </template>
              </el-breadcrumb>
            </el-col>
          </el-row>
          <el-row>
            <router-view/>
          </el-row>
        </div>
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
  },
}
</script>

<style lang="css" scoped>
/*设置背景图片*/
.el-container {
  background-image: url("@/assets/59440693_p0.jpg");
}

.el-header {
  background-color: #8080FF;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.el-main {
  margin: 30px;
  padding: 30px;
  backdrop-filter: blur(10px);
  border-radius: 15px;
}

.el-row {
  margin-bottom: 20px;
}

/*面包屑导航美化*/

/* 不被选中时的颜色 */
.el-breadcrumb ::v-deep .el-breadcrumb__inner {
  color: #0582FF !important;
  font-weight: 400 !important;
}

/* 被选中时的颜色 */
.el-breadcrumb__item:last-child ::v-deep .el-breadcrumb__inner {
  color: #FF80FF !important;
  font-weight: 800 !important;
}

</style>
