<script>
export default {
  name: "test",
  data() {
    return {
      game: ['千恋*万花', 'Granblue Fantasy:Relink', 'Counter-strike2', 'Apex 英雄']
    }
  }
}

</script>

<template>
  <div>
    <h3>游戏</h3>
    <ul>
      <slot :games="game" name="haha"></slot>
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
