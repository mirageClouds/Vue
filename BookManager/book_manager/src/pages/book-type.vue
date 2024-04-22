<script>
export default {
  name: "book-type",
  data() {
    return {
      selectInput: '',
      userinfo:[],
      bookType:[] ,
      currentPage:1,
      pageSize:10,
      total:0,
      ruleForm:{
        booktypename:'',
        booktypedesc:''
      }
    }
  },
  methods:{
    handleSizeChange(v){
        this.$axios.get('/api/bookType/queryBookTypesByPage',{
          params:{
            page: this.currentPage,
            limit:v
          }
        }).then(
            res=>{
              this.pageSize = v
              console.log(res.data.data)
              this.bookType = res.data.data
              this.total = res.data.count
            },
            error =>{
              this.$message(error)
            }
        )
    },
    handleCurrentChange(v){
      this.$axios.get('/api/bookType/queryBookTypesByPage',{
        params:{
          page: v,
          limit:this.pageSize
        }
      }).then(
          res=>{
            this.currentPage = v
            console.log(res.data.data)
            this.bookType = res.data.data
            this.total = res.data.count
          },
          error =>{
            this.$message(error)
          }
      )
    },
    selectFromInput(){
      this.currentPage = 1
      this.$axios.get('/api/bookType/queryBookTypesByPage',{
        params:{
          page: this.currentPage,
          limit:this.pageSize,
          booktypename:this.selectInput
        }
      }).then(
          res=>{
            this.bookType = res.data.data
            this.total = res.data.count
            this.$message.success('搜索成功')
          },
          error =>{
            this.$message.error(error)
          }
      )
    },
    selectAll(){
      this.$axios.get('/api/bookType/queryBookTypes').then(
          res =>{
            this.bookType = res.data
            this.total = res.data.length
            this.$message.success('查询成功')
          },
          error =>{
            this.$message.error(error)
          }
      )
    }
  },
  created() {
    this.$axios.get('/api/user/queryUsers').then(
        res=>{
          this.userinfo = res.data
        }
    )
    this.$axios.get('/api/bookType/queryBookTypes').then(
        res =>{
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
          <el-button icon="el-icon-search" type="primary">添加类型</el-button>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <el-button icon="el-icon-search" type="danger">批量删除</el-button>
        </div>
      </el-col>
    </el-row>

    <el-dialog width="30%">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="图书类型名称" prop="name">
          <el-input v-model="ruleForm.booktypename"></el-input>
        </el-form-item>
        <el-form-item label="图书类型详情" prop="name">
          <el-input v-model="ruleForm.booktypedesc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <el-table
        ref="multipleTable"
        :data="bookType"
        style="width: 100%"
        tooltip-effect="dark"
       >
      <el-table-column
          type="selection"
          width="55">
      </el-table-column>
      <el-table-column
          label="序号"
          prop="booktypeid"
          width="120">
      </el-table-column>
      <el-table-column
          label="类型名字"
          prop="booktypename"
          show-overflow-tooltip>
      </el-table-column>
      <el-table-column
          label="类型详情"
          prop="booktypedesc"
          show-overflow-tooltip>
      </el-table-column>
<!--      <el-table-column label="操作">-->
<!--        <template slot-scope="scope">-->
<!--          <el-button-->
<!--              size="mini"-->
<!--              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>-->
<!--          <el-button-->
<!--              size="mini"-->
<!--              type="danger"-->
<!--              @click="handleDelete(scope.$index, scope.row)">删除</el-button>-->
<!--        </template>-->
<!--      </el-table-column>-->
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
  </div>
</template>

<style lang="scss" scoped>

</style>
