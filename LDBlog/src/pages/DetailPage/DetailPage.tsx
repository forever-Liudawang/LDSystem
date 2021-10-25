import React, { memo } from 'react'
import { RouteChildrenProps } from 'react-router'
import "./index.scss"
import Title from "../../components/DetailCateTitle/Title"
import DetailCateCardBox from "../../components/DetailCateBox/DetailBox"
function DetailPage(props:any) {
    return (
        <div className="detailPage w-full">
            <Title/>
            <DetailCateCardBox />
        </div>
    )
}
export default  memo(DetailPage)
