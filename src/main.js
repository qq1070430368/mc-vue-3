import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// reset browers css
import 'normalize.css/normalize.css';
import './styles/_index.scss';
import './plugins/element.js';
// 主题
import '@/utils/refshStyle.js';
// 捕获异常
import './utils/err-log'; // error log

import './filters'; // 全局公用filters
// import './sertry'; // 后续可能会添加sentry 监控程序
import translate from '@/utils/config.constant'; // 全局的常规性文字挂载到原型上
Vue.config.productionTip = false;

Vue.use(translate); // 处理时间
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
