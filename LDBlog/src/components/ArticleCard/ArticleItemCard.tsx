import React from 'react'
import { withRouter } from 'react-router'
import { FcDblWarpBtn } from '../FcHocComponent'
import {dateDistance} from "../../utils/item"
function ArticleItemCard(props:any) {
    const {articleData,articleCateName} = props
    const handleClickToDetali = ()=>{   
        props.history.push({
            pathname:"/articleDetail/"+1,
            state:{
                articleId:1
            }
        })
    }
    const handleToCate = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>)=>{
        e.stopPropagation();
        console.log(1233)
    }
    return (
        <div className="itemArticleCard" onClick={handleClickToDetali}>
            <div className="title">
                <h2 className="p10"> 
                    <FcDblWarpBtn style={{width:"300px",height:"40px",color:"#000","--color":"#ff4c21"}}>
                        {articleData.articleTitle}
                    </FcDblWarpBtn>
                </h2>
            </div>
            <div className="imgBox">
                <img src={articleData.coverImg} alt=""/>
            </div>
            <div className="p10 time">
                {dateDistance(articleData.created)}前 by {articleData.userName} 发布于 <span className="cate" onClick={(e)=>handleToCate(e)}>{articleCateName}</span>
            </div>
            <div className="content">
                {articleData.articleDesc}
                
            </div>
        </div>
    )
}
export default withRouter(ArticleItemCard)
