<template>
  <div>
    <div id="tb" style="width: 400px;height: 300px;"></div>
  </div>
</template>

<script>

export default {
  name: "histogram-",
  data() {
    return {
      histogramData: {
        name:[],
        time:[]
      },
      data: {},
    }
  },
  methods: {
    //   获取后端信息
    getHistoram() {
      this.$axios.get('/api/data/list').then(
          res => {
            // for (let i = 0; i < res.data.data.data.length; i++) {
            //   for (let j = 0; j < i; j++) {
            //     this.histogramData.name.push(res.data.data.data[i].name)
            // let start = new Date(res.data.data.data[i].starttime)
            // let end = new Date(res.data.data.data[i].endtime)
            // let time = (end - start) / 3600000
            //     this.histogramData.time.push(time)
            //   }
            // }

            // 数据预处理
            let data = res.data.data.data
            data.forEach(item=>{
              if (this.data[item.name]) {
                let start = new Date(item.starttime)
                let end = new Date(item.endtime)
                this.data[item.name].time += (end - start) / 3600000
              }else {
                let start = new Date(item.starttime)
                let end = new Date(item.endtime)
                this.data[item.name] = {time:(end - start) / 3600000}
              }
            })
            for(let i in this.data){
              this.histogramData.name.push(i)
              this.histogramData.time.push(this.data[i].time)
              console.log('设备名称:' + i+'   '+'设备运行时间:' + this.data[i].time + '小时')
            }
          }
      )
    },
    myHistogram() {


      // for (let i in this.histogramData) {
      //   for (let j = 0; j < i; j++) {
      //     if (this.histogramData[i].name === this.histogramData[j].name) {
      //       let start = new Date(this.histogramData[i].starttime)
      //       let end = new Date(this.histogramData[i].endtime)
      //       let start1 = new Date(this.histogramData[j].starttime)
      //       let end1 = new Date(this.histogramData[j].endtime)
      //       let time = (end - start) / 3600000 + (end1 - start1) / 3600000
      //       this.data.push({name: this.histogramData[i].name, value: time})
      //       this.bool = true
      //     }
      //   }
      //   if (!this.bool) {
      //     let start = new Date(this.histogramData[i].starttime)
      //     let end = new Date(this.histogramData[i].endtime)
      //     let time = (end - start) / 3600000
      //     this.data.push({name: this.histogramData[i].name, value: time})
      //   }
      //   this.bool = false
      // }
      //
      // for (let i = 0; i < this.data.length; i++) {
      //   this.name.push(this.data[i].name)
      //   this.time.push(this.data[i].value)
      //   console.log('设备名称:' + this.data[i].name)
      //   console.log('设备运行时间:' + this.data[i].value + '小时')
      // }

      let myEcharts = this.$echarts.init(document.getElementById('tb'));
      let option = {
        xAxis: {
          data: this.histogramData.name
        },
        yAxis: {},
        series: [
          {
            data: this.histogramData.time,
            type: 'bar'
          }
        ]
      }
      myEcharts.setOption(option);


    }
  },
  created() {
    this.getHistoram()
  },
  mounted() {
    setTimeout(() => {
      this.myHistogram()
    }, 500)
  }
}
</script>

<style lang="css" scoped>

</style>
