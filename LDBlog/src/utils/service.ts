/* eslint-disable no-unused-vars */
import axios from 'axios'
import {Dev_BaseUrl,Pro_BaseUrl} from "../config"
import Mask from "../components/Mask/Mask"
let baseUrl = "";
const env = process.env.NODE_ENV;
console.log(`env`, env)
if(env === "development"){
    baseUrl = Dev_BaseUrl
}else if(env === "production"){
  baseUrl = Pro_BaseUrl
}
const service = axios.create({
  baseURL: baseUrl, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})
// request interceptor
service.interceptors.request.use(
  config => {
    Mask.show()
    return config;
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    Mask.hidden()
    if (!res.success) {
      alert(res.error)
      return res
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    alert(error.message)
    return Promise.reject(error)
  }
)

export default service
