<script>
export default {
  name: "test",
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group appear>
      <h1 v-show="!isShow" key="1">你好</h1>
      <h1 v-show="isShow" key="2">Mirage</h1>
    </transition-group>
  </div>
</template>

<style lang="css" scoped>
h1 {
  background: #6cf;
}

.v-enter-active {
  animation: hello 1s linear;
}

.v-leave-active {
  animation: hello 1s linear reverse;
}

@keyframes hello {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>