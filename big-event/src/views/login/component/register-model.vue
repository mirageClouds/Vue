<template>
  <div class="register">
    <h2>注册</h2>
    <el-row>
      <el-form ref="ruleForm" :model="registerUserInfo" :rules="rules" class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input v-model="registerUserInfo.username" placeholder="请输入用户名">
            <i slot="prefix" class=" el-input__icon el-icon-user-solid"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="registerUserInfo.password" placeholder="请输入密码" show-password>
            <i slot="prefix" class="el-input__icon el-icon-lock"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="rePassword">
          <el-input v-model="registerUserInfo.rePassword" placeholder="请再次输入密码" show-password>
            <i slot="prefix" class=" el-input__icon el-icon-lock"></i>
          </el-input>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row :gutter="20" style="margin-top: 10px;width: 100%">
      <el-col :span="12">
        <el-button type="primary" @click="register">注册</el-button>
      </el-col>
      <el-col :span="12">
        <el-button type="success" @click="showLogin">返回登录</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {userRegisterService} from "@/api/user";

export default {
  name: "register-model",
  methods: {
    async register() {
      if (this.registerUserInfo.password === this.registerUserInfo.rePassword) {
        userRegisterService(this.registerUserInfo.username, this.registerUserInfo.password).then(
            res => {
              this.$message.success(res.message ? res.message : '注册成功')
            },
            error => {
              this.$message.error(error)
            }
        )
      }
    },
    showLogin() {
      this.$emit('show', true)
    }
  },
  data() {
    return {
      registerUserInfo: {
        username: '',
        password: '',
        rePassword: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          },
          {
            pattern: /^\S{5,16}$/,
            message: '用户名长度为5-16位',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blue'
          },
          {
            pattern: /^\S{5,16}$/,
            message: '密码长度为5-16位',
            trigger: 'blur'
          }
        ],
        rePassword: [
          {
            required: true,
            message: '请输入重新输入密码',
            trigger: 'blur'
          },
          {
            validator: (rule, value, callback) => {
              if (value !== this.registerUserInfo.password) {
                callback(new Error('两次密码不一致'))
              }
            },
            trigger: 'blur'
          }
        ]
      }
    }
  },
  created() {
    document.title = '注册'
  }
}
</script>

<style lang="css" scoped>
.register {
  width: 430px;
  margin: 10% auto;
  border-radius: 20px;
  padding: 40px;
  height: 300px;
  backdrop-filter: blur(20px);
  font-family: "霞鹜文楷 GB 屏幕阅读版";
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
