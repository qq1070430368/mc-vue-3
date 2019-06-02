<template>
  <div class="p-layout-topbar clearfix" :style="topBarColor">
    <div class="p-layout-name" :class="{'sider-mini': isCollapse}">
      <router-link class="full" to="/" v-if="!isCollapse">Admin 系统</router-link>
      <span class="mini" v-else>A</span>
    </div>
    <div class="p-layout-collapse" @click="toggleSider">
      <i class="el-icon-s-fold"></i>
    </div>
    <div class="p-layout-nav">
      <error-log></error-log>
      <el-tooltip class="item" content="更换主题" placement="left">
        <theme @change="themeChange"></theme>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import errorLog from '@/components/Errorlog/errorLog.vue';
import theme from '@/components/ThemeChalk/index.vue';
import { setSession, getSession } from '@/utils/auth.js';
export default {
  name: 'Header',
  data () {
    return {};
  },
  components: {
    errorLog,
    theme
  },
  computed: {
    ...mapGetters(['isCollapse', 'logs', 'theme']),
    topBarColor () {
      return {
        background: this.theme
      };
    }
  },
  methods: {
    toggleSider () {
      this.$store.dispatch('header/collapseEnter');
    },
    themeChange (val) {
      setSession('theme', val);
      this.$store.dispatch('setting/changeSetting', {
        key: 'theme',
        value: val
      });
    }
    // async logout() {
    //   await this.$store.dispatch('user/logout')
    //   this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    // }
  }
};
</script>
