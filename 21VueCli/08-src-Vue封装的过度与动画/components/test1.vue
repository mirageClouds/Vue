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
    <transition appear>
      <h1 v-show="isShow">你好</h1>
    </transition>
  </div>
</template>

<style lang="css" scoped>
h1 {
  background: #6cf;

}

/*进入的起点、离开的终点*/
.v-enter, .v-leave-to {
  transform: translateX(-100%);
}

/*进入的终点、离开的起点*/
.v-enter-to, .v-leave {
  transform: translateX(0);
}

.v-enter-to, .v-leave-to {
  transition: 2s, linear;
}

</style>