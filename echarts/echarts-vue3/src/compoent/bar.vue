<script setup>
import {ref,onMounted} from 'vue'
import axios from 'axios'


const listData = {}
const reData = []

const getList = ()=>{
  axios.get('https://mock.mengxuegu.com/mock/6641ce0d37199f49537c36d0/example/test23').then(
      res=>{
        let data = res.data.data.orders
        data.forEach(item=>{
          console.log(item)
          if(listData[item.regionName]){
            item.details.forEach(i=>{
              if(listData[item.regionName][i.quantity]){
                listData[item.regionName][i.quantity].price += i.price
              }else {
                listData[item.regionName][i.quantity].quantity = {price:i.price}
              }
            })
            listData[item.regionName].finalTotalAmount += item.finalTotalAmount
          }else {
            listData[item.regionName] = {finalTotalAmount:item.finalTotalAmount}
            item.details.forEach(i=>{
              if(listData[item.regionName][i.quantity]){
                listData[item.regionName][i.quantity].price += i.price
              }else {
                listData[item.regionName][i.quantity].quantity = {price:i.price}
              }
            })
          }
        })

        for (let i in listData){

          reData.push({name:i,value:listData[i].quantity,value1:listData[i].finalTotalAmount.toFixed(2)})
          console.log(reData)
        }

      }
  )
}

getList()

</script>

<template>

</template>

<style scoped lang="scss">

</style>