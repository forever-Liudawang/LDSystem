import React, { memo, useState, useEffect} from 'react'
import request from '../../utils/request'
import "./index.scss"
/**
 * 用于过滤文章分类数据
 * @returns 
 */
interface IProps {
    articleCateId:string | number,
    getCateFunc:(cateId:string)=>void
}
function FilterCateArticle(props:IProps) {
    const {articleCateId,getCateFunc} = props
    const [cateList,setCateList] = useState<any []>([])
    const [curSelect,setCurSelect] = useState<any>()
    const handleClick = (item:any)=>{
        if(curSelect && item._id == curSelect._id)return
        setCurSelect(item)
        getCateFunc(item.articleTagName)
    }
    const initData = async ()=>{
        const resp = await request({
            url:"/articleTag/getTags",
            method:"get",
        })
        if(resp && resp.success){
            let data = resp.data || []
            const newData = data.filter((item:any)=>item.articleCateId == articleCateId)
            setCateList(newData)
        }
    }
    useEffect(() => {
        initData()
        setCurSelect(null)
    }, [articleCateId])
    return (
        <div className="filterCateArticle">
            {
                cateList.map((item:any)=>{
                    return <div onClick={()=>handleClick(item)} className={curSelect && curSelect._id===item._id?"active":""}>{item.articleTagName}</div>
                })
            }
        </div>
    )
}
export default  memo(FilterCateArticle)