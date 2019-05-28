<template>
  <div class="mc-middle-layer el-height-full">
    <el-row :gutter="15" class="el-height-full">
      <el-col :xs="12" :sm="12" :lg="6" class="el-height-full mc-middle-left">
        <div class="b-white el-height-full">
          <el-scrollbar class="el-scroll-bar">
            <div class="mc-scroll-left" style="margin-top: 0px;">
              <h1>测试去</h1>
              <h1>测试去</h1>
            </div>
          </el-scrollbar>
        </div>
      </el-col>
      <el-col :xs="6" :sm="6" :lg="24" class="el-height-full mc-middle-right">
        <div class="b-white el-height-full">详细信息</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'middle',
  data () {
    return {};
  },
  methods: {
    showDetails (row) {
      alert(row.score);
      // 查看详情的方法
    }
  }
};
</script>
