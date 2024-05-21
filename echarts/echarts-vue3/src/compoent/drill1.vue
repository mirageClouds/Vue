<script setup>
import axios from 'axios'
import * as echarts from 'echarts'
import {onMounted} from "vue";

let list = {}
let reList = []
let name = []
let finalTotalAmount = []

const getList = () => {
  axios.get('https://mock.mengxuegu.com/mock/6641ce0d37199f49537c36d0/example/test23').then((res) => {
    let data = res.data.data.orders;
    data.forEach(item => {
      const provinceName = item.provinceName;
      if (!list[provinceName]) {
        list[provinceName] = {
          finalTotalAmount: 0
        }
      }
      list[provinceName].finalTotalAmount += item.finalTotalAmount
    })

    let arr = []
    for (let i in list) {
      arr.push({name: i, value: list[i].finalTotalAmount})
    }
    arr.sort((a, b) => b.value - a.value)
    arr = arr.splice(0, 5)
    for (let i in arr) {
      reList.push({name: arr[i].name, value: arr[i].value})
      name.push(arr[i].name)
      finalTotalAmount.push(arr[i].value)
    }

    console.log('城市名称:', name)
    console.log('消费额:', finalTotalAmount)
  })
}
getList()

const myEcharts = () => {
  let myCharts = echarts.init(document.getElementById('tb'))
  let option = {
    title: {
      left: 'center',
      text: '地区消费能力展示图'
    },
    series: {
      type: 'pie',
      data: reList,
      roseType: 'area'
    }
  }
  myCharts.setOption(option)
}
onMounted(() => {
  setTimeout(() => {
    myEcharts()
  }, 500)
})

</script>

<template>
  <div id="tb" style="width: 1000px;height: 500px;"></div>
</template>

<style lang="scss" scoped>

</style>
