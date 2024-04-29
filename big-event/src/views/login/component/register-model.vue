<template>
  <div class="register">
    <h2>注册</h2>
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
      <el-input
          v-model="repassword"
          placeholder="请再次输入密码">
        <i slot="prefix" class="el-input__icon el-icon-lock"></i>
      </el-input>
    </el-row>
    <el-row :gutter="20" style="margin-top: 30px;width: 100%">
      <el-col :span="12">
        <el-button  type="primary" @click="register">注册</el-button>
      </el-col>
      <el-col :span="12">
        <el-button  type="success" @click="showLogin">返回登录</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {registerApi} from "@/api/user";

export default {
  name: "register-model",
  methods: {
    register(){
      if(this.password === this.repassword){
        registerApi(this.username,this.password).then(
            res=>{
              console.log(res)
            }
        )
      }
    },
    showLogin(){
      this.$emit('show',true)
    }
  },
  data(){
    return{
      username:'',
      password:'',
      repassword:''
    }
  },
  created() {
    document.title = '注册'
  }
}
</script>

<style scoped lang="css">
.register {
  width: 430px;
  margin: 15% auto;
  border-radius: 20px;
  padding: 40px;
  height: 300px;
  backdrop-filter: blur(20px);
  font-family: "霞鹜文楷 GB 屏幕阅读版";
}

.el-input {
  margin-top: 20px;
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