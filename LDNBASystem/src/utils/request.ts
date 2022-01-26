import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import {IHttpResponse,IHttpConfig} from "./types"
import { ElMessage } from 'element-plus'
const codeMessage: Record<number, string> = {
  400: '请求错误',
  401: '用户没有权限。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求是不存在的记录',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除',
  422: '验证错误',
  500: '服务器发生错误',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
}
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout:2000
})
service.interceptors.request.use((config:AxiosRequestConfig)=>{
  return config
},(err:AxiosError)=>{
  return Promise.resolve(err || "出错啦")
})
service.interceptors.response.use((resp:AxiosResponse<IHttpResponse>)=>{
  if(!resp || resp.status>=400){
    if(resp && resp.data){
      ElMessage.error(resp.data.message)
    }else{
      ElMessage.error("请求出错啦！！")
    }
    return {
      success: false,
      data: null,
      message: ""
    }
  }else{
    return resp.data;
  }
},(error:AxiosError)=>{
  return Promise.reject(error)
})
const request = (config:IHttpConfig)=>{
  const {url,method="post",data,params} =config
  return new Promise<IHttpResponse>(async (resolve,reject)=>{
      const resp:any= await service({url,method,data,params})
      if(resp && resp.success){
          resolve(resp)
      }else{
          reject(resp.error)
      }
  })
}
export default request