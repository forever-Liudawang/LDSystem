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
      console.log("1222===>>>>>>>>>>>>>>>>>>>>.")
      if (this.state.hadError) {
        // 你可以渲染任何自定义的降级 UI
        return <h1>Something went wrong.</h1>;
      }
      return this.props.children;
    }
  }
function Son(){
    const a:any = [];
    return <div>{a[0].a}</div>
}
export default function Index14() {
    return (
        <div>
            <ErrorBoundary>
                <Son/>
            </ErrorBoundary>
            {/* <Suspense fallback={<div>loading.....</div>}>
                    <LazyComponet/>
            </Suspense> */}
        </div>
    )
}
