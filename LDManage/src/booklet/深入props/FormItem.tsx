import React, { ChangeEvent,memo } from 'react'

const FormItem = memo(function (props:{name:string,label:string,children:JSX.Element,onChange:ChangeEvent}) {
    const {name,label,children,onChange} = props
    let child = children 
    if(Array.isArray(children)){
        child = children[0]
    }
    const newChildren = React.cloneElement(child,{name,onChange:onChange})
    return (
        <div>
            <span>{label}</span>
            {newChildren}
        </div>
    )
})
FormItem.displayName = "FormItem"
export default  FormItem;


