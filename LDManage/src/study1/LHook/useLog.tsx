import React, {createContext, HtmlHTMLAttributes, useCallback, useContext, useEffect, useRef} from 'react'

export const LogContext = createContext({})
export default function UseLog() {
    const message = useContext(LogContext)
    const reportMessage = useCallback((data,type)=>{
        if(type === "pv"){
            console.log("组件pv上报","pv")
        }else if(type === "click"){
            console.log("组件click上报",message,data)
        }
    },[message])
    const listenDom = useRef<any>(null)
    useEffect(()=>{
        const handleClick = (e:any)=>{
            if(e && e.target.tagName === "BUTTON"){
                reportMessage(e.target,"click")
            }
        }
        if(listenDom && listenDom.current){
            listenDom.current.addEventListener("click",handleClick)
        }
        return()=>{
            listenDom.current&&listenDom.current.removeEventListener("click",handleClick)
        }
    },[reportMessage])
    return [listenDom,reportMessage]
}
