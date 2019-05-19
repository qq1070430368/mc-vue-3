<template>
<div>
<div class="app-wrapper">
    <div  class="drawer-bg" @click="handleClickOutside" />
    <Sidebar class="sidebar-container" />
    <div :class="{hasTagsView:needTagsView}" class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <Header />
         
        <!-- <tags-view v-if="needTagsView" /> -->
      </div>
     <Breadcrumb id="breadcrumb-container" class="breadcrumb-container"></Breadcrumb>
      <app-main />
      <!-- <right-panel v-if="showSettings">
        <settings />
      </right-panel> -->
    </div>
  </div>
  <div class="tj-layout" v-if="false">
    <!-- :class="classObj" -->
    <div class="app-wrapper">
      <!-- <div class="drawer-bg" @click="handleClickOutside"/> -->
      <el-container>
        <el-aside class="el-aside-wrap">
          <sidebar class="sidebar-container"/>
        </el-aside>
        <el-container style="width: 100%">
          <el-header class="fixed-header">
            <Header class="header-container"></Header>
          </el-header>
          <div class="main-container">
            <el-main>
              <app-main class="app-container"></app-main>
            </el-main>
          </div>
        </el-container>
      </el-container>
    </div>
  </div>
</div>



</template>
<script>
import { Sidebar, Header, appMain } from './components';
import Breadcrumb from '@/components/Breadcrumb';
export default {
  name: 'layout',
  data () {
    return {
      needTagsView: true,
      fixedHeader: true
    };
  },
  components: {
    Sidebar,
    Header,
    appMain,
    Breadcrumb
  },
  methods: {
    handleClickOutside () {}
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/verfityMeau.scss";
.tj-layout {
  width: 100%;
  height: 100%;
}
.app-wrapper {
  // @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  .sidebar-container {
    height: 100%;
  }
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99 !important;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
  padding: 0;
  line-height: 60px;
}
.main-container {
  padding-top: 60px;
}
.breadcrumb-container{
   position: fixed;
   left: #{$sideBarWidth};
   z-index: 98 !important;
}
// .hideSidebar .fixed-header {
//   width: calc(100% - 54px);
// }

// .mobile .fixed-header {
//   width: 100%;
// }
</style>
