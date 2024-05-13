<template>
  <div>
    <div id="pic" style="width: 300px;height: 300px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: "pie-chart",
  data() {
    return {
      bool: false,
      data: {},
      sum: 0,
      pieData: []
    }
  },
  methods: {
    getpie() {
      this.$axios.get('/api/data/list2').then(
          res => {
            let data = res.data.data.data
            // console.log(data)
            // for (let i = 0; i < data.length; i++) {
            //   console.log('这是i是' + i)
            //   for (let j = i + 1; j < data.length; j++) {
            //     console.log('这是j' + j)
            //     // if (data[i].name === data[j].name) {
            //     //   console.log(data[i].name)
            //       let start = new Date(data[i].starttime)
            //       let end = new Date(data[i].endtime)
            //       let time = (end - start) / 3600000
            //       this.sum = this.sum + time
            //     //   this.bool = true
            //     // }
            //     // if (!this.bool) {
            //     //   let start = new Date(data[i].starttime)
            //     //   let end = new Date(data[i].endtime)
            //     //   let time = (end - start) / 3600000
            //     //   this.pieData.push({name: data[i].name, value: time})
            //     // }
            //     // this.bool = false
            //
            //     if (data[i].name === data[j].name) {
            //       console.log('这里是相同' + data[i].name)
            //       this.bool = true
            //     } else {
            //       console.log('这里是不同' + data[i].name)
            //     }
            //   }
            //
            //   this.bool = false


            data.forEach(item => {
              if (this.data[item.name]) {
                let start = new Date(item.starttime)
                let end = new Date(item.endtime)
                this.data[item.name].time += (end - start) / 3600000
                this.data[item.name].count++
              } else {
                let start = new Date(item.starttime)
                let end = new Date(item.endtime)
                let time = (end - start) / 3600000
                this.data[item.name] = {time: time, count: 1}
              }
            })

            for (let name in this.data) {
              let avg = this.data[name].time / this.data[name].count
              this.pieData.push({name: name, value: avg})
              console.log('设备名称:' + name)
              console.log('设备平均运行时间:' + avg + '小时')
            }
          }
      )
    },
    myPic() {
      let myEcharts = echarts.init(document.getElementById('pic'))
      let option = {
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: this.pieData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      myEcharts.setOption(option);

    }

  },
  created() {
    this.getpie()
  },
  mounted() {
    setTimeout(() => {
      this.myPic()
    }, 500)
  }
}
</script>

<style lang="scss" scoped>

</style>
