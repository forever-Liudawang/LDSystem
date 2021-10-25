import React from 'react'
import "./index.scss"
import {FcArrowBtn} from "../../components/FcHocComponent"
export default function ArticleDetail(props:any) {
    console.log('props :>> ', props);
    const back = ()=>{
        props.history.goBack()
    }
    return (
        <div className="articleDetail">
            {/* <FcArrowBtn style={{"--color":"#000",color:"#000"}} onClick={back}/> */}
            <div className="main">
                <div className="content">
                    <div className="title">
                        <h1>标题</h1>
                    </div>
                    <div className="article">
                    有些同学可能还不知道全栈是什么，先介绍一下。

                    现在的程序员有很多方向，前端开发、后端开发、测试、算法等。其中，以前端和后端最为流行。

                    顾名思义，前端就是在前面的、用户能看到和使用的界面。前端程序员就是写这些界面，并且研究如何更高效地写出更美观、更稳定、体验更好、性能更高的页面。

                    后端就是躲在后面，帮前端保存和处理数据，默默提供服务的工具人。后端程序员就是通过设计和编写逻辑代码来实现功能，并且研究如何让功能更可用、更稳定、更迅速、更低成本、支持更多人同时用等。

                    而全栈程序员就是全干，前端、后端、甚至是测试等等啥都能干，一个人就能独立完成整个产品！

                    嗯，我们有个想法，就缺一个全栈程序员了。
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
        </div>
    )
}
