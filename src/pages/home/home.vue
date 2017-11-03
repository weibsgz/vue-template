<template>
  <div data-comp="home-component" class="wrap" ref="wrap">home组件</div>
</template>

<script type="text/javascript">
  // **** 组件名称 大驼峰 *****
  // ** 本地公用变量 公用函数 **
  import {Bar} from 'visual/bar'
  import {lineStyle} from 'visual/style'
  // ***** 第三方 组件库 *****
  // ***** 本地 公用组件 *****
  // ** 当前组件的 子组件等 ***

  export default {
    name: 'home',
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    data() {
      return {

      }
    },
    mounted() {
      let target = this.$refs.wrap
      this.chart = new Bar(target)

      let data = [{
        name: 'a',
        type: 'line',
        data: [5, 20, 26]
      },{
        name: 'b',
        type: 'line',
        data: [5, 10, 6]
      },{
        name: 'c',
        type: 'line',
        data: [5, 2, 36]
      }]

      this.chart.setData(data)
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/variable";
  @import "~assets/css/mixin";

  .wrap {
    @include flex(space-between);
    width: 400px;
    height: 400px;
  }
</style>
