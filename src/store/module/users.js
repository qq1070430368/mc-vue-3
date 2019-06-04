import API from '../../api/login';
import { setToken, getToken, removeToken, setMd5 } from '@/utils/auth.js';
// 初始化users状态
const state = {
  token: getToken(),
  users: '',
  roles: ''
  // status: false
};

const mutations = {
  SET_TOKEN: (state, token) => {
    // 设置token
    state.token = token;
  },
  SET_USERS: (state, users) => {
    state.users = users;
    // 设置用户信息
  },
  SET_ROLES: (state, roles) => {
    // 设置用户角色
    state.roles = roles;
  },
  LOGIN_EXIT: (state, code) => {
    if (code) {
      state.token = code;
    }
  }
};

const actions = {
  // 登录
  loginInfo ({ commit }, userInfo) {
    // userInfo.userid = setMd5(userInfo.userid);
    userInfo.passwordMd5 = setMd5(userInfo.password);
    return new Promise((resolve, reject) => {
      const params = {
        userid: userInfo.userid,
        password: userInfo.passwordMd5,
        checkcode: userInfo.checkcode
      };
      API.login(params)
        .then((response) => {
          if (response) {
            // 登录状态
            if (response.data.code === 200) {
              const token = '10011';
              commit('SET_TOKEN', token);
              setToken(token);
              console.log('登录成功');
              // 因为后端采取了 session的方式去管理登录的状态, 所以这里直接exit 不做任何操作
              resolve(response.data);
            }
          }
        }).catch(error => {
          reject(error);
        });
    });
  },
  // 获取用户信息以及角色信息
  getUserHandle ({ commit }) {
    // alert(123);
    // debugger;
    return new Promise((resolve, reject) => {
      API.getUserInfo()
        .then((response) => {
          if (response && response.data.code === 200 && response.data.content) {
            commit('SET_USERS', response.data.content);
            commit('SET_ROLES', response.data.content.roleNames);
            resolve(response.data.content);
          // commit('SET_ROLES', [roles]);
          } else {
            commit('SET_TOKEN', null);
            commit('SET_USERS', {});
            commit('SET_ROLES', []);
            removeToken('');
            resolve();
          }
        }).catch(error => {
          console.log(error);
          reject(error);
        });
    });
  },
  // 获取异常用户信息异常 导致的退出程序的操作
  exit ({ commit }, token) {
    commit('SET_TOKEN', token);
    commit('SET_USERS', {});
    commit('SET_ROLES', []);
    removeToken(token);
  },
  // 退出的操作
  loginExit ({ commit, state }) {
    return new Promise((resolve, reject) => {
      API.loginOut().then((response) => {
        commit('SET_USERS', {});
        commit('SET_TOKEN', null);
        commit('SET_ROLES', []);
        removeToken();
        // removeToken();
        // resetRouter();
        resolve(response);
      }).catch(error => {
        reject(error);
      });
    });
  },
  // 登录页验证码
  authCode () {
    return new Promise((resolve, reject) => {
      API.fetchAuthCode()
        .then(res => {
          if (res && res.data) {
            resolve(res.data);
          }
        }).catch(error => {
          reject(error);
        });
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
