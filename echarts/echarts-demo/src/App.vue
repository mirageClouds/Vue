<template>
  <div id="app">
    <!--    <category/>-->
    <!--    <pie-chart></pie-chart>-->
    <!--    <bar-line></bar-line>-->
    <!--    <scatterplot></scatterplot>-->
    <!--    <line-data></line-data>-->
    <!--    <list-new></list-new>-->
    <!--    <list1-new></list1-new>-->
    <!--    <list2-news></list2-news>-->
    <!--    <list4_new></list4_new>-->
    <!--    <list4_pie_new></list4_pie_new>-->
    <test1></test1>
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
import list2News from "@/components/list2_news.vue";
import list4_new from "@/components/list4_new.vue";
import list4_pie_new from "@/components/list4_pie_new.vue";
import Test1 from "@/components/test1.vue";


export default {
  name: 'App',
  components: {
    Test1,
    category, pieChart, barLine, scatterplot, lineData, listNew, list1New, list2News, list4_new, list4_pie_new
  }
}
</script>

<style>

</style>
