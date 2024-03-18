<script>

export default {
  name: "TodoList-List",
  methods: {
    handleClick(id) {
      this.checked_todo(id)
    },
    handledDelte(id) {
      if (confirm('确定要删除吗？')) {
        this.checked_delete(id)
      }
    }
  },
  props: ['todo', 'checked_todo', 'checked_delete']
}
</script>
<template>
  <ul>
    <li>
      <label>
        <input :checked="todo.done" type="checkbox" @click="handleClick(todo.id)">
        <!--下面也可以实现功能，但是违反了原则，修改了props，不推荐使用-->
        <!--<input v-model='todo.done' type="checkbox">-->
        <span>{{ todo.title }}</span>
      </label>
      <button @click="handledDelte(todo.id)">删除</button>
    </li>
  </ul>
</template>
<style>
li {
  list-style: none;
}
</style>
