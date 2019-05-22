import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      redirect: '/home',
      component: () => import('@/views/layout/layout.vue'),
      children: [
        {
          path: 'home',
          component: () => import('@/views/home/Home.vue'),
          name: 'home',
          meta: { title: '首页', icon: 'dashboard', affix: true }
        }
      ]
    },
    {
      path: '/components',
      name: 'components',
      redirect: '/components/echartsPage',
      component: () => import('@/views/layout/layout.vue'),
      children: [
        {
          path: '/components/echartsPage',
          component: () => import('@/devTool/echarts/echarts.vue'),
          name: 'echartsPage',
          meta: {
            title: '图表控件',
            roles: ['admin'] // or you can only set roles in sub nav
          }
        },
        {
          path: 'tablesPage',
          component: () => import('@/devTool/elTable/elTable.vue'),
          name: 'tablesPage',
          meta: {
            title: '表格控件',
            roles: ['admin'] // or you can only set roles in sub nav
          }
        }
      ]
      // meta: { title: '监管事项', icon: 'dashboard', affix: true }
    }
  ]
});
