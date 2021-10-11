import React, { Component, ReactElement,useRef} from 'react'

export default function Index5() {
    const formRef = useRef(null)
    const submit = ()=>{
        (formRef.current as any).submitFormData((data: any)=>{
            console.log('data :>> ', data);
        })
    }
    const reset = ()=>{
        (formRef.current as any).resetFormData()
    }
    return (
        <div>
            <Form ref={formRef}>
                <FormItem name="age" label="年龄">
                    <Input/>
                </FormItem>
                <FormItem name="height" label="身高">
                    <Input/>
                </FormItem>
            </Form>
            <div className="btns" >
                <button className="searchbtn"  onClick={ submit } >提交</button>
                <button className="concellbtn" onClick={ reset } >重置</button>
            </div>
        </div>
    )
}


class Form extends Component<any> {
    state:any={
        formData:{}
    }
    submitFormData=(cb:Function)=>{
        cb({...this.state.formData})
    }
    resetFormData=()=>{
        let newFormData:any= {}
        Object.keys(this.state.formData).forEach(item=>{
            newFormData[item] = ""
        })
        this.setState({formData:newFormData})
    }
    setValue = (name:any,value:any)=>{
        this.setState({
            formData:{
                ...this.state.formData,
                [name]:value
            }
        })
    }
    render() {
        const {children} =  this.props
        const renderEle: any [] = []
        React.Children.forEach(children,(child:any)=>{
            if(child && (child.type as any).displayName === "formItem"){
                const {name} = child.props
                renderEle.push(React.cloneElement(child,{
                    key:name,
                    value:this.state.formData[name],
                    handleChange: this.setValue
                }))
            }
        })
        return renderEle;
    }
}
function FormItem(props:any){
    const {children,name,label,value,handleChange} = props
    const onChange = (value:any)=>{
        handleChange(name,value)
    }
    return <div>
        <span>{label}:</span>
        {
            React.isValidElement(children) && (children.type as any).displayName === "input"
            ?React.cloneElement(children,{value,onChange} as any)
            :null
        }
    </div>
}
FormItem.displayName = "formItem"


function Input(props:any){
    const {value,onChange} = props
    return <input type="text" value={value} onChange={(e)=>onChange && onChange(e.target.value)}/>;
}
Input.displayName = "input"
