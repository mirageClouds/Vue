<script>
export default {
  name: "book-type",
  data() {
    return {
      selectInput: ''
    }
  }
}
</script>

<template>
  <div>
    <el-row :gutter="20" style="width: 700px;">
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <el-input v-model="selectInput" placeholder="请输入内容"></el-input>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <el-button icon="el-icon-search" type="primary">搜索</el-button>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <el-button icon="el-icon-search" type="primary">显示全部</el-button>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <el-button icon="el-icon-search" type="primary">添加类型</el-button>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <el-button icon="el-icon-search" type="danger">批量删除</el-button>
        </div>
      </el-col>
    </el-row>
    <el-table
        ref="multipleTable"
        :data="tableData"
        style="width: 100%"
        tooltip-effect="dark"
        @selection-change="handleSelectionChange">
      <el-table-column
          type="selection"
          width="55">
      </el-table-column>
      <el-table-column
          label="日期"
          width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
          label="姓名"
          prop="name"
          width="120">
      </el-table-column>
      <el-table-column
          label="地址"
          prop="address"
          show-overflow-tooltip>
      </el-table-column>
    </el-table>
    <el-pagination
        :current-page="currentPage4"
        :page-size="100"
        :page-sizes="[100, 200, 300, 400]"
        :total="400"
        background
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>

<style lang="scss" scoped>

</style>
