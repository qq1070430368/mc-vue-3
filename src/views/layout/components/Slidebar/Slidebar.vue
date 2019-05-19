<template>
  <div :class="{'has-logo':showLogo}">
    <!-- <logo v-if="showLogo" :collapse="isCollapse" /> -->

    <!-- @open="handleOpen" -->
    <!-- @close="handleClose" -->
    <div class="slide-logo">
      <el-image :src="'https://cdn.worldvectorlogo.com/logos/element-ui-1.svg'"></el-image>
    </div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        default-active="home"
        class="el-menu-vertical"
        :collapse="isCollapse"
        mode="vertical"
        :background-color="slideSass.menuBg"
        :text-color="slideSass.menuText"
        unique-opened
        router
      >
        <el-menu-item index="home">
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="center">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <span>导航一</span>
          </template>
          <!-- <el-menu-item-group> -->
          <el-menu-item index="about">监管事项录入</el-menu-item>
          <el-menu-item index="directorySupervis">监管事项管理</el-menu-item>
          <el-menu-item index="directoryCheck">监管事项审核</el-menu-item>
          <!-- </el-menu-item-group> -->
        </el-submenu>

        <el-submenu index="center1">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <span>导航一</span>
          </template>
          <!-- <el-menu-item-group> -->
          <el-menu-item index="directoryManage">监管事项录入</el-menu-item>
          <el-menu-item index="directorySupervis">监管事项管理</el-menu-item>
          <el-menu-item index="directoryCheck">监管事项审核</el-menu-item>
          <!-- </el-menu-item-group> -->
        </el-submenu>

        <el-submenu index="center2">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <span>导航一</span>
          </template>
          <!-- <el-menu-item-group> -->
          <el-menu-item index="directoryManage">监管事项录入</el-menu-item>
          <el-menu-item index="directorySupervis">监管事项管理</el-menu-item>
          <el-menu-item index="directoryCheck">监管事项审核</el-menu-item>
          <!-- </el-menu-item-group> -->
        </el-submenu>
        <el-submenu index="center2">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <span>导航一</span>
          </template>
          <!-- <el-menu-item-group> -->
          <el-menu-item index="directoryManage">监管事项录入</el-menu-item>
          <el-menu-item index="directorySupervis">监管事项管理</el-menu-item>
          <el-menu-item index="directoryCheck">监管事项审核</el-menu-item>
          <!-- </el-menu-item-group> -->
        </el-submenu>
        <el-submenu index="center2">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <span>导航一</span>
          </template>
          <!-- <el-menu-item-group> -->
          <el-menu-item index="directoryManage">监管事项录入</el-menu-item>
          <el-menu-item index="directorySupervis">监管事项管理</el-menu-item>
          <el-menu-item index="directoryCheck">监管事项审核</el-menu-item>
          <!-- </el-menu-item-group> -->
        </el-submenu>
        <el-submenu index="center2">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <span>导航一</span>
          </template>
          <!-- <el-menu-item-group> -->
          <el-menu-item index="directoryManage">监管事项录入</el-menu-item>
          <el-menu-item index="directorySupervis">监管事项管理</el-menu-item>
          <el-menu-item index="directoryCheck">监管事项审核</el-menu-item>
          <!-- </el-menu-item-group> -->
        </el-submenu>
        <el-submenu index="center2">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <span>导航一</span>
          </template>
          <!-- <el-menu-item-group> -->
          <el-menu-item index="directoryManage">监管事项录入</el-menu-item>
          <el-menu-item index="directorySupervis">监管事项管理</el-menu-item>
          <el-menu-item index="directoryCheck">监管事项审核</el-menu-item>
          <!-- </el-menu-item-group> -->
        </el-submenu>
        <el-submenu index="center2">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <span>导航一</span>
          </template>
          <!-- <el-menu-item-group> -->
          <el-menu-item index="directoryManage">监管事项录入</el-menu-item>
          <el-menu-item index="directorySupervis">监管事项管理</el-menu-item>
          <el-menu-item index="directoryCheck">监管事项审核</el-menu-item>
          <!-- </el-menu-item-group> -->
        </el-submenu>
        <el-submenu index="center2">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <span>导航一</span>
          </template>
          <!-- <el-menu-item-group> -->
          <el-menu-item index="directoryManage">监管事项录入</el-menu-item>
          <el-menu-item index="directorySupervis">监管事项管理</el-menu-item>
          <el-menu-item index="directoryCheck">监管事项审核</el-menu-item>
          <!-- </el-menu-item-group> -->
        </el-submenu>
        <el-submenu index="center2">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <span>导航一</span>
          </template>
          <!-- <el-menu-item-group> -->
          <el-menu-item index="directoryManage">监管事项录入</el-menu-item>
          <el-menu-item index="directorySupervis">监管事项管理</el-menu-item>
          <el-menu-item index="directoryCheck">监管事项审核</el-menu-item>
          <!-- </el-menu-item-group> -->
        </el-submenu>
        <el-submenu index="center2">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <span>导航一</span>
          </template>
          <!-- <el-menu-item-group> -->
          <el-menu-item index="directoryManage">监管事项录入</el-menu-item>
          <el-menu-item index="directorySupervis">监管事项管理</el-menu-item>
          <el-menu-item index="directoryCheck">监管事项审核</el-menu-item>
          <!-- </el-menu-item-group> -->
        </el-submenu><el-submenu index="center2">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <span>导航一</span>
          </template>
          <!-- <el-menu-item-group> -->
          <el-menu-item index="directoryManage">监管事项录入</el-menu-item>
          <el-menu-item index="directorySupervis">监管事项管理</el-menu-item>
          <el-menu-item index="directoryCheck">监管事项审核</el-menu-item>
          <!-- </el-menu-item-group> -->
        </el-submenu>
        <el-submenu index="center2">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <span>导航一</span>
          </template>
          <!-- <el-menu-item-group> -->
          <el-menu-item index="directoryManage">监管事项录入</el-menu-item>
          <el-menu-item index="directorySupervis">监管事项管理</el-menu-item>
          <el-menu-item index="directoryCheck">监管事项审核</el-menu-item>
          <!-- </el-menu-item-group> -->
        </el-submenu>
        <el-submenu index="center2">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <span>导航一</span>
          </template>
          <!-- <el-menu-item-group> -->
          <el-menu-item index="directoryManage">监管事项录入</el-menu-item>
          <el-menu-item index="directorySupervis">监管事项管理</el-menu-item>
          <el-menu-item index="directoryCheck">监管事项审核</el-menu-item>
          <!-- </el-menu-item-group> -->
        </el-submenu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import slideSass from '@/styles/verfityMeau.scss';
export default {
  data () {
    return {
      showLogo: true,
      isCollapse: false
    };
  },
  computed: {
    slideSass () {
      return slideSass;
    }
  }
};
</script>
