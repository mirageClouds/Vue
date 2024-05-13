<template>
<div>
  <div id="tb" style="width: 500px;height: 500px;"></div>
</div>
</template>

<script >
import *as echarts from 'echarts'

export default{
  name:'line-data',
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
    getdata(){
      this.$axios.get('/api/data/list7').then(
          res=>{
            let data = res.data.data.data
            data.forEach(item=>{
              if (this.data[item.region]) {
                this.data[item.region].priceSale += item.priceSale
              }else{
                this.data[item.region] = {priceSale: item.priceSale}
              }
            })

            for(let i in this.data){
              this.reData.nation.push(i)
              this.reData.priceSale.push(this.data[i].priceSale)
              console.log('城市为:'+i+ '   '+'最高消费额为' + this.data[i].priceSale)
            }
          }
      )
    },
    myEcharts(){
      let myEcharts = echarts.init(document.getElementById('tb'))
      let option = {
        xAxis:{
          data:this.reData.nation
        },
        yAxis:{},
        series:{
          type:'bar',
          data:this.reData.priceSale,
        }
      }

      myEcharts.setOption(option)
    }
  },
  created() {
    this.getdata()
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