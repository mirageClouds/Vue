<script>

export default {
  name: "book-info",
  data() {
    return {
      /*获取图书信息部分*/

      // 图书类型列表数据
      bookType: [],
      // 图书信息列表数据
      bookInfo: [],

      /*分页查询部分*/

      // 条件查询数据
      selectBook: {
        bookName: '',
        bookAuthor: '',
        bookTypeId: null,
        bookTypeName: ''
      },
      // 分页查询数据
      pageBook: {
        currentPage: 1,
        pageCount: 100,
        pageSize: 10,
      },

      /*添加图书信息部分*/

      // 是否打开第一个弹窗
      dialogAddBook: false,
      // 添加图书数据
      dialogFormAdd: {
        bookname: '',
        bookauthor: '',
        bookprice: '',
        bookdesc: '',
        bookTypeName: '',
        bookImg: '',
        baseApi: 'http://localhost:8092/BookManager',
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
      },
      // 是否打开图片放大弹窗
      dialogVisible: false,
      disabled: false,

      /*批量删除部分*/

      // 批量删除的数据
      batchDeleteForm: [],
      // 是否批量删除
      ifOpenBacth: false,
      ifBacthDelete: false,

      /*编辑图书信息部分*/
      ifUpdataOpen: false,
      updataFromDete: {
        bookname: '',
        bookauthor: '',
        bookdesc: '',
        bookid: '',
        bookimg: '',
        bookprice: '',
        booktypeid: '',
        booktypename: '',
        isborrowed: null
      },

      /*删除单条数据部分*/
      deleteRow: {
        bookname: '',
        bookauthor: '',
        bookdesc: '',
        bookid: '',
        bookimg: '',
        bookprice: '',
        booktypeid: '',
        booktypename: '',
        isborrowed: null
      },

      /*借阅部分*/
      ifBorrowBook: false,
      userItem: [],
      borrow: {
        borrowid: null,
        bookid: null
      }
    }
  },
  methods: {
    /*分页查询部分*/

    // 调用 callback 返回建议列表的数据
    querySearch(queryString, cb) {
      cb(this.bookType);
    },
    // 修改条件查询数据的BookTypeId
    updataSelectBookTypeId() {
      for (let i = 0; i < this.bookType.length; i++) {
        if (this.selectBook.bookTypeName === this.bookType[i].value) {
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
          },
          error => {
            console.log(error)
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
          },
          error => {
            console.log(error)
          }
      )
    },

    /*条件查询部分*/

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
            this.$message.success('搜索完毕')
          },
          error => {
            console.log(error)
          }
      )
    },
    selectAllBookInfo() {
      this.$axios.get(
          `/api/bookInfo/queryBookInfosByPage?page=${this.pageBook.currentPage}&limit=${this.pageBook.pageSize}`
      ).then(
          res => {
            this.bookInfo = res.data.data
            this.pageBook.pageCount = res.data.count
            this.selectBook.bookName = ''
            this.selectBook.bookAuthor = ''
            this.selectBook.bookTypeName = ''
            this.selectBook.bookTypeId = null
          },
          error => {
            console.log(error)
          }
      )
    },
    selectBookClear() {
      this.selectBook.bookTypeId = null
    },

    /*添加图书部分*/

    // 修改添加图书数据中的BookTypeId
    updataDialogFormAddBookTypeId(item) {
      for (let i = 0; i < this.bookType.length; i++) {
        if (item === this.bookType[i].value) {
          this.dialogFormAdd.bookTypeId = this.bookType[i].booktypeid;
        }
      }
    },
    //  文件上传成功调用
    handleAvatarSuccess(res, file) {
      console.log(res)
      console.log(file)
      if (res.code === 0) {
        this.$message.success('上传成功');
        this.dialogFormAdd.bookImg = res.data
      } else {
        this.$message.error('上传失败，请联系管理员');
      }
    },
    // 图片上传之前调用
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt4M = file.size / 1024 / 1024 < 4;
      if (!isJPG) {
        this.$message.error('上传封面图片只能是 JPG或PNG 格式!');
      }
      if (!isLt4M) {
        this.$message.error('上传封面图片大小不能超过 4MB!');
      }
      return isJPG && isLt4M;
    },
    // 图片点击放大时调用
    handlePictureCardPreview() {
      this.dialogVisible = true;
    },
    // 图片点击删除时调用
    handleRemove(file) {
      console.log(file)
      this.$refs.upload.handleRemove(file)
    },
    handleAvatarPreview(file) {
      console.log(file)
    },
    // 图片上传超过最大限制调用
    handleAvatarExceed() {
      this.$message.error('图片已超过最大上传上限，请删除后重新上传')
    },
    // 添加书籍弹窗点击确定时调用
    dialogFormAddSuccess() {
      this.$axios.post('/api/bookInfo/addBookInfo', {
        bookid: null,
        bookname: this.dialogFormAdd.bookname,
        bookauthor: this.dialogFormAdd.bookauthor,
        booktypeid: this.dialogFormAdd.bookTypeId,
        bookimg: this.dialogFormAdd.bookImg,
        bookdesc: this.dialogFormAdd.bookdesc,
        bookprice: this.dialogFormAdd.bookprice,
        isborrowed: 0
      }).then(
          () => {
            this.$message.success('添加图书成功')
            this.selectAllBookInfo()
            this.dialogAddBook = false
            this.dialogFormAdd.bookname = ''
            this.dialogFormAdd.bookauthor = ''
            this.dialogFormAdd.bookTypeId = null
            this.dialogFormAdd.bookImg = ''
            this.dialogFormAdd.bookdesc = ''
            this.dialogFormAdd.bookprice = ''
            this.dialogFormAdd.bookTypeName = ''
          },
          error => {
            this.$message.error(error)
          }
      )
    },

    /*批量删除部分*/

    // 批量删除时调用
    // 判断是否确认删除
    openDeleteAll() {
      this.$confirm('此操作将永久删除该图书数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteBatch()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    // 发送axios请求
    deleteBatch() {
      this.$axios.delete('/api/bookInfo/deleteBookInfos', {
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(this.batchDeleteForm)
      }).then(
          res => {
            if (res.data === 1 || res.data === 2) {
              this.$message.success('批量删除成功')
              this.ifOpenBacth = false
              this.ifBacthDelete = false
              this.selectAllBookInfo()
            } else {
              this.$message.error('批量删除失败')
              this.ifOpenBacth = false
              this.ifBacthDelete = false
            }
          },
          error => {
            this.$message.error(error)
          }
      )
    },
    batchDeleteData(selection) {
      this.batchDeleteForm = selection
    },
    batchDeleteAllData(selection) {
      this.batchDeleteForm = selection
      console.log(this.batchDeleteForm)
    },

    /*编辑数据部分*/
    handleEdit(index, row) {
      console.log(index)
      console.log(row)
      this.updataFromDete.bookname = row.bookname
      this.updataFromDete.bookid = row.bookid
      this.updataFromDete.booktypeid = row.booktypeid
      this.updataFromDete.bookauthor = row.bookauthor
      this.updataFromDete.booktypename = row.booktypename
      this.updataFromDete.bookprice = row.bookprice
      this.updataFromDete.isborrowed = row.isborrowed
      this.updataFromDete.bookimg = row.bookimg
      this.updataFromDete.bookdesc = row.bookdesc
    },
    dialogFormUpdataSuccess() {
      this.$axios.put('/api/bookInfo/updateBookInfo', {
        bookname: this.updataFromDete.bookname,
        bookauthor: this.updataFromDete.bookauthor,
        booktypeid: this.updataFromDete.booktypeid,
        bookdesc: this.updataFromDete.bookdesc,
        bookprice: this.updataFromDete.bookprice,
        isborrowed: this.updataFromDete.isborrowed,
        bookimg: this.updataFromDete.bookimg,
        bookid: this.updataFromDete.bookid,
      }).then(
          () => {
            this.$message.success('修改图书信息成功')
            this.selectAllBookInfo()
            this.ifUpdataOpen = false
          },
          error => {
            this.$message.error(error)
          }
      )
    },

    /*删除单条数据部分*/
    handleDelete(index, row) {
      this.deleteRow.bookname = row.bookname
      this.deleteRow.bookid = row.bookid
      this.deleteRow.booktypeid = row.booktypeid
      this.deleteRow.bookauthor = row.bookauthor
      this.deleteRow.booktypename = row.booktypename
      this.deleteRow.bookprice = row.bookprice
      this.deleteRow.isborrowed = row.isborrowed
      this.deleteRow.bookimg = row.bookimg
      this.deleteRow.bookdesc = row.bookdesc
      this.openDelete()
    },
    openDelete() {
      this.$confirm('此操作将永久删除该图书数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios.delete('/api/bookInfo/deleteBookInfo', {
          headers: {
            'Content-Type': 'application/json'
          },
          data: {
            bookname: this.deleteRow.bookname,
            bookauthor: this.deleteRow.bookauthor,
            booktypeid: this.deleteRow.booktypeid,
            bookdesc: this.deleteRow.bookdesc,
            bookprice: this.deleteRow.bookprice,
            isborrowed: this.deleteRow.isborrowed,
            bookimg: this.deleteRow.bookimg,
            bookid: this.deleteRow.bookid,
          }
        }).then(
            res => {
              if (res.status === 200) {
                this.$message.success('删除成功')
              } else {
                this.$message.error('删除失败')
              }
              this.selectAllBookInfo()
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

    /*借阅图书部分*/
    //获取用户信息
    getUser() {
      this.$axios.get('/api/user/queryUsers').then(
          res => {
            console.log(res.data)
            for (let i = 0; i < res.data.length; i++) {
              this.userItem.push(res.data[i])
            }
            console.log(this.userItem)
          }
      )
    },
    handleBorrow(...row) {
      console.log(row)
      this.getUser()
      this.ifBorrowBook = true
      this.borrow.bookid = row[1].bookid
    },
    dialogBorrowBookSuccess() {
      this.$axios.post(`/api/borrow/borrowBook?userid=${this.borrow.borrowid}&bookid=${this.borrow.bookid}`).then(
          res => {
            if (res.data === 1) {
              this.$message.success('借阅成功')
            } else {
              this.$message.error('借阅失败，请联系管理员')
            }
            this.selectAllBookInfo()
            this.ifBorrowBook = false

          },
          error => {
            this.$message.error(error)
          }
      )
    }
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
    <!--条件查询部分-->
    <el-row :gutter="20" style="width: 700px;">
      <el-col :span="5">
        <el-input
            v-model="selectBook.bookName"
            clearable
            placeholder="书名">
        </el-input>
      </el-col>
      <el-col :span="5">
        <el-input
            v-model="selectBook.bookAuthor"
            clearable
            placeholder="作者">
        </el-input>
      </el-col>
      <el-col :span="5">
        <el-autocomplete
            v-model="selectBook.bookTypeName"
            :fetch-suggestions="querySearch"
            class="inline-input"
            clearable
            placeholder="请输入内容"
            @clear="selectBookClear"
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


    <!--添加图书和批量删除部分-->
    <el-row :gutter="20" style="width: 400px; margin-top: 20px">
      <el-col :span="8">
        <el-button icon="el-icon-edit" type="primary" @click="dialogAddBook = !dialogAddBook">添加图书</el-button>
      </el-col>
      <el-col :span="8">
        <el-button icon="el-icon-delete" type="danger" @click="openDeleteAll">批量删除
        </el-button>
      </el-col>
    </el-row>


    <!--添加图书弹窗-->
    <el-dialog
        :visible.sync="dialogAddBook"
        title="提示"
        width="30%">
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
                  v-model="dialogFormAdd.bookTypeName"
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
        <el-main>
          <h2>点击上传图书封面</h2>
          <el-upload
              ref="upload"
              :before-upload="beforeAvatarUpload"
              :limit="1"
              :on-exceed="handleAvatarExceed"
              :on-preview="handleAvatarPreview"
              :on-success="handleAvatarSuccess"
              action="http://localhost:8092/BookManager/update/updateImg" class="avatar-uploader"
              list-type="picture-card"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{file}">
              <img
                  v-if="dialogFormAdd.bookImg"
                  :src="dialogFormAdd.baseApi + dialogFormAdd.bookImg "
                  alt="" class="el-upload-list__item-thumbnail"
              >
              <span class="el-upload-list__item-actions">
                <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview()"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
              <el-dialog :append-to-body='true' :visible.sync="dialogVisible">
                <img :src="dialogFormAdd.baseApi + dialogFormAdd.bookImg" alt="" width="100%">
              </el-dialog>
            </div>
          </el-upload>
        </el-main>
      </el-container>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogAddBook = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormAddSuccess">确 定</el-button>
      </span>
    </el-dialog>


    <!--数据列表部分-->
    <el-table
        :data="bookInfo"
        border
        style="width: 100%;
            margin-top: 20px;
          "
        @select="batchDeleteData"
        @select-all="batchDeleteAllData"
    >
      <el-table-column
          align="center"
          min-width="100"
          type="selection"
      >
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
              @click="handleEdit(scope.$index, scope.row),ifUpdataOpen=true">编辑
          </el-button>
          <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除
          </el-button>
          <el-button
              size="mini"
              type="success"
              @click="handleBorrow(scope.$index, scope.row)">借阅图书
          </el-button>
        </template>
      </el-table-column>
    </el-table>


    <!--编辑图书信息弹窗-->
    <el-dialog
        :visible.sync="ifUpdataOpen"
        title="提示"
        width="30%">
      <el-container>
        <el-aside>
          <el-form ref="ruleForm" :model="updataFromDete" :rules="ruleFrom" class="demo-ruleForm" label-width="100px">
            <el-form-item label="图书名称" prop="bookname">
              <el-input v-model="updataFromDete.bookname"></el-input>
            </el-form-item>
            <el-form-item label="作者" prop="bookauthor">
              <el-input v-model="updataFromDete.bookauthor"></el-input>
            </el-form-item>
            <el-form-item label="价格" prop="bookprice">
              <el-input v-model="updataFromDete.bookprice"></el-input>
            </el-form-item>
            <el-form-item label="图书类型" prop="bookTypeId">
              <el-autocomplete
                  v-model="updataFromDete.booktypename"
                  :fetch-suggestions="querySearch"
                  class="inline-input"
                  clearable
                  placeholder="请输入图书类型"
                  @input=updataDialogFormAddBookTypeId
              ></el-autocomplete>
            </el-form-item>
            <el-form-item label="图书描述" prop="bookdesc">
              <el-input v-model="updataFromDete.bookdesc" type="textarea"></el-input>
            </el-form-item>
          </el-form>
        </el-aside>
        <el-main>
          <h2>点击上传图书封面</h2>
          <el-upload
              ref="upload"
              :before-upload="beforeAvatarUpload"
              :limit="1"
              :on-exceed="handleAvatarExceed"
              :on-success="handleAvatarSuccess"
              action="http://localhost:8092/BookManager/update/updateImg"
              class="avatar-uploader"
              list-type="picture-card"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{file}">
              <img
                  v-if="dialogFormAdd.bookImg"
                  :src="dialogFormAdd.baseApi + updataFromDete.bookimg "
                  alt="" class="el-upload-list__item-thumbnail avatar"
              >
              <span class="el-upload-list__item-actions">
                <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview()"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
              <el-dialog :append-to-body='true' :visible.sync="dialogVisible">
                <img :src="dialogFormAdd.baseApi + updataFromDete.bookimg" alt="" width="100%">
              </el-dialog>
            </div>
          </el-upload>
        </el-main>
      </el-container>
      <span slot="footer" class="dialog-footer">
        <el-button @click="ifUpdataOpen = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormUpdataSuccess">确 定</el-button>
      </span>
    </el-dialog>

    <!--借阅图书弹窗-->
    <el-dialog
        :visible.sync="ifBorrowBook"
        title="提示"
        width="30%"
    >
      <el-form ref="form" :model="borrow" label-width="80px">
        <el-form-item label="活动区域">
          <el-select v-model="borrow.borrowid" placeholder="请选择用户">
            <el-option v-for="(i,item) in this.userItem" :key="item" :label="i.username"
                       :value=" i.userid "></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="ifBorrowBook = false">取 消</el-button>
        <el-button type="primary" @click="dialogBorrowBookSuccess">确 定</el-button>
      </span>
    </el-dialog>

    <!--分页组件部分-->
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

<style lang="css" scoped>
.el-main {
  text-align: center;
}

.el-main > h2 {
  margin-bottom: 30px;
}
</style>
