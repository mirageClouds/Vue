<template>
  <div class="table-wrapper">
    <el-table
        :data="articleCategoryList"
        :header-cell-style="{color:'#606266'}"
        style="width: 100%">
      <el-table-column
          align="center"
          label="序号"
          prop="id"
          width="180">
      </el-table-column>
      <el-table-column
          align="center"
          label="分类名称"
          prop="categoryName"
          width="180">
      </el-table-column>
      <el-table-column
          align="center"
          label="分类别名"
          prop="categoryAlias">
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑
          </el-button>
          <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>


import {articleCategoryService} from "@/api/article";

export default {
  name: "article-category",
  created() {
    articleCategoryService(localStorage.getItem('token')).then(
        res => {
          this.articleCategoryList = res.data;
          console.log(this.articleCategoryList)
        },
        error => {
          this.$message.error(error)
        }
    )
  },
  data() {
    return {
      articleCategoryList: [],
    }
  }
}
</script>

<style lang="css" scoped>
.table-wrapper /deep/ .el-table {
  border-radius: 10px !important;
}

.table-wrapper /deep/ .el-table--fit {
  padding: 20px !important;
  border: none !important;
}

.table-wrapper .el-table, .el-table__expanded-cell {
  background-color: transparent !important;
  border: none !important;
}

.table-wrapper /deep/ .el-table tr, .table-wrapper /deep/ .el-table th, .table-wrapper /deep/ .el-table td {
  background-color: transparent !important;
  border: none !important;
}


/*去最下面的横线*/
.el-table::before {
  height: 0;
}

/*去每一行记录下的横线*/
.el-table td {
  border: none !important;
}

/*table内的高亮*/
.el-table tbody tr:hover > td {
  background-color: rgb(79, 163, 213) !important
}


</style>
