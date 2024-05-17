<script setup>
import axios from 'axios'
import * as echarts from 'echarts'
import {ref,onMounted} from 'vue'

const listData = ref({})
const reListData = ref([])

const getList = ()=>{
  let url = 'https://mock.mengxuegu.com/mock/6641ce0d37199f49537c36d0/example/test1'
  axios.get(url).then(res=>{
    let data = res.data.data.data
    data.forEach(item=>{
      if (listData.value[item.regionName]){
        listData.value[item.regionName].value +=item.finalTotalAmount
      }else{
        listData.value[item.regionName] = {value:item.finalTotalAmount}
      }
    })
    let arr = []
    for(let i in listData.value){
      arr.push({name:i,value:listData.value[i].value})
    }

    let arr1 = arr.sort((a,b)=>b.value-a.value)

    let arr2 = arr1.splice(0,5)
    for(let i in arr2){
      reListData.value.push(arr2[i])
    }
  })
}
getList()

const MyEcharts = ()=>{
  console.log(reListData.value)
  let myChart = echarts.init(document.getElementById('tb'))
  let option = {
    series:[
      {
        type:'pie',
        data:reListData.value,
        roseType:'area'
      }
    ]
  }
  myChart.setOption(option)
}

onMounted(() => {
  setTimeout(()=>{
    MyEcharts()
  },500)
})
</script>

<template>
<div id="tb" style="width: 1000px;height: 1000px;"></div>
</template>

<style scoped lang="scss">

</style>