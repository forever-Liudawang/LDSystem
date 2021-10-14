import React, { createContext,useState ,Component,useContext, memo} from 'react'

// context 上下文

const NumContext = createContext(0);
function Child(){
    // const NumVal = useContext(NumContext)
    console.log("child")
    // return <div> child === {NumVal} </div>
    return <NumContext.Consumer>
        {
            val=>{
                return <h1>{val}</h1>
            }
        }
    </NumContext.Consumer>
}
class Child1 extends Component{
    render(){
        console.log("child1")
        // return <div>child1</div>
        return <NumContext.Consumer>
            {val=>{
                return <h2>{val}</h2>
            }}
        </NumContext.Consumer>
    }
}
// Child1.contextType = NumContext

const Son = memo(Child)
const Son1 = memo(Child1)

export default function Index10() {
    const [num, setNum] = useState(10)
    return (
        <div>
            <button onClick={()=>{setNum(num+1)}}>+</button>
            <NumContext.Provider value={num}>
                <Son/>
                <Son1/>
            </NumContext.Provider>
            {/* <Child1/> */}
        </div>
    )
}

// 在 Provider 里 value 的改变，会使引用contextType,useContext 消费该 context 的组件重新 render ，
// 同样会使 Consumer 的 children 函数重新执行，与前两种方式不同的是 Consumer 方式，当 context 内容改变的时候，
// 不会让引用 Consumer 的父组件重新更新