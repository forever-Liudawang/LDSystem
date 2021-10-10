import React, { Component } from 'react'

class A {
    age?:number
    height?:number
    constructor(age:number,height:number){
        this.age = age
        this.height = height
        console.log("A")
    }
}
class a extends A{
    stat:{}={
        num:10
    }
    static t = 10;
    constructor(){
        super(10,100)
        console.log("a");
    }
}
// const t = new a();
export default class Index2 extends Component<any,{}>{
    state={
        n:1
    }
    constructor(props:{}){
        super(props)
        console.log(this.props,"props");
        console.log(this.state,"state");
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
