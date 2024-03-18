<script>

export default {
  name: "TodoList-Footer",
  props: ['todos', 'clickTodoDone', 'clearAllTodo'],
  computed: {
    doneTodo() {
      return this.todos.reduce((pre, element) => {
        console.log(pre, element)
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
        this.clickTodoDone(v)
      }
    }
  },
  methods: {
    clearTodoDone() {
      if (confirm('确定要清除全部完成的内容吗')) {
        this.clearAllTodo()
      }
    }
  }
}
</script>

<template>
  <div v-show="total">
    <label>
      <input type="checkbox" v-model="isAll">
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
