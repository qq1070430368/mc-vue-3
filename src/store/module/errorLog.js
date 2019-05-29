const state = {
  logs: []
};

const mutations = {
  ADD_ERROR_LOG: (state, log) => {
      debugger
    state.logs.push(log);
  }
};

const actions = {
  addErrorLog ({ commit }, log) {
    debugger
    commit('ADD_ERROR_LOG', log);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
