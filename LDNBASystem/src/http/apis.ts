import { AxiosResponse } from 'axios'
import axios from './request'
export const test = (data?:any):Promise<AxiosResponse<any, any>>=> {
    return axios({
        url: "/getPlayerTotal",
        method: "get",
        data,
    })
}