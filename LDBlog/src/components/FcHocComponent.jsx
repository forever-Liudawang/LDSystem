import React,{memo} from 'react'

export  function FcDblWarpBtn(props) {
    const {children,...reset} = props
    return (
        <fc-dbl-warp-btn {...reset}>
            {children}
        </fc-dbl-warp-btn>
    )
}
export function FcUnderlineBtn(props){
    const {children,...reset} = props
    return (
        <fc-underline-btn {...reset}>
            {children}
        </fc-underline-btn>
    )
}
export function FcParenthesesBtn(props){
    const {children,...reset} = props
    return (
        <fc-parentheses-btn {...reset}>
            {children}
        </fc-parentheses-btn>
    )
}

export function FcPixelBtn(props){
    const {children,...reset} = props
    return (
        <fc-pixel-btn {...reset}>
            {children}
        </fc-pixel-btn>
    )
}

export function FcWarpBtn(props){
    const {children,...reset} = props
    return (
        <fc-warp-btn {...reset}>
            {children}
        </fc-warp-btn>
    )
}


export function FcTypingInput(props){
    const {children,...reset} = props
    return (
        <fc-typing-input {...reset}>
            {children}
        </fc-typing-input>
    )
}

export function Fc3DBtn(props){
    const {children,...reset} = props
    return (
        <fc-3d-btn {...reset}>
            {children}
        </fc-3d-btn>
    )
}
export function FcArrowBtn(props){
    const {children,...reset} = props
    return (
        <fc-arrow-btn {...reset}>
            {children}
        </fc-arrow-btn>
    )
}

