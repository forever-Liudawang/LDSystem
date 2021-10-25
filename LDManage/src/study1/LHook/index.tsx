import React, { useEffect, useState,useCallback, useMemo, memo} from 'react'
import useLog, {LogContext} from "./useLog"

function Home(){
    const [ dom , reportMessage ]:any= useLog()
    return <div>
        {/* 监听内部点击 */}
        <div ref={dom} >
            <p> 《React进阶实践指南》</p>
            <button> 按钮 one   (内部点击) </button>
            <button> 按钮 two   (内部点击) </button>
            <button> 按钮 three (内部点击)  </button>
        </div>
        {/* 外部点击 */}
        <button  onClick={()=>{ console.log(reportMessage)  }} > 外部点击 </button>
    </div>
}
const Son = memo(Home)
export default function Index() {
    const [ value , setValue ] = useState({})
    return (
        <LogContext.Provider value={value}>
            <Son/>
            <button onClick={()=> setValue({ name:'《React进阶实践指南》' , author:'我不是外星人'  })} >点击</button>
        </LogContext.Provider>
    )
}
