import React, { Component, createRef, forwardRef,useEffect, useRef } from 'react'

// ref
function A(props:any){
    const {aRef} = props
    return <button ref={aRef}>a</button>
}
function B(props:any){
    let {bRef} = props
    const aRef = useRef(null)
    const bDRef = useRef(null)
    const ACom = forwardRef((props,ref)=><A {...props} aRef={ref}/>)
    bRef.current = {
        aDom: aRef,
        bDom: bDRef
    }
    useEffect(() => {
        
    }, [])
    return <div>
        <ACom ref={aRef}/>
        <button ref={bDRef}>B</button>
    </div>
}
const ForwardCom = forwardRef((props,ref)=><B {...props} bRef={ref}/>)
export default class Index7 extends Component {
    domRef = createRef()
    componentDidMount(){
        console.log(this.domRef,"domref")
    }
    render() {
        return (
            <div>
                <ForwardCom ref={this.domRef}/>
            </div>
        )
    }
}
