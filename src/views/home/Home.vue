<template>
  <el-scrollbar class="el-scroll-bar">
    <div class="home-lunch">
      <el-row :gutter="20" class="panel-group">
        <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
          <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
            <div class="card-panel-icon-wrapper icon-people">
              <i class="iconfont icon-chengshi"></i>
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">New Visits</div>
              <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num"/>
            </div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
          <div class="card-panel" @click="handleSetLineChartData('messages')">
            <div class="card-panel-icon-wrapper icon-message">
              <i class="iconfont icon-chengshi"></i>
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">Messages</div>
              <count-to :start-val="0" :end-val="81212" :duration="3000" class="card-panel-num"/>
            </div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
          <div class="card-panel" @click="handleSetLineChartData('purchases')">
            <div class="card-panel-icon-wrapper icon-money">
              <i class="iconfont icon-chengshi"></i>
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">Purchases</div>
              <count-to :start-val="0" :end-val="9280" :duration="3200" class="card-panel-num"/>
            </div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
          <div class="card-panel" @click="handleSetLineChartData('shoppings')">
            <div class="card-panel-icon-wrapper icon-shopping">
              <i class="iconfont icon-chengshi"></i>
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">Shoppings</div>
              <count-to :start-val="0" :end-val="13600" :duration="3600" class="card-panel-num"/>
            </div>
          </div>
        </el-col>
      </el-row>
      <!-- 折线图 -->
      <el-row class="home-line-chat bg-white box-shadow">
        <el-col :lg="24">
          <e-line-chart :chart-data="lineChartData"></e-line-chart>
        </el-col>
      </el-row>
      <!-- 柱状图 -->
      <el-row class="home-line-chat bg-white box-shadow" style="margin-bottom: 0px">
        <el-col :lg="24">
          <e-bar-chart :chart-data="lineChartData"></e-bar-chart>
        </el-col>
      </el-row>
    </div>
  </el-scrollbar>
</template>

<script>
import CountTo from 'vue-count-to';
import eLineChart from './eLineChart.vue';
import eBarChart from './eBarChart.vue';
export default {
  data () {
    return {
      lineChartData: {
        newVisitis: {
          expectedData: [100, 120, 161, 134, 105, 160, 165],
          actualData: [120, 82, 91, 154, 162, 140, 145],
          actualData1: [90, 42, 91, 154, 62, 140, 45]
        }
      }
    };
  },
  components: {
    CountTo,
    eLineChart,
    eBarChart
  },
  methods: {
    handleSetLineChartData (type) {
      this.$emit('handleSetLineChartData', type);
    }
  }
};
</script>

<style lang="scss" scoped>
.home-lunch {
  position: relative;
  height: calc(100% - 25px);
}
.panel-group {
  .card-panel-col {
    margin-bottom: 15px;
  }
  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);
    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }
      .icon-people {
        background: #40c9c6;
      }
      .icon-message {
        background: #36a3f7;
      }
      .icon-money {
        background: #f4516c;
      }
      .icon-shopping {
        background: #34bfa3;
      }
    }
    .icon-people {
      color: #40c9c6;
    }
    .icon-message {
      color: #36a3f7;
    }
    .icon-money {
      color: #f4516c;
    }
    .icon-shopping {
      color: #34bfa3;
    }
    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
      .iconfont {
        font-size: 48px;
      }
    }
    .card-panel-icon {
      float: left;
      font-size: 48px;
    }
    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;
      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }
      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}
</style>
