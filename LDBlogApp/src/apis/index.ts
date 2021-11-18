import request from "../utils/request"
import {IHttpResponse} from "@src/utils/types"
import { AxiosPromise } from "axios"

/**
 * 获取首页文章数据
 * @param data 
 * @returns 
 */
export const getRecommendArticle = async (data:object={}):Promise<IHttpResponse<any[]>>=>{
    return await request({
        url:'/article/getRecommendArticle',
        method: "get"
    })
}
export const getArticleListByCateId = async (data:object={})=>{
    return await request({
        url:'/article/getCateArticle',
        method: "get",
        params:data
    })
}
export const getTags = async (data:object={})=>{
    return await request({
        url:'/articleTag/getTags',
        method: "get",
    })
}
