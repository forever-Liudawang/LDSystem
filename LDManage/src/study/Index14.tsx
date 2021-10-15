//渲染调优

import React, { lazy, Suspense, Component } from 'react'

const LazyComponet = lazy(()=>import("./Index13"))

class ErrorBoundary extends Component<any,any> {
    constructor(props:any) {
      super(props);
      this.state = { 
          hadError: false 
      };
    }
    // static getDerivedStateFromError(error: any) {
    //   // 更新 state 使下一次渲染可以显示降级 UI
    //   return { hadError: true };
    // }
    componentDidCatch() {
      this.setState({
        hadError:true
      })
    }
    render() {
      if (this.state.hadError) {
        // 你可以渲染任何自定义的降级 UI
        return <h1>Something went wrong.</h1>;
      }
      return this.props.children;
    }
  }
function Son(){
    const a:any = null;
    const b = {...a};
    console.log('b :>> ', b);
    return <div>{a.b}</div>
}
export default class Index14 extends Component {
  state={
    hadError:false
  }
  componentDidCatch() {
    this.setState({
      hadError:true
    })
  }
  render() {
    return <div>
      {this.state.hadError?"出错了":<Son/>}
      <Suspense fallback={<div>loading.....</div>}>
        <LazyComponet/>
      </Suspense>
    </div>
  }
}

