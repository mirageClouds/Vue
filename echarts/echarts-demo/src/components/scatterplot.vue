<template>
  <div>
    <div id="tb" style="width: 500px;height: 500px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: "scatter-plot",
  data(){
    return{
      data:{},
      reData:{
        nation:[],
        priceSale:[]
      }
    }
  },
  methods:{
    getData(){
      this.$axios.get('/api/data/list6').then(
          res=>{
            let data = res.data.data.data

            data.forEach(item => {
              if (this.data[item.nation]) {
                this.data[item.nation].priceSale +=item.priceSale
              }else {
                this.data[item.nation] = {priceSale: item.priceSale}
              }
            })

            for (let i in this.data){
              this.reData.nation.push(i)
              this.reData.priceSale.push(this.data[i].priceSale)
              console.log('城市：'+ i + '  ' + '平均消费' + this.data[i].priceSale)
            }
          }
      )
    },
    myEcharts() {
      let MyEcharts = echarts.init(document.getElementById('tb'))
      let option = {
        xAxis:{
          data:this.reData.nation,
        },
        yAxis:{},
        series:{
          type: 'scatter',
          data:this.reData.priceSale,
        }
      }
      MyEcharts.setOption(option)
    }
  },
  created() {
    this.getData()
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