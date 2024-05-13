<script>
import * as echarts from 'echarts'

export default{
  name:'list1-new',
  data(){
    return{
      data:{},
      reData:{
        name:[],
        highest_consumption:[],
        electricity_consumption:[]
      }
    }
  },
  methods:{
    getData(){
      this.$axios.get('https://mock.mengxuegu.com/mock/6641ce0d37199f49537c36d0/example/list1').then(
          res=>{
            let data = res.data.data.cities
            data.forEach(item=>{
              if(this.data[item.name]){
                this.data[item.name].highest_consumption += item.highest_consumption
                this.data[item.name].electricity_consumption +=item.electricity_consumption
              }else {
                this.data[item.name] = {highest_consumption:item.highest_consumption,electricity_consumption:item.electricity_consumption}
              }
            })

            for(let i in this.data){
              this.reData.name.push(i)
              this.reData.electricity_consumption.push(this.data[i].electricity_consumption)
              this.reData.highest_consumption.push(this.data[i].highest_consumption)
              console.log('城市名称为：'+i+'   '+'城市最高消费额为'+this.data[i].highest_consumption + '    ' + '城市最高用电量为' + this.data[i].electricity_consumption)
            }
          }
      )
    },
    myEcharts(){
      let myEcharts = echarts.init(document.getElementById('tb'))
      let option = {
        xAxis:{
          data:this.reData.name
        },
        yAxis:[
          {
            type:'value',
          },
          {
            type: 'value'
          }
        ],
        series:[
          {
            type:'bar',
            data:this.reData.highest_consumption,
            yAxisIndex:0
          },
          {
            type: 'line',
            data:this.reData.electricity_consumption,
            yAxisIndex:1
          }
        ],
        grid:{
          left:'20%',
          right:'20%',
        }
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
  <div id="tb" style="width: 1000px;height: 500px;"></div>
</div>
</template>

<style scoped lang="css">
</style>