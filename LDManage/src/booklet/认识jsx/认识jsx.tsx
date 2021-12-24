import React from "react"
const toLearn = [ 'react' , 'vue' , 'webpack' , 'nodejs'  ]
const TextComponent = ()=> <div> hello , i am function component </div> 

export default class Index extends React.Component{
    status = false /* 状态 */
    renderFoot=()=> <div> i am foot</div>
    render(){
        return <div style={{ marginTop:'100px' }}   >
            <div>hello,world</div>
            <React.Fragment>
                <div> 👽👽 </div>
            </React.Fragment>
            my name is alien 
            { toLearn.map(item=> <div key={item} >let us learn { item } </div> ) }
            <TextComponent/>
            { this.status ? <TextComponent /> : <div>三元运算</div> }
            { this.renderFoot() }
            <button onClick={ ()=> console.log( this.render() ) } >打印render后的内容</button>
        </div>
    }
}