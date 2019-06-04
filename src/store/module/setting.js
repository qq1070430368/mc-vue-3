import variables from '@/styles/element-variables.scss';
import { setSession, getSession } from '@/utils/auth.js';

const state = {
  theme: getSession('theme') || variables.theme,
  isCollapse: false || getSession('isCollapse')
};
// 特殊的全局头部setting 可以使用该module
const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    // 设置theme 保存theme
    if (state.hasOwnProperty(key)) {
      state[key] = value;
    }
  },
  SET_ISCOLLAPSE (state) {
    // 左侧导航的折叠状态
    setSession('isCollapse', !state.isCollapse);
    state.isCollapse = !state.isCollapse;
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
