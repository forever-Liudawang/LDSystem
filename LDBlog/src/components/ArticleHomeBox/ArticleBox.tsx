import React, { useState, useEffect } from 'react'
import ArticleCard from "../ArticleCard/ArticleCard"
import "./index.scss"
import request from '../../utils/request'
const data = []
export default function ArticleBox() {
    const [articleList,setArticleList] = useState([1,2,3,4,5,6,7,8,9,0])
    const initData = async ()=>{
        const resp = await request({
            url:"/article/getRecommendArticle",
            method:"get"
        })
        if(resp && resp.success){
            console.log(resp.data,"data==>>>")
        }
    }
    useEffect(()=>{
        initData()
    },[])
    return (
        <div className="articleBox d-flex justify-between flex-wrap" >
            {
                articleList.map(item=>{
                    return <ArticleCard/>
                })
            }
        </div>
    )
}
