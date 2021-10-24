import React, { useState } from 'react'
import ArticleCard from "../ArticleCard/ArticleCard"
import "./index.scss"
const data = []
export default function ArticleBox() {
    const [articleList,setArticleList] = useState([1,2,3,4,5,6,7,8,9,0])
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
