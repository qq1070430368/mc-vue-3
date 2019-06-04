import variables from '@/styles/element-variables.scss';
import { setSession, getSession } from '@/utils/auth.js';

const state = {
  theme: getSession('theme') || variables.theme,
  isCollapse: getSession('isCollapse') || false
};
// 暂且没用 后续如果有什么特殊的全局setting 可以使用该module
const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    if (state.hasOwnProperty(key)) {
      state[key] = value;
    }
  },
  SET_ISCOLLAPSE (state) {
    state.isCollapse = !state.isCollapse;
    setSession('isCollapse', state.isCollapse);
  }
};

const actions = {
  changeSetting ({ commit }, data) {
    if (data.key === 'theme') {
      setSession(data.key, data.value);
    }
    commit('CHANGE_SETTING', data);
  },
  collapseEnter ({ commit }) {
    commit('SET_ISCOLLAPSE');
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
