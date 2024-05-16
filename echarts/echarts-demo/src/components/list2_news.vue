<template>
  <div>
    <div id="tb" style="width: 1000px;height: 500px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: "list2_news",
  data() {
    return {
      data: {},
      reData: {
        name: [],
        electricity_usage: [],
        max_temperature: []
      }
    }
  },
  methods: {
    getData() {
      this.$axios.get('https://mock.mengxuegu.com/mock/6641ce0d37199f49537c36d0/example/list3').then(
          res => {
            let data = res.data.data.cities
            data.forEach(item => {
              if (this.data[item.city_name]) {
                this.data[item.city_name].max_temperature += item.max_temperature
                this.data[item.city_name].electricity_usage += item.electricity_usage
              } else {
                this.data[item.city_name] = {
                  electricity_usage: item.electricity_usage,
                  max_temperature: item.max_temperature
                }
              }
            })

            for (let dataKey in this.data) {
              this.reData.name.push(dataKey)
              this.reData.electricity_usage.push(this.data[dataKey].electricity_usage)
              this.reData.max_temperature.push(this.data[dataKey].max_temperature)

              console.log('城市名字为：' + dataKey + '最大用电量为' + this.data[dataKey].electricity_usage + '最大消费额为' + this.data[dataKey].max_temperature)
            }
          }
      )
    },
    myEcharts() {
      let MyEcharts = echarts.init(document.getElementById('tb'))
      let option = {
        xAxis: {
          data: this.reData.name
        },
        yAxis: [
          {
            type: 'value'
          },
          {
            type: 'value'
          }
        ],
        series: [
          {
            type: 'bar',
            data: this.reData.electricity_usage
          },
          {
            type: 'line',
            data: this.reData.max_temperature,
            yAxisIndex: 1
          }
        ]
      }

      MyEcharts.setOption(option)
    }
  },
  created() {
    this.getData()
  },
  mounted() {
    setTimeout(() => {
      this.myEcharts()
    }, 500)
  }
}
</script>

<style lang="scss" scoped>

</style>
