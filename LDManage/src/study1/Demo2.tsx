//react-router
import React,{useContext,useState} from 'react'   
import { RouterProps,useLocation} from 'react-router'
import { NavLink } from 'react-router-dom'
import {useHistory} from "./MiniRouter/routerHook"
import WithRouter from './MiniRouter/WithRouter';
const NumContext = React.createContext(10);
function Son(props:any){
    console.log('props :>> ', props);
    const num = useContext(NumContext)
    return <div>SON : {num}</div>
}
export default function Demo2(props:RouterProps) {
    const history = useHistory()
    console.log('history :>> ', history);
    const [num, setNum] = useState(10)
    function Test(props:any){
        console.log('Test props :>> ', props);
        return <h3>test</h3>
      }
    const T = WithRouter(Test)
    return (
        <div>
            <T/>
            <NumContext.Provider value={num}>
                <Son/>
            </NumContext.Provider>
            {/* <button onClick={()=>{setNum(num+1);history.push("/demo1")}}>+</button> */}
            <h2 onClick={()=>history?.push("/demo1")}>to demo1</h2>
            {/* <NavLink to="/demo1"> to demo1 </NavLink> */}
        </div>
    )
}
