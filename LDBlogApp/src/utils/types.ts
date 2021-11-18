import { Method } from "axios";

export interface IHttpResponse<T=Array<any>> {
    data: T,
    message:string,
    success: boolean
}
export interface IHttpConfig {
    url:string,
    method?: Method,
    data?:any,
    params?:any,
    [key:string]:any,

}