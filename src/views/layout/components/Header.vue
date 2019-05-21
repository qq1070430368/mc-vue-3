<template>
  <div class="p-layout-topbar clearfix">
    <div class="p-layout-name" :class="{'sider-mini': isCollapse}">
      <router-link class="full" to="/" v-if="!isCollapse">Admin 系统</router-link>
      <span class="mini" v-else>A</span>
    </div>
    <div class="p-layout-collapse" @click="toggleSider">
      <i class="el-icon-s-fold"></i>
    </div>
    <div class="p-layout-nav">
      <!-- <el-dropdown class="is-user">
      <img src="../assets/avatar.jpg" class="p-layout-avatar" alt="">-->
      <!-- <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
      </el-dropdown>-->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Header',
  data () {
    return {
    };
  },
  components: {
  },
  computed: {
    ...mapGetters(['isCollapse'])
  },
  methods: {
    toggleSider () {
      this.$store.dispatch('header/collapseEnter');
    }
    // async logout() {
    //   await this.$store.dispatch('user/logout')
    //   this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    // }
  }
};
</script>

<style lang="scss" scoped>

</style>
