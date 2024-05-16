<script setup>
import * as echarts from 'echarts'
import axios from "axios";
import {onMounted, ref} from 'vue'

const resList = ref({})
const resData = ref({
  name: [],
  value: []
})
const getList = async () => {
  let url = 'https://mock.mengxuegu.com/mock/6641ce0d37199f49537c36d0/example/test1'
  const list = axios.get(url).then(
      res => {
        let data = res.data.data.data
        data.forEach(item => {
          console.log(item)
          if (resList.value[item.provinceName]) {
            resList.value[item.provinceName].finalTotalAmount += item.finalTotalAmount
          } else {
            resList.value[item.provinceName] = {finalTotalAmount: item.finalTotalAmount}
          }
        })

        let arr = []
        for (let i in resList.value) {
          arr.push({name: i, value: resList.value[i].finalTotalAmount})
          console.log(resList)
        }

        let arr1 = arr.sort((a, b) => b.value - a.value)

        for (let i in arr1) {
          resData.value.name.push(arr1[i].name)
          resData.value.value.push(arr1[i].value.toFixed(2))
          console.log('城市名称' + arr1[i].name)
          console.log('最大金额' + arr1[i].value.toFixed(2))
        }

      }
  )
}
getList()

const myEchat = () => {
  const myEcharts = echarts.init(document.getElementById('tb'))
  const option = {
    xAxis: {
      data: resData.value.name
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        type: 'bar',
        data: resData.value.value
      }
    ]
  }

  myEcharts.setOption(option)
}

onMounted(() => {
  setTimeout(() => {
    myEchat()
  }, 500)
})


</script>

<template>
  <div id="tb" style="width: 1000px;height: 500px;"></div>
</template>

<style scoped>

</style>
