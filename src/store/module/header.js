const state = {
  isCollapse: false
};

const mutations = {
  SET_ISCOLLAPSE (state) {
    state.isCollapse = !state.isCollapse;
  }
};
const actions = {
  collapseEnter ({ commit }) {
    debugger;
    commit('SET_ISCOLLAPSE');
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
};
