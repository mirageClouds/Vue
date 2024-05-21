<script setup>
import axios from 'axios'
import * as echarts from 'echarts'
import {onMounted} from "vue";


const listData = {}
const reData = []

const getList = () => {
  axios.get('https://mock.mengxuegu.com/mock/6641ce0d37199f49537c36d0/example/test23').then(
      res => {
        let data = res.data.data.orders
        data.forEach(item => {
          const regionName = item.regionName
          if (!listData[regionName]) {
            listData[regionName] = {
              finalTotalAmount: 0,
              details: {}
            }
          }
          listData[regionName].finalTotalAmount += item.finalTotalAmount

          item.details.forEach(i => {
            const item = i.item
            const quantity = i.quantity
            const price = i.price

            if (!listData[regionName].details[quantity]) {
              listData[regionName].details[quantity] = {
                item: item,
                price: price
              }
            }
          })
        })

        let arr = []
        for (let i in listData) {
          arr.push({
            name: i,
            finalTotalAmount: listData[i].finalTotalAmount.toFixed(2),
            details: listData[i].details,
          })
        }


        arr = arr.sort((a, b) => b.finalTotalAmount - a.finalTotalAmount)

        arr = arr.slice(0, 5)
        let name = []
        let finalTotalAmount = []
        let details = []
        for (let i in arr) {
          reData.push({
            name: arr[i].name,
            value: arr[i].finalTotalAmount,
          })
          name.push(arr[i].name)
          finalTotalAmount.push(arr[i].finalTotalAmount)
          details.push(arr[i].details)
        }

        console.log('城市名称', name)
        console.log('城市最大消费额1', finalTotalAmount)
        console.log('城市详情', details)
      }
  )
}

const MyEcharts = () => {
  let myCharts = echarts.init(document.getElementById('tb'))
  let option = {
    series: {
      type: 'pie',
      data: reData,
      roseType: 'area'
    }
  }
  myCharts.setOption(option)
}


getList()

onMounted(() => {
  setTimeout(() => {
    MyEcharts()
  }, 500)
})

</script>

<template>
  <div id="tb" style="width: 1000px;height: 1000px;"></div>
</template>

<style lang="scss" scoped>

</style>
