import { Method } from "axios";

export interface IHttpResponse<T=Array<any>> {
    data: T,
    message:string,
    success: boolean,
    extend: any
}
export interface IHttpConfig {
    url:string,
    method?: Method,
    data?:any,
    params?:any,
    [key:string]:any,

}
//文章数据类型
export interface IArticleModel {
    articleCate: string | number
    articleDesc:string,
    articleTags: Array<string>
    articleTitle: string,
    content:string,
    coverImg: string,
    created: string
    isMyRecommend: boolean
    updated: string
    userName: string
    _id: string
}