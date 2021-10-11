import React, { Component } from 'react'

class Child extends Component<any> {
    constructor(props: any){
        super(props)
    }
    componentDidMount(){
        console.log(`this.props`, this.props)
    }
    render() {
        const {a,renderFunc,children,handleSetA} = this.props
        const newChildren = (children as React.ReactNode []).map(item=>{
            if(React.isValidElement(item)){
                return item
            }else if(typeof item == "function"){
                return React.cloneElement(item(),{...item().props,style:{"color":"red"}},item().props.children)
                // return item(123)
            }
            return "";
        })
        console.log('newChildren :>> ', newChildren);
        return (
            <div>
                a:{a}
                {renderFunc()}
                {newChildren}
                <button onClick={()=>handleSetA(a+10)}>+</button>
            </div>
        )
    }
}


export default class Index4 extends Component {
    state={
        a:100
    }
    setA=(a:number)=>{
        this.setState({a})
    }
    render() {
        return (
            <div>
                <Child
                    a={this.state.a}
                    renderFunc={()=><div>render</div>}
                    handleSetA={this.setA}
                >
                    <div>child</div>
                    <div>child1</div>
                    {(props: any)=><div>{props} func</div>}
                </Child>
                a:{this.state.a}
            </div>
        )
    }
}
