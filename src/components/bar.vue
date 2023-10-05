<template>
  <div class="container-bar border-box">
    <div class="charts" ref="charts"></div>
    <button @click="add">点击</button>
  </div>
</template>

<script>
import { computed, inject, onMounted, reactive, watch } from 'vue'
export default {
  props: {
    num: {
      type: Number
    }
  },
  emits: ['update:num'],
  components: {},
  setup (props, context) {
    const echarts = inject('echarts')
    const datax = reactive(['洗碗机', '空调', '烤箱', '微波炉', '电视机', '洗衣机', '冰箱'])
    const datay = reactive([1578, 876, 2431, 1347, 541, 342, 1827])
    const add = () => {
      console.log(datay[0] + datay[1])
      datay[1] = 1000
      console.log(datay[1])
      context.emit('update:num', 4)
    }
    const changeData = computed(() => {
      return datax.map((item, index) => {
        return [item, datay[index]]
      })
    })
    onMounted(() => {
      const Myecharts = echarts.init(document.querySelector('.charts'))
      console.log(props.num)
      console.log(datax[0])
      //   context.attrs用来访问没有被poprs注册的数据
      console.log(changeData.value)
      Myecharts.setOption({
        title: {
          text: '销售情况',
          x: 'center'
        },
        xAxis: {

        },
        tooltip: {
          trigger: 'item'
        },
        yAxis: {
          type: 'category',
          data: datax
        },
        series: [
          {
            type: 'bar',
            data: datay
          }
        ]
      })
      //   建立一个侦听器再datay改变时改变图像的值
      watch(datay, () => {
        Myecharts.setOption({
          series: [
            {
              type: 'bar',
              data: datay
            }
          ]
        })
      })
      window.addEventListener('resize', () => {
        Myecharts.resize()
      })
    })
    return { datax, datay, add, changeData }
  }
}
</script>

<style lang="less" scoped>
.container-bar {
  width: 4.625rem;
  height: 4.625rem;
  background-color: pink;
  margin-bottom: 0.125rem;
  padding: 0.125rem;
}
.charts{
    width: 4.375rem;
    height: 4.375rem;
}
</style>
