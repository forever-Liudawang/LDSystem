import React,{useState,useEffect, memo} from 'react'
import "./home.scss"
import Header from "../../components/Header/Header"
import {animateScroll} from "react-scroll"
import Main from "../../components/Main/Main"
let temp = true //控制点击下滑时触发的滚动事件设置showHeader再次出发页面更新导致header隐藏bug

function Home() {
    
    return (
        <div className="home">
            <div className="bgImg">
            </div>
            {/* <Header/> */}
            <Main/>
        </div>
    )
}
export default memo(Home)
