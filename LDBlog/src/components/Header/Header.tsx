import React, { useState,useCallback,useEffect,memo, useContext} from 'react'
import "./header.scss"
import {FcUnderlineBtn,FcTypingInput,Fc3DBtn} from "../../components/FcHocComponent"
import {withRouter} from "react-router-dom"
import {showHeaderCtx} from "../../App"
enum NavType {
    index,
    frontEndTec,
    backEndTec,
    life,
    comment,
    aboutMe
}
const handleSetNav = (curNav:any,setNav:Function)=>{
    if(curNav == 1){
        setNav(NavType.frontEndTec)
    }else if(curNav == 2){
        setNav(NavType.backEndTec)
    }else if(curNav == 3){
        setNav(NavType.life)
    }else if(curNav == 4){
        setNav(NavType.comment)
    }else if(curNav == 5){
        setNav(NavType.aboutMe)
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
        }else if(nav == NavType.aboutMe){
            props.history.push("/about")
        }else{
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
        console.log('keyWord :>> ', keyWord);
    }
    useEffect(()=>{
        const unlisten = props.history.listen((location: any)=>{
            const {state} = location
            console.log('state :>> ', state);
            const a = sessionStorage.getItem("Blog_Nav")
            console.log('a :>> ', a);
            const articleCate = state ? (state.articleCate ? state.articleCate: state.curNav) :0;
            sessionStorage.setItem("Blog_Nav",articleCate)
            handleSetNav(articleCate,setNav)
        })
        const {location} = props
        // if(!location.state)return
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
                <FcUnderlineBtn style={{color:color(NavType.comment),fontWeight:"bold","--color":color(NavType.comment)}} onClick={()=>handleNav(NavType.comment)}>
                    Message
                </FcUnderlineBtn>
                <FcUnderlineBtn style={{color:color(NavType.aboutMe),fontWeight:"bold","--color":color(NavType.aboutMe)}} onClick={()=>handleNav(NavType.aboutMe)}>
                    about me
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

