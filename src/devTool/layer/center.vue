<template>
  <div class="p-tables el-height-full b-white">
     <el-table v-tableHeight
      height="100%"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Table from '@/components/Table/table.vue';
import tableHeight from '@/directives/el-table';
export default {
  name: 'tables',
  data () {
    return {
      rowHeader: [
        {
          prop: 'date',
          label: '日期'
        },
        {
          prop: 'name',
          label: '名字',
          render: (h, params) => {
            return h('span', params.row.sex === 0 ? '男' : '女');
          }
        },
        {
          prop: 'address',
          label: '家庭住址',
          render: (h, params) => {
            return h('el-button', {
              domProps: {
                innerHTML: params.row.address
              },
              props: {
                type: 'text'
              },
              on: {
                click: () => {
                  this.showDetails(params.row);
                }
              }
            });
          }
        },
        {
          prop: 'score',
          label: '得分'
        }
      ]
    };
  },
  components: {
    Table
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
  created () {
    console.log(params);
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
