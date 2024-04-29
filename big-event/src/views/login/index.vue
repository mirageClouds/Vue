<template>
  <div>
    <video id="bgVid" autoplay class="fullscreenVideo" loop muted>
      <source src="@/assets/Kelsey-Hugs-Amiya-Arknights.mp4" type="video/mp4">
    </video>
    <login-model v-if="showLogin" @show="setShowLogin"></login-model>
    <register-model v-if="!showLogin" @show="setShowLogin" ></register-model>
  </div>
</template>

<script>
import loginModel from "@/views/login/component/login-model.vue";
import registerModel from "@/views/login/component/register-model.vue";
export default {
  name: "login-index",
  data(){
    return{
      showLogin:true
    }
  },
  components: {
    loginModel,registerModel
  },
  methods:{
    setShowLogin(val){
      this.showLogin=val
    }
  }
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
