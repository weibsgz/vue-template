import echarts from 'echarts'

// 使用刚指定的配置项和数据显示图表。
export class Bar {
  constructor(el) {
    this.chart = echarts.init(el)
  }
  baseOption = {
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {},
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫"]
    },
    yAxis: {},
    color: ['#f00', '#0f0', '#00f']
  }
  setStyle() {}
  setData(data) {

    let option = {
      legend: {
        data: data.map(item => item.name)
      },
      series: data
    }

    let merge = Object.assign({}, this.baseOption, option)

    this.chart.setOption(merge, true)
  }
}
