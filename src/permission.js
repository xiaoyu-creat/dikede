import router from '@/router'
import store from '@/store'
// 判断token是否存在
// 1.如果token存在 判断是否在登录页 是的话就跳转到首页  不是的就next()
// 2.如果token不存在 判断是否在白名单 如果在就留在当前页 如果不在就跳转到登录页
const whiteList = ['/login', '/404']
router.beforeEach((to, from, next) => {
  // console.log(to);
  // console.log(from);
  // next(false)
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
