<template>
    <div class="mc-title-bar">
       <el-row type="flex" justify="space-between" align="middle">
          <el-col class="text-left">
              <span class="mc-title-text" v-if="title">{{title}}</span>
              <slot name="actionBtn" v-else></slot>
          </el-col>
          <el-col class="text-right">
              <div class="mc-btn-group">
                  <!-- <el-button type="primary" size="medium">测试1</el-button> -->
                  <slot name="btnGroup"></slot>
              </div>
          </el-col>
       </el-row>
    </div>
</template>
<script>
export default {
  name: 'title-bar',
  props: {
    title: {
      type: String
    }
  },
  beforeDestroy () {
    this.title = null;
  }
};
</script>
<style lang="scss" scoped>
.mc-title-bar{
    // border-bottom: 1px solid #f6f6f6;
    padding: 15px 15px 0 15px;
    .mc-title-text{
        font-size: 20px;
        color: #333874
    }
}
</style>
