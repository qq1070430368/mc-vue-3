<template>
  <div class="echarts-container"></div>
</template>
<script>
import echarts from 'echarts';
import theme from './echarts.theme.json';
import { debounce } from '@/utils';
export default {
  data () {
    return {
      id: Math.random(),
      echartInit: {}
    };
  },
  props: {
    options: {
      type: Object,
      default: () => {
        return {};
      }
    },
    width: String,
    height: String
  },
  watch: {
    options (va) {
      if (va) {
        this.init();
      }
    }
  },
  methods: {
    resizeLoad () {
      window.addEventListener('resize', () => {
        this.echartInit.resize();
        // 当窗口变化时, 及时能够通知到父组件
        this.$emit('echartResize', this.echartInit);
      });
    },
    getTimeId (length) {
      return String(Symbol(Math.random().toString().substr(3, length) + Date.now()).toString(36));
    },
    init () {
      // 初始化echarts ID
      console.log(theme);
      // const themeJson = JSON.parse(theme);
      if (this.options) {
        this.$nextTick(() => {
          this.$el.setAttribute('id', this.getTimeId());
          this.$el.style.width = this.width ? this.width + 'px' : '100%';
          this.$el.style.height = this.height ? this.height + 'px' : '500px';
          // 初始化echatrs options 配置一个echarts 主题
          echarts.registerTheme('westeros', theme);
          this.echartInit = echarts.init(this.$el, 'westeros');
          // 设置echarts 需要的options
          this.echartInit.setOption(this.options);
          // console.log(this.options, 'options')
          //   窗口变化是. 重置echarts
          this.resizeLoad();
        });
      }
    }
  },
  mounted () {
    this.init();
    this.__resizeHandler = debounce(() => {
      if (this.echartInit) {
        this.echartInit.resize();
      }
    }, 100);
    // 监听侧边栏的变化
    this.sidebarElm = document.getElementsByClassName('p-sidebar-wrap')[0];
    debugger;
    this.sidebarElm && this.sidebarElm.addEventListener('transitionend', this.sidebarResizeHandler);
  }
};
</script>
