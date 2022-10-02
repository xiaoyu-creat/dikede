<template>
  <div class="order-form grid-content bg-purple">
    <div class="header">
      <div class="title">工单统计
        <span class="sub-title">{{ begTime }} ~ {{ endTime }}</span>
      </div>
    </div>
    <div class="boby">
      <div class="stats">
        <div class="item">
          <div class="num color1 text-shadow">{{ total }}</div>
          <div class="text color2">
            工单总数（个）
          </div>
        </div>
      </div>
      <div class="stats">
        <div class="item">
          <div class="num color1 text-shadow">{{ completedTotal }}</div>
          <div class="text color2">
            完成工单（个）
          </div>
        </div>
      </div>
      <div class="stats">
        <div class="item">
          <div class="num color1 text-shadow">{{ progressTotal }}</div>
          <div class="text color2">
            进行工单（个）
          </div>
        </div>
      </div>
      <div class="stats cancel-order">
        <div class="item">
          <div class="num color1 text-shadow">{{ cancelTotal }}</div>
          <div class="text color2">
            取消工单（个）
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getOrderForm } from '@/api'
import store from '@/store'
export default {
  name: 'OrderForm',
  data() {
    return {
      begTime: this.dayjs(store.getters.startTime).format('YYYY.MM.DD'),
      endTime: this.dayjs(store.getters.endTime).format('YYYY.MM.DD'),
      total: '', // 工单总数
      completedTotal: '', // 完成工单
      progressTotal: '', // 进行工单
      cancelTotal: ''// 取消工单
    }
  },
  mounted() {
    this.getOrderForm()
  },
  methods: {
    // 获取工单汇总
    async getOrderForm() {
      const { data } = await getOrderForm(store.getters.startTime, store.getters.endTime)
      this.total = data[0].total + data[1].total
      this.completedTotal = data[0].completedTotal + data[1].completedTotal
      this.progressTotal = data[0].progressTotal + data[1].progressTotal
      this.cancelTotal = data[0].cancelTotal + data[1].cancelTotal
    }
  }
}
</script>

<style lang="scss" scoped>
.order-form{
      min-height: 166px;
      padding-left: 10px;
      margin-right: 10px;
      padding: 20px;
      background: #e9f3ff;
      background-image: url('~@/assets/common/circle.png');//背景图片
      background-repeat: no-repeat,no-repeat;
      background-position: left top;
      border-radius: 20px;
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
      .boby{
        flex: 1;
        display: flex;
        min-height: 130px;
        border-radius: 20px;
        background-image: url('~@/assets/common/task.png');//背景图片
        background-repeat: no-repeat,no-repeat;
        background-position: right 2% bottom 0%;
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
          .text-shadow{
            text-shadow: 2px 4px 7px rgb(85 132 255 / 50%);
        }
          .color1{
            color: #072074;
        }
         .color2{
            color: #91a7dc;
        }
      }
    }
}
</style>
