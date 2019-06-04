import $http from './request';
import QS from 'qs';
// import qs from '';
const API = {
  login (arg) {
    // 登录
    return $http.post(`${process.env.PROXY}/inventory/login/loginuser`, QS.stringify(arg), {
      headers: {
        'content-Type': 'application/x-www-form-urlencoded'
      }
    });
  },
  // 获取用户信息
  getUserInfo () {
    return $http.post(`${process.env.PROXY}/inventory/userInfo/currentuser`);
  },
  loginOut () {
    return $http.post(`${process.env.PROXY}/inventory/login/logout`);
  },
  fetchAuthCode () {
    return $http.post(`${process.env.PROXY}/inventory/login/captcha`);
  }
};

export default API;
