<template>
  <div id="app">
    <div ref="content">
      <todo-list-header/>
      <todo-list-content :checked_delete="checked_delete" :checked_todo="checked_todo" :todos="todos"/>
      <todo-list-footer :todos="todos"/>
    </div>
  </div>
</template>

<script>
import TodoListHeader from "@/components/TodoList-Header.vue";
import TodoListContent from "@/components/TodoList-Content.vue";
import TodoListFooter from "@/components/TodoList-Footer.vue";

export default {
  name: 'App',
  components: {
    TodoListHeader, TodoListContent, TodoListFooter
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods: {
    // 添加一个todo
    receive(x) {
      console.log(x)
      this.todos.unshift(x)
    },
    //勾选或取消勾选一个todo
    checked_todo(x) {
      console.log(x)
      this.todos.forEach((todo) => {
        if (todo.id === x) todo.done = !todo.done
      })
    },
    //删除一个todo
    checked_delete(x) {
      this.todos = this.todos.filter(todos => todos.id !== x)
    },
    //全选或取消
    clickTodoDone(x) {
      this.todos.forEach((todos) => {
        todos.done = x
      })
    },
    //删除已经完成的任务
    clearAllTodo() {
      this.todos = this.todos.filter((todos) => !todos.done)
    }
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value))
      }
    }
  },
  mounted() {
    this.$bus.$on('receive', this.receive)
    this.$bus.$on('clickTodoDone', this.clickTodoDone)
    this.$bus.$on('clearAllTodo', this.clearAllTodo)
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  width: 900px;
  height: 500px;
  border: 1px solid black;
  margin: 5% auto;
}

</style>
