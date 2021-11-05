import React, { useState,useEffect, useCallback} from 'react'
import "./index.scss"
import request from '../../utils/request'
import { withRouter, RouteChildrenProps } from 'react-router'
import ArticleItemCard from "../ArticleCard/ArticleItemCard"
import formatArticleName from "../../utils/articleIdFormat"
import FilterCateArticle from "../../components/FilterCateArticle/FilterCateArticle"
let scrollTop = 0
function ArticleCateBox(props:RouteChildrenProps) {
    const [articleList,setArticleList] = useState<any []>([])
    let   [pageIndex,setPageIndex] = useState(0)
    const [isOver,setIsOver] = useState(false)
    const [tag, setTag] = useState<string>("")
    const articleCateId = sessionStorage.getItem("Blog_Nav") || 0
    const initData =async ()=>{
        // if(isOver)return
        const resp = await request({
            url:"/article/getCateArticle",
            method:"get",
            params:{
                articleCateId,
                tag,
                ...{pageSize:6,pageIndex}
            }
        })
        if(resp.success){
            if(!resp.data || resp.data.length === 0){
                setIsOver(true)
                return
            }
            setArticleList([...articleList,...resp.data])
        }
    }
    const handleGetCateFunc = useCallback((articleCate:string)=>{
        setPageIndex(0)
        setArticleList([])
        setIsOver(false)
        setTag(articleCate)
    },[])
    const listenScroll = useCallback(()=>{
        const curScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(curScrollTop - scrollTop > 400){
            scrollTop = curScrollTop
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
            setIsOver(false)
        })
        return ()=>{
            unlisten()
        }
    },[])
    useEffect(()=>{
        setTag("")
        window.removeEventListener("scroll",listenScroll)
        window.addEventListener("scroll",listenScroll)
        return ()=>{
            window.removeEventListener("scroll",listenScroll)
        }
    },[articleCateId])
    useEffect(()=>{
        initData()
    },[tag])
    useEffect(() => {
        initData()
        console.log('tag :>> ', tag);
    }, [articleCateId,pageIndex])
    return (
        <div className="detailCateCardBox d-flex justify-between flex-column" style={{marginTop:"30px"}} >
            <div>
                <FilterCateArticle articleCateId={articleCateId} getCateFunc={handleGetCateFunc}/>
            </div>
            <div className="d-flex justify-between flex-wrap">
            {
                articleList.map((item:any)=>{
                    return <ArticleItemCard articleData={item} articleCateName={formatArticleName(item.articleCate)} key={item._id}/>
                })
            }
            </div>
            <div>
            {
                isOver && <h3 className="text-center">别拉了，没有啦😊.....</h3>
            }
            </div>
        </div>
    )
}
export default  withRouter(ArticleCateBox)
