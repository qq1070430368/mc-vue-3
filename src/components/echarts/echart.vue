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
      echartInit: {},
      sidebarElm: null
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
    options: {
      deep: true,
      handler (val) {
        this.init();
      }
    }
  },
  methods: {
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
        });
      }
    },
    sidebarResizeHandler (e) {
      // 当检测到宽度变化时， 重置echarts
      if (e.propertyName === 'width') {
        this.__resizeHandler();
      }
    }
  },
  beforeDestroy () {
    if (!this.echartInit) {
      return;
    }
    // 当组件销毁的时候移除监听 移除实例
    window.removeEventListener('resize', this.__resizeHandler);
    this.sidebarElm && this.sidebarElm.removeEventListener('transitionend', this.sidebarResizeHandler);

    this.echartInit.dispose();
    this.echartInit = null;
  },
  mounted () {
    this.init();
    // 强制一个函数在某个连续时间段内只执行一次，哪怕它本来会被调用多次 提升性能
    this.__resizeHandler = debounce(() => {
      if (this.echartInit) {
        this.echartInit.resize();
      }
    }, 100);
    window.addEventListener('resize', this.__resizeHandler);
    // 监听侧边栏的变化
    this.sidebarElm = document.getElementsByClassName('p-layout-topbar')[0];
    // 通过监听sildebar transitione 来判断是否需要重置echarts
    this.sidebarElm && this.sidebarElm.addEventListener('transitionend', this.sidebarResizeHandler);
  }
};
</script>
