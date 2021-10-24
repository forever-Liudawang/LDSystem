import React,{ComponentType, useContext} from 'react'
import {RouterContext} from "./Router"
export default function WithRouter(Component:ComponentType<any>) {
    return function Wrapper(){
        const routerContext = useContext(RouterContext)
        console.log('routerContext :>> ', routerContext);
        return (
            <Component {...routerContext}/>
        )
    }
}
