<template>
  <div class="table-wrapper">
    <el-row>
      <el-button
          icon="el-icon-plus"
          size="mini"
          style="float: right; margin-right: 30px"
          type="primary"
          @click="this.addCategoryDialog = true"
      >新增分类
      </el-button>
    </el-row>
    <el-row>
      <el-table
          :cell-style="{color:'#0000D1'}"
          :data="articleCategoryList"
          :header-cell-style="{color:'#FF99CC'}"
          style="width: 100%;overflow:auto"
      >
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
            prop="categoryAlias"
        >
        </el-table-column>
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button
                icon="el-icon-edit"
                round
                size="mini"
                type="primary"
                @click="handleEdit(scope.$index, scope.row)"
            >
            </el-button>
            <el-button
                icon="el-icon-delete"
                round
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
            >
            </el-button>
          </template>
        </el-table-column>

      </el-table>
    </el-row>

    <el-dialog
        :modal-append-to-body="false"
        :visible.sync="addCategoryDialog"
        title="添加文章分类"
        width="400px"
    >

    </el-dialog>
  </div>
</template>

<script>


import {selectCategoryService} from "@/api/article";

export default {
  name: "article-category",
  created() {
    selectCategoryService(localStorage.getItem('token')).then(
        res => {
          this.articleCategoryList = res.data;
        },
        error => {
          this.$message.error(error)
        }
    )
  },
  data() {
    return {
      articleCategoryList: [],
      addCategoryDialog: false
    }
  },
  methods: {}
}
</script>

<style lang="css" scoped>
/*设置外边框圆角*/
.table-wrapper /deep/ .el-table {
  border-radius: 10px !important;
}

/*设置内边距*/
.table-wrapper /deep/ .el-table--fit {
  padding: 0 20px !important;
  border: none !important;
}

.table-wrapper .el-table, .el-table__expanded-cell {
  background-color: transparent !important;
  border: none !important;
}

.table-wrapper /deep/ .el-table tr, .table-wrapper /deep/ .el-table th {
  background-color: transparent !important;
  border: none !important;
}

.table-wrapper /deep/ .el-table td {
  border-bottom: 1px solid #CCFF66;

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
.table-wrapper /deep/ .el-table tr:hover td {
  background-color: #0582FF !important;
  color: #FF99CC !important;
}


</style>
