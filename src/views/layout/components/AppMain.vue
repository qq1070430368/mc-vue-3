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
  width: 100%;
  padding-top: 15px;
  height: calc(100% - 58px);
}
</style>
