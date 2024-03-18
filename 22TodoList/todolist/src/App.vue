<template>
  <div id="app">
    <div ref="content">
      <todo-list-header :receive="receive"/>
      <todo-list-content :checked_delete="checked_delete" :checked_todo="checked_todo" :todos="todos"/>
      <todo-list-footer/>
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
      todos: [
        {id: '001', title: '学习', done: true},
        {id: '002', title: '打代码', done: false},
        {id: '003', title: '睡觉', done: true},
        {id: '004', title: '打游戏', done: false},
      ]
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
    }
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
