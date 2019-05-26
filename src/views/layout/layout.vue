
<template>
  <div class="p-layout">
    <Header></Header>
    <div
      class="p-layout-body"
      :class="{
        'sider-full': !isCollapse,
        'sider-mini': isCollapse
      }">
      <aside class="p-layout-sider">
         <Sidebar class="p-sidebar-wrap"></Sidebar>
      </aside>
      <div class="p-layout-panel">
        <div class="p-layout-content">
          <!-- <el-scrollbar class="el-scroll-bar"> -->
          <div class="p-layout-container">
            <div class="p-layout-breadcrumb">
             <Breadcrumb id="breadcrumb-container" class="breadcrumb-container"></Breadcrumb>
            </div>
           <app-main></app-main>
          </div>
          <!-- </el-scrollbar> -->
        </div>
        <div class="p-layout-footer"> 版权所有 © 2016</div>
      </div>
    </div>
  </div>
</template>
<script>
// import auth from '../auth'
// import menus from '../nav-config'
import { Sidebar, Header, appMain } from './components';
import Breadcrumb from '@/components/Breadcrumb';
import { mapGetters } from 'vuex';
export default {
  name: 'p-layout',
  data () {
    return {
      loggedIn: '',
      currentRoute: this.$router.history.current.fullPath
    };
  },
  created () {
    // auth.onChange = (loggedIn) => {
    //   this.loggedIn = loggedIn;
    // };
  },
  components: {
    Sidebar,
    appMain,
    Header,
    Breadcrumb
  },
  computed: {
    ...mapGetters(['isCollapse'])
  },
  methods: {
    Collapse (val) {
      this.isCollapse = !val;
    },
    handleDropdown (cmd) {
      if (cmd === 'logout') {
        // auth.logout();
        this.$router.replace({ name: 'login' });
      }
    }
  }
};
</script>
