import React, { useState } from 'react'
import "./index.scss"
import { withRouter, RouteChildrenProps } from 'react-router'
const dynmicalTitle = (curNav:string|number)=>{
    if(curNav == 1){
        return {
            title:"前端技术文章",
            bgImg: "url('/imgs/front.jpg')"
        }
    }else if(curNav == 2){
        return {
            title:"后端技术文章",
            bgImg: "url('/imgs/backEnd.jpg')"
        }
    }else if(curNav == 3){
        return {
            title:"生活二三事",
            bgImg: "url('/imgs/front.jpg')"
        }
    }
    return {}
}
function FrontTitle(props:RouteChildrenProps) {
    const {location}:any = props
    const curNav = location.state.curNav;
    const {title,bgImg} = dynmicalTitle(curNav)
    return (
        <div className="detailPageHeader w-full">
            <div className="title" style={{backgroundImage:bgImg}}>{title}</div>
        </div>
    )
}
export default  withRouter(FrontTitle)
