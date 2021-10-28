import service from "./service"
import { Method } from "axios"
interface IConfig {
    url:string,
    method?: Method,
    data?:any,
    params?:any,
    [key:string]:any,

}
interface IResp {
    data:any,
    success: boolean,
    message:string
}
const request = (config:IConfig)=>{
    const {url,method="post",data,params} =config
    return new Promise<IResp>(async (resolve,reject)=>{
        const resp:any= await service({url,method,data,params})
        if(resp && resp.success){
            resolve(resp)
        }else{
            reject(resp.error)
        }
    })
}
export default request