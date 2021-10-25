import React, { useState,useMemo,useCallback,forwardRef, useEffect,memo} from 'react'
import "./header.scss"
import {FcPixelBtn,FcParenthesesBtn,FcUnderlineBtn,FcTypingInput,Fc3DBtn} from "../../components/FcHocComponent"
// import {withRouter} from "react-router"
import {withRouter, RouteChildrenProps} from "react-router-dom"
enum NavType {
    index,
    frontEndTec,
    backEndTec,
    life,
    message
}
const Header = (props:any)=>{
    const [nav, setNav] = useState(NavType.index)
    const [keyWord, setKeyWord] = useState("")
    const showHeader = props.showHeader
    const handleNav = (nav:NavType)=>{
        setNav(nav)
        if(nav == NavType.index){
            props.history.push("/")
        }else{
            props.history.push({
                pathname:"/page",
                state:{
                    curNav:nav
                }
            })
        }
        console.log('props :>> ', props);
    }
    const color = useCallback((curNav:NavType)=>{
        if(curNav == nav) return "#ff4c21"
        return "#000"
    },[nav])
    const handleSearchByKeyWord = ()=>{
        console.log('keyWord :>> ', keyWord);
    }
    
    useEffect(()=>{
        const {location} = props
        if(!location.state)return
        const curNav = location.state && location.state.curNav
        if(curNav == 1){
            setNav(NavType.frontEndTec)
        }else if(curNav == 2){
            setNav(NavType.backEndTec)
        }else if(curNav == 3){
            setNav(NavType.life)
        }else if(curNav == 4){
            setNav(NavType.message)
        }
    },[])
    return (
        <div className={`header ${showHeader?"show":"hide"}`}>
            <div className="d-flex align-center" onClick={()=>handleNav(NavType.index)}>
                <div className="logo">
                    <img className="h-full w-full" src="/imgs/logo.png" alt=""/>
                </div>
                <div className="logText">
                    <span className="logText">AndyLiu </span>
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
                <FcUnderlineBtn style={{color:color(NavType.message),fontWeight:"bold","--color":color(NavType.message)}} onClick={()=>handleNav(NavType.message)}>
                    Message
                </FcUnderlineBtn>
            </div>
            <div className="search">
                <FcTypingInput  placeholder="关键字搜索"   style={{"--color":"#000"}} value={keyWord} onInput={(e:any)=>setKeyWord(e.target.value)}>
                </FcTypingInput>
                <Fc3DBtn style={{marginLeft:"10px","--color":"#000"}} onClick={handleSearchByKeyWord}>搜索</Fc3DBtn>
            </div>
        </div>
    )
}
export default  withRouter(memo(Header))

