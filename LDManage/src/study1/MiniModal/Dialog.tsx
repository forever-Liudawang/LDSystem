import React, { useEffect, useMemo, useState } from 'react'
import ReactDOM from 'react-dom'

/* 控制弹窗隐藏以及动画效果 */
const controlShow = (f1: (arg0: any) => void,f2: (arg0: any) => void,value: any,timer: number)=> {
    f1(value)
    return  setTimeout(()=>{
        f2(value)
    },timer)
}
export default function Dialog(props:any) {
    const {width,visible,closeCb,onClose} = props
    /* 控制 modelShow 动画效果 */
    const [ modelShow , setModelShow ] = useState(visible)
    const [ modelShowAync , setModelShowAync ] = useState(visible)

    const renderChildren = useMemo(()=>{
        return ReactDOM.createPortal(
            <div style={{ display:modelShow ? 'block' : 'none'  }} >
              <div className="model_container" style={{ opacity:modelShowAync ? 1 : 0  }}  >
                <div className="model_wrap" >
                    <div  style={{ width:width + 'px'}}  > {props.children} </div>
                </div>
              </div>
              <div  className="model_container mast"  onClick={()=> onClose && onClose()} style={{ opacity:modelShowAync ? 0.6 : 0  }}  />
          </div>,
          document.body
        )
    },[modelShow,modelShowAync])
    useEffect(()=>{
        let timer: NodeJS.Timeout | null=null;
        if(visible){
            timer = controlShow(setModelShow,setModelShowAync,visible,30)
        }else{
            timer = controlShow(setModelShowAync,setModelShow,visible,500)
        }
        return ()=>{
            timer && clearTimeout(timer)
        }
    },[visible])
     /* 执行关闭弹窗后的回调函数 closeCb */
     useEffect(()=>{
        !modelShow && typeof closeCb  === 'function' && closeCb()
    },[ modelShow ])
    return renderChildren
}
