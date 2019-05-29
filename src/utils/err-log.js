import Vue from 'vue';
import store from '../store';
import { isString, isArray } from '@/utils/vaildate';
import settings from './setting';

// you can set in settings.js
// errorLog:'production' | ['production', 'development']
const { errorLog: needErrorLog } = settings;

function checkNeed () {
  const env = process.env.NODE_ENV;
  debugger;
  if (isString(needErrorLog)) {
    return env === needErrorLog;
  }
  if (isArray(needErrorLog)) {
    return needErrorLog.includes(env);
  }
  return false;
}

if (checkNeed()) {
  console.log(store, 'dasdasd');
  Vue.config.errorHandler = function (err, vm, info, a) {
    debugger;
    // Don't ask me why I use Vue.nextTick, it just a hack.
    // detail see https://forum.vuejs.org/t/dispatch-in-vue-config-errorhandler-has-some-problem/23500
    Vue.nextTick(() => {
      store.dispatch('errorLog/addErrorLog', {
        err,
        vm,
        info,
        url: window.location.href
      });
      console.error(err, info);
    });
  };
}
