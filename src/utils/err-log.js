import Vue from 'vue';
import store from '../store';
// import { isString, isArray } from '@/utils/vaildate';
import settings from './setting';

// you can set in settings.js
// errorLog:'production' | ['production', 'development']
const { errorLog: needErrorLog } = settings;

function checkNeed () {

  return true;
}

if (checkNeed()) {
  console.log(store, 'dasdasd');
  Vue.config.errorHandler = function (err, vm, info, a) {
    console.log(err, 'err')
    // Don't ask me why I use Vue.nextTick, it just a hack.
    // detail see https://forum.vuejs.org/t/dispatch-in-vue-config-errorhandler-has-some-problem/23500
    Vue.nextTick(() => {
      store.dispatch('errorLog/addErrorLog', {
        err,
        info,
        url: window.location.href
      });
      console.error(err);
    });
  };
}
