import React from 'react'

export default function FormItem(props:{name:string,label:string,children:JSX.Element}) {
    const {name,label,children} = props
    const newChildren = React.cloneElement(children,{name})
    return (
        <div>
            <span>{label}</span>
            {newChildren}
        </div>
    )
}
FormItem.displayName = "FormItem"
