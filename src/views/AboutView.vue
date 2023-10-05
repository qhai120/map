<template>
  <div class="about">
    <header>
      <h1>
        大数据可视化{{num}}
      </h1>
    </header>
    <div class="content flex">
      <div class=" flex column">
        <Bar v-model:num="num" ></Bar>
        <Line></Line>
      </div>
      <div class="content-center">
        <Map></Map>
      </div>
      <div class=" flex column">
        <Pie></Pie>
        <Candlestick></Candlestick>
      </div>
    </div>
  </div>
</template>

<script>
import Bar from '@/components/bar.vue'
import Line from '@/components/line.vue'
import Map from '@/components/map.vue'
import Pie from '@/components/pie.vue'
import Candlestick from '@/components/candlestick.vue'
export default {
  data () {
    return {
      num: 0
    }
  },
  methods: {
  },
  components: {
    Bar, Line, Map, Pie, Candlestick
  }
}
</script>

<style lang="less" scoped>
header{
  height: 1rem;
  width: 100%;
  background-color: rgba(0, 0, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  h1{
    width: 20%;
    font-size: 0.375rem;
    color: white;
    text-align: center;
    line-height: 1rem;
    background-color: rgba(0, 0,0, 0.2);;
  }
}
.content{
  padding-top: .125rem;
  justify-content: center;
  .content-center{
    margin-left: .625rem;
    margin-right: .625rem;
  }
}
</style>
