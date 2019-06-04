// 存储localStorage时设置前缀
import Cookie from 'js-cookie';
const crypto = require('crypto');
const storePrefix = 'YC_';
const TokenKey = 'YC-Token';

export function getToken () {
  // 获取
  return Cookie.get(TokenKey);
}

export function setToken (token) {
// Cookies.set('name', 'value', { expires: 7, path: '' });
  return Cookie.set(TokenKey, token);
}

export function removeToken () {
  return Cookie.remove(TokenKey);
}
// MD5 加密
export function setMd5 (val) {
  const md5 = crypto.createHash('md5');
  md5.update(val);
  return md5.digest('hex');
}

export function renderTime (date) {
  var dateee = new Date(date).toJSON();
  return new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
}

// 存储localStorage
export const setLocal = (name, content) => {
  if (!name) return;
  if (typeof content === 'object') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(storePrefix + name, content);
};
// 存储sessionStorage
export const setSession = (name, content) => {
  if (!name) return;
  if (typeof content === 'object') {
    content = JSON.stringify(content);
  }
  window.sessionStorage.setItem(storePrefix + name, content);
};
//  获取sessionStorage
export const getSession = name => {
  if (!name) return;
  return window.sessionStorage.getItem(storePrefix + name);
};
  // 删除sessionStorage
export const removeSession = name => {
  if (!name) return;
  window.sessionStorage.removeItem(storePrefix + name);
};
// 获取localStorage
export const getLocal = name => {
  if (!name) return;
  return window.localStorage.getItem(storePrefix + name);
};

// 删除localStorage
export const removeLocal = name => {
  if (!name) return;
  window.localStorage.removeItem(storePrefix + name);
};

// 判断是否为手机号
export function isMobile (mobile) {
  let reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[67]|17[0135678]|18[0-9]|19[89])\d{8}$/;
  return reg.test(mobile);
}
// 密码校验规则(8-16位数字跟字母组合)
export function checkPass (password) {
  if (/\s/.test(password)) return false;
  let passwordReq = /^(((?=.*[a-zA-Z])(?=.*\d)[^]{8,16})|((?=.*[^a-zA-Z0-9])(?=.*\d)[^]{8,16})|((?=.*[^a-zA-Z0-9])(?=.*[a-zA-Z])[^]{8,16}))$/;
  let testResult = passwordReq.test(password);
  return testResult;
}

export const loadingOptions = {
  text: '努力加载中',
  background: 'rgba(0, 0, 0, 0)'
};
