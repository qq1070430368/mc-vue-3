/** creat by haiqing  2019-05-021 */
// 拉取state 状态相当于compouted
const getters = {
  isCollapse: state => state.header.isCollapse, // 菜单栏折叠
  logs: state => state.errorLog.logs, // 错误异常处理
  theme: state => state.setting.theme
};

export default getters;
