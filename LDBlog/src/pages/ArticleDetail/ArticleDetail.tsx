/* eslint-disable react/no-danger-with-children */
import React, { useEffect, useState, useRef} from 'react'
import "./index.scss"
import request from "../../utils/request"
import Footer from "../../components/Footer/Footer"
import 'highlight.js/styles/monokai-sublime.css'
import { withRouter } from 'react-router'
import hljs from 'highlight.js'
const env = process.env.NODE_ENV;
let iframeUrl = ""
if(env === "development"){
    iframeUrl = "./test.html"
}else if(env === "production"){
    iframeUrl = "/static/comment.html"
}
function ArticleDetail(props: any) {
    const [articleData, setData] = useState<any>({})
    const [latestFive,setList] = useState([])
    const [articleId, setArticleId] = useState(()=>{
        const { match:{params}} = props
        const articleId =  params.articleId || ""
        return articleId
    })
    const comRef = useRef<any>()
    const contentRef = useRef<any>()
    /**
     * 初始化代码高亮
     */
    const initCodeBlockHightLight = ()=>{
        const el = contentRef.current;
        const blocks = el.querySelectorAll('pre code');
        blocks.forEach((block: any) => {
            hljs.highlightBlock(block)
        })
    }
    const initData = async () => {
        const resp = await request({
            url: "/article/getArticleById",
            params: { articleId },
            method: "get"
        })
        if (resp && resp.success) {
            const data = resp.data && resp.data[0]
            setData(data || {})
            initCodeBlockHightLight()
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
    }, [ articleId ])
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
                    <div className="article" ref={contentRef} dangerouslySetInnerHTML={{ __html: articleData["content"] }}>
                    </div>
                    <div id="SOHUCS" ref={comRef}></div>
                    <iframe
                        ref={comRef}
                        style={{ width: "100%", marginTop: "100px",minHeight:"500px",border: "none" }}
                        src={`${iframeUrl}?articleId=${articleId}`}
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