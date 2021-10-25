import React, { memo } from 'react'
import { FcDblWarpBtn } from '../FcHocComponent'
import { Link, animateScroll } from 'react-scroll'
import ArticleBox from '../ArticleHomeBox/ArticleBox'

function Main(props:any) {
    const {showHeader} = props
    return (
        <div>
            <div className="mainShow">
                <span className="mainText">life is a <br/><span style={{marginLeft:"100px"}}>fucking movie</span></span>
            </div>
            <div className="sword">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="latest">
                <div className="title">
                    <h1>
                        The Latest
                    </h1>
                </div>
                <div className="contentTitle">
                    <h2 className=" p10"> 
                        <FcDblWarpBtn style={{width:"300px",height:"40px","--color":"#000"}}>
                            高阶函数替换JavaScript中的循环
                        </FcDblWarpBtn>
                    </h2>
                </div>
                <div className="main  p10">
                    Web前端开发中相信很多人面对表单元素都会将其原始样式重置或借助非表单元素来模拟表单控件，之所以这般操作，是因为表单控件...
                    Web前端开发中相信很多人面对表单元素都会将其原始样式重置或借助非表单元素来模拟表单控件，之所以这般操作，是因为表单控件...
                </div>
                <div className="footer">
                    本篇文章位于： javascript 类目； 由 AndyLiu 创建，发布于： 2020-05-26 21:51:01
                </div>
            </div>
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
            </div>
        </div>
    )
}
export default  memo(Main)
