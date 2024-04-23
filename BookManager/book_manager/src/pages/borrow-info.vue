<script>
export default {
  name: "borrow-info",
  data() {
    return {
      userInput: '',
      bookInput: ''
    }
  },
  methods: {},
  created() {

  }
}
</script>

<template>
  <el-row :gutter="20" style=" width: 700px">
    <el-col :span="5">
      <el-input v-model="userInput" placeholder="请输入用户名"></el-input>
    </el-col>
    <el-col :span="5">
      <el-input v-model="bookInput" placeholder="请输入图书名"></el-input>
    </el-col>
    <el-col :span="4">
      <el-button icon="el-icon-search" type="primary">搜索</el-button>
    </el-col>
    <el-col :span="5">
      <el-button icon="el-icon-search" type="primary">显示全部</el-button>
    </el-col>
    <el-col :span="5">
      <el-button icon="el-icon-delete" type="danger">批量删除</el-button>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
* {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: ;
}
</style>
