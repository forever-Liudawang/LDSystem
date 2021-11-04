import React,{useEffect,useState} from 'react'
import request from "../../utils/request";
import ArticleItemCard from "../../components/ArticleCard/ArticleItemCard"
import "./index.scss"
import Footer from "../../components/Footer/Footer"
export default function ArticleSearch() {
    const [articleList, setArticleList] = useState([])
    const searchKey = sessionStorage.getItem("SEARCHKEY")
    const initData = async ()=>{
        const resp = await request({
            url: "/article/getSearchList",
            params: { searchKey },
            method: "get"
        })
        if(resp && resp.success){
            setArticleList(resp.data)
        }
        console.log('resp :>> ', resp);
    }
    useEffect(()=>{
        initData()
    },[searchKey])
    return (
        <div className="articleSearch" style={{paddingTop:"60px"}}>
            <h3 className="title">搜索结果</h3>
            <div className="main">
                {
                    articleList.map((item:any)=>{
                        return <ArticleItemCard articleData={item}/>
                    })
                }
            </div>
            <Footer/>
        </div>
    )
}
