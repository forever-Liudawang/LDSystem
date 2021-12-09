import { useEffect, useRef ,useState} from "react"

/**
 * 同步获取state状态
 * @param state 状态
 * @returns 保存的状态 、 回调函数
 */
const useCallbackData = (state:any)=>{
    const cbRef = useRef<Function>()
    const [data,setData] = useState(state)
    useEffect(()=>{
        cbRef.current && cbRef.current(data)
    },[data])
    return [data,function(val: any,callback: Function){
        cbRef.current = callback
        setData(val)
    }]
}   
export default useCallbackData