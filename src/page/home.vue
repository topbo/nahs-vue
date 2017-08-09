<template>
  <div>
    <HeaderBar :myindex='activeIndex1'></HeaderBar>
    <SideBar></SideBar>
    <div id="myChart" :style="{width:'900px',height:'400px'}">

    </div>
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar'
import SideBar from '../components/SideBar'
export default {

  name: 'home',

  data () {
    return {
      activeIndex1: 'home'
    }
  },
  components: {
    HeaderBar,
    SideBar
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      myChart.setOption({
        title: {
          text: '人体所需七大营养元素',
          subtext: '来自网上资料',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          x: 'center',
          y: 'bottom',
          data: ['水', '蛋白质', '脂肪', '碳水化合物', '矿物质', '维生素', '纤维']
        },
        toolbox: {
          show: true,
          feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {
              show: true,
              type: ['pie', 'funnel']
            },
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        calculable: true,
        series: [
          {
            name: '面积模式',
            type: 'pie',
            radius: [30, 110],
            center: ['50%', '50%'],
            roseType: 'area',
            data: [
              {value: 60, name: '水'},
              {value: 17, name: '蛋白质'},
              {value: 14, name: '脂肪'},
              {value: 2, name: '碳水化合物'},
              {value: 5, name: '矿物质'},
              {value: 1, name: '维生素'},
              {value: 0.1, name: '纤维'}
            ]
          }
        ]
      })
    }
  }
}
</script>

<style lang="css" scoped>
#myChart{
  float: left;
  margin-top: 20px;
}
</style>
