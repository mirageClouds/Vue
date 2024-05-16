<template>
  <div>
    <div id="tb" style="width: 1000px;height: 500px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: "test1",
  data() {
    return {
      data: {},
      reData: [],
      newReData: {
        name: [],
        value: []
      }
    }
  },
  methods: {
    myEcharts() {
      let myChart = echarts.init(document.getElementById('tb'))
      let option = {
        xAxis: {
          data: this.newReData.name,
        },
        yAxis: {
          type: 'value'
        },
        series: {
          type: 'bar',
          data: this.newReData.value,
        }
      }
      myChart.setOption(option)
    },

    getData() {
      this.$axios.get('https://mock.mengxuegu.com/mock/6641ce0d37199f49537c36d0/example/test').then(
          res => {
            let data = res.data.data.provinces
            data.forEach(item => {
              if (item.year === 2020) {
                if (this.data[item.province_name]) {
                  this.data[item.province_name].consumption += item.consumption
                } else {
                  this.data[item.province_name] = {consumption: item.consumption}
                }
              }
            })

            for (let i in this.data) {
              this.reData.push({name: i, value: this.data[i].consumption})
            }

            let arr = this.reData.sort((a, b) => b.value - a.value)
            let arr1 = arr.splice(0, 5)
            console.log('2020年消费最高的5个省份')
            for (let i in arr1) {
              this.newReData.name.push(arr1[i].name)
              this.newReData.value.push(arr1[i].value)
              console.log('城市名称' + arr1[i].name)
              console.log('消费额' + arr[i].value)
              console.log('----------')
            }

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
  }
}
</script>

<style lang="scss" scoped>

</style>
