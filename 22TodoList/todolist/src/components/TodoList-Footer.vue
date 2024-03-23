<script>

import pubsub from "pubsub-js";

export default {
  name: "TodoList-Footer",
  // props: ['todos', 'clickTodoDone', 'clearAllTodo'],
  props: ['todos'],
  computed: {
    doneTodo() {
      return this.todos.reduce((pre, element) => {
        // console.log(pre, element)
        return pre + (element.done ? 1 : 0)
      }, 0)
    },
    total() {
      return this.todos.length
    },
    isAll: {
      get() {
        return this.doneTodo === this.total && this.total > 0
      },
      set(v) {
        // this.clickTodoDone(v)
        // this.$emit('clickTodoDone', v)
        // this.$bus.$emit('clickTodoDone', v)
        this.pubId1 = pubsub.publish('clickTodoDone', v)
      }
    }
  },
  methods: {
    clearTodoDone() {
      if (confirm('确定要清除全部完成的内容吗')) {
        // this.clearAllTodo()
        // this.$emit('clearAllTodo')
        // this.$bus.$emit('clearAllTodo')
        this.pubId = pubsub.publish('clearAllTodo')
      }
    }
  },
  beforeDestroy() {
    // this.$bus.$off('clickTodoDone')
    // this.$bus.$off('clearAllTodo')
    pubsub.unsubscribe(this.pubId)
    pubsub.unsubscribe(this.pubId1)
  }
}
</script>

<template>
  <div v-show="total">
    <label>
      <input v-model="isAll" type="checkbox">
    </label>
    <span>
      已完成{{ doneTodo }}
      <span>
        /全部{{ todos.length }}
      </span>
    </span>
    <button @click="clearTodoDone">清空已完成任务</button>
  </div>
</template>

<style lang="scss" scoped>

</style>
