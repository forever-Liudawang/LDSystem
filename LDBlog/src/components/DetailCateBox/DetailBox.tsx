import React, { useState } from 'react'
import ArticleCard from "../ArticleCard/ArticleCard"
import "./index.scss"
import { animateScroll } from 'react-scroll'
export default function DetailBox(props:any) {
    const [articleList,setArticleList] = useState([1,2,3,4,5,6,7,8,9,0])
    const toTop = ()=>{
        animateScroll.scrollToTop()
    }
    return (
        <div className="detailCateCardBox d-flex justify-between flex-wrap" style={{marginTop:"20px"}} >
            {
                articleList.map(item=>{
                    // return <ArticleCard/>
                })
            }
        </div>
    )
}
