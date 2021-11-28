import React, { useState,useCallback,useEffect,memo, useContext} from 'react'
import "./header.scss"
import {FcUnderlineBtn,Fc3DBtn} from "../../components/FcHocComponent"
import {withRouter,useRouteMatch} from "react-router-dom"
import {showHeaderCtx} from "../../App"
import meSvg from "./me.svg"
enum NavType {
    index,
    frontEndTec,
    backEndTec,
    life,
    liuMusic
}
const handleSetNav = (curNav:any,setNav:Function)=>{
    if(curNav == 1){
        setNav(NavType.frontEndTec)
    }else if(curNav == 2){
        setNav(NavType.backEndTec)
    }else if(curNav == 3){
        setNav(NavType.life)
    }else if(curNav == 4){
        setNav(NavType.liuMusic)
    }else{
        setNav(NavType.index)
    }
}
const Header = (props:any)=>{
    const [nav, setNav] = useState(NavType.index)
    const [keyWord, setKeyWord] = useState("")
    const showHeader = useContext(showHeaderCtx)
    const handleNav = (nav:NavType)=>{
        setNav(nav)
        sessionStorage.setItem("Blog_Nav",nav.toString())
        if(nav == NavType.index){
            props.history.push("/app")
        }else if(nav == NavType.liuMusic){
            props.history.push({
                pathname: "/music",
                state:{
                    curNav:nav
                }
            })
        }
        else{
            props.history.push({
                pathname:"/app/"+ nav,
                state:{
                    curNav:nav
                }
            })
        }
    }
    const color = useCallback((curNav:NavType)=>{
        if(curNav == nav) return "#ff4c21"
        return "#000"
    },[nav])
    const handleSearchByKeyWord = ()=>{
        props.history.push("/articleSearch")
        sessionStorage.setItem("SEARCHKEY",keyWord)
    }
    useEffect(()=>{
        const unlisten = props.history.listen((location: any)=>{
            const {state} = location
            const a = sessionStorage.getItem("Blog_Nav")
            const articleCate = state ? (state.articleCate ? state.articleCate: state.curNav) :(a?a:0);
            sessionStorage.setItem("Blog_Nav",articleCate)
            handleSetNav(articleCate,setNav)
        })
        const {location} = props
        const storageNav = sessionStorage.getItem("Blog_Nav")
        const curNav = (location.state && location.state.curNav) || storageNav
        handleSetNav(curNav,setNav)
        return ()=>{
            unlisten()
        }
    },[])
    return (
        <div className={`header ${showHeader?"show":"hide"}`}>
            <div className="d-flex align-center" onClick={()=>handleNav(NavType.index)}>
                <div className="logo">
                    <img className="h-full w-full" src={meSvg} alt=""/>
                </div>
                <div className="logText">
                    <span className="logText" style={{color:color(NavType.index)}}>AndyLiu </span>
                </div>
            </div>
            <div className="cateBox d-flex">
                <FcUnderlineBtn style={{color:color(NavType.frontEndTec),fontWeight:"bold","--color":color(NavType.frontEndTec)}} onClick={()=>handleNav(NavType.frontEndTec)}>
                    FrontEnd
                </FcUnderlineBtn>
                <FcUnderlineBtn style={{color:color(NavType.backEndTec),fontWeight:"bold","--color":color(NavType.backEndTec)}} onClick={()=>handleNav(NavType.backEndTec)}>
                    BackEnd
                </FcUnderlineBtn>
                <FcUnderlineBtn style={{color:color(NavType.life),fontWeight:"bold","--color":color(NavType.life)}} onClick={()=>handleNav(NavType.life)}>
                    Life
                </FcUnderlineBtn>
                <FcUnderlineBtn style={{color:color(NavType.liuMusic),fontWeight:"bold","--color":color(NavType.liuMusic)}} onClick={()=>handleNav(NavType.liuMusic)}>
                    AndyMusic
                </FcUnderlineBtn>
            </div>
            <div className="search">
                <input id="searchInput" placeholder="关键字搜索" type="text" value={keyWord} onInput={(e:any)=>setKeyWord(e.target.value)}/>
                <Fc3DBtn style={{marginLeft:"20px","--color":"#000"}} onClick={handleSearchByKeyWord}>搜索</Fc3DBtn>
            </div>
        </div>
    )
}
export default  withRouter(memo(Header))

