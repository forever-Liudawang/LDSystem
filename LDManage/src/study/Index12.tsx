//高阶组件
import React, { Component, useEffect, useRef, useState } from 'react'
import Index5 from "./Index5"
function DynimcalHoc(loadComponent:Function) {
    return class Container extends React.Component<any,any> {
        state:any={
            Component:null
        }
        componentDidMount(){
            loadComponent().then((module:any)=>{
                this.setState({
                    Component:module.default
                })
            })
        }
        render(){
            const {Component} = this.state
            console.log(Component,"prot")
            return Component?<Component/>:"加载中....."
        }
    }
}


const Index12 = DynimcalHoc(()=>import("./Index1"))

export default Index12;

