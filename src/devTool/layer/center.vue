<template>
  <!-- // 应用了v-tableheight 自适应高度 指令 -->
  <div class="p-tables el-height-full b-white">
    <el-table
      v-tableHeight
      border
      height="100%"
      highlight-current-row
      :header-cell-style="{background:'rgba(242,245,249,1)'}"
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  </div>
</template>

<script>
// @ is an alias to /src
import tableHeight from '@/directives/el-table';
export default {
  name: 'tables',
  data () {
    return {};
  },
  directives: {
    tableHeight
  },
  methods: {
    showDetails (row) {
      alert(row.score);
      // 查看详情的方法
    }
  },
  mounted () {
    this.tableData = [
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普213陀',
        score: 80
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区asdasd金沙江路 1517 弄',
        score: 88
      },
      {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀asdas区金沙江路 1519 弄',
        score: 83
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区奥术大师金沙江路 1516 弄',
        score: 85
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普213陀',
        score: 80
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区asdasd金沙江路 1517 弄',
        score: 88
      },
      {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀asdas区金沙江路 1519 弄',
        score: 83
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区奥术大师金沙江路 1516 弄',
        score: 85
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普213陀',
        score: 80
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区asdasd金沙江路 1517 弄',
        score: 88
      },
      {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀asdas区金沙江路 1519 弄',
        score: 83
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区奥术大师金沙江路 1516 弄',
        score: 85
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普213陀',
        score: 80
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区asdasd金沙江路 1517 弄',
        score: 88
      },
      {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀asdas区金沙江路 1519 弄',
        score: 83
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区奥术大师金沙江路 1516 弄',
        score: 85
      }
    ];
  }
};
</script>
<style lang="scss" scoped>
.p-tables {
  padding: 20px;
  .tables-component {
    width: 100%;
  }
}
</style>
