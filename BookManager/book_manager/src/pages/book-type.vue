<script>
export default {
  name: "book-type",
  data() {
    return {
      selectInput: '',
      userinfo: [],
      bookType: [],
      currentPage: 1,
      pageSize: 10,
      total: 0,
      openDialog: false,
      rules: {
        booktypename: [
          {required: true, message: '图书类型名字不能为空', trigger: 'blur'}
        ],
        booktypedesc: [
          {required: true, message: '图书类型详情不能为空', trigger: 'blur'}
        ]
      },
      ruleForm: {
        booktypename: '',
        booktypedesc: ''
      },
      deleteBookType: [],
      updataBookType: {},
      openEditDialog: false
    }
  },
  methods: {
    // 分页查询
    handleSizeChange(v) {
      this.$axios.get('/api/bookType/queryBookTypesByPage', {
        params: {
          page: this.currentPage,
          limit: v
        }
      }).then(
          res => {
            this.pageSize = v
            console.log(res.data.data)
            this.bookType = res.data.data
            this.total = res.data.count
          },
          error => {
            this.$message(error)
          }
      )
    },
    handleCurrentChange(v) {
      this.$axios.get('/api/bookType/queryBookTypesByPage', {
        params: {
          page: v,
          limit: this.pageSize
        }
      }).then(
          res => {
            this.currentPage = v
            console.log(res.data.data)
            this.bookType = res.data.data
            this.total = res.data.count
          },
          error => {
            this.$message(error)
          }
      )
    },
    // 条件查询
    selectFromInput() {
      this.currentPage = 1
      this.$axios.get('/api/bookType/queryBookTypesByPage', {
        params: {
          page: this.currentPage,
          limit: this.pageSize,
          booktypename: this.selectInput
        }
      }).then(
          res => {
            this.bookType = res.data.data
            this.total = res.data.count
          },
          error => {
            this.$message.error(error)
          }
      )
    },
    selectAll() {
      this.$axios.get('/api/bookType/queryBookTypes').then(
          res => {
            this.bookType = res.data
            this.total = res.data.length
          },
          error => {
            this.$message.error(error)
          }
      )
    },
    // 添加类型
    dialogFormVisible() {
      this.$axios.post('/api/bookType/addBookType', {
        booktypeid: null,
        booktypename: this.ruleForm.booktypename,
        booktypedesc: this.ruleForm.booktypedesc,
      }).then(
          () => {
            this.$message.success('添加成功')
            this.selectAll()
            this.openDialog = false
          },
          error => {
            this.$message.error(error)
          }
      )
    },
    //批量删除
    getBookTypeRow(select) {
      this.deleteBookType = select
      console.log(this.deleteBookType)
    },
    getBookTypeAllRow(select) {
      this.deleteBookType = select
    },
    openDeleteMsgBox() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteBookTypeInfo()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    deleteBookTypeInfo() {
      this.$axios.delete('/api/bookType/deleteBookTypes', {
        headers: {
          'Content-Type': 'application/json'
        },
        data: this.deleteBookType
      }).then(
          res => {
            if (res.data === 1 || res.data === 2) {
              this.$message.success('批量删除成功')
              this.selectAll()
            } else {
              this.$message.error('批量删除失败，请联系管理员')
            }
          },
          error => {
            this.$message.error(error)
          }
      )
    },
    //行内编辑
    handleEdit(...row) {
      this.updataBookType = row[1]
      this.openEditDialog = true
    },
    dialogEditVisible() {
      this.$axios.put('/api/bookType/updateBookType', {
        booktypeid: this.updataBookType.booktypeid,
        booktypename: this.updataBookType.booktypename,
        booktypedesc: this.updataBookType.booktypedesc,
      }).then(
          res => {
            if (res.data) {
              this.$message.success('修改成功')
              this.openEditDialog = false
            } else {
              this.$message.error('修改失败，请联系管理员')
            }
          },
          error => {
            this.$message.error(error)
          }
      )
    },
    //行内删除
    handleDelete(...row) {
      this.deleteBookType.push(row[1])
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteBookTypeRow()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    deleteBookTypeRow() {
      this.$axios.delete('/api/bookType/deleteBookTypes', {
        data: this.deleteBookType
      }).then(
          res => {
            if (res.data === 1 || res.data === 2) {
              this.$message.success('删除成功')
              this.selectAll()
            } else {
              this.$message.error('删除失败，请联系管理员')
            }
          },
          error => {
            this.$message.error(error)
          }
      )
    }
  },
  created() {
    this.$axios.get('/api/user/queryUsers').then(
        res => {
          this.userinfo = res.data
        }
    )
    this.$axios.get('/api/bookType/queryBookTypes').then(
        res => {
          this.bookType = res.data
          this.total = res.data.length
        }
    )
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
          <el-button icon="el-icon-search" type="primary" @click="selectFromInput">搜索</el-button>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <el-button icon="el-icon-search" type="primary" @click="selectAll">显示全部</el-button>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <el-button icon="el-icon-search" type="primary" @click="openDialog = true">添加类型</el-button>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <el-button icon="el-icon-search" type="danger" @click="openDeleteMsgBox">批量删除</el-button>
        </div>
      </el-col>
    </el-row>

    <el-table
        ref="multipleTable"
        :data="bookType"
        border
        style="width: 100%;margin-top: 20px"
        tooltip-effect="dark"
        @select="getBookTypeRow"
        @select-all="getBookTypeAllRow"
    >
      <el-table-column
          type="selection"
          width="55"
      >
      </el-table-column>
      <el-table-column
          align="center"
          label="序号"
          min-width="60"
          prop="booktypeid"
      >
      </el-table-column>
      <el-table-column
          align="center"
          label="类型名字"
          min-width="240"
          prop="booktypename"
          show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
          align="center"
          label="类型详情"
          min-width="240"
          prop="booktypedesc"
          show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
          align="center"
          label="操作"
          min-width="240"
      >
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


    <el-pagination
        :current-page="currentPage"
        :page-size="pageSize"
        :page-sizes="[5, 10, 20, 50]"
        :total="total"
        background
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange">
    </el-pagination>

    <el-dialog :visible.sync="openDialog" title="添加图书类型" width="20%">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" class="demo-ruleForm" label-width="120px">
        <el-form-item label="图书类型名称" prop="booktypename">
          <el-input v-model="ruleForm.booktypename"></el-input>
        </el-form-item>
        <el-form-item label="图书类型详情" prop="booktypedesc">
          <el-input v-model="ruleForm.booktypedesc" type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="openDialog  = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog :visible.sync="openEditDialog" title="编辑图书类型" width="20%">
      <el-form ref="ruleForm" :model="updataBookType" :rules="rules" class="demo-ruleForm" label-width="120px">
        <el-form-item label="图书类型名称" prop="booktypename">
          <el-input v-model="updataBookType.booktypename"></el-input>
        </el-form-item>
        <el-form-item label="图书类型详情" prop="booktypedesc">
          <el-input v-model="updataBookType.booktypedesc" type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="openEditDialog  = false">取 消</el-button>
        <el-button type="primary" @click="dialogEditVisible">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>

</style>
