<script xmlns:el-col="http://www.w3.org/1999/html">

export default {
  name: "book-info",
  data() {
    return {
      restaurants: [],
      state1: '',
      bookName: '',
      bookAuthor: '',
      currentPage: 1,
      pageCount: 100,
      pageSize: 10,
      bookInfo: []
    }
  },
  methods: {
    querySearch(queryString, cb) {
      // 调用 callback 返回建议列表的数据
      cb(this.restaurants);
    },
    //分页事件监测
    pgSize(val) {
      this.$axios({
        method: 'GET',
        url: `/api/bookInfo/queryBookInfosByPage?page=${this.currentPage}&limit=${val}`,
      }).then(
          res => {
            for (let i = 0; i < res.data.data.length; i++) {
              this.bookInfo = res.data.data
              this.pageCount = res.data.count
              this.pageSize = val
              console.log(this.pageSize)
            }
          }
      )
    },
    pgCurrent(val) {
      this.$axios({
        method: 'GET',
        url: `/api/bookInfo/queryBookInfosByPage?page=${val}&limit=${this.pageSize}`,
      }).then(
          res => {
            for (let i = 0; i < res.data.data.length; i++) {
              this.bookInfo = res.data.data
              this.pageCount = res.data.count
              this.currentPage = val
              console.log(this.currentPage)
            }
          }
      )
    }
  },
  created() {
    // 加载获取数据
    this.$axios({
      method: 'GET',
      url: '/api/bookType/queryBookTypes'
    }).then(
        res => {
          this.restaurants = []
          for (let i = 0; i < res.data.length; i++) {
            this.restaurants.push({value: res.data[i].booktypename})
          }
        }
    )
    this.$axios({
      method: 'GET',
      url: `/api/bookInfo/queryBookInfosByPage?page=${this.currentPage}&limit=${this.pageSize}`,
    }).then(
        res => {
          for (let i = 0; i < res.data.data.length; i++) {
            this.bookInfo = res.data.data
            this.pageCount = res.data.count
          }
        }
    )
  }
}
</script>

<template>
  <div>
    <el-row :gutter="20" style="width: 700px;">
      <el-col :span="4">
        <el-input
            v-model="bookName"
            clearable
            placeholder="书名">
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-input
            v-model="bookAuthor"
            clearable
            placeholder="作者">
        </el-input>
      </el-col>
      <el-col :span="5">
        <el-autocomplete
            v-model="state1"
            :fetch-suggestions="querySearch"
            class="inline-input"
            clearable
            placeholder="请输入内容"
        ></el-autocomplete>
      </el-col>
      <el-col :span="4">
        <el-button icon="el-icon-search" type="primary">搜索</el-button>
      </el-col>
      <el-col :span="4">
        <el-button icon="el-icon-search" type="primary">显示全部</el-button>
      </el-col>
    </el-row>

    <el-row :gutter="20" style="width: 400px; margin-top: 20px">
      <el-col :span="8">
        <el-button icon="el-icon-edit" type="primary">添加图书</el-button>
      </el-col>
      <el-col :span="8">
        <el-button icon="el-icon-delete" type="danger">批量删除</el-button>
      </el-col>
    </el-row>

    <el-dialog>
      
    </el-dialog>

    <el-table
        :data="bookInfo"
        border
        style="width: 100%;
        margin-top: 20px;
      ">
      <el-table-column
          align="center"
          min-width="100"
          type="selection">
      </el-table-column>
      <el-table-column
          align="center"
          fixed
          label="序号"
          min-width="100"
          prop="bookid">
      </el-table-column>
      <el-table-column
          align="center"
          label="图书名称"
          min-width="150"
          prop="bookname"
          show-overflow-tooltip>
      </el-table-column>
      <el-table-column
          align="center"
          label="图书作者"
          min-width="100"
          prop="bookauthor"
          show-overflow-tooltip>
      </el-table-column>
      <el-table-column
          align="center"
          label="图书价格"
          min-width="100"
          prop="bookprice">
      </el-table-column>
      <el-table-column
          align="center"
          label="图书类型"
          min-width="100"
          prop="booktypename">
      </el-table-column>
      <el-table-column
          align="center"
          label="图书描述"
          min-width="300"
          prop="bookdesc"
          show-overflow-tooltip>
      </el-table-column>
      <el-table-column
          align="center"
          label="图书状态"
          min-width="100">
        <template slot-scope="scope">
          <p v-show="!scope.row.isborrowed" style="color: rgb(26, 172, 26);">未借出</p>
          <p v-show="scope.row.isborrowed" style="color: red">已借出</p>
        </template>
      </el-table-column>
      <el-table-column
          align="center"
          fixed="right"
          label="操作"
          min-width="240"
          prop="address">
        <template slot-scope="scope">
          <el-button
              size="mini"
              type="primary"
              @click="handleEdit(scope.$index, scope.row)">编辑
          </el-button>
          <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除
          </el-button>
          <el-button
              size="mini"
              type="success"
              @click="handleDelete(scope.$index, scope.row)">借阅图书
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
        :current-page.sync="currentPage"
        :page-size.sync="pageSize"
        :page-sizes="[5, 10, 20, 50]"
        :total="pageCount"
        background
        layout="total,sizes, prev, pager, next,jumper"
        style="margin-top: 20px"
        @size-change="pgSize"
        @current-change="pgCurrent"
    >
    </el-pagination>
  </div>
</template>

<style lang="scss" scoped>

</style>
