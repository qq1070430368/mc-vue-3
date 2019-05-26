import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// reset browers css
import 'normalize.css/normalize.css';
import './styles/_index.scss';
import './plugins/element.js';
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
