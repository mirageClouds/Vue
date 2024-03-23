<script>

export default {
  name: "TodoList-List",
  methods: {
    // 勾选
    handleClick(id) {
      this.checked_todo(id)
    },
    // 删除
    handledDelte(id) {
      if (confirm('确定要删除吗？')) {
        this.checked_delete(id)
      }
    },
    // 编辑
    handledEdit(todo) {
      if (todo.hasOwnProperty('isEdit')) {
        todo.isEdit = true
      } else {
        this.$set(todo, 'isEdit', true)
      }
      this.$nextTick(function () {
        this.$refs.inputTitle.focus()
      })
    },
    // 修改逻辑
    handledUpdata(todo, e) {
      todo.isEdit = false
      // pubsub.publish('updata', todo.id, e.target.value)
      if (!e.target.value.trim()) return alert('输入不能为空')
      this.$bus.$emit('updata', todo.id, e.target.value)
      // console.log('updata', todo.id, e.target.value)
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
        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <input v-show="todo.isEdit" ref="inputTitle" :value="todo.title" type="text" @blur="handledUpdata(todo,$event)">
      </label>
      <button @click="handledDelte(todo.id)">删除</button>
      <button @click="handledEdit(todo)">修改</button>
    </li>
  </ul>
</template>
<style>
li {
  list-style: none;
}
</style>
