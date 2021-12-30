import React, { Component } from 'react'
import Form from './Form'
import FormItem from './FormItem'
const Children = (props)=>{
    return <div style={{backgroundColor:'black'}} a={20}>children</div>
}
export default class Index extends Component {
    state = {
        a:4
    }
    render() {
        const {props:childProps} = Children()
        const NewChildren = React.cloneElement(Children(),{style:{...childProps.style,color:'red'}})
        return (
            <div>
                {NewChildren}
                <Form>
                    <FormItem name="name" label="名字">
                        <input/>
                    </FormItem>
                    <FormItem name="age" label="年龄">
                        <input/>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
