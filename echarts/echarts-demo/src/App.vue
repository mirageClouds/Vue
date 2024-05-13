<template>
  <div id="app">
<!--    <category/>-->
<!--    <pie-chart></pie-chart>-->
<!--    <bar-line></bar-line>-->
    <scatterplot></scatterplot>
  </div>
</template>

<script>
import category from "./components/histogram.vue";
import pieChart from "./components/pie-chart.vue";
import barLine from "@/components/bar-line.vue";
import scatterplot from "./components/scatterplot.vue";

export default {
  name: 'App',
  components: {
    category, pieChart,barLine,scatterplot
  }
}
</script>

<style>

</style>
