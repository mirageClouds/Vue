<script>
export default {
  name: "login",
  data() {
    return {
      username: '',
      password: '',
      permission: '0'
    }
  },

  methods: {
    login() {
      if (this.username !== '' && this.password !== '') {
        this.$axios({
          method: 'POST',
          url: '/api/user/login',
          data: {
            username: this.username,
            userpassword: this.password,
            isadmin: this.permission,
          }
        }).then(
            res => {
              if (res.data.status === 200) {
                console.log(res.data.data.token)
                localStorage.setItem('token', res.data.data.token)
                localStorage.setItem('cache-token', res.data.data.token)
                this.$message.success('登录成功')
                this.$router.push('/index')
              } else {
                console.log(res.data.message)
                this.$message.error(res.data.message)
                console.log(this.$route)
              }
            }
        )
      } else {
        this.$message.error('登录失败，账号密码不能为空');
        this.loginError()
      }
    },
    registered() {
      this.$router.push('/registered')
    },
    loginError() {
      this.$nextTick(() => {
        this.$refs.loginName.focus()
        this.username = this.password = ''
        this.permission = '0'
      })
    }
  },
}
</script>

<template>
  <div id="login">
    <h2>{{ title }}</h2>
    <el-row>
      <el-input
          ref="loginName"
          v-model="username"
          placeholder="请输入用户名">
        <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
      </el-input>
      <el-input
          v-model="password"
          placeholder="请输入密码">
        <i slot="prefix" class="el-input__icon el-icon-lock"></i>
      </el-input>
      <el-select v-model="permission">
        <template #prefix>
          <span>
                  <i class="el-input__icon el-icon-user-solid"></i>
                </span>
        </template>
        <el-option label="读者" value="0"></el-option>
        <el-option label="管理员" value="1"></el-option>
      </el-select>
    </el-row>
    <el-row>
      <el-button :plain="true" type="primary" @click="login">登录</el-button>
      <el-button :plain="true" type="success" @click="registered">注册</el-button>
    </el-row>
  </div>
</template>

<style scoped>

#login {
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
