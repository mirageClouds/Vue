<script>
export default {
  name: "test",
  props: ['title', 'listData'],
}

</script>

<template>
  <div>
    <h3>{{ title }}</h3>
    <ul>
      <slot>
        <li v-for="(list,index) in listData" :key="index">{{ list }}</li>
      </slot>
      <slot name="footer"></slot>
    </ul>
  </div>
</template>

<style lang="css" scoped>
div {
  width: 200px;
  height: 300px;
  background: skyblue;
}

h3 {
  text-align: center;
  background: orange;
}


</style>
