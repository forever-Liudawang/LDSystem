import React, { memo, useContext, useState, useEffect } from 'react'
import { FcDblWarpBtn } from '../FcHocComponent'
import { Link } from 'react-scroll'
import ArticleBox from '../ArticleHomeBox/ArticleBox'
import {showHeaderCtx} from "../../App"
import request from '../../utils/request'
import formatArticleName from "../../utils/articleIdFormat"
import { withRouter } from 'react-router'
import Footer from "../../components/Footer/Footer"
const Content = (props:any)=>{
    const [latestArticle,setArticle] = useState<any>({})
    const initData = async ()=>{
        const resp = await request({
            url:"/article/getLatestArticle",
            method:"get"
        })
        console.log('resp :>> ', resp);
        if(resp && resp.success){
            setArticle(resp.data && resp.data[0])
        }
    }
    const handleToDetail = ()=>{
        props.history.push({
            pathname:"/articleDetail/"+ latestArticle.articleCate,
            state:{
                articleId:latestArticle._id,
                articleCate: latestArticle.articleCate
            }
        })
        sessionStorage.setItem("Blog_Nav",latestArticle.articleCate)
        console.log('props :>> ', latestArticle,props);
    }
    useEffect(() => {
        initData()
    }, [])
    return (
        <>
            <div className="mainShow">
                <span className="mainText">life is a <br/><span style={{marginLeft:"100px"}}>fucking movie</span></span>
            </div>
            <div className="sword">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="latest" onClick={handleToDetail}>
                <div className="title">
                    <h1>
                        The Latest
                    </h1>
                </div>
                <div className="contentTitle">
                    <h2 className=" p10"> 
                        <FcDblWarpBtn style={{width:"300px",height:"40px","--color":"#000"}}>
                            {latestArticle.articleTitle}
                        </FcDblWarpBtn>
                    </h2>
                </div>
                <div className="main  p10">
                    {latestArticle.articleDesc}
                </div>
                <div className="footer">
                    本篇文章位于： {formatArticleName(latestArticle.articleCate)} 类目； 由 AndyLiu 创建，发布于： {latestArticle.created}
                </div>
            </div>
        </>
    )
}
const MemoContent = withRouter(memo(Content))
function Main(props:any) {
    const showHeader = useContext(showHeaderCtx)
    return (
        <div>
            <MemoContent/>
            <Link   spy={true}
                    smooth={true}
                    hashSpy={true}
                    delay={200}
                    isDynamic={true} 
                    className={`arrow ${showHeader?"":"hide"}`} 
                    to="list"  
                    duration={800}>
            </Link>
            <div className="marinContent" id="list">
                <ArticleBox/>
                <Footer/>
            </div>
        </div>
    )
}
export default  memo(Main)
