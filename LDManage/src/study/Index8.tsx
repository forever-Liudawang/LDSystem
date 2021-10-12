import React, { Component, forwardRef, ReactElement,useRef } from 'react'

//高阶组件 forward 转发ref

function Hoc(Com:any){
    class Wrapper extends Component<any,any>{
        render(){
            return <Com ref={this.props.fRef}/>
        }
    }
    return forwardRef((props,ref)=><Wrapper {...props} fRef={ref}/>)
}

const Child = forwardRef((props:any,ref:any)=>{
    return <div ref={ref}>Child</div>
})
const NewIndex = Hoc(Child)
export default function Index8() {
    const domRef = useRef();
    return (
        <div>
            <NewIndex ref={domRef}/>
            <button onClick={()=>console.log(domRef)}>domRef</button>
        </div>
    )
}
