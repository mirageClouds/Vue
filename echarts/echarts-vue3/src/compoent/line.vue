<script setup>
import {ref,onMounted} from 'vue'
import axios from 'axios'
import * as echarts from 'echarts'

const listData = ref({})
const reListData = {
  name:[],
  electricityConsumption:[],
  finalTotalAmount:[],
  waterConsumption:[],
  time:[]
}

const getList = ()=>{
  axios.get('https://mock.mengxuegu.com/mock/6641ce0d37199f49537c36d0/example/test6').then(
      res=>{
        let data = res.data.data.data
        data.forEach(item=>{
          let year = item.year
          let provinceName = listData.value[item.provinceName]
          if (year === '2020'){
            if(provinceName){
              provinceName.finalTotalAmount += item.finalTotalAmount
              provinceName.electricityConsumption +=item.electricityConsumption
              provinceName.waterConsumption += item.waterConsumption
              let start = new Date(item.startTime)
              let end = new Date(item.endTime)
              let time = (end - start) / 3600000
              provinceName.time += time
            }else {
              let start = new Date(item.startTime)
              let end = new Date(item.endTime)
              let time = (end - start) / 3600000
              listData.value[item.provinceName] ={
                finalTotalAmount: item.finalTotalAmount,
                electricityConsumption: item.electricityConsumption,
                waterConsumption: item.waterConsumption,
                time: time,
              }
            }
          }
        })

        let arr = []

        for(let i in listData.value){
          arr.push({
            name:i,
            finalTotalAmount: listData.value[i].finalTotalAmount,
            electricityConsumption: listData.value[i].electricityConsumption,
            waterConsumption: listData.value[i].waterConsumption,
            time: listData.value[i].time,
          })
        }

        let arr2 = arr.sort((a,b)=>b.finalTotalAmount-a.finalTotalAmount)


        let arr1 = arr2.splice(0,5)

        for (let i in arr1) {
          reListData.name.push(arr1[i].name)
          reListData.finalTotalAmount.push(arr1[i].finalTotalAmount)
          reListData.electricityConsumption.push(arr1[i].electricityConsumption)
          reListData.waterConsumption.push(arr1[i].waterConsumption)
          reListData.time.push(arr1[i].time)
        }

        console.log('城市名称：',reListData.name)
        console.log( '城市最大消费额：',reListData.finalTotalAmount)
        console.log('城市用电量：', reListData.electricityConsumption)
        console.log( '城市用水量：',reListData.waterConsumption)
        console.log( '设备运行时间：',reListData.time)
      }
  )
}
getList()


const MyEcharts = ()=>{
  let myCharts = echarts.init(document.getElementById('tb'))
  let option = {
    title:{
      text:'折柱混合',
      left:'center'
    },
    xAxis:{
      data:reListData.name
    },
    yAxis:[
      {
        type:'value',
        axisLabel:{
          formatter:'{value} W'
        },
        max:1000,
        interval: 100,
        name:'单位(千万)'
      },
      {
        type: 'value',
        max:10,
        interval:1,
        axisLabel:{
          formatter:'{value} H'
        },
        name:'单位(小时)'
      }
    ],
    series:[
      {
        type:'bar',
        data:reListData.electricityConsumption,
        yAxisIndex:0
      },
      {
        type:'bar',
        data:reListData.waterConsumption,
        yAxisIndex:0
      },
      {
        type:'bar',
        data:reListData.finalTotalAmount,
        yAxisIndex:0
      },
      {
        type:'line',
        data:reListData.time,
        yAxisIndex:1
      }
    ]
  }
  myCharts.setOption(option)
}

onMounted( ()=>{
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