import axios from 'axios';
import { SERVER } from '@/utils/translate.js';
import {
  Message,
  MessageBox
} from 'element-ui';
import store from '../store';

// 配置AXIOS URL
const http = axios.create({
  // baseURL: 'http://10.0.9.118:8080',
  timeout: '60000',
  withCredentials: true // 设置cross跨域 并设置访问权限 允许跨域携带cookie
});

http.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  console.log(error);
  return Promise.reject(error);
});

http.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if (response) {
    const resData = response;
    if (resData && resData.data && resData.data.code === 10010) {
      //  写自己的逻辑
      // console.log(store, 'sadd')
      MessageBox.confirm('登录已过期, 请重新登录', '提示!', {
        confirmButtonText: '确定',
        cancelButtonText: null,
        showCancelButton: false,
        showClose: false,
        closeOnClickModal: false,
        type: 'error'
      }).then(() => {
        store.dispatch('users/exit', null);
        location.replace(location.origin + '#' + '/login');
        return Promise.reject(response.data.msg);
      });
    } else if (resData && resData.data && ((resData.data.code + '')[0] === '2' || resData.config.responseType === 'blob')) {
      return resData;
    } else {
      Message({
        type: 'error',
        message: resData.data.msg
      });
      return Promise.reject(response.data.msg);
    }
  }
}, function (error) {
  // 对响应错误做点什么 超时和其他异常处理
  if (error.message.includes('timeout')) {
    Message({
      message: SERVER['timeout'],
      type: 'error'
    });
  } else {
    if (error && error.response && error.response.status) {
      Message({
        message: SERVER.throwErr(error.response.status),
        type: 'error'
      });
    }
    return Promise.reject(error);
  }
});
export default http;
