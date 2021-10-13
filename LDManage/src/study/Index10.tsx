import React, { createContext,useState ,Component,useContext, memo} from 'react'

// context 上下文

const NumContext = createContext(0);
function Child(){
    const NumVal = useContext(NumContext)
    return <div> child === {NumVal} </div>
}
const Son = memo(Child)
class Child1 extends Component{
    render(){
        console.log(this.context,"context")
        // return <div>child1</div>
        return <NumContext.Consumer>
            {val=>{
                return <h2>{val}</h2>
            }}
        </NumContext.Consumer>
    }
}
// Child1.contextType = NumContext
export default function Index10() {
    const [num, setNum] = useState(10)
    return (
        <div>
            <button onClick={()=>{setNum(num+1)}}>+</button>
            <NumContext.Provider value={num}>
                <Child/>
                <Child1/>
            </NumContext.Provider>
            {/* <Child1/> */}
        </div>
    )
}
