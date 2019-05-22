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
            index="home"  :class="{activeMenuOn: isCollapse, activeMenuOff: !isCollapse}"
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
          name: 'demo',
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
              name: 'about',
              path: '/about',
              icon: 'file',
              text: '富文本'
            }
          ]
        },
        {
          name: 'demo1',
          text: '海清',
          icon: 'gear',
          path: '/home',
          children: [
            {
              name: 'home',
              path: '/home',
              icon: 'user',
              text: '用户管理2'
            },
            {
              name: 'about',
              path: '/about',
              icon: 'file',
              text: '富文本2'
            }
          ]
        }
      ]
    };
  },
  computed: {
    ...mapGetters(['isCollapse'])
  },
  methods: {
    activeMenu () {
      // console.log(this.$route)
      return this.$route.path;
    }
  },
  mounted () {
    console.log(this.$route)
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
