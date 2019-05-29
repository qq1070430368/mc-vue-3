import adaptive from './adaptive';
// 如果不用分页的情况下，table 可以用该 指令用来 固定表头 add lihaiqing 2019 5-29
const install = function (Vue) {
  Vue.directive('el-height-adaptive-table', adaptive);
};

if (window.Vue) {
  window['el-height-adaptive-table'] = adaptive;
  Vue.use(install); // eslint-disable-line
}

adaptive.install = install;
export default adaptive;
