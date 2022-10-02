import dayjs from 'dayjs'

export default {
  namespaced: true,
  state: {
    startTime: dayjs().startOf('month').format('YYYY-MM-DD HH:mm:ss'),
    endTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
  },
  mutations: {

  },
  actions: {

  }
}
