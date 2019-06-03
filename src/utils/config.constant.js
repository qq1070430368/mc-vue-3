
import translateFrom from './translate';

const translate = {
  install: function (Vue) {
    Vue.prototype.$translate = translateFrom;
  }
};
export default translate;
