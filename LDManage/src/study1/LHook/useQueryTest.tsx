import React, { memo, useCallback } from 'react'
import useQueryTable from './useQueryTable'
const getTableData = (query:any)=>{
    return new Promise((resolve)=> {
        //模拟api请求数据......
        resolve({
            pageIndex: query.pageIndex,
            data: [1,2,3,4],
            total: 4,
        })
    })
}
export default function useQueryTest() {
    const [{formData,reset,setFormItem},{tableData,getList,pagation,handleChange}] = useQueryTable({pageIndex:0,pageSize:10},getTableData)
    console.log('formData :>> ', formData,tableData);
    return (
        <div>
            <div>
                <div>
                姓名:<input name="name" value={formData.name || ""} onChange={(e)=>setFormItem("name",e.target.value)}/>
                </div>
                <div>
                年龄:<input name="age" value={formData.age || ""} onChange={(e)=>setFormItem("age",e.target.value)}/>
                </div>
                <button onClick={reset}>重置</button>
            </div>
            <table>
                <thead>
                    <tr><td>姓名</td></tr>
                    <tr><td>年龄</td></tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
            <div>
                <button onClick={()=>getList()}>查询</button>
                <button onClick={()=>handleChange(pagation.current.pageIndex+1,10)}>下一页</button>
            </div>
        </div>
    )
}
