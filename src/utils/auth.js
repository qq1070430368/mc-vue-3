// 存储localStorage时设置前缀
const storePrefix = 'YC_';
export function renderTime (date) {
  var dateee = new Date(date).toJSON();
  return new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
}
export function getCookie (name) {
  let arr = document.cookie.replace(/\s/g, '').split(';');
  for (let i = 0; i < arr.length; i++) {
    let tempArr = arr[i].split('=');
    if (tempArr[0] === name) {
      return decodeURIComponent(tempArr[1]);
    }
  }
  return '';
}

// 设置cookie
export function setCookie (name, value, days = 0) {
  let date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  let expires = date.toUTCString();
  document.cookie = name + '=' + value + ';expires=' + expires;
}

// 移除cookie
export function removeCookie (name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
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
// 时间格式化
export function formatDate (date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1,
      (new Date(date).getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': new Date(date).getMonth() + 1,
    'd+': new Date(date).getDate(),
    'h+': new Date(date).getHours(),
    'm+': new Date(date).getMinutes(),
    's+': new Date(date).getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1,
        (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
}

function padLeftZero (str) {
  return ('00' + str).substr(str.length);
}
/**
 * 格式化时间字符串，防止解析出错
 * @param str
 * @returns {*}
 */
export function formatDateStr (str) {
  if (typeof (str) === 'string') {
    return str.replace(/-/g, '/');
  } else {
    return 0;
  }
}
/**
 * 判断是否为数字
 */
export function isNumber (str) {
  if (typeof str === 'number') {
    return true;
  }
  return /^[0-9]+$/.test(str);
}

export const loadingOptions = {
  text: '努力加载中',
  background: 'rgba(0, 0, 0, 0)'
};
