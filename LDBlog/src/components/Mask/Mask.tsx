import React, { Component, PureComponent } from 'react'
import "./index.scss"
import "./loading.svg"
import ReactDOM from 'react-dom'
export default class Mask extends PureComponent {
    static show: any
    static hidden: () => void
    static container:HTMLDivElement | null = null
    render() {
        return (
            <div className="mask" >
             <div className="svgBox">
                 <svg xmlnsXlink="http://www.w3.org/2000/svg" width="120px" height="120px" viewBox="0 0 40 40" enableBackground="new 0 0 40 40" xmlSpace="preserve">
                     <path  fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
                     s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
                     c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z">
                     </path>
                     <path fill="#ff4c21" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
                     C22.32,8.481,24.301,9.057,26.013,10.047z" transform="rotate(42.1171 20 20)">
                     <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="1s" repeatCount="indefinite"></animateTransform>
                     </path>
                 </svg>
             </div>
         </div >
        )
    }
}
Mask.show = (config:any)=>{
    if(!Mask.container){
        Mask.container = document.createElement("div")
        document.body.appendChild(Mask.container)
        ReactDOM.render(<Mask/>,Mask.container)
    }else{
        Mask.container.style.display="block"
    }
}
Mask.hidden = ()=>{
    if(Mask.container){
        Mask.container.style.display="none"
    }else{
        return
    }
}
