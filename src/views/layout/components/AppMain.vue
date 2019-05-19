<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <!-- <el-scrollbar native="false" wrap-class="scrollbar-wrapper">   -->
          <router-view/>
        <!-- </el-scrollbar> -->
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    // cachedViews () {
    // //   return this.$store.state.tagsView.cachedViews;
    // },
    // key () {
    // //   return this.$route.fullPath;
    // }
  }
};
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: absolute;
  overflow: hidden;
  margin-top: 50px;
  top: 117px;
}

.fixed-header + .app-main {
  padding-top: 80px;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 117px);
    padding: 20px;
  }

  .fixed-header + .app-main {
    padding-top: 84px;
  }
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
