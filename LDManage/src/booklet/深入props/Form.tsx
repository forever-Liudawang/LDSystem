/* eslint-disable react-hooks/exhaustive-deps */
import React,{forwardRef,useImperativeHandle,useState,useEffect, useCallback, useLayoutEffect} from 'react'

const Form = forwardRef((props,ref:any)=>{
    const { children } = props
    const [newChildren,setNewChildren] = useState<any>(null)
    // const [field,setField] = useState(()=>{
    //     if(Array.isArray(children)){
    //         const initState:any= {}
    //         children.forEach((child:any)=>{
    //             if(child.type.displayName === "FormItem"){
    //                 const {props:{name}} = child
    //                 initState[name] = ''
    //             }
    //         })
    //         return initState;
    //     }
    // })
    const [field,setField] = useState<any>()
    const handleChange = useCallback((e:any,type:string)=>{
        console.log(e.target.value,type,field)
        // const origin = {...field}
        // origin[type] = e.target.value
        // console.log('origin :>> ', origin);
        setField(e.target.value)
    },[field])
    useEffect(() => {
        let child = (children as  []).map((child:any)=>{
            return React.cloneElement(child,{...child.props,onChange:(e: any)=>handleChange(e,child.props.name)})
        })
        setNewChildren(child)
    }, [])
    useImperativeHandle(ref,()=>{
        return {
            field
        }
    },[field])
    return (
        <div>
            {newChildren}
        </div>
    )
})
export default  Form;
