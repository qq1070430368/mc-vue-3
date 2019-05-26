<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <div class="slide-container-wrap">
      <!-- <logo v-if="showLogo" :collapse="isCollapse" /> -->
      <!-- @open="handleOpen" -->
      <!-- @close="handleClose" -->
      <div class="slide-logo" v-if="!isCollapse">
        <el-image :src="'https://cdn.worldvectorlogo.com/logos/element-ui-1.svg'"></el-image>
      </div>

      <el-menu
        :unique-opened="true"
        class="el-menu-vertical-demo"
        :default-active="activeMenu"
        :router="true"
        :collapse="isCollapse"
        :collapse-transition="false"
        popper-append-to-body
        background-color="#2a323c"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
         <el-menu-item
            index="/home"  :class="{activeMenuOn: isCollapse, activeMenuOff: !isCollapse}"
          >
            <i class="el-icon-s-platform"></i>
            <span class="nav-next">首页</span>
          </el-menu-item>
        <el-submenu :index="menu.name" v-for="(menu, index) in menus"  :key="index" >
          <template slot="title">
            <i v-if="menu.icon" class="el-icon-s-platform"></i>
            <span class="nav-next">{{menu.text}}</span>
          </template>
          <el-menu-item
            :index="subMenu.path"
            v-for="(subMenu, subIndex) in menu.children"
            :key="subIndex"
          >
            <i v-if="subMenu.icon" class="el-icon-s-platform"></i>
            <span class="nav-next">{{subMenu.text}}</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </el-scrollbar>
</template>
<script>
// import slideSass from '@/styles/verfityMeau.scss';
// import { isExternal } from '@/utils/validate';
import { mapGetters } from 'vuex';
export default {
  data () {
    return {
      showLogo: true,
      menus: [
        // {
        //   name: 'home',
        //   text: '首页',
        //   icon: 'gear',
        //   path: '/home'
        // },
        {
          name: 'components',
          text: '基本组件',
          icon: 'gear',
          path: '/components',
          children: [
            {
              name: 'echartsPage',
              path: '/components/echartsPage',
              icon: 'user',
              text: 'echarts'
            },
            {
              name: 'tablesPage',
              path: '/components/tablesPage',
              icon: 'file',
              text: 'tablesPage'
            },
            {
              name: 'swiperPage',
              path: '/components/swiperPage',
              icon: 'file',
              text: 'swiperPage'
            }
          ]
        },
        {
          path: '/systemManager',
          name: 'systemManager',
          icon: 'gear',
          text: '系统管理',
          redirect: '/systemManager/departmentManager',
          children: [
            {
              path: '/systemManager/departmentManager',
              name: 'departmentManager',
              text: 'department',
              icon: 'gear',
              meta: {
                title: '部门管理',
                roles: ['admin'] // or you can only set roles in sub nav
              }
            }
          ]
          // meta: { title: '监管事项', icon: 'dashboard', affix: true }
        }
      ]
    };
  },
  computed: {
    ...mapGetters(['isCollapse']),
    activeMenu () {
      return this.$route.path;
    }
  },
  methods: {

  },
  mounted () {
    console.log(this.$route);
    console.log(this.$store.getters.isCollapse, ' 侧边栏');
  }
};
</script>
<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  // width: 200px;
  // min-height: 400px;
}
.el-scrollbar{
  height: calc(100% - 45px);
}
.el-menu{
  border: none;
  margin-top: 40px;
  text-align: left;
  .activeMenuOn {
    text-align: center;
  }
  .activeMenuOff {
    text-align: left;
  }
}
</style>
