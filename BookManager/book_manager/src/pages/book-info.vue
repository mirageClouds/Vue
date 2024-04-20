<script>

export default {
  name: "book-info",
  data() {
    return {
      // 图书类型列表数据
      bookType: [],
      // 图书信息列表数据
      bookInfo: [],
      dialogAddBook: false,
      // 条件查询数据
      selectBook: {
        bookName: '',
        bookAuthor: '',
        bookTypeId: null,
      },
      // 分页查询数据
      pageBook: {
        currentPage: 1,
        pageCount: 100,
        pageSize: 10,
      },
      // 添加图书数据
      dialogFormAdd: {
        bookame: '',
        bookauthor: '',
        bookprice: '',
        bookdesc: '',
        bookTypeId: null
      },
      // 表单验证规则
      ruleFrom: {
        bookname: [
          {required: true, message: '请输入图书名称', trigger: 'blur'}
        ],
        bookauthor: [
          {required: true, message: '请输入图书作者', trigger: 'blur'}
        ],
        bookprice: [
          {required: true, message: '请输入图书价格', trigger: 'blur'}
        ],
        bookdesc: [
          {required: true, message: '请输入图书类型', trigger: 'blur'}
        ],
        bookTypeId: [
          {required: true, message: '请输入图书描述', trigger: 'blur'}
        ],
      }
    }
  },
  methods: {
    // 调用 callback 返回建议列表的数据
    querySearch(queryString, cb) {
      cb(this.bookType);
    },
    // 修改条件查询数据的BookTypeId
    updataSelectBookTypeId(item) {
      for (let i = 0; i < this.bookType.length; i++) {
        if (item === this.bookType[i].value) {
          this.selectBook.bookTypeId = this.bookType[i].booktypeid;
        }
      }
    },
    //分页事件监测
    pgSize(val) {
      this.$axios.get(`/api/bookInfo/queryBookInfosByPage`, {
        params: {
          page: this.pageBook.currentPage,
          limit: val,
          bookname: this.selectBook.bookName,
          bookauthor: this.selectBook.bookAuthor,
          booktypeid: this.selectBook.bookTypeId,
        }
      },).then(
          res => {
            for (let i = 0; i < res.data.data.length; i++) {
              this.bookInfo = res.data.data
              this.pageBook.pageCount = res.data.count
              this.pageBook.pageSize = val
              console.log(this.pageSize)
            }
          }
      )
    },
    pgCurrent(val) {
      this.$axios.get(`/api/bookInfo/queryBookInfosByPage`, {
        params: {
          page: val,
          limit: this.pageBook.pageSize,
          bookname: this.selectBook.bookName,
          bookauthor: this.selectBook.bookAuthor,
          booktypeid: this.selectBook.bookTypeId,
        }
      },).then(
          res => {
            for (let i = 0; i < res.data.data.length; i++) {
              this.bookInfo = res.data.data
              this.pageBook.pageCount = res.data.count
              this.pageBook.currentPage = val
            }
          }
      )
    },
    // 条件查询书籍信息
    selectBookInfo() {
      this.$axios.get(`/api/bookInfo/queryBookInfosByPage?page=${this.pageBook.currentPage}&limit=${this.pageBook.pageSize}`, {
        params: {
          bookname: this.selectBook.bookName,
          bookauthor: this.selectBook.bookAuthor,
          booktypeid: this.selectBook.bookTypeId,
        }
      }).then(
          res => {
            this.bookInfo = res.data.data
            this.pageBook.pageCount = res.data.count
          }
      )
    },
    selectAllBookInfo() {
      this.$axios.get(
          `/api/bookInfo/queryBookInfosByPage?page=${this.pageBook.currentPage}&limit=${this.pageBook.pageSize}`
      ).then(res => {
        this.bookInfo = res.data.data
        this.pageBook.pageCount = res.data.count
      })
    },
    // 修改添加图书数据中的BookTypeId
    updataDialogFormAddBookTypeId(item) {
      for (let i = 0; i < this.bookType.length; i++) {
        if (item === this.bookType[i].value) {
          this.dialogFormAdd.bookTypeId = this.bookType[i].booktypeid;
        }
      }
    },
  },
  // 加载获取数据
  created() {
    // 加载图书类型数据
    this.$axios({
      method: 'GET',
      url: '/api/bookType/queryBookTypes'
    }).then(
        res => {
          this.bookType = []
          for (let i = 0; i < res.data.length; i++) {
            this.bookType.push({value: res.data[i].booktypename, booktypeid: res.data[i].booktypeid})
          }
        }
    )
    // 加载图书数据
    this.$axios({
      method: 'GET',
      url: `/api/bookInfo/queryBookInfosByPage?page=${this.pageBook.currentPage}&limit=${this.pageBook.pageSize}`,
    }).then(
        res => {
          for (let i = 0; i < res.data.data.length; i++) {
            this.bookInfo = res.data.data
            this.pageBook.pageCount = res.data.count
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
            v-model="selectBook.bookName"
            clearable
            placeholder="书名">
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-input
            v-model="selectBook.bookAuthor"
            clearable
            placeholder="作者">
        </el-input>
      </el-col>
      <el-col :span="5">
        <el-autocomplete
            v-model="selectBook.state1"
            :fetch-suggestions="querySearch"
            class="inline-input"
            clearable
            placeholder="请输入内容"
            @input=updataSelectBookTypeId
        ></el-autocomplete>
      </el-col>
      <el-col :span="4">
        <el-button icon="el-icon-search" type="primary" @click="selectBookInfo">搜索</el-button>
      </el-col>
      <el-col :span="4">
        <el-button icon="el-icon-search" type="primary" @click="selectAllBookInfo">显示全部</el-button>
      </el-col>
    </el-row>

    <el-row :gutter="20" style="width: 400px; margin-top: 20px">
      <el-col :span="8">
        <el-button icon="el-icon-edit" type="primary" @click="dialogAddBook = !dialogAddBook">添加图书</el-button>
      </el-col>
      <el-col :span="8">
        <el-button icon="el-icon-delete" type="danger">批量删除</el-button>
      </el-col>
    </el-row>

    <el-dialog
        :visible.sync="dialogAddBook"
        title="提示"
        width="25%">
      <el-container>
        <el-aside>
          <el-form ref="ruleForm" :model="dialogFormAdd" :rules="ruleFrom" class="demo-ruleForm" label-width="100px">
            <el-form-item label="图书名称" prop="bookname">
              <el-input v-model="dialogFormAdd.bookname"></el-input>
            </el-form-item>
            <el-form-item label="作者" prop="bookauthor">
              <el-input v-model="dialogFormAdd.bookauthor"></el-input>
            </el-form-item>
            <el-form-item label="价格" prop="bookprice">
              <el-input v-model="dialogFormAdd.bookprice"></el-input>
            </el-form-item>
            <el-form-item label="图书类型" prop="bookTypeId">
              <el-autocomplete
                  v-model="dialogFormAdd.booktypename"
                  :fetch-suggestions="querySearch"
                  class="inline-input"
                  clearable
                  placeholder="请输入图书类型"
                  @input=updataDialogFormAddBookTypeId
              ></el-autocomplete>
            </el-form-item>
            <el-form-item label="图书描述" prop="bookdesc">
              <el-input v-model="dialogFormAdd.bookdesc" type="textarea"></el-input>
            </el-form-item>
          </el-form>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
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
        :current-page.sync="pageBook.currentPage"
        :page-size.sync="pageBook.pageSize"
        :page-sizes="[5, 10, 20, 50]"
        :total="pageBook.pageCount"
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
