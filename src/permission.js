import router from './router';
import store from './store';
import NProgress from 'nprogress'; // progress bar
import { getToken } from '@/utils/auth.js';
import 'nprogress/nprogress.css'; // progress bar style

// NProgress.configure({ showSpinner: false }); // NProgress Configuration
const whiteList = ['/login'];
router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start();
  // var hasExit = store.state.users.status;
  const hasToken = getToken();
  if (hasToken) {
    if (to.path === '/login') {
      next({ name: 'home' });
      NProgress.done();
    } else {
      if (!to.name) {
        next({ name: 'home' });
        // next()
        NProgress.done();
      } else {
        // 主要操作 拉去用户信息以及生成路由状态
        const hasRoles = store.getters.users;
        if (hasRoles && hasRoles.id && hasRoles.roleNames.length) {
          next();
          NProgress.done();
        } else {
        // 拉取用户信息
          try {
          // const {roleNames} =
            await store.dispatch('users/getUserHandle');
            next();
          } catch (error) {
            await store.dispatch('users/exit');
            // Message({
            //   type: 'error',
            //   message: error || '服务器异常, 请稍后再试'
            // });
            next(`/login`);
            NProgress.done();
          }
        }
      }
    }
  } else {
    // 如果用户没有登陆的话
    if (whiteList.indexOf(to.path) !== -1) {
      // debugger
      // in the free login whitelist, go directly
      next();
      NProgress.done();
    } else {
      // debugger
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login`);
      // next(`/login?redirect=${to.path}`); // 是否记住来源
      NProgress.done();
    }
  }
  // return;
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
