// 实现对axios的二次封装
import router from '@/router'
import store from '@/store'
import axios from 'axios'
const timeout = 3600

// 对比时间是否超时
function IsCheckTimeout() {
  const currentTime = new Date().getTime() // 时间2  接口真正调用时间
  const timeStamp = (currentTime - store.getters.hrsaasTime) / 1000
  return timeStamp > timeout
}

// 通过axios创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 基准地址 api /dev-api
  timeout: 5000 // 超时时间
})

// 统一注入token
service.interceptors.request.use(config => {
  if (store.getters.token) {
    // 时间2 - 时间1 > token 超时时间 --> token登录失败
    if (IsCheckTimeout()) {
      // 超时
      store.dispatch('user/logout')
      router.push('/login')
      return Promise.reject(new Error('token超时'))
    }
    // 如果token存在 注入token
    config.headers['Authorization'] = `${store.getters.token}`
  }
  return config
}, error => {
  return Promise.reject(error)
})

// 请求响应拦截器
// service.interceptors.response.use(response => {
//   // 1.考虑把那些数据抛出去
//   // 2.接口成功 并且业务成功
//   // 3.没有成功 Promise.reject 抛出错误
//   const { message, data, success } = response.data
//   if (success) { // 业务逻辑成功
//     return data
//   }
//   // 业务逻辑失败
//   Message.error(message)
//   return Promise.reject(new Error(message))
// }, error => {
//   console.log(error.response)
//   if (error.response && error.response.statusCode === 401) { // token失效 跳转到登录页面
//     store.dispatch('user/logout')
//     router.push('/login')
//     Message.error('token超时')
//   } else {
//     Message.error(error.message)
//   }
//   return Promise.reject(error)
// })
export default service

