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
      component: () => import(/* webpackChunkName: "about" */ './views/layout/layout.vue'),
      children: [
        {
          path: 'home',
          component: () => import('@/views/About.vue'),
          name: 'home',
          meta: { title: '首页', icon: 'dashboard', affix: true }
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/Home.vue'),
          meta: { title: '监管事项', icon: 'dashboard', affix: true }
        }
      ]
    }
   
  ]
});
