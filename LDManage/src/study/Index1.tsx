
import React, { ReactElement } from "react"
const toLearn = [ 'react' , 'vue' , 'webpack' , 'nodejs'  ]

const TextComponent = ()=> <div> hello , i am function component </div> 

export default class Index1 extends React.Component{
    status = false /* 状态 */
    static displayName: string
    renderFoot=()=> <div> i am foot</div>
    controlReact = ()=>{
        const reactEle = <div style={{ marginTop:'100px' }}   >
            { /* element 元素类型 */ }
            <div>hello,world</div>
            { /* fragment 类型 */ }
            <React.Fragment>
                <div> 👽👽 </div>
            </React.Fragment>
            { /* text 文本类型 */ }
            my name is alien 
            { /* 数组节点类型 */ }
            { toLearn.map(item=> <div key={item} >let us learn { item } </div> ) }
            { /* 组件类型 */ }
            <TextComponent/>
            { /* 三元运算 */  }
            { this.status ? <TextComponent /> : <div>三元运算</div> }
            { /* 函数执行 */ } 
            { this.renderFoot() }
            <button onClick={ ()=> console.log( this.render() ) } >打印render后的内容</button>
        </div>
        const {children,style} = reactEle.props
        //扁平化数组
        const flatChildren = React.Children.toArray(children)
        // 去除文本元素
        const newChildren:ReactElement<any> [] = []
        flatChildren.forEach(item=>{
            if(React.isValidElement(item)){
                newChildren.push(item)
            }
        })
        //插入新的节点
        const lastChilden = React.createElement("div",{className:"last"},"lastchildren")
        //修改容器节点
        const newReactEle = React.cloneElement(reactEle,{style:Object.assign(style,{color:"red"})},newChildren,lastChilden)
        console.log('newReactEle :>> ', newReactEle);
        return newReactEle
    }
    render(){
        return this.controlReact();
    }
}
Index1.displayName = "Index1";
