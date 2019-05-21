<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <div class="slide-container-wrap">
      <!-- <logo v-if="showLogo" :collapse="isCollapse" /> -->

      <!-- @open="handleOpen" -->
      <!-- @close="handleClose" -->

      <div class="slide-logo">
        <el-image :src="'https://cdn.worldvectorlogo.com/logos/element-ui-1.svg'"></el-image>
      </div>

      <el-menu
        theme="dark"
        :unique-opened="true"
        class="el-menu-vertical-demo"
        default-active="home"
        :router="true"
        :collapse="isCollapse"
        :collapse-transition="false"
        popper-append-to-body
      >
        <el-submenu :index="menu.name" v-for="(menu, index) in menus" :key="index">
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
import { mapGetters } from 'vuex';
export default {
  data () {
    return {
      showLogo: true,
      menus: [
        {
          name: 'demo',
          text: '演示',
          icon: 'gear',
          path: '/home',
          children: [
            {
              name: 'home',
              path: '/home',
              icon: 'user',
              text: '用户管理'
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
          name: 'demo',
          text: '演示',
          icon: 'gear',
          path: '/home',
          children: [
            {
              name: 'home',
              path: '/home',
              icon: 'user',
              text: '用户管理'
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
          name: 'demo',
          text: '演示',
          icon: 'gear',
          path: '/home',
          children: [
            {
              name: 'home',
              path: '/home',
              icon: 'user',
              text: '用户管理'
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
          name: 'demo',
          text: '演示',
          icon: 'gear',
          path: '/home',
          children: [
            {
              name: 'home',
              path: '/home',
              icon: 'user',
              text: '用户管理'
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
          name: 'demo',
          text: '演示',
          icon: 'gear',
          path: '/home',
          children: [
            {
              name: 'home',
              path: '/home',
              icon: 'user',
              text: '用户管理'
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
          name: 'demo',
          text: '演示',
          icon: 'gear',
          path: '/home',
          children: [
            {
              name: 'home',
              path: '/home',
              icon: 'user',
              text: '用户管理'
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
          name: 'demo',
          text: '演示',
          icon: 'gear',
          path: '/home',
          children: [
            {
              name: 'home',
              path: '/home',
              icon: 'user',
              text: '用户管理'
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
  mounted () {
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
</style>
