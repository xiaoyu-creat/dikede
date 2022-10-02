<template>
  <div class="sale-data">
    <div class="header">
      <div class="title">销售数据
        <span class="sub-title">{{ begTime }} ~ {{ endTime }}</span>
      </div>
      <div class="week-month-year">
        <div class="item is-checked" @click="getAmountCollect">周</div>
        <div class="item " @click="getAmountCollect">年</div>
        <div class="item " @click="getAmountCollect">月</div>
        <!-- <button class="item is-checked" @click="getAmountCollect">周</button> -->
        <!-- <button class="item">年</button> -->
        <!-- <button class="item">月</button> -->
      </div>
    </div>
    <div class="charts">
      <div ref="chart" class="chart" :style="{ float: 'left', width: '50%', height: '278px'}">1</div>
      <div ref="chart2" class="chart" :style="{ float: 'left', width: '50%', height: '278px'}">2</div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import { getAmountCollect } from '@/api'
export default {
  data() {
    return {
      begTime: this.dayjs(this.$store.getters.startTime).format('YYYY.MM.DD'),
      endTime: this.dayjs(this.$store.getters.endTime).format('YYYY.MM.DD'),
      echartsDate: {}
    }
  },
  mounted() {
    this.initEcharts()
    this.initEchart()
    // this.getAmountCollect()
  },
  methods: {
    initEcharts() {
      const option = {
        color: ['#ff5757'],
        title: {
          show: true,
          left: 'center',
          text: '销售额趋势图',
          top: 5,
          textStyle: {
            color: '#000',
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['星期一', '星期二', '星期三', '星期四', '星期五']
        },
        yAxis: {
          name: '单位：元',
          type: 'value',
          nameTextStyle: {
            color: '#9d9d9d'
          },
          axisLabel: {
            color: '#9d9d9d'
          }
        },
        series: [
          {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            data: [5500, 3000, 4800, 2000, 0],
            smooth: true,
            areaStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: '#fecbcb' // 0% 处的颜色
                  }, {
                    offset: 1, color: '#fff' // 100% 处的颜色
                  }],
                  global: false // 缺省为 false
                }
              }
            }
          }
        ]
      }
      // const option2 = {
      //   color: ['#ff5757'],
      //   xAxis: {
      //     type: 'category',
      //     boundaryGap: false,
      //     data: this.echartsDate.xAxis,
      //     axisLine: {
      //       lineStyle: {
      //         color: '#9d9d9d'
      //       },
      //       axisLabel: {
      //         color: '#999999'
      //       }
      //     }
      //   },
      //   yAxis: {
      //     type: 'value',
      //     name: '单位：元',
      //     nameTextStyle: {
      //       color: '#9d9d9d'
      //     },
      //     axisLabel: {
      //       color: '#9d9d9d'
      //     }
      //   },
      //   series: [
      //     {
      //       data: this.echartsDate.series,
      //       type: 'line',
      //       smooth: true,
      //       areaStyle: {
      //         normal: {
      //           color: {
      //             type: 'linear',
      //             x: 0,
      //             y: 0,
      //             x2: 0,
      //             y2: 1,
      //             colorStops: [{
      //               offset: 0, color: '#fecbcb' // 0% 处的颜色
      //             }, {
      //               offset: 1, color: '#fff' // 100% 处的颜色
      //             }],
      //             global: false // 缺省为 false
      //           }
      //         }
      //       }
      //     }
      //   ],
      //   grid: {
      //     left: '18%',
      //     bottom: '8%',
      //     right: '6%'
      //   },
      //   title: {
      //     show: true,
      //     text: '销售额趋势图',
      //     left: 'center',
      //     top: 5,
      //     textStyle: {
      //       color: '#000',
      //       fontSize: 14
      //     }
      //   }
      // }
      const myChart = echarts.init(this.$refs.chart)// 图标初始化
      myChart.setOption(option)// 渲染页面
      // 随着屏幕大小调节图表
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    },
    initEchart() {
      const option = {
        title: {
          show: true,
          left: 'center',
          text: '销售额分布',
          top: 5,
          textStyle: {
            color: '#000',
            fontSize: 14
          }
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          name: '单位：元',
          type: 'value'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }
        ]
      }
      const myChart = echarts.init(this.$refs.chart2)// 图标初始化
      myChart.setOption(option)// 渲染页面
      // 随着屏幕大小调节图表
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    },
    // 获取销售额统计
    async getAmountCollect() {
      const begTime = this.dayjs(this.$store.getters.startTime).format('YYYY-MM-DD')
      const endTime = this.dayjs(this.$store.getters.endTime).format('YYYY-MM-DD')
      const { data } = await getAmountCollect(2, begTime, endTime)
      this.echartsDate = data
      console.log(this.echartsDate)
    }
  }
}
</script>

<style lang="scss" scoped>
.sale-data{
        height: calc(40vh - 68px);
        min-height: 352px;
        margin-top: 20px;
        background: #fff;
        border-radius: 20px;
        padding:20px;
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
        .week-month-year{
          display: flex;
          justify-content: center;
          width: 129px;
          height: 34px;
          background: rgba(233,243,255,.37);
          border-radius: 10px;
          align-items: center;
          .item{
            width: 37px;
            height: 25px;
            line-height: 25px;
            text-align: center;
            font-size: 14px;
            color: #9ca3b4;
            cursor: pointer;
            border: none;
         }
         .is-checked{
            background: #fff;
            box-shadow: 0 0 4px 0 rgb(0 0 0 / 11%);
            border-radius: 7px;
            font-weight: 600;
            color: #333;

         }
        }
        }
        .charts{
            .chart{
                position: relative;
                display: inline-block;
                width: 50%;
                height: 100%;
            }
        }
      }
</style>
