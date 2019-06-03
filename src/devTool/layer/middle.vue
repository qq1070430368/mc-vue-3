<template>
  <div class="mc-middle-layer el-height-full">
    <el-row :gutter="15" class="el-height-full">
      <el-col :xs="12" :sm="12" :lg="6" class="el-height-full mc-middle-left">
        <div class="b-white el-height-full">
          <el-scrollbar class="el-scroll-bar">
            <div class="mc-scroll-left" style="margin-top: 0px;">
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

      <el-col :xs="6" :sm="6" :lg="24" class="el-height-full mc-middle-right">
        <div>

        </div>
        <el-scrollbar class="el-scroll-bar bg-white box-shadow">
          <div class="mc-middle-top">
            <Title :title="searchTitle"></Title>
          </div>

          <div class="mc-middle-bottom">
            <Title :title="title">
              <!-- // 如果没有title  则会展示出自定义左侧内容 -->
              <!-- <template v-slot:actionBtn>
                <el-button v-waves type="primary" size="medium">测试1</el-button>
              </template>-->
              <template v-slot:btnGroup>
                <el-button v-waves type="primary" size="medium">测试1</el-button>
                <el-button v-waves type="primary" size="medium">测试2</el-button>
              </template>
            </Title>
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
          </div>
        </el-scrollbar>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Table from '@/components/Table/table.vue';
import Title from '@/components/Titlebar/index.vue';
import waves from '@/directives/waves';
export default {
  name: 'middle',
  data () {
    return {
      title: '测试标题TABLE',
      searchTitle: '测试标题Search',
      multipleTable: {},
      tableData: [],
      pigi: {},
      rowHeader: [
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'address',
          label: '家庭住址',
          show: true,
          showTip: true,
          minWidth: '150px',
          render: (h, params) => {
            return h('el-button', {
              domProps: {
                innerHTML: params.row.address
              },
              class: {
                'el-link-text': true
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
          prop: 'agennd',
          label: '描述',
          showTip: true
        },
        {
          prop: '',
          label: '操作',
          width: '180px',
          render: (h, params) => {
            return h('div', [
              h('el-button', {
                domProps: {
                  innerHTML: '查看'
                },
                props: {
                  type: 'primary',
                  size: 'mini'
                },
                style: {
                  // v-if 代替的方式
                  display: params.row.address ? 'inline-block' : 'block'
                },
                // waves
                on: {
                  click: () => {
                    this.publishList(params.row);
                  }
                }
              }),
              h('el-button', {
                domProps: {
                  innerHTML: '删除'
                },
                props: {
                  type: 'danger',
                  size: 'mini'
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
    Table,
    Title
  },
  directives: {
    waves
  },
  methods: {
    showDetails (row) {
      alert(row.score);
      // 查看详情的方法
    },
    handleSelectionChange (list, ref) {
      this.multipleTable = {
        list,
        ref
      };
    },
    publishList () {
      console.log(this.multipleTable, '选中的翔');
    },
    pageChange (va) {}
  },
  mounted () {
    this.tableData = [
      {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀',
        score: 80,
        agennd: '此人极度危险，需仔细排查'
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄奥术大师多',
        score: 88,
        agennd: '此人极度危险，需仔细排查'
      },
      {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        score: 83,
        agennd: '此人极度危险，需仔细排查'
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        score: 85,
        agennd: '此人极度危险，需仔细排查'
      }
    ];
    this.pigi = {
      currentPage: 1,
      pageSize: 6,
      total: this.tableData.length + 50
    };
  }
};
</script>
