//多功能ref
import React ,{useEffect,useState,memo} from 'react'
import {useListern} from "./MiniRouter/routerHook"
import WithRouter from './MiniRouter/WithRouter'
const toLearn = [ { type: 1 , mes:'let us learn React' } , { type:2,mes:'let us learn Vue3.0' }  ]

const Son = memo((props:any)=>{
    console.log(props)
    return <div>son</div>

})
export default function Index(){
    const typeInfo = React.useRef(toLearn[0])
    const [num, setnum] = useState(1)
    const changeType = (info:any)=>{
        typeInfo.current = info 
    }
    useEffect(()=>{
        if(typeInfo.current.type===1){
            console.log('1 :>> ', 1);
        }else{
            console.log('2 :>> ', 2);
        }
    },[]) 
    useListern((location:any)=>{
        console.log('location :>> ', location);
    })
    
    return <div>
        <button onClick={()=>setnum(num+1)}>change</button>
        <Son typeInfo={typeInfo.current}/>
        {
            toLearn.map(item => <button key={item.type}  onClick={()=>{changeType(item)}} >{ item.mes }</button> )
        }
    </div>
}
