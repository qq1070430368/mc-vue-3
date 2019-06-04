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
      <el-row :gutter="15" type="flex">
         <el-col>
            <error-log></error-log>
         </el-col>
          <el-col>
            <error-log></error-log>
         </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import errorLog from '@/components/Errorlog/errorLog.vue';

export default {
  name: 'Header',
  data () {
    return {};
  },
  components: {
    errorLog
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
      this.$store.dispatch('setting/collapseEnter');
    }
    // async logout() {
    //   await this.$store.dispatch('user/logout')
    //   this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    // }
  }
};
</script>
