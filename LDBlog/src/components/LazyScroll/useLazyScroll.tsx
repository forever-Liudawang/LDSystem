/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from 'react'

/**
 * 监听页面高度 懒加载数据
 */

let scrollTop = 0
export default function useLazyScroll(instance:number=300,callback:Function):any{
    const listenScroll = ()=>{
        const curScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(curScrollTop - scrollTop > instance){
            callback()
            scrollTop = curScrollTop
        }
    }
    useEffect(()=>{
        window.removeEventListener("scroll",listenScroll)
        window.addEventListener("scroll",listenScroll)
        return ()=>{
            console.log('removeEventListener :>> ');
            window.removeEventListener("scroll",listenScroll)
        }
    },[])
}
