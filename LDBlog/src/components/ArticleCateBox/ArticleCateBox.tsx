import React, { useState,useEffect} from 'react'
import "./index.scss"
import request from '../../utils/request'
import { withRouter, RouteChildrenProps } from 'react-router'
import ArticleItemCard from "../ArticleCard/ArticleItemCard"
import formatArticleName from "../../utils/articleIdFormat"
function ArticleCateBox(props:RouteChildrenProps) {
    const [articleList,setArticleList] = useState([1,2,3,4,5,6,7,8,9,0])
    const [pagation, setPagation] = useState({pageSize:9,pageIndex:0})
    const articleCateId = sessionStorage.getItem("Blog_Nav") || 0
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
            setArticleList(resp.data)
        }
    }
    useEffect(() => {
        initData()
    }, [articleCateId])
    return (
        <div className="detailCateCardBox d-flex justify-between flex-wrap" style={{marginTop:"20px"}} >
            {
                articleList.map((item:any)=>{
                    return <ArticleItemCard articleData={item} articleCateName={formatArticleName(item.articleCate)} key={item._id}/>
                })
            }
        </div>
    )
}
export default  withRouter(ArticleCateBox)
