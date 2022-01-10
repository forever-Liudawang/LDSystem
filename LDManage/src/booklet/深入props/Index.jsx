import React, { Component } from 'react'
import Form from './Form'
import FormItem from './FormItem'
import Input from './Input'
const Children = (props)=>{
    return <div style={{backgroundColor:'black'}} a={20}>children</div>
}
export default class Index extends Component {
    state = {
        a:4
    }
    formRef = React.createRef()
    handleSubmit = ()=>{
        console.log(this.formRef.current,'dom')
    }
    handleReset = () => {

    }
    render() {
        const {props:childProps} = Children()
        console.log('childProps :>> ', childProps);
        // const NewChildren = React.cloneElement(<div style={{backgroundColor:'black'}} a={20}>children</div>,{style:{...childProps.style,color:'red'}})
        return (
            <div>
                <Form ref={this.formRef}>
                    <FormItem name="name" label="名字">
                        {/* <input/> */}
                        <Input/>
                        {/* <input/> */}
                    </FormItem>
                    <FormItem name="age" label="年龄">
                        {/* <input/> */}
                        <Input/>
                    </FormItem>
                </Form>
                <div>
                    <button onClick={this.handleSubmit}>提交</button>
                    <button onClick={this.handleReset}>重置</button>
                </div>
            </div>
        )
    }
}
