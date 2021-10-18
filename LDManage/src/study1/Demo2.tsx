//react-router
import React,{useContext,useState} from 'react'   
import { RouterProps,useLocation,useHistory} from 'react-router'
import { NavLink } from 'react-router-dom'

const NumContext = React.createContext(10);
function Son(props:any){
    console.log('props :>> ', props);
    const num = useContext(NumContext)
    return <div>SON : {num}</div>
}
export default function Demo2(props:RouterProps) {
    console.log(props,"props==>>>")
    const history = useHistory()
    const [num, setNum] = useState(10)
    return (
        <div>
            <NumContext.Provider value={num}>
                <Son/>
            </NumContext.Provider>
            <button onClick={()=>{setNum(num+1);history.push("/demo1")}}>+</button>
            <NavLink to="/demo1"> to demo1 </NavLink>
        </div>
    )
}
