import "./index.scss"
import React, { Component,createRef,MouseEvent} from 'react'
import ReactDOM from "react-dom"
import {Fc3DBtn, FcTypingInput} from "../../components/FcHocComponent"
import request from "../../utils/request"
export default class FeedBack extends Component {
    static show: () => void
    static container: HTMLDivElement
    state = {
        emailAddress:"",
        info:""
    }
    domRef = createRef<any>()
    handleHidden = (e:MouseEvent)=>{
        e.preventDefault();
        this.domRef.current.parentElement.style.display = "none"
    }
    handleCommit = async ()=>{
        console.log(this.state)
        const {emailAddress,info} = this.state
        let reg = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;        
        if(!reg.test(emailAddress)){
            alert("请填写正确的邮箱地址")
            return
        }else if(info.trim() == ""){
            alert("请填写反馈信息")
            return
        }
        if(window.confirm("是否提交?")){
            const resp = await request({
                url: "/email/insert",
                data: this.state,
                method: "post"
            })
            if(resp && resp.success){
                this.domRef.current.parentElement.style.display = "none"
            }
        }
    }
    handleInputVal = (e: { target: { value: any } })=>{
        this.setState({
            emailAddress:e.target.value
        })
    }
    handleTextAreatVal = (e: { target: { value: any } })=>{
        this.setState({
            info:e.target.value
        })
    }
    render() {
        return (
            <div ref={this.domRef} className="feedback" onClick={(e)=>this.handleHidden(e)}>
                <div className="form" onClick={e=>e.stopPropagation()}>
                    <div className="formItem">
                        <label htmlFor="">邮箱地址: &nbsp;&nbsp;</label>
                        <FcTypingInput style={{"--color":"#000"}} value={this.state.emailAddress} onInput={(e: any)=>this.handleInputVal(e)} />
                    </div>
                    <div className="formItem">
                        <label htmlFor="">反馈信息: &nbsp;&nbsp;</label>
                        <textarea style={{width:"220px"}} rows={5} value={this.state.info} onChange={e=>this.handleTextAreatVal(e)}></textarea>
                    </div>
                    <div style={{fontSize:"12px",color:"#ccc"}}>
                        收到消息后，将在第一时间回复，请确保邮箱地址正确，并及时查看垃圾邮件
                    </div>
                    <div className="formItem btn">
                        <Fc3DBtn style={{"--color":"#000"}} onClick={this.handleCommit}>提交</Fc3DBtn>
                        <Fc3DBtn style={{"--color":"#000"}} onClick={(e: React.MouseEvent<Element, globalThis.MouseEvent>)=>this.handleHidden(e)}>取消</Fc3DBtn>
                    </div>
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
