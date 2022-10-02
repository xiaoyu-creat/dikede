<template>
  <div class="partner-node-collect">
    <div class="head">
      <div class="title">合作商点位数Top5</div>
      <svg-icon icon-class="gengduo" style="width: 16px; height: 16px;" />
    </div>
    <div class="body">
      <el-row>
        <el-col :span="17">
          <div class="chart">图片</div>
        </el-col>
        <el-col :span="7">
          <div class="collect">
            <div class="count">16</div>
            <div class="name">点位数</div>
            <div class="count count2">5</div>
            <div class="name">合作商数</div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.partner-node-collect{
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: calc(40vh - 48px);
  min-height: 353px;
  background: #fff;
  border-radius: 20px;
  padding: 20px;
  .head{
    display: flex;
    .title{
      flex: 1;
      font-size: 16px;
      font-weight: 600;
      color: #333;
    }
  }
  .body{
    flex: 1;
    margin-top: 30px;
    .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
    padding-left: 10px;
    padding-right: 10px;
    float: left;
    .chart{
      padding-top: 16px;
    }
    .collect{
      width: 154px;
      height: 230px;
      padding-top: 47px;
      padding-left: 38px;
      background-color: #f8f8f9;
      background-size: 50% 50%;
      background-repeat: no-repeat;
      .count{
        height: 33px;
        font-size: 24px;
        font-family: PingFangSC-Semibold,PingFang SC;
        font-weight: 600;
        color: #072074;
        line-height: 33px;
      }
      .name{
        height: 17px;
        margin-top: 6px;
        font-size: 12px;
        font-weight: 400;
        color: #000412;
        line-height: 17px;
      }
      .count2{
        margin-top: 20px;
      }
    }
  }
  }
}
</style>
