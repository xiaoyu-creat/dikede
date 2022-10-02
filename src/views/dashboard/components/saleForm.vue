<template>
  <div class="sale-form grid-content bg-purple-light">
    <div class="header">
      <div class="title">销售统计
        <span class="sub-title">{{ begTime }} ~ {{ endTime }}</span>
      </div>
    </div>
    <div class="boby">
      <div class="stats">
        <div class="item">
          <div class="num color3 text-shadow2">{{ count }}</div>
          <div class="text color4">
            订单量（个）
          </div>
        </div>
      </div>
      <div class="stats">
        <div class="item">
          <div class="num color3 text-shadow2">{{ amount }}</div>
          <div class="text color4">
            销售额（万元）
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import store from '@/store'
import { getOrderCount, getOrderAmount } from '@/api'
export default {
  data() {
    return {
      begTime: this.dayjs(store.getters.startTime).format('YYYY.MM.DD'),
      endTime: this.dayjs(store.getters.endTime).format('YYYY.MM.DD'),
      count: '',
      amount: ''
    }
  },
  mounted() {
    this.getSaleForm()
  },
  methods: {
    // 获取销售统计
    async getSaleForm() {
      const res = await getOrderCount(store.getters.startTime, store.getters.endTime)
      this.count = res.data
      const { data } = await getOrderAmount(store.getters.startTime, store.getters.endTime)
      this.amount = parseFloat(data / 10000).toFixed(2)
    }
  }
}
</script>

<style lang="scss" scoped>
.sale-form{
        padding-left: 10px;
        padding-right: 10px;
        padding: 20px;
        background: #fbefe8;
        display: flex;
        flex-direction: column;
        min-height: 166px;
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
        background-image: url('~@/assets/common/pinkpig.png');//背景图片
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
          .text-shadow2{
            text-shadow: 2px 4px 7px rgb(255 99 85 / 50%);
          }
            .color3{
                color: #ff5757;
            }
            .color4{
                color:#de9690
            }
        }
      }
}
</style>
