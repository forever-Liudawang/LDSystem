import React, { useCallback, useEffect, useRef, useState } from 'react'

type formType = {
    formData:any,
    setFormItem:(key:string,value:any)=>void,
    reset:()=>void
}
type tableType = {

    pagation:React.MutableRefObject<{pageIndex: any;pageSize: any;}>,
    getList:(payload?: any) => Promise<void>,
    tableData:{
        data: never[];
        total: number;
        pageIndex: number;
    },
    handleChange:(pageIndex: any, pageSize: any) => void
}
export default function useQueryTable(defaultQuery:{pageIndex:number,pageSize:number},api: (arg0: any) => any):[formType,tableType] {
    const formData = useRef<any>({})
    const pagation = useRef({
        pageIndex:defaultQuery.pageIndex || 0,
        pageSize:defaultQuery.pageSize||10
    })
    const [,forceUpdate] = useState<any>({})

    const [tableData,setTableData] = useState({
        data:[],
        total:0,
        pageIndex:1
    })

    const getList = useCallback(async (payload={})=>{
        if(!api)return
        const resp = await api({...defaultQuery,...payload,...pagation.current,...formData.current})
        setTableData({
            data: resp.data,
            total:resp.total,
            pageIndex: resp.pageIndex
        })
    },[api])

    const setFormItem = useCallback((key:string,value)=>{
        const data = formData.current;
        data[key] = value
        forceUpdate({})
    },[])

    /**重置表单 */
    const reset = useCallback(()=>{
        const data = formData.current;
        for(let key in data){
            data[key] = "";
        }
        pagation.current.pageIndex = defaultQuery.pageIndex || 0 
        pagation.current.pageSize = defaultQuery.pageSize || 10
        getList()
    },[])
    /**处理分页 */
    const handleChange = useCallback((pageIndex,pageSize)=>{
        pagation.current={
            pageIndex,
            pageSize
        }
        getList()
    },[getList])
    useEffect(()=>{
        getList()
    },[])
    return [
        {formData:formData.current,setFormItem,reset},
        {pagation,tableData,getList,handleChange}
    ]
}
