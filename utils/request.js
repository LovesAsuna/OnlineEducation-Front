import axios from 'axios'
import {MessageBox, Message} from "element-ui"
import cookie from "js-cookie";

const service = axios.create({
  baseURL: 'http://localhost:9001',
  timeout: 20000
})

service.interceptors.request.use(
  config => {
    if (cookie.get('token')) {
      config.headers['token'] = cookie.get('token')
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    if (response.data.code === 28004) {
      console.log("response.data.resultCode是28004")
      window.location.href = "/login"
    } else {
      if (response.data.code !== 20000) {
        if (response.data.code !== 25000) {
          Message({
            message: response.data.message || 'error',
            type: 'error',
            duration: 5 * 1000
          })
        }
      } else {
        return response;
      }
    }
  },
  error => {
    return Promise.reject(error.response)   // 返回接口返回的错误信息
  });

export default service
