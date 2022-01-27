import request from '@/utils/request'

export default {
  createOrders(courseId) {
    return request({
      url: `/eduorder/order/createOrder/${courseId}`,
      method: 'POST'
    })
  },
  getOrdersInfo(id) {
    return request({
      url: `/eduorder/order/getOrderInfo/${id}`,
      method: 'GET'
    })
  },
  createNative(orderNo) {
    return request({
      url: `/eduorder/paylog/createNative/${orderNo}`,
      method: 'GET'
    })
  },
  queryPayStatus(orderNo) {
    return request({
      url: `/eduorder/paylog/queryPayStatus/${orderNo}`,
      method: 'GET'
    })
  }
}
