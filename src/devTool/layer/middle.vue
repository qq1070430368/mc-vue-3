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
          <div class="b-white mc-middle-top">详细信息</div>
            
          <div class="b-white mc-middle-bottom">
             <el-scrollbar class="el-scroll-bar">
            <Table
              v-loading="false"
              element-loading-background="rgba(255, 255, 255, 1)"
              :data="tableData"
              :row-header="rowHeader"
              :showSelection="false"
              @pageChange="pageChange"
              class="tables-component el-height-full"
            ></Table>
               </el-scrollbar>
          </div>
    
      </el-col>
       
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Table from '@/components/Table/table.vue';
export default {
  name: 'middle',
  data () {
    return {
      rowHeader: [
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
          label: '得分'
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
    },
    pageChange (va) {}
  },
  mounted () {
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
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        score: 85
      }
    ];
  }
};
</script>
