import React, { Component } from "react";

class Child extends Component {
  render() {
    return <div>
        <input type="text" onChange={(e)=>this.props.handleChange(e.target.value)}/>
    </div>;
  }
}

export default class Index extends Component {
  constructor(props) {
    super(props);
    console.log(props, "props");
  }
  state = {};
  static a = 10;
  handleClick = () => {
    console.log("click0");
  };
  handleChange = (val)=>{
    console.log(val,'val')
  }
  render() {
    return (
      <div onClick={this.handleClick}>
        <Child handleChange={this.handleChange}/>
      </div>
    );
  }
}
Index.prototype.handleClick = () => {
  console.log("click1");
};

function FuncIndex() {}
