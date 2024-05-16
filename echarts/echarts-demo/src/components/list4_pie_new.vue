<template>
  <div>
    <div id="tb" style="width: 1000px;height: 500px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: "list4_pie_new",
  data() {
    return {
      data: {},
      reData: []
    }
  },
  methods: {
    getData() {
      this.$axios.get('https://mock.mengxuegu.com/mock/6641ce0d37199f49537c36d0/example/list4').then(
          res => {
            let data = res.data.data.cities
            data.forEach(item => {
              if (this.data[item.city_name]) {
                this.data[item.city_name].electricity_usage = item.electricity_usage
              } else {
                this.data[item.city_name] = {electricity_usage: item.electricity_usage}
              }
            })
            for (let i in this.data) {
              this.reData.push({name: i, value: this.data[i].electricity_usage})
              console.log('城市名称：' + i + '城市耗电量:' + this.data[i].electricity_usage)
            }
          }
      )
    },
    myEcharts() {
      let echart = echarts.init(document.getElementById('tb'))
      let option = {
        series: [
          {
            type: 'pie',
            data: this.reData,
            roseType: 'area',
          }
        ]
      }

      echart.setOption(option)
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
