<template>
  <div id="app">
    <!--    <category/>-->
    <pie-chart></pie-chart>
  </div>
</template>

<script>
import category from "./components/histogram.vue";
import pieChart from "./components/pie-chart.vue";

export default {
  name: 'App',
  components: {
    category, pieChart
  }
}
</script>

<style>

</style>
