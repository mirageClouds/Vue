<template>
  <div>
    <video id="bgVid" autoplay class="fullscreenVideo" loop muted>
      <source src="@/assets/Kelsey-Hugs-Amiya-Arknights.mp4" type="video/mp4">
    </video>
    <div class="login">
      <h2>登录</h2>
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
      </el-row>
      <el-row :gutter="20" style="margin-top: 30px;width: 100%">
        <el-col :span="12">
          <el-button :plain="true" type="primary" @click="login">登录</el-button>
        </el-col>
        <el-col :span="12">
          <el-button :plain="true" type="success" @click="registered">注册</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "login-index"
}
</script>

<style lang="css" scoped>
.fullscreenVideo {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  object-fit: cover
}


.login {
  width: 430px;
  margin: 15% auto;
  border-radius: 20px;
  padding: 40px;
  height: 300px;
  backdrop-filter: blur(20px);
  font-family: "霞鹜文楷 GB 屏幕阅读版";
}

.el-input {
  margin-top: 30px;
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
