import "./index.scss"
import React, { Component,createRef,MouseEvent} from 'react'
import ReactDOM from "react-dom"
import {FcTypingInput} from "../../components/FcHocComponent"
export default class FeedBack extends Component {
    static show: () => void
    static container: HTMLDivElement
    domRef = createRef<any>()
    handleHidden = (e:MouseEvent)=>{
        e.preventDefault();
        console.log('FeedBack.container :>> ', FeedBack.container);
        this.domRef.current.parentElement.style.display = "none"
    }
    render() {
        return (
            <div ref={this.domRef} className="feedback" onClick={(e)=>this.handleHidden(e)}>
                <div className="form">
                    <FcTypingInput />
                </div>
            </div>
        )
    }
}

FeedBack.show = ()=>{
    if(!FeedBack.container){
        FeedBack.container = document.createElement("div")
        document.body.appendChild(FeedBack.container)
        ReactDOM.render(<FeedBack/>,FeedBack.container)
    }else{
        FeedBack.container.style.display="block"
    }
}
