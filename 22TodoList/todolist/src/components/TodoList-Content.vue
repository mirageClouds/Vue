<template>
  <ul>
    <TodoListList v-for="i in todos" :key="i.id" :checked_delete="checked_delete" :checked_todo="checked_todo"
                  :todo="i"/>
  </ul>
</template>

<script>

import TodoListList from "@/components/TodoList-List.vue";

export default {
  name: "TodoList-Footer",
  components: {TodoListList},
  props: ['todos', 'checked_todo', 'checked_delete']
}
</script>

<style scoped>

</style>
