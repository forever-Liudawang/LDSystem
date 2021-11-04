import React, { useState,useEffect, useCallback} from 'react'
import "./index.scss"
import request from '../../utils/request'
import { withRouter, RouteChildrenProps } from 'react-router'
import ArticleItemCard from "../ArticleCard/ArticleItemCard"
import formatArticleName from "../../utils/articleIdFormat"
import useLazyScroll from "../../components/LazyScroll/useLazyScroll"
import useCallbackData from "../../utils/useCallbackData"

let isOver = false
function ArticleCateBox(props:RouteChildrenProps) {
    const [articleList,setArticleList] = useState<any []>([])
    const [pagation,setPagation] = useState({pageSize:3,pageIndex:0})
    const articleCateId = sessionStorage.getItem("Blog_Nav") || 0
    useLazyScroll(80,()=>{
        console.log('pagation :>> ', pagation);
        setPagation({pageSize:pagation.pageSize,pageIndex:pagation.pageIndex+1})
    })
    const initData =async ()=>{
        const resp = await request({
            url:"/article/getCateArticle",
            method:"get",
            params:{
                articleCateId,
                ...pagation
            }
        })
        if(resp.success){
            if(!resp.data || resp.data.length === 0){
                isOver = true
                return
            }
            setArticleList([...articleList,...resp.data])
        }
    }
    useEffect(() => {
        initData()
    }, [articleCateId,pagation])
    return (
        <div className="detailCateCardBox d-flex justify-between flex-wrap" style={{marginTop:"200px"}} >
            {
                articleList.map((item:any)=>{
                    return <ArticleItemCard articleData={item} articleCateName={formatArticleName(item.articleCate)} key={item._id}/>
                })
            }
        </div>
    )
}
export default  withRouter(ArticleCateBox)
