<script>
import * as echarts from 'echarts'

export default{
  name:'list-new',
  data(){
    return{
      data:{},
      reData:[]
    }
  },
  methods:{
    getData(){
      this.$axios.get('https://mock.mengxuegu.com/mock/6641ce0d37199f49537c36d0/example/list').then(
          res=>{
            let data = res.data.data.cities
            data.forEach(item=>{
              if(this.data[item.name]){
                this.data[item.name].highest_consumption += item.highest_consumption
              }else {
                this.data[item.name] = {highest_consumption: item.highest_consumption}
              }
            })
            for(let i in this.data){
              this.reData.push({name:i,value:this.data[i].highest_consumption})
              console.log('城市名字为' + i +'      '+'城市最高消费额为'+this.data[i].highest_consumption)
            }
          }
      )
    },
    myEcharts(){
      let myEcharts = echarts.init(document.getElementById('tb'))
      let option = {
        series:[
          {
            type: 'pie',
            data:this.reData,
            roseType: 'area',
          }
        ]
      }

      myEcharts.setOption(option)
    }
  },
  created(){
    this.getData()
  },
  mounted(){
setTimeout(()=>{
  this.myEcharts()
},500)
  }
}
</script>

<template>
<div>
  <div id="tb" style="width: 500px;height: 400px;"></div>
</div>
</template>

<style scoped lang="scss">

</style>