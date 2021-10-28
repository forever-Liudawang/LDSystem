import service from "./service"
import { Method } from "axios"
interface IConfig {
    url:string,
    method?: Method,
    data:any,
    [key:string]:any
}
const request = (config:IConfig)=>{
    const {url,method="post",data} =config
    return new Promise(async (resolve,reject)=>{
        const resp:any= await service({url,method,data})
        if(resp && resp.success){
            resolve(resp)
        }else{
            reject(resp.error)
        }
    })
}
export default request