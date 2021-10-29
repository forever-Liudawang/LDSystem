/* eslint-disable react/no-danger-with-children */
import React,{useEffect, useState} from 'react'
import "./index.scss"
import {FcArrowBtn} from "../../components/FcHocComponent"
import request from "../../utils/request"
export default function ArticleDetail(props:any) {
    const [articleData, setData ] = useState<any>({})
    const back = ()=>{
        props.history.goBack()
    }
    const initData = async ()=>{
        const resp = await request({
            url:"/article/getArticleById",
            params:{articleId:"617a6fbb385742b5cc138aa3"},
            method:"get"
        })
        if(resp && resp.success){
            const data = resp.data && resp.data[0]
            setData(data || {})
        }
    }
    useEffect(()=>{
        initData()
    },[])
    return (
        <div className="articleDetail">
            <div className="back">
                <FcArrowBtn style={{"--color":"#ff4c21",color:"#ff4c21"}} onClick={back}/>
            </div>
            <div className="main">
                <div className="content">
                    <div className="title">
                        <h1>{articleData["articleTitle"]}</h1>
                    </div>
                    <div className="article" dangerouslySetInnerHTML={{__html:articleData["content"]}}>
                    </div>
                </div>
                <div className="side">
                    <div className="bg-white p10">
                        <div>
                            <h2>近期文章</h2>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <img src="/imgs/list.png" alt="" />
                                    <span>问问问问问问问问问问问问</span>
                                </li>
                                <li>
                                    <img src="/imgs/list.png" alt="" />
                                    <span>问问问问</span>
                                </li>
                                <li>
                                    <img src="/imgs/list.png" alt="" />
                                    <span>问问问问</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div>
                <iframe src={`/comment.html?articleId=${props.location.state.articleId}`}></iframe>
            </div> */}
        </div>
    )
}
