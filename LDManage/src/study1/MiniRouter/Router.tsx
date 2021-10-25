import React,{useEffect, useMemo, useState} from 'react'
import {createBrowserHistory,History} from "history"

type RouterContext = {
    history:History
    location:string,
    match:{}
} | null;

export const RouterContext = React.createContext<RouterContext>(null)
export let rootHistory:History;
export default function Router(props:React.PropsWithoutRef<any>) {
    const history = useMemo(()=>{
        rootHistory = createBrowserHistory()
        return rootHistory;
    },[])
    const [location,setLocation] = useState<any>(history.location)
    useEffect(() => {
        const unlistern = history.listen((location: any)=>{
            setLocation(location)
        })
        return () => {
            unlistern()
        }
    }, [])
    return (
        <RouterContext.Provider value={{
            history,
            location,
            match: { path: '/', url: '/', params: {}, isExact: location.pathname === '/' }
        }}>
            {props.children}
        </RouterContext.Provider>
    )
}
