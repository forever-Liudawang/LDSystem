import React, { memo, useEffect } from 'react'
import { RouteChildrenProps } from 'react-router'
import "./index.scss"
import Title from "../../components/DetailCateTitle/Title"
import DetailCateCardBox from "../../components/ArticleCateBox/ArticleCateBox"
import Footer from "../../components/Footer/Footer"
function ArticleCate(props:any) {
    return (
        <div className="articleCatePage w-full">
            <Title/>
            <DetailCateCardBox/>
            <Footer />
        </div>
    )
}
export default  memo(ArticleCate)
