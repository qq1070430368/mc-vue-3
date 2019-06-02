import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// reset browers css
import 'normalize.css/normalize.css';
import './styles/_index.scss';

import './plugins/element.js';

// 捕获异常
import './utils/err-log'; // error log

import './sertry';
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
