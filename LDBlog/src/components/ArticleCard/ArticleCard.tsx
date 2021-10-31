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
            <div className="title d-flex align-center">
                <div>
                    <img src="/imgs/latest.png" alt=""/>
                </div>
                <div style={{marginLeft:"10px"}}>
                    <h2>
                        {articleCateName}
                    </h2>
                </div>
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