<template>
  <div class="hot-top">
    <div class="header">
      <div class="title">商品热榜
        <span class="sub-title">{{ begTime }} ~ {{ endTime }}</span>
      </div>
    </div>
    <div class="body">
      <el-row v-for="(item,index) in hotList" :key="index">
        <el-col :span="5">
          <div class="tops top1" :class="{top1:index===0,top2:index===1,top3:index===2,biaoqian:index>2}">{{ index+1 }}</div>
        </el-col>
        <el-col :span="13">
          <div class="sku-name">
            {{ item.skuName }}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="count">
            {{ item.count }}单
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { getHotList } from '@/api'
export default {
  data() {
    return {
      begTime: this.dayjs(this.$store.getters.startTime).format('YYYY.MM.DD'),
      endTime: this.dayjs(this.$store.getters.endTime).format('YYYY.MM.DD'),
      hotList: [],
      active: false
    }
  },
  mounted() {
    this.getHotList()
  },
  methods: {
    async getHotList() {
      const start = this.dayjs(this.$store.getters.startTime).format('YYYY-MM-DD')
      const end = this.dayjs(this.$store.getters.endTime).format('YYYY-MM-DD')
      const { data } = await getHotList(10, start, end)
      this.hotList = data
    }
  }
}
</script>

<style lang="scss" scoped>
.hot-top{
      padding: 20px;
      min-height: 558px;
      flex-direction: column;
      height: calc(60vh - 72px);
      background: #fff;
      border-radius: 20px;
      .body{
      flex-direction: column;
      justify-content: space-between;
      margin-top: 20px;
      .el-row {
      margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
      }
    }
  }
  .header{
        display: flex;
        .title{
          align-items: center;
          flex: 1;
          font-size: 16px;
          font-weight: 600;
          color: #333;
          .sub-title{
            margin-left: 10px;
            font-size: 12px;
            font-weight: 400;
            color: #999;
          }
        }
  }
  .stats{
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          .num{
            height: 50px;
            font-size: 36px;
            font-weight: 600;
            line-height: 50px;
          }
          .text{
            height: 17px;
            margin-top: 3px;
            font-size: 12px;
            font-weight: 400;
            line-height: 17px;
          }
  }
  .tops{
        text-align: center;
        font-size: 12px;
      }
  .top1{
    width: 21px;
    height: 20px;
    background: url('~@/assets/common/jiangbei.png');
    background-repeat: no-repeat,no-repeat;
    color: #8e5900;
  }
  .top2{
    width: 21px;
    height: 20px;
    background: url('~@/assets/common/jiangbei2.png');
    background-repeat: no-repeat,no-repeat;
    color: #494949;
  }
  .top3{
    width: 21px;
    height: 20px;
    background: url('~@/assets/common/jiangbei3.png');
    background-repeat: no-repeat,no-repeat;
    color: #cf6d3d;
  }
  .biaoqian{
    width: 16px;
    height: 20px;
    background: url('~@/assets/common/biaoqian.png');
    background-repeat: no-repeat,no-repeat;
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    color: #e9b499;
    line-height: 14px;
  }
  .sku-name{
        height: 20px;
        font-size: 14px;
        font-weight: 500;
        color: #333;
        line-height: 20px;
        overflow: hidden;
        white-space: nowrap;
  }
  .count{
        height: 20px;
        font-size: 14px;
        font-weight: 400;
        color: #737589;
        line-height: 20px;
        text-align: right;
  }
}
</style>
