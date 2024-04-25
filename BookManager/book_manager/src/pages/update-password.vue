<script>
export default {
  name: "update-password",
  data() {
    return {
      userinfo: {},
      newuserinfo: {
        newPassowrd: '',
        newPassowrd2: '',
      }
    }
  },
  created() {
    this.$axios.get("/api/user/info", {
      params: {
        token: localStorage.getItem("token"),
      }
    }).then(
        res => {
          console.log(res)
          this.userinfo = res.data.data
        }
    )
  }
}
</script>
<template>
  <div>
    <el-form ref="ruleForm" :model="userinfo" :rules="rules" class="demo-ruleForm" label-width="100px"
             status-icon style="width: 400px">
      <el-form-item label="旧密码" prop="pass">
        <el-input v-model="userinfo.oldPassword" autocomplete="off" type="password"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input v-model="userinfo.newPassword" autocomplete="off" type="password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input v-model="userinfo.newPassword2" autocomplete="off" type="password"></el-input>
      </el-form-item>
      <el-form-item>

      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>

</style>
