import React, { useState,useEffect, useCallback} from 'react'
import "./index.scss"
import request from '../../utils/request'
import { withRouter, RouteChildrenProps } from 'react-router'
import ArticleItemCard from "../ArticleCard/ArticleItemCard"
import formatArticleName from "../../utils/articleIdFormat"
import useLazyScroll from "../../components/LazyScroll/useLazyScroll"
import useCallbackData from "../../utils/useCallbackData"

let isOver = false
let scrollTop = 0
function ArticleCateBox(props:RouteChildrenProps) {
    const [articleList,setArticleList] = useState<any []>([])
    const [pagation,setPagation] = useState({pageSize:6,pageIndex:0})
    let [pageIndex,setPageIndex] = useState(0)
    const articleCateId = sessionStorage.getItem("Blog_Nav") || 0
    const initData =async ()=>{
        const resp = await request({
            url:"/article/getCateArticle",
            method:"get",
            params:{
                articleCateId,
                ...{pageSize:6,pageIndex}
            }
        })
        if(resp.success){
            if(!resp.data || resp.data.length === 0){
                isOver = true
                return
            }
            setArticleList([...articleList,...resp.data])
        }
    }
    const listenScroll = useCallback(()=>{
        const curScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(curScrollTop - scrollTop > 330){
            scrollTop = curScrollTop
            let newIndex = pageIndex+1;
            console.log('newIndex :>> ', newIndex);
            setPageIndex(++pageIndex)
        }
    },[articleCateId])
    //文章分类更改置空文章列表数据
    useEffect(()=>{
        const unlisten = props.history.listen((location)=>{
            setArticleList([])
            setPageIndex(0)
            document.documentElement.scrollTop = 0
            scrollTop = 0
        })
        return ()=>{
            unlisten()
        }
    },[])
    useEffect(()=>{
        window.addEventListener("scroll",listenScroll)
        return ()=>{
            window.removeEventListener("scroll",listenScroll)
        }
    },[])
    useEffect(() => {
        console.log('pageIndex :>> ', pageIndex);
        initData()
    }, [articleCateId,pageIndex])
    return (
        <div className="detailCateCardBox d-flex justify-between flex-wrap" style={{marginTop:"30px"}} >
            {
                articleList.map((item:any)=>{
                    return <ArticleItemCard articleData={item} articleCateName={formatArticleName(item.articleCate)} key={item._id}/>
                })
            }
        </div>
    )
}
export default  withRouter(ArticleCateBox)
