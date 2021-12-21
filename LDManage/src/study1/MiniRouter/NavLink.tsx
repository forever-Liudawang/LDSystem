import React, { useContext,useEffect,useState} from 'react'
import { RouterContext,RouterContextT} from './Router'

export default function NavLink(props:any) {
    const context = useContext<RouterContextT>(RouterContext)
    const [isCurrentNav, setCurrentNav] = useState(false)
    const {children,to,activeClassName,activeStyle} = props;
    const handleNav = ()=>{
        context?.history.push(to)
    }
    useEffect(() => {
        const currentPath = context?.location.pathname
        if(currentPath == to){
            setCurrentNav(true)
        }else{
            setCurrentNav(false)
        }
    }, [context])
    return (
        <a href="javascript:void(0)" onClick={handleNav} className={ isCurrentNav?activeClassName:''}>{children}</a>
    )
}
