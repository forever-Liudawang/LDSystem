import React,{useState,useRef, useEffect, createContext} from 'react'
import "./home.scss"
import Header from "../../components/Header/Header"
import ArticleBox from "../../components/ArticleHomeBox/ArticleBox"
import {FcWarpBtn,FcDblWarpBtn} from "../../components/FcHocComponent"
import {Link,animateScroll} from "react-scroll"
import {Switch,Route,BrowserRouter as Router,Redirect} from "react-router-dom"
import {CSSTransition,TransitionGroup} from "react-transition-group"
import Main from "../../components/Main/Main"
import DetailPage from '../DetailPage/DetailPage'
import ArticleDetail from "../ArticleDetail/ArticleDetail"
let temp = true //控制点击下滑时触发的滚动事件设置showHeader再次出发页面更新导致header隐藏bug
export default function Home() {
    const [showHeader, setShowHeader] = useState(true)
    const onScroll = (e:Event)=>{
        const top = window.pageYOffset || 0;
        if(top>=500){
            setShowHeader(false)
            temp = true
        }else{
            if(!temp || showHeader)return
            setShowHeader(true)
        }
    }
    const toTop = ()=>{
        animateScroll.scrollToTop()
    }
    useEffect(()=>{
        window.addEventListener('scroll',onScroll)
        return ()=>{
            window.removeEventListener('scroll',onScroll);
        }
    })
    return (
        <div className="home">
            <div className="bgImg">
            </div>
            <Router>
                <Header showHeader={showHeader}/>
                <Switch>
                    <Route path="/" exact component={()=><Main showHeader={showHeader}/>}></Route>
                    <Route path="/page/:navId" exact component={DetailPage}></Route>
                    <Route path="/articleDetail/:articleId" exact component={ArticleDetail}></Route>
                    <Redirect to="/"/>
                </Switch>
            </Router>
            <div className={`toTop ${showHeader?"hide":"show"}`} onClick={toTop}>
                <img src="/imgs/toTop.png" className="w-full h-full" alt=""/>
            </div>
        </div>
    )
}
