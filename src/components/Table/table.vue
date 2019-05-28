<template>
  <div class="mc-tables">
    <el-table :data="data" stripe ref="multipleTable" border >
      <el-table-column type="selection" key="selection" width="55" v-if="showSelection"></el-table-column>
      <el-table-column type="index" :label="label" key="index" width="70" v-if="showSort"></el-table-column>
      <el-table-column
        v-for="(col, index) in rowHeader"
        :key="index"
        :prop="col.prop"
        :label="col.label"
      >
        <template slot-scope="scope" >
          <!-- // 使用render 函数自定义内容 -->
          <ex-slot
            v-if="col.render"
            :render="col.render"
            :row="scope.row"
            :index="scope.$index"
            :column="col"
          ></ex-slot>
          <!-- 否则 使用默认的 -->
          <span v-else>{{scope.row[col.prop]}}</span>
        </template>
      </el-table-column>
    </el-table>
     <el-pagination class="mc-pagination"
      background
      hide-on-single-page
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="pigi.currentPage"
      :page-size="pigi.pageNumber"
      layout="total, prev, pager, next"
      :total="pigi.total">
    </el-pagination>
  </div>
</template>
<script>
import exSlot from './ExSlot.js';
export default {
  data () {
    return {
    };
  },
  props: {
    // table 核心数据
    data: {
      type: Array,
      default: () => []
    },
    // 表头数据
    rowHeader: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: () => '序号'
    },
    showSelection: {
      type: Boolean,
      default: true
    },
    showSort: {
      type: Boolean,
      default: true
    },
    pigi: {
      type: Object,
      default: () => {
        return {
          pageNumber: 8,
          currentPage: 1,
          total: 16
        };
      }
    }
  },
  components: {
    exSlot
  },
  methods: {
    handleSizeChange (va) {
      this.$emit('handleSizeChange', va);
    },
    handleCurrentChange (va) {
      this.$emit('pageChange', va);
    }
  }
};
</script>
<style lang="scss" scoped>
.mc-tables{
  position: relative;
  overflow: hidden;
  margin: 15px;
  .mc-pagination{
    text-align: right;
    margin-top: 15px;
    // position: absolut/e;
    // right: 20px;
    // bottom: 0;
  }
}
.el-icon-loading{
    font-size: 50px;
  }
</style>
