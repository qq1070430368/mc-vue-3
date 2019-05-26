<template>
    <div class="line-echarts-contaienr">
        <echarts :options="line.options" :height="line.height"></echarts>
    </div>
</template>
<script>
import echarts from '@/components/echarts/echart.vue';
const animationDuration = 6000;
export default {
  data () {
    return {
      line: {
        options: {},
        width: '',
        height: '400'
      }
    };
  },
  props: {
    chartData: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    echarts
  },
  mounted () {
    this.setOptions();
  },
  methods: {
    setOptions () {
      this.line.options = {
        title: {
          text: '柱状图'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['pageA', 'pageB', 'pageC']
        },
        grid: {
          top: 50,
          left: '1%',
          right: '1%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['vue', 'react', 'angular', 'webpack', 'gulp', 'fullter', 'mui', 'jquery', 'javascript', 'ant'],
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          }
        }],
        series: [{
          name: 'pageA',
          type: 'bar',
          stack: 'vistors',
          barWidth: '50%',
          data: [79, 52, 200, 334, 390, 330, 220, 50, 90, 80],
          animationDuration
        }, {
          name: 'pageB',
          type: 'bar',
          stack: 'vistors',
          data: [80, 52, 200, 334, 390, 330, 220, 334, 390, 330],
          animationDuration
        }, {
          name: 'pageC',
          type: 'bar',
          stack: 'vistors',
          data: [30, 52, 200, 334, 390, 330, 220, 79, 52, 200],
          animationDuration
        }]
      };
    }
  }
};
</script>
