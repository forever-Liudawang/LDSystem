import React,{useContext} from 'react'
import { matchPath } from 'react-router';
import {RouterContext} from "./Router"
export default function Switch(props:any) {
    const routerContext:any= useContext(RouterContext)
    const location = routerContext.location || props.location
    console.log('routerContext :>> ', routerContext);
    let children:any,match: any;
    React.Children.forEach(props.children,(child:any)=>{
        if(!match && React.isValidElement(child)){
            children = child;
            const path = (child.props as any).path
            match = path? matchPath(location.pathname,{ ...(child.props as any) }) : routerContext.match /* 计算是否匹配 */
        }
    })
    console.log('match :>> ', match,children);
    return (
        match?React.cloneElement(children,{location,computedMatch: match }):null
    )
}
