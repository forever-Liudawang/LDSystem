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
/**
 * 获取某类文章数据
 * @param data 
 * @returns 
 */
export const getArticleListByCateId = async (data:object={})=>{
    return await request({
        url:'/article/getCateArticle',
        method: "get",
        params:data
    })
}
/**
 * 获取标签
 * @param data 
 * @returns 
 */
export const getTags = async (data:object={})=>{
    return await request({
        url:'/articleTag/getTags',
        method: "get",
    })
}
/**
 * 根据id获取文章数据详情
 * @param params 
 * @returns 
 */
export const getArticleById = async (params:object={})=>{
    return await request({
        url:'/article/getArticleById',
        method: "get",
        params
    })
}
/**
 * 反馈信息
 * @param data 
 * @returns 
 */
export const insertFeedback = async (data:object = {})=>{
    return await request({
        url:'/email/insert',
        method: "post",
        data
    })
}
export const getSearchList = async (params:object = {})=>{
    return await request({
        url:'/article/getSearchList',
        method: "get",
        params
    })
}
