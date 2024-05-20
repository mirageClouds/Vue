<script setup>
import {ref,onMounted} from 'vue'
import axios from 'axios'
import * as echarts from 'echarts'


const listData = {}
const reData = {
  name:[],
  value:[]
}

const getList = ()=>{
  axios.get('https://mock.mengxuegu.com/mock/6641ce0d37199f49537c36d0/example/test23').then(
      res=>{
        let data = res.data.data.orders
        data.forEach(item=>{
          let regionName = item.regionName
          if(!listData[regionName]){
            listData[regionName] = {
              finalTotalAmount:0,
              details:{}
            }
          }

          listData[regionName].finalTotalAmount += item.finalTotalAmount

          let details = item.details
          details.forEach(i=>{
            let quantity = i.quantity
            if (!listData[regionName].details[quantity]){
              listData[regionName].details[quantity] = {
                item:i.item,
                price:i.price
              }
            }
          })
        })

        let arr = []

        for (let i in listData){
          arr.push({
            finalTotalAmount: listData[i].finalTotalAmount.toFixed(2),
            name:i,
            details:listData[i].details
          })
        }
        arr = arr.sort((a,b)=>b.finalTotalAmount-a.finalTotalAmount)
        arr = arr.splice(0,5)
        for(let i in arr){
          reData.name.push(arr[i].name)
          reData.value.push(Number(arr[i].finalTotalAmount))
        }

      }
  )
}

getList()


const MyEcharts = ()=>{
  console.log(reData.name)
  let myChart = echarts.init(document.getElementById('tb'))
  let option = {
    xAxis:{
      type:'value',

    },
    yAxis:{
      data:reData.name
    },
    series:[
      {
        type:'bar',
        data:reData.value
      }
    ]
  }
  myChart.setOption(option)
}

onMounted(()=>{
  setTimeout(()=>{
    MyEcharts()
  },500)
})


</script>

<template>
<div id="tb" style="width: 1000px;height: 500px;"></div>
</template>

<style scoped lang="scss">

</style>