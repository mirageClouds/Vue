<script>

export default {
  name: "user-manage",
  data() {
    return {
      input: '',
      page: 1,
      pageSize: 10,
      total: 0,
      openDialog: false,
      userinfo: [],
      openUpdataDialog: false,
      form: {
        username: '',
        userpassword: '',
        isadmin: 1,
        deleteAll: []
      },
      rules: {
        username: [{required: true, message: '请输入用户名称', trigger: 'blur'}],
        userpassword: [{required: true, message: '请输入用户密码', trigger: 'blur'}]
      },
      updatafrom: {
        username: '',
        userpassword: '',
        isadmin: 1,
        userid: 1
      }
    }
  },
  methods: {
    handleSizeChange(v) {
      this.$axios.get("/api/user/queryUsersByPage", {
        params: {
          page: this.page,
          limit: v
        }
      }).then(
          res => {
            this.userinfo = res.data.data
            this.total = res.data.count
            this.pageSize = v
          }
      )
    },
    handleCurrentChange(v) {
      this.$axios.get("/api/user/queryUsersByPage", {
        params: {
          page: v,
          limit: this.pageSize
        }
      }).then(
          res => {
            this.userinfo = res.data.data
            this.total = res.data.count
          }
      )
    },
    select() {
      this.page = 1
      this.$axios.get("/api/user/queryUsersByPage", {
        params: {
          page: this.page,
          limit: this.pageSize,
          username: this.input,
        }
      }).then(
          res => {
            this.userinfo = res.data.data
            this.total = res.data.count
          }
      )
    },
    selectAll() {
      this.page = 1
      this.input = ''
      this.select()
    },
    addUser() {
      this.openDialog = true
    },
    adduser() {
      this.$axios.post("/api/user/addUser", {
        isadmin: this.form.isadmin,
        username: this.form.username,
        userpassword: this.form.userpassword,
      }).then(
          res => {
            if (res.data === 1) {
              this.$message.success('添加用户成功')
              this.openDialog = false
              this.select()
            } else {
              this.$message.error('添加用户失败')
              this.openDialog = false
            }
          },
          error => {
            this.$message.error(error)
          }
      )
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
        this.$axios.delete('/api/user/deleteUsers', {
          data: this.deleteAll
        }).then(
            res => {
              if (res.data === 1) {
                this.select()
                this.$message.success('批量删除成功')
              } else {
                this.$message.error('批量删除失败')
              }
            },
            error => {
              this.$message.error(error)
            }
        )
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    handleSelectionChange(select) {
      this.deleteAll = select
    },
    handleSelectionChangeAll(select) {
      this.deleteAll = select
    },
    handleDelete(...row) {
      console.log(row)
      this.deleteAll = [row[1]]
      this.deletes()
    },
    handleUpdata(...row) {
      this.updatafrom.isadmin = row[1].isadmin
      this.updatafrom.userpassword = row[1].userpassword
      this.updatafrom.username = row[1].username
      this.updatafrom.userid = row[1].userid
      this.openUpdataDialog = true
    },
    updatauser() {
      this.$axios.post("/api/user/updateUser", {
        isadmin: this.updatafrom.isadmin,
        username: this.updatafrom.username,
        userid: this.updatafrom.userid,
        userpassword: this.updatafrom.userpassword,
      }).then(
          () => {
            this.$message.success('修改用户信息成功')
            this.openUpdataDialog = false
            this.select()
          },
          error => {
            this.$message.error(error)
            this.openUpdataDialog = false
          }
      )
    }
  },
  created() {
    this.$axios.get("/api/user/queryUsersByPage?page=1&limit=10").then(
        res => {
          this.userinfo = res.data.data
          this.total = res.data.count
        }
    )
  }
}
</script>

<template>
  <div>
    <el-row :gutter="20" style="width: 700px">
      <el-col :span="5">
        <el-input v-model="input" placeholder="请输入用户名"></el-input>
      </el-col>
      <el-col :span="4">
        <el-button icon="el-icon-search" type="primary" @click="select">搜索</el-button>
      </el-col>
      <el-col :span="5">
        <el-button icon="el-icon-search" type="primary" @click="selectAll">显示全部</el-button>
      </el-col>
      <el-col :span="5">
        <el-button icon="el-icon-search" type="primary" @click="addUser">添加用户</el-button>
      </el-col>
      <el-col :span="5">
        <el-button icon="el-icon-search" type="danger" @click="deletes">批量删除</el-button>
      </el-col>
    </el-row>
    <el-table
        ref="multipleTable"
        :data="userinfo"
        border
        style="width: 100%;margin-top: 20px"
        tooltip-effect="dark"
        @select="handleSelectionChange"
        @select-all="handleSelectionChangeAll"
    >
      <el-table-column
          align="context"
          min-width="55"
          type="selection">
      </el-table-column>
      <el-table-column
          align="center"
          label="序号"
          min-width="55"
          prop="userid">
      </el-table-column>
      <el-table-column
          align="center"
          label="用户名称"
          min-width="55"
          prop="username">
      </el-table-column>
      <el-table-column
          align="center"
          label="用户密码"
          min-width="120"
          prop="userpassword">
      </el-table-column>
      <el-table-column
          align="center"
          label="用户身份"
          min-width="120">
        <template slot-scope="scope">
          <p v-show="scope.row.isadmin === 0">读者</p>
          <p v-show="scope.row.isadmin === 1">管理员</p>
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
              @click="handleUpdata(scope.$index, scope.row)">编辑
          </el-button>
          <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
        :visible.sync="openDialog"
        title="提示"
        width="30%">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="用户名称" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="用户密码" prop="userpassword">
          <el-input v-model="form.userpassword"></el-input>
        </el-form-item>
        <el-form-item label="身份" prop="isadmin">
          <el-radio-group v-model="form.isadmin">
            <el-radio :label="1">管理员</el-radio>
            <el-radio :label="0">读者</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
      <el-button @click="openDialog = false">取 消</el-button>
      <el-button type="primary" @click="adduser">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog
        :visible.sync="openUpdataDialog"
        title="提示"
        width="30%">
      <el-form ref="form" :model="updatafrom" :rules="rules" label-width="80px">
        <el-form-item label="用户名称" prop="username">
          <el-input v-model="updatafrom.username"></el-input>
        </el-form-item>
        <el-form-item label="用户密码" prop="userpassword">
          <el-input v-model="updatafrom.userpassword"></el-input>
        </el-form-item>
        <el-form-item label="身份" prop="isadmin">
          <el-radio-group v-model="updatafrom.isadmin">
            <el-radio :label="1">管理员</el-radio>
            <el-radio :label="0">读者</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
      <el-button @click="openUpdataDialog = false">取 消</el-button>
      <el-button type="primary" @click="updatauser">确 定</el-button>
      </span>
    </el-dialog>

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
