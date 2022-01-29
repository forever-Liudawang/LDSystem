import React, { memo } from 'react'


const Input = (props)=>{
    const {name,onChange} = props
    return (
        <div>
            <input  type="text" onChange={onChange}/>
        </div>
    )
}
Input.displayName = "Input"
export default memo(Input)
