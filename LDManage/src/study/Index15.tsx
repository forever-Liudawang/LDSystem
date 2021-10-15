import React, { ComponentType, lazy, ReactElement, Suspense } from 'react'
//React.lazy + Susponse模拟异步组件功能

//数据加载完成后再渲染组件
function AsyncComponent(Component:ComponentType,api: any){
    console.log(api)
    const asyncComponent= ():Promise<{default:any}>=>new Promise(async (resolve)=>{
        const data = await api()
        resolve({
            default:(props:any)=><Component {...props} data={data}/>
        })
    })
    return lazy(asyncComponent)
}

function Test(props:Object){
    return <div>Test</div>
}
export default function Index15() {
    const getData = ()=>{
        return new Promise((resolve)=>{
            setTimeout(() => {
                resolve({data:123})
            }, 3000);
        })
    }
    const LazyTest = AsyncComponent(Test,getData)
    return (
        <div>
            <Suspense fallback={<div>loading......</div>}>
                <LazyTest/>
            </Suspense>
        </div>
    )
}
