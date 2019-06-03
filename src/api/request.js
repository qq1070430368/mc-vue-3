import axios from 'axios';
import { server } from './config.constant';
import { Message, MessageBox } from 'element-ui';
import store from '../store';

// 配置AXIOS URL
const http = axios.create({
  // baseURL: 'http://10.0.9.118:8080',
  timeout: '60000',
  withCredentials: true // 设置cross跨域 并设置访问权限 允许跨域携带cookie
});
