<template>
<div>
  <div id="tb" style="width: 500px;height: 500px;"></div>
</div>
</template>

<script>
  export default {
    name: "histogram-chart",
    data(){
      return{
        myData:{},
        reData: {
          name:[],
          sum:[]
        },
        myChartData: {},
        resData:{
          name:[],
          sum:[]
        }
      }
    },
    methods:{
      getList(){
       this.$axios.get('/api/data/list5').then(
           res =>{
             let data = res.data.data.data
             data.forEach(item => {
               if(this.myData[item.name]) {
                 this.myData[item.name].sum += item.number
               }else {
                 this.myData[item.name] = {sum:item.number}
               }
             })

             data.forEach(item=>{
               if(this.myChartData[item.chejian]) {
                 this.myChartData[item.chejian].sum += item.number
               }else {
                 this.myChartData[item.chejian] = {sum:item.number}
               }
             })

             for(let i in this.myData){
               this.reData.name.push(i)
               this.reData.sum.push(this.myData[i].sum)
               console.log('设备名称:'+ i + '设备日均产量：' + this.myData[i].sum )
             }

             for (let i in this.myChartData){
               this.resData.name.push(i)
               this.resData.sum.push(this.myChartData[i].sum)
               console.log('车间名称:'+ i + '车间日均产量：' + this.myChartData[i].sum )

             }
           }
       )
      },
      myEcharts(){
        let echarts = this.$echarts.init(document.getElementById('tb'))
        let option = {
          xAxis: [
            {
              data: this.reData.name,
            }
          ],
          yAxis: [
            {
              type: 'value',
            }
          ],
          series: [
            {
              name: 'Evaporation',
              type: 'bar',
              data:this.reData.sum
            },
            {
              name: 'Temperature',
              type: 'line',
              data: this.resData.sum
            }
          ]
        }

        echarts.setOption(option)
      }
    },
    created(){
      this.getList()
    },
    mounted() {
      setTimeout(()=>{
        this.myEcharts()
      },500)
    }
  }
</script>


<style scoped lang="scss">

</style>