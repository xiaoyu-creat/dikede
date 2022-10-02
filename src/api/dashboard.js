import request from '@/utils/request'

/**
 * 获取当时工单汇总信息
 * @param {String} start 开始时间
 * @param {String} end 结束时间
 * @returns Promise
 */
export const getOrderForm = (start, end) => {
  return request({
    url: `/task-service/task/taskReportInfo/${start}/${end}`
  })
}

/**
 *获取一定时间范围之内的订单总数
 * @param {String} start 开始时间
 * @param {String} end 结束时间
 * @returns Promise
 */
export const getOrderCount = (start, end) => {
  return request({
    url: '/order-service/report/orderCount',
    params: {
      start,
      end
    }
  })
}

/**
 * 获取一定时间范围之内的收入
 * @param {String} start 开始时间
 * @param {String} end 结束时间
 * @returns Promise
 */
export const getOrderAmount = (start, end) => {
  return request({
    url: '/order-service/report/orderAmount',
    params: {
      start,
      end
    }
  })
}

/**
 * 获取销售前几的商品
 * @param {Number} topValue 前几的商品
 * @param {String} start 开始时间
 * @param {String} end 结束时间
 * @returns Promise
 */
export const getHotList = (topValue, start, end) => {
  return request({
    url: `/order-service/report/skuTop/${topValue}/${start}/${end}`
  })
}

/**
 * 获取销售额统计
 * @param {Number} collectType 统计时间类型，1:按日统计，2:按月统计
 * @param {String} start 开始日期
 * @param {String} end 结束日期
 * @returns Promise
 */
export const getAmountCollect = (collectType, start, end) => {
  return request({
    url: `/order-service/report/amountCollect/${collectType}/${start}/${end}`
  })
}
