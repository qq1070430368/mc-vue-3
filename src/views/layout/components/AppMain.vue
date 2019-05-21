<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <!-- <el-scrollbar wrap-class="scrollbar-wrapper"> -->
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
  min-height: calc(100% - 114px);
  width: 100%;
  margin-top: 15px;
  // position: absolute;
  // overflow: hidden;
  // margin-top: 50px;
  // top: 117px;
}
</style>
