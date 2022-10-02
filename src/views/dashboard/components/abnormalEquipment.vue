<template>
  <div class="abnormal-equipment">
    <div class="head">
      <div class="title">异常设备监控</div>
      <svg-icon icon-class="gengduo" style="width: 16px; height: 16px;" />
    </div>
    <div class="body">
      <img src="@/assets/common/empty.png" alt="">
      <span class="text">暂无数据</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.abnormal-equipment{
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
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
      border-style: none;
    }
    .text{
      margin-top: 25px;
      color: #20232a;
      font-size: 14px;
    }
  }
}
</style>
