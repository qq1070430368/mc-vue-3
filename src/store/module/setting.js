import variables from '@/styles/element-variables.scss';

const state = {
  theme: variables.theme
};
// 暂且没用 后续如果有什么特殊的全局setting 可以使用该module
const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    if (state.hasOwnProperty(key)) {
      state[key] = value;
    }
  }
};

const actions = {
  changeSetting ({ commit }, data) {
    commit('CHANGE_SETTING', data);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};