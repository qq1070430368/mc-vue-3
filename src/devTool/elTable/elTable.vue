<template>
  <el-scrollbar class="el-scroll-bar b-white">
    <div class="p-tables el-height-full">
      <!-- {{data | formatDate}} -->
      <div class="mc-tab-current">
        <el-tabs @tab-click="handleClick" value="first">
        <el-tab-pane label="用户管理" name="first"></el-tab-pane>
        <el-tab-pane label="配置管理" name="second"></el-tab-pane>
        <el-tab-pane label="角色管理" name="third"></el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
      </el-tabs>
      </div>
     <div class="mc-tables-component">
      <Table
        ref="table"
        v-loading="false"
        element-loading-background="rgba(255, 255, 255, 1)"
        element-loading-text="正在加载中···"
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
  </el-scrollbar>
</template>

<script>
// @ is an alias to /src
import Table from '@/components/Table/table.vue';
import waves from '@/directives/waves'; // waves directive
// import Title from '@/components/Titlebar/index.vue'
export default {
  name: 'tables',
  data () {
    return {
      data: new Date(),
      rowTable: [
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'address',
          label: '家庭住址',
          show: true,
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
          prop: 'date',
          label: '日期'
        },
        {
          prop: 'score',
          label: '得分',
          render: (h, params) => {
            return h('span', {
              domProps: {
                innerHTML: this.$options.filters.col(params)
              }
            });
          }
        },
        {
          prop: '',
          label: '操作',
          render: (h, params) => {
            return h('div', [
              h('el-button', {
                domProps: {
                  innerHTML: '查看'
                },
                props: {
                  type: 'primary',
                  size: 'small'
                },
                // waves
                on: {
                  click: () => {
                    // this.showDetails(params/.row);
                  }
                }
              }),
              h('el-button', {
                domProps: {
                  innerHTML: '删除'
                },
                props: {
                  type: 'danger',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.showDetails(params.row);
                  }
                }
              })
            ]);
          }
        }
      ],
      pigi: {}
    };
  },
  filters: {
    col (va) {
      return '111';
    }
  },
  computed: {
    rowHeader () {
      return this.rowTable;
    }
  },
  components: {
    Table
  },
  methods: {
    showDetails (row) {
      alert(row.score);
      // 查看详情的方法
    },
    handleSelectionChange (row) {
    },
    handleClick (row, value) {
    },
    pageChange (va) {}
  },
  directives: {
    waves
  },
  created () {
    this.tableData = [
      {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀',
        score: 80
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        score: 88
      },
      {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        score: 83
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        score: 85
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        score: 88
      },
      {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        score: 83
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        score: 85
      }
    ];
    this.pigi = {
      currentPage: 1,
      pageSize: 6,
      total: 6
    };

    // this.rowHeader = th/is.rowHeader.filter(item => !item.show);
  }
};
</script>
<style lang="scss" scoped>
.p-tables {
  // padding: 20px;
}
</style>
