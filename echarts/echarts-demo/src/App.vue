<template>
  <div id="app">
<!--    <category/>-->
<!--    <pie-chart></pie-chart>-->
<!--    <bar-line></bar-line>-->
<!--    <scatterplot></scatterplot>-->
<!--    <line-data></line-data>-->
<!--    <list-new></list-new>-->
    <list1-new></list1-new>
  </div>
</template>

<script>
import category from "./components/histogram.vue";
import pieChart from "./components/pie-chart.vue";
import barLine from "@/components/bar-line.vue";
import scatterplot from "./components/scatterplot.vue";
import lineData from "@/components/line.vue";
import listNew from "@/components/list-new.vue";
import list1New from "@/components/list1-new.vue";


export default {
  name: 'App',
  components: {
    category, pieChart,barLine,scatterplot,lineData,listNew,list1New
  }
}
</script>

<style>

</style>
