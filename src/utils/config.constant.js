
import * as translateFrom from './translate.js';
const translate = {
  install: function (Vue) {
    Vue.prototype.$translate = translateFrom;
  }
};
export default translate;
