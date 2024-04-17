<script>
export default {
  name: "reqister",
  data() {
    return {
      username: '',
      password: '',
      rePassword: '',
    }
  },
  methods: {
    registered() {
      if (this.username !== '' && this.password !== '' && this.rePassword !== '') {
        if (this.rePassword === this.password) {
          this.$axios({
            method: 'POST',
            url: `/api/user/register?username=${this.username}&password=${this.password} `,
          }).then(
              res => {
                if (res.data === 1) {
                  console.log(res.data)
                  this.$message({
                    message: '注册成功',
                    type: 'success'
                  })
                  setTimeout(() => {
                    this.$router.push('/')
                  }, 1000)
                } else {
                  this.$message.error('注册失败，可能账号重复了');
                  this.registeredError()
                }
              },
              error => {
                console.log(error)
              }
          )
        } else {
          this.$message.error('注册失败，两次密码输入不一致')
          this.registeredError()
        }
      } else {
        this.$message.error('注册失败，内容输入不完整');
        this.registeredError()
      }
    },
    login() {
      this.$router.push('/')
    },
    registeredError() {
      this.$nextTick(() => {
        this.$refs.registeredName.focus()
        this.username = this.password = this.rePassword = ''
      })
    }
  }
}
</script>

<template>
  <div id="registered">
    <h2>{{ title }}</h2>
    <el-row>
      <el-input
          ref="registeredName"
          v-model="username"
          placeholder="请输入用户名"
      >
        <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
      </el-input>
      <el-input
          v-model="password"
          placeholder="请输入密码"
          show-password
          type="password"
      >
        <i slot="prefix" class="el-input__icon el-icon-lock"></i>
      </el-input>
      <el-input
          v-model="rePassword"
          placeholder="请确认密码"
          show-password
          type="password"
      >
        <i slot="prefix" class="el-input__icon el-icon-lock"></i>
      </el-input>
    </el-row>
    <el-row>
      <el-button :plain="true" type="primary" @click="registered">注册</el-button>
      <el-button :plain="true" type="success" @click="login">返回登录</el-button>
    </el-row>
  </div>
</template>

<style scoped>

#registered {
  width: 400px;
  margin: 20% auto;
}

h2 {
  text-align: center;
}

.el-select, .el-input, .el-button {
  margin-top: 20px;
}

.el-select {
  width: 100%;
}

.el-button {
  width: 48.7%;
}


</style>
