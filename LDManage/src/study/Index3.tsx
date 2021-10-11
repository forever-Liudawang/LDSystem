import React, { Component,useState,useEffect} from 'react'
import {unstable_batchedUpdates,flushSync} from "react-dom"
export default class Index3 extends Component {
    state = { 
        number:0,
        height:100 
    }
    handleClick= () => {
        this.setState({ number:this.state.number + 1 },()=>{   console.log( 'callback1', this.state.number)  })
        console.log(this.state.number)
        this.setState({ number:this.state.number + 1 },()=>{   console.log( 'callback2', this.state.number)  })
        console.log(this.state.number)
        this.setState({age:21},()=>{   console.log( 'callback3', this.state.number)  })
        console.log(this.state.number)
    }
    handleAsyncClikc = ()=>{
        setTimeout(()=>{
            //批量更新
            unstable_batchedUpdates(()=>{
                this.setState({ number:this.state.number + 1 },()=>{   console.log( 'callback1', this.state.number)  })
                console.log(this.state.number)
                this.setState({ number:this.state.number + 1 },()=>{    console.log( 'callback2', this.state.number)  })
                console.log(this.state.number)
                this.setState({ number:this.state.number + 1 },()=>{   console.log( 'callback3', this.state.number)  })
                console.log(this.state.number)
            })
        })
    }
    handleflushSyncClick = ()=>{
        setTimeout(()=>{
            this.setState({ number: 1  })
        })
        this.setState({ number: 2  })
        //较高优先级更新
        flushSync(()=>{
            this.setState({ number: 3  })
        })
        this.setState({ number: 4  })
    }
    render(){
        console.log(this.state,"state");
        return <div>
            { this.state.number }
            <button onClick={ this.handleClick } >number++</button>
            <br/>
            <button onClick={ this.handleAsyncClikc } >async number++</button>
            <br/>
            <button onClick={ this.handleflushSyncClick } >flushSync number++</button>
        </div>
    }
}


// export default function IndexHook3() {
//     const [num, setNum] = useState(1)
//     const handleSetNum=()=>{
//         setNum(num+1);
//         console.log(num);
//         setNum(num+1);
//         console.log(num);
//         setNum(num+1);
//     }
//     console.log('num :>> ', num);
//     return (
//         <div>
//             {num}
//             <button onClick={handleSetNum}>click</button>
//         </div>
//     )
// }

