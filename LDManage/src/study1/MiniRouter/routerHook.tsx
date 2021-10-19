import {useContext, useEffect} from "react"
import {RouterContext,rootHistory} from "./Router"
export const useHistory = ()=>{
    const context = useContext(RouterContext)
    return context?.history;
}
export const useLocation = ()=>{
    const context = useContext(RouterContext)
    return context?.location;
}
export const useListern = (cb:Function)=>{
    useEffect(()=>{
        if(!rootHistory)return ()=>{}
        const unListern = rootHistory.listen(location=>{
            cb && cb(location);
        })
        return ()=>{
            unListern && unListern()
        }
    },[])
}