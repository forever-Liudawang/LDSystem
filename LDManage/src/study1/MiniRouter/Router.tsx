import React,{useEffect, useMemo, useState} from 'react'
import {createBrowserHistory,History} from "history"

export type RouterContextT = {
    history:History
    location: any,
    match: any
} | null;

export const RouterContext = React.createContext<RouterContextT>(null)
export let rootHistory:History;
export default function Router(props:React.PropsWithoutRef<any>) {
    const history = useMemo(()=>{
        rootHistory = createBrowserHistory()
        return rootHistory;
    },[])
    const [location,setLocation] = useState<any>(history.location)
    useEffect(() => {
        const unlistern = history.listen((location: any)=>{
            console.log(location,'location')
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
