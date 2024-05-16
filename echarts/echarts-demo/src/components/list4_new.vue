<template>
  <div>
    <div id="tb" style="width: 1000px;height: 500px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: "list4_new",
  data() {
    return {
      data: {},
      reData: {
        name: [],
        max_temperature: [],
        electricity_usage: [],
      }
    }
  },
  methods: {
    myEcharts() {
      let myChart = echarts.init(document.getElementById('tb'))
      let option = {
        xAxis: {
          data: this.reData.name,
          axisLabel: {show: true, interval: 0, rotate: 45},
        },
        yAxis: [
          {
            type: 'value'
          },
          {
            type: 'value',
            axisLabel: {formatter: '{value}KW'}
          }
        ],
        series: [
          {
            type: 'line',
            data: this.reData.max_temperature
          },
          {
            type: 'bar',
            data: this.reData.electricity_usage,
            yAxisIndex: 1
          }
        ]
      }

      myChart.setOption(option)
    },
    getData() {
      this.$axios.get('https://mock.mengxuegu.com/mock/6641ce0d37199f49537c36d0/example/list4').then(
          res => {
            let data = res.data.data.cities
            console.log(data)
            data.forEach(item => {
              if (this.data[item.city_name]) {
                this.data[item.city_name].electricity_usage += item.electricity_usage
                this.data[item.city_name].max_temperature += item.max_temperature
              } else {
                this.data[item.city_name] = {
                  electricity_usage: item.electricity_usage,
                  max_temperature: item.max_temperature
                }
              }
            })

            for (let i in this.data) {
              this.reData.name.push(i)
              this.reData.max_temperature.push(this.data[i].max_temperature)
              this.reData.electricity_usage.push(this.data[i].electricity_usage)
              console.log('城市名称为' + i)
              console.log('城市用电量为' + this.data[i].max_temperature)
              console.log('城市最大消费额为' + this.data[i].electricity_usage)
              console.log('----------------------------------')
            }
          },
          error => {
            console.log(error)
          }
      )
    }
  },
  created() {
    this.getData()
  },
  mounted() {
    setTimeout(() => {
      this.myEcharts()
    }, 500)
  },
}
</script>

<style lang="scss" scoped>

</style>
