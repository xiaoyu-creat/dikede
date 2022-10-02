<template>
  <div class="dashboard">
    <div class="app-container">
      <el-row class="top ">
        <el-col :span="18" class="left">
          <el-row>
            <el-col :span="13">
              <order-form />
            </el-col>
            <el-col :span="11">
              <sale-form />
            </el-col>
          </el-row>
          <sale-data />
        </el-col>
        <el-col :span="6" class="right">
          <goods-hot-list />
        </el-col>
      </el-row>
      <el-row class="bottom">
        <el-col :span="14" class="left">
          <partern-digits />
        </el-col>
        <el-col :span="10" class="right">
          <abnormal-equipment />
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
import OrderForm from './components/orderForm.vue'
import SaleForm from './components/saleForm.vue'
import GoodsHotList from './components/goodsHotList.vue'
import SaleData from './components/saleData.vue'
import ParternDigits from './components/parternDigits.vue'
import AbnormalEquipment from './components/abnormalEquipment.vue'

import { mapGetters } from 'vuex'
export default {
  name: 'Dashboard',
  components: { OrderForm, SaleForm, GoodsHotList, SaleData, ParternDigits, AbnormalEquipment },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  width: 100%;
  &-container {
    margin: 20px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
  .top{
    background-color: pink;
    min-height: 540px;
    overflow: hidden;
  .left{

    }
  .right{
      padding-left: 10px;
      padding-right: 10px;
    }
  }
  .bottom{
    margin-top: 20px;
    background-color: aqua;
    min-height: 200px;
    .left{

    }
    .right{
      padding-left: 10px;
      padding-right: 10px;
    }
  }

}
</style>
