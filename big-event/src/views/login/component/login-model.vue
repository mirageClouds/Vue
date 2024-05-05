<template>
  <div class="login">
    <h2>登录</h2>
    <el-row>
      <el-form ref="ruleForm" :model="loginUserInfo" :rules="rules" class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input v-model="loginUserInfo.username" placeholder="请输入用户名">
            <i slot="prefix" class=" el-input__icon el-icon-user-solid"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginUserInfo.password" placeholder="请输入密码" show-password>
            <i slot="prefix" class="el-input__icon el-icon-lock"></i>
          </el-input>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row :gutter="20" style="margin-top: 30px;width: 100%">
      <el-col :span="12">
        <el-button type="primary" @click="clickLogin">登录</el-button>
      </el-col>
      <el-col :span="12">
        <el-button type="success" @click="showLogin">注册</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {userLoginService} from "@/api/user";

export default {
  name: "login-index",
  data() {
    return {
      loginUserInfo: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            trigger: 'blur',
            required: true,
            message: '用户名不能为空'
          }
        ],
        password: [
          {
            trigger: 'blur',
            required: true,
            message: '密码不能为空'
          }
        ]
      },
    }
  },
  methods: {
    showLogin() {
      this.$emit('show', false)
    },
    clickLogin() {
      userLoginService(this.loginUserInfo.username, this.loginUserInfo.password).then(
          res => {
            this.$message.success(res.data.message ? res.data.message : '登录成功')
            this.$store.commit('setToken', res.data.data)
            this.$router.push('/index')
          },
          error => {
            this.$message.error(error)
          }
      )
    }
  },
  created() {
    document.title = '登录'
  }
}
</script>

<style lang="css" scoped>


.login {
  width: 430px;
  margin: 15% auto;
  border-radius: 20px;
  padding: 40px;
  height: 300px;
  backdrop-filter: blur(20px);
  font-family: "霞鹜文楷 GB 屏幕阅读版";
}

.el-form {
  margin-top: 42px;
}

.el-input {
  display: flex;
  align-items: center;
}

h2 {
  text-align: center;
  color: azure;
  font-size: 20px;
}

.el-button {
  margin-left: 5%;
  width: 100%;
}

</style>
