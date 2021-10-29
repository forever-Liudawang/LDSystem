import React from 'react'
import "./index.scss"
import ArticleItemCard from './ArticleItemCard'
interface Iprops {
    articleCateId: number | string,
    articleCateName:string,
    data: Array<any>
}
function ArticleCard(props:Iprops) {
    const {articleCateId,articleCateName,data}= props
    return (
        <div className="articleCard">
            <div className="title p10">
                <h2>
                    {articleCateName}
                </h2>
            </div>
            <div className="itemBox">
            {
                data.map(item=>{
                    return <ArticleItemCard articleData={item} articleCateName={articleCateName} key={item._id}/>
                })
            }
            </div>
        </div>
    )
}
export default  ArticleCard