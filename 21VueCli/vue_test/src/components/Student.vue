<script>
import PubSub from 'pubsub-js'

export default {
  name: "Student",
  data() {
    return {
      school: 'mirage',
      name: 'clouds'
    }
  },
  methods: {
    sendStudentName() {
      // 触发Student组件实例上的mirage事件
      this.$emit('mirage')
      this.$emit('clouds')

    },
    unbind() {
      this.$off('mirage') //解绑一个自定义事件
      this.$off(['mirage', 'clouds']) //解绑多个事件
      this.$off() //解绑所有事件
    },
    death() {
      this.$destroy() //销毁当前student组件的实例，销毁后所有student实例的自定义事件全部奏效
    }
  },
  mounted() {
    this.pubid = PubSub.subscribe('hello', function () {
      console.log('hello')
    })
  },
  beforeDestroy() {
    PubSub.unsubscribe(this.pubid)
  }
}
</script>

<template>
  <div>
    <h2>学校{{ school }}</h2>
    <button @click="sendStudentName">111</button>
    <button @click="unbind">111</button>
    <button @click="death">111</button>
  </div>
</template>

<style lang="scss" scoped>
div {
  background: #66ccff;
}
</style>
