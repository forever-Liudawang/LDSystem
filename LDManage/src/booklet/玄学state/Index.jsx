import React, { Component, useState } from 'react'
import ReactDOM from 'react-dom'
const { unstable_batchedUpdates } = ReactDOM
function Child () {
    const [b,setB] = useState(10)
    const handleAdd = ()=>{
        setB((state)=>{
            console.log(state,'state')
            return state + 1
        })
    }
    return <div >
        b:<h3>{b}</h3>
        <button onClick={handleAdd}>child add</button>
    </div>
}
export default class Index extends Component {
    state = {
        a:10,
        b: 5
    }
    handleAdd = () => {
        unstable_batchedUpdates(()=>{
            this.setState({ a:this.state.a + 1 },()=>{   console.log( 'callback1', this.state.a)  })
            console.log(this.state.a)
            this.setState({ a:this.state.a + 1 },()=>{   console.log( 'callback2', this.state.a)  })
            console.log(this.state.a)
            this.setState({ a:this.state.a + 1 },()=>{   console.log( 'callback3', this.state.a)  })
            console.log(this.state.a)
        })
    }
    render() {
        return (
            <div>
                <Child/>
                a:<h2>{this.state.a}</h2>
                <button onClick={this.handleAdd}>add</button>
            </div>
        )
    }
}
