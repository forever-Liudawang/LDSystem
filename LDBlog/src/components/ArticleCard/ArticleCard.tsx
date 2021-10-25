import React from 'react'
import "./index.scss"
import { FcDblWarpBtn } from '../FcHocComponent'
import { withRouter, RouteChildrenProps } from 'react-router'
interface Iprops {
    title:string,
    content:string,
    time:string,
    author:string,
    img:string
}
function Article(props:RouteChildrenProps) {
    const handleClickToDetali = ()=>{   
        props.history.push({
            pathname:"/articleDetail/"+1,
            state:{
                articleId:1
            }
        })
    }
    return (
        <div className="articleCard" onClick={handleClickToDetali}>
            <div className="title">
                <h2 className="p10"> 
                    <FcDblWarpBtn style={{width:"300px",height:"40px",color:"#000","--color":"#ff4c21"}}>
                        高阶函数替换JavaScript中的循环
                    </FcDblWarpBtn>
                </h2>
            </div>
            <div className="imgBox">
                <img src="/imgs/curry.png" alt=""/>
            </div>
            <div className="p10 time">
                8天前 by AndyLiu 发布于 <span className="cate">css</span>
            </div>
            <div className="content">
                Web前端开发中相信很多人面对表单元素都会将其原始样式重置或借助非表单元素来模拟表单控件，之所以这般操作，是因为表单控件...
            </div>
        </div>
    )
}
export default  withRouter(Article)