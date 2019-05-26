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
          path: '/components/tablesPage',
          component: () => import('@/devTool/elTable/elTable.vue'),
          name: 'tablesPage',
          meta: {
            title: '表格控件',
            roles: ['admin'] // or you can only set roles in sub nav
          }
        },
        // swiperPage
        {
          path: '/components/swiperPage',
          component: () => import('@/devTool/swiper/swiper.vue'),
          name: 'swiperPage',
          meta: {
            title: '图片轮播',
            roles: ['admin'] // or you can only set roles in sub nav
          }
        }
      ]
      // meta: { title: '监管事项', icon: 'dashboard', affix: true }
    },
    {
      path: '/systemManager',
      name: 'systemManager',
      redirect: '/systemManager/departmentManager',
      component: () => import('@/views/layout/layout.vue'),
      children: [
        {
          path: '/systemManager/departmentManager',
          component: () => import('@/devTool/devementManager/devementManager.vue'),
          name: 'departmentManager',
          meta: {
            title: '部门管理',
            roles: ['admin'] // or you can only set roles in sub nav
          }
        }
      ]
      // meta: { title: '监管事项', icon: 'dashboard', affix: true }
    }
  ]
});
