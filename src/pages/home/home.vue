<template>
  <div data-comp="home-component" class="wrap">home组件</div>
</template>

<script type="text/javascript">
  // **** 组件名称 大驼峰 *****
  // ** 本地公用变量 公用函数 **
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
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/variable";
  @import "~assets/css/mixin";

  .wrap {
    @include flex(space-between);
  }
</style>
