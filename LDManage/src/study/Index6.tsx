import React, { Component, createRef,useRef } from 'react'

// export default class Index6 extends Component<any,any> {
//     currentDom: React.RefObject<HTMLDivElement> = createRef()
//     constructor(props:any){
//         super(props)
//     }
//     componentDidMount(){
//         console.log('componentDidMount',this);
//     }
//     handleClick=()=>{
//         console.log(this.currentDom,"ref==>>")
//     }
//     render() {
//         console.log(this.currentDom)
//         return (
//             <div ref={this.currentDom}>
//                 <button onClick={this.handleClick}> render </button>
//             </div>
//         )
//     }
// }

export default function Index6(props:any) {
    const domRef = useRef(null)
    const handleClick=()=>{
        console.log(domRef,"ref==>>")
    }
    return (
        <div ref={domRef} >
         <button onClick={handleClick}> render </button>
        </div>
    )
}

