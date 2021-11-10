/* eslint-disable react/no-danger-with-children */
import React, { useEffect, useState, useRef,useMemo} from 'react'
import "./index.scss"
import request from "../../utils/request"
import Footer from "../../components/Footer/Footer"
import { withRouter } from 'react-router'
function ArticleDetail(props: any) {
    const [articleData, setData] = useState<any>({})
    const [latestFive,setList] = useState([])
    const [articleId, setArticleId] = useState(()=>{
        const { match:{params},location={}} = props
        console.log('props :>> ', props);
        const articleId =  params.articleId || ""
        return articleId
    })
    const comRef = useRef<any>()
    const initData = async () => {
        const resp = await request({
            url: "/article/getArticleById",
            params: { articleId },
            method: "get"
        })
        if (resp && resp.success) {
            const data = resp.data && resp.data[0]
            setData(data || {})
        }
    }
    const getLatestFive = async ()=>{
        const resp = await request({
            url: "/article/getLatestFive",
            method: "get"
        })
        if(resp && resp.success){
            setList(resp.data)
        }
    }
    const handleToDetail = (item:any)=>{
        props.history.push({
            pathname:`/articleDetail/${item.articleCate}/${item._id}`,
            state:{
                articleId: item._id,
                articleCate: item.articleCate
            }
        })
        setArticleId(item._id)
        sessionStorage.setItem("Blog_Nav",item.articleCate)
        sessionStorage.setItem("ArticleId",item._id)
    }   
    useEffect(() => {
        initData()
        document.documentElement.scrollTop = document.body.scrollTop = 0
        comRef.current.onload = function(){
            comRef.current.height = comRef.current.contentDocument.body && comRef.current.contentDocument.body.scrollHeight + 20
        }
    }, [articleId])
    useEffect(()=>{
        getLatestFive()
    },[])
    return (
        <div className="articleDetail">
            <div className="main">
                <div className="content">
                    <div className="title">
                        <h1>{articleData["articleTitle"]}</h1>
                    </div>
                    <div className="article" dangerouslySetInnerHTML={{ __html: articleData["content"] }}>
                    </div>
                    <div id="SOHUCS" ref={comRef}></div>
                    <iframe
                        ref={comRef}
                        style={{ width: "100%", marginTop: "100px",minHeight:"500px",border: "none" }}
                        src={`/comment.html?articleId=${articleId}`}
                    ></iframe>
                </div>
                <div className="side">
                    <div className="bg-white p10">
                        <div>
                            <h2>近期文章</h2>
                        </div>
                        <div>
                            <ul>
                                {
                                    latestFive.map((item:any)=>{
                                        return <li key={item._id} onClick={()=>{handleToDetail(item)}}>
                                            <img src="/imgs/list.png" alt=""/>
                                            <span>{item.articleTitle}</span>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default  withRouter(ArticleDetail)