<template>
    <div class="line-echarts-contaienr">
        <echarts :options="line.options" :height="line.height"></echarts>
    </div>
</template>
<script>
import echarts from '@/components/echarts/echart.vue';
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
    this.setOptions(this.chartData.newVisitis);
  },
  methods: {
    setOptions ({ expectedData, actualData, actualData1 } = {}) {
      this.line.options = {
        title: {
          text: '折线图'
        },
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          boundaryGap: false,
          axisTick: {
            show: false
          }
        },
        grid: {
          top: 50,
          left: '1%',
          right: '1%',
          bottom: '3%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
        },
        yAxis: {
          axisTick: {
            show: false
          }
        },
        legend: {
          data: ['expected', 'actual', 'actual1']
        },
        series: [{
          name: 'expected',
          smooth: true,
          type: 'line',
          data: expectedData,
          animationDuration: 2800,
          animationEasing: 'cubicInOut'
        },
        {
          name: 'actual',
          smooth: true,
          type: 'line',
          data: actualData,
          animationDuration: 2800,
          animationEasing: 'quadraticOut'
        },
        {
          name: 'actual1',
          smooth: true,
          type: 'line',
          data: actualData1,
          animationDuration: 2800,
          animationEasing: 'quadraticOut'
        }
        ]
      };
    }
  }
};
</script>
