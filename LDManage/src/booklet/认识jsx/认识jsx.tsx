import React from "react"
const toLearn = [ 'react' , 'vue' , 'webpack' , 'nodejs'  ]
const TextComponent = ()=> <div> hello , i am function component </div> 

export default class Index extends React.Component{
    status = false /* 状态 */
    renderFoot=()=> <div> i am foot</div>
    controlRender = ()=>{
        const reactElement = (
            <div style={{ marginTop:'100px' }} className="container"  >   
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
                { this.status ? <TextComponent /> :  <div>三元运算</div> }  
                { /* 函数执行 */ } 
                { this.renderFoot() }  
                <button onClick={ ()=> console.log( this.render() ) } >打印render后的内容</button>
            </div>
        )
        const { children } = reactElement.props

        //扁平化children
        const flatChildren = React.Children.toArray(children);
        
        //去除文本节点
        const newChildren = []
        // React.Children.forEach 本身就可以把 children 扁平化了
        React.Children.forEach(flatChildren,item=>{
            if(React.isValidElement(item)){
                newChildren.push(item)
            }
        })

        //插入新的节点
        const lastChildren = React.createElement('div',{className:'last'},'say goodbye')
        console.log(lastChildren,'lastChildren')
        //类似于const lastChildren = <div className='last'>say goodbye</div>
        newChildren.push(lastChildren)

        //修改容器节点,新的属性和子元素会将原来的替换掉
        const newReactElement = React.cloneElement(reactElement,{style:{color:'red'}},...newChildren)
        console.log(newReactElement,'newReactElement')
        // return reactElement
        return newReactElement
    }
    render() {
        return this.controlRender()
    }
}