import request from "../utils/request"
import {IHttpResponse} from "@src/utils/types"
import axios,{ AxiosPromise } from "axios"
import {matchApi} from "@src/config"
// const params = {
//     conference: "All", western eastern  === 西部 东部 
//     country: "All",
//     individual: "All" || "Rookie", 经验 === 全部 || 新秀
//     locale: "zh_CN",
//     pageIndex: 0,
//     position: "All" || "G" || "F" || "C",  位置 === 全部 后卫  前锋  中锋 
//     qualified: false,
//     season: "2002",  赛季 === 2002-2003
//     seasonType: 2,  赛季 1 || 2 || 4 季前赛  常规赛  季后赛
//     split: "All Team",
//     statType: "points", rebounds  assists blocks steals fouls turnovers mins efficiency tppct ftpct
    // 得分 篮板 助攻 盖帽 抢断 犯规 失误 时间 效率 三分 罚球
//     team: "All",
//     total: "perGame", total  === 场均 总数 
// }
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
export const test = async () =>{
    return await axios({
        url:"https://china.nba.cn/stats2/league/playerstats.json",
        method:"GET",
        params:{
            conference: "All",
            country: "All",
            individual: "All",
            locale: "zh_CN",
            pageIndex: 0,
            position: "All",
            qualified: false,
            season: "",
            seasonType: 2,
            split: "All Team",
            statType: "points",
            team: "warriors",
            total: "perGame",
        }
    })
}
export const getMathchProcess  = async () => {
    return await request({
        url: matchApi,
        method: "get"
    })
}

