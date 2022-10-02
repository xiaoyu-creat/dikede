const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.userInfo.userName,
  hrsaasTime: state => state.user.hrsaasTime,
  startTime: state => state.time.startTime,
  endTime: state => state.time.endTime
}
export default getters
