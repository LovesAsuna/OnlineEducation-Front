import request from '@/utils/request'

export default {
  submitLogin(userInfo) {
    return request({
      url: '/educenter/member/login',
      method: 'POST',
      data: userInfo
    })
  },
  getLoginUserInfo() {
    return request({
      url: '/educenter/member/getMemberInfo',
      method: 'GET'
    })
  }
}
