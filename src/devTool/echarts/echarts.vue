<template>
  <div class="p-tables el-height-full b-white">
    <div class="mc-tables-component">
      <Table
        ref="table"
        v-loading="false"
        element-loading-background="rgba(255, 255, 255, .95)"
        element-loading-spinner="el-icon-loading"
        :data="tableData"
        :showSort="false"
        :row-header="rowHeader"
        :pigi="pigi"
        @pageChange="pageChange"
        @handleSelectionChange="handleSelectionChange"
        class="el-height-full"
      ></Table>
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Table from '@/components/Table/table.vue';
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
  methods: {
    showDetails (row) {
      alert(row.score);
      // 查看详情的方法
    }
  },
  created () {
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
      }
    ];
  }
};
</script>
<style lang="scss" scoped>
.p-tables {
  .tables-component {
    width: 100%;
  }
}
</style>
