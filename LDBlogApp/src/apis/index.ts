import request from "../utils/request"
interface HttpResponse {
    success: boolean,
    data: any,
    code:number
}

export const getArticleList = (data:object={})=>{
    return request("",{
        method:"get",
        data
    })
}
