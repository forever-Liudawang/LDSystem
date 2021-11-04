import React, { memo } from 'react'
import { RouteChildrenProps } from 'react-router'
import "./index.scss"
import Title from "../../components/DetailCateTitle/Title"
import DetailCateCardBox from "../../components/ArticleCateBox/ArticleCateBox"
function ArticleCate(props:any) {
    return (
        <div className="articleCatePage w-full">
            <Title/>
            <DetailCateCardBox />
        </div>
    )
}
export default  memo(ArticleCate)
