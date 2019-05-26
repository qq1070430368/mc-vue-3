<template>
  <div class="p-department-container el-height-full">
    <el-row :gutter="15" class="el-height-full">
      <el-col :xs="12" :sm="12" :lg="6" class="el-height-full p-fixed-width">
          <!-- <div class="title">
            <h3>部门管理</h3>
          </div> -->
        <div
          class="card-panel b-white el-height-full"
          @click="handleSetLineChartData('newVisitis')"
        >
        
          <el-scrollbar class="el-scroll-bar">
            <div class="a" style="margin-top: 0px;">
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
              <h1>测试去</h1>
            </div>
          </el-scrollbar>
        </div>
      </el-col>
      <el-col :xs="6" :sm="6" :lg="24" class="card-panel-col el-height-full p-adult-width">
        <div
          class="card-panel b-white el-height-full"
          @click="handleSetLineChartData('messages')"
        >详细信息</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'echarts'
};
</script>
<style lang="scss" scoped>
.p-department-container {
  .el-scroll-bar {
    // height: calc(100% - 55px);
  }
  .card-panel {
    position: relative;
  }
  .p-fixed-width {
    width: 300px !important;
  }
  .p-adult-width {
    width: calc(100% - 300px);
  }
  .title {
    // position: absolute;
    // width: 97%;
    background: #fff;
    z-index: 99;
  }
}
</style>
