import { loginAPI } from '@/api'

export default ({
  namespaced: true,
  state: {
    token: null,
    userInfo: {},
    hrsaasTime: null
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_REMOVE_TOKEN(state) {
      state.token = null
    },
    SET_USER_INFO(state, userInfo) {
      state.userInfo = userInfo
    },
    REMOVE_USER_INFO(state) {
      state.userInfo = {}
    },
    SET_HRSAAS_TIME(state, hrsaasTime) {
      state.hrsaasTime = hrsaasTime
    }
  },
  actions: {
    async loginAction({ commit }, logindata) {
      const { data } = await loginAPI(logindata)
      const result = { ...data }
      // 发请求
      commit('SET_TOKEN', data.token)
      commit('SET_USER_INFO', result)
      commit('SET_HRSAAS_TIME', new Date().getTime())// 时间1  登录成功接口调用的时间
    },
    logout({ commit }) {
      // 清除token和用户信息
      commit('SET_REMOVE_TOKEN')
      commit('REMOVE_USER_INFO')
    }
  }
})
