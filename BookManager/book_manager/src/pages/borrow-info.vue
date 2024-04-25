<script>
export default {
  name: "borrow-info",
  data() {
    return {
      userInput: '',
      bookInput: '',
      borrowInfo: [],
      total: 1,
      pageSize: 10,
      page: 1,
      deleteAll: []
    }
  },
  methods: {
    handleSizeChange(val) {
      this.page = 1
      this.$axios.get('/api/borrow/queryBorrowsByPage', {
        params: {
          page: this.page,
          limit: val
        }
      }).then(
          res => {
            this.borrowInfo = res.data.data
            this.pageSize = val
          }
      )
    },
    handleCurrentChange(val) {
      this.$axios.get('/api/borrow/queryBorrowsByPage', {
        params: {
          page: val,
          limit: this.pageSize
        }
      }).then(
          res => {
            this.borrowInfo = res.data.data
          }
      )
    },
    select() {
      this.page = 1
      this.$axios.get('/api/borrow/queryBorrowsByPage', {
        params: {
          page: this.page,
          limit: this.pageSize,
          username: this.userInput,
          bookname: this.bookInput,
        }
      }).then(
          res => {
            this.borrowInfo = res.data.data
            this.total = res.data.count
          }
      )
    },
    selectAll() {
      this.page = 1
      this.userInput = ''
      this.bookInput = ''
      this.select()
    },
    deletes() {
      this.page = 1
      this.userInput = ''
      this.bookInput = ''
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios.delete('/api/borrow/deleteBorrows', {
          data: this.deleteAll
        }).then(
            res => {
              if (res.data === 1) {
                this.select()
                this.$message.success('批量删除成功')
              } else {
                this.$message.error('批量删除失败')
              }
            }
        )
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    handleSelectionChange(...select) {
      console.log(select[0])
      this.deleteAll = select[0]
    },
    handleSelectionChangeAll(...select) {
      this.deleteAll = select[0]
    },
    handleDelete(...row) {
      this.deleteAll.push(row[1])
      this.deletes()
    },
    handleBorrow(...row) {
      this.page = 1
      this.userInput = ''
      this.bookInput = ''
      this.$axios.post(`/api/borrow/returnBook?borrowid=${row[1].borrowid}&bookid=${row[1].bookid}`).then(
          res => {
            if (res.data === 1) {
              this.$message.success('归还成功')
              this.select()
            } else {
              this.$message.error('归还失败')
            }
          }
      )
      console.log(row)
    }
  },
  created() {
    this.$axios.get("/api/borrow/queryBorrowsByPage?page=1&limit=10").then(
        res => {
          this.borrowInfo = res.data.data
          console.log(res)
          this.total = res.data.count
        },
        error => {
          this.$message, error(error)
        }
    )
  }
}
</script>

<template>
  <div>
    <el-row :gutter="20" style=" width: 700px">
      <el-col :span="5">
        <el-input v-model="userInput" placeholder="请输入用户名"></el-input>
      </el-col>
      <el-col :span="5">
        <el-input v-model="bookInput" placeholder="请输入图书名"></el-input>
      </el-col>
      <el-col :span="4">
        <el-button icon="el-icon-search" type="primary" @click="select">搜索</el-button>
      </el-col>
      <el-col :span="5">
        <el-button icon="el-icon-search" type="primary" @click="selectAll">显示全部</el-button>
      </el-col>
      <el-col :span="5">
        <el-button icon="el-icon-delete" type="danger" @click="deletes">批量删除</el-button>
      </el-col>
    </el-row>

    <el-table
        ref="multipleTable"
        :data="borrowInfo"
        border
        style="width: 100%;margin-top: 20px"
        tooltip-effect="dark"
        @select="handleSelectionChange"
        @select-all='handleSelectionChangeAll'
    >
      <el-table-column
          min-width="30"
          type="selection">
      </el-table-column>
      <el-table-column
          align="center"
          label="序号"
          min-width="40"
          prop="bookid">
      </el-table-column>
      <el-table-column
          align="center"
          label="用户名"
          min-width="30"
          prop="username"
          show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
          align="center"
          label="图书名"
          min-width="120"
          prop="bookname"
          show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
          align="center"
          label="借书时间"
          min-width="120" prop="borrowtimestr"
          show-overflow-tooltip>
      </el-table-column>
      <el-table-column
          align="center"
          label="还书时间"
          min-width="120"
          show-overflow-tooltip
      >
        <template slot-scope="scope">
          <p v-show="scope.row.returntimestr" style="color:#1cad1c">{{ scope.row.returntimestr }}</p>
          <p v-show="!scope.row.returntimestr" style="color:red">等待归还</p>
        </template>
      </el-table-column>
      <el-table-column
          align="center"
          fixed="right"
          label="操作"
          min-width="120"
          prop="address">
        <template slot-scope="scope">
          <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除
          </el-button>
          <el-button
              size="mini"
              type="success"
              @click="handleBorrow(scope.$index, scope.row)">归还图书
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
        :current-page="page"
        :page-size="pageSize"
        :page-sizes="[5, 10, 30, 50]"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>

<style lang="scss" scoped>

</style>
