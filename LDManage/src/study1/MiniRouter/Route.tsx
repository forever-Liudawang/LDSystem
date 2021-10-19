import React,{useContext} from 'react'
import { matchPath } from 'react-router'
import {RouterContext} from "./Router"
export default function Route(props:any) {
    const context:any= useContext(RouterContext)
    //Route 也可传locatin属性
    const location = props.location || context.location
    /* 是否匹配当前路由，如果父级有switch，就会传入computedMatch来精确匹配渲染此路由 */
    const match = props.computedMatch ? props.computedMatch
                 : props.path ?  matchPath(location.pathname,props) : context.match;
    const newProps = {...context,location,match}
    let {children,component,render} = props;
    if(Array.isArray(children) && children.length === 0)children=null;
    let renderChildren = null
    if(newProps.match){
        if(children){
            renderChildren = typeof children == "function"?children(newProps):children
        }else if(component){
            renderChildren = React.createElement(component,newProps)
        }else if(render){
            renderChildren = render(newProps)
        }
    }
    console.log('renderChildren :>> ', renderChildren);
    return (
        <RouterContext.Provider value={newProps}>
            {renderChildren}
        </RouterContext.Provider>
    )
}
