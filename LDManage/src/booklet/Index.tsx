import React, { useState } from 'react'
import Index1 from "./认识jsx/index"
import Index2 from "./起源component/Index"
import Index3 from "./玄学state/Index"
import Index4 from "./深入props/Index"
import Index5 from "./理解生命周期/Index"
export default function Index() {
    return (
        <div>
            {/* <Index1/> */}
            {/* <Index2 a={10}/> */}
            {/* <Index3/> */}
            {/* <Index4/> */}
            <Index5 t={30}/>
        </div>
    )
}
