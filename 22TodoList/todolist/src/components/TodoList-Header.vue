<template>
  <div>
    <input v-model="val" placeholder="请输入您的任务名称，按回车键确认" size="20" type="text" @keyup.enter="add">
  </div>
</template>

<script>

import {nanoid} from "nanoid";

export default {
  name: "TodoList-Footer",
  data() {
    return {
      val: ''
    }
  },
  methods: {
    add() {
      // 对输入进行判断  
      if (!this.val.trim()) return alert('输入不能为空')
      // 包装一个todo_add对象
      const todo_add = {id: nanoid(), title: this.val, done: false}
      console.log(todo_add)
      // 调用app.vue中的函数，提交todo_add对象
      this.receive(todo_add)
      this.val = ''
    }
  },
  props: ['receive']
}
</script>

<style scoped>
div {
  padding: 40px;
  width: 800px;
  height: 60px;
}

input {
  padding: 10px;
  width: 800px;
  height: 50px;
  border-bottom: 1px solid #66ccff;
  outline: none;
  font-size: 200%
}
</style>
