import React from 'react'
import "./index.scss"
import {FcArrowBtn} from "../../components/FcHocComponent"
export default function ArticleDetail(props:any) {
    console.log('props :>> ', props);
    return (
        <div className="articleDetail">
            ArticleDetail
            <FcArrowBtn style={{"--color":"#000",color:"#000"}}/>
        </div>
    )
}
