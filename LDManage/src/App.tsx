import React from 'react';
import "./index.css"
// import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom"
import {Switch,Router,Route} from "./study1/MiniRouter/index"
import {createBrowserHistory as createHistory} from "history"
import Index1 from "./study/Index1"
import Index2 from "./study/Index2"
import Index3 from "./study/Index3"
import Index4 from "./study/Index4"
import Index5 from "./study/Index5"
import Index6 from "./study/Index6"
import Index7 from "./study/Index7"
import Index8 from "./study/Index8"
import Index10 from "./study/Index10"
import Index11 from "./study/Index11"
import Index12 from "./study/Index12"
import Index13 from "./study/Index13"
import Index14 from "./study/Index14"
import Index15 from "./study/Index15"
import Index16 from "./study/Index16"
import Index17 from "./study/Index17"
import Demo1 from "./study1/Demo1"
import Demo2 from "./study1/Demo2"
import MinRouter from "./study1/MiniRouter/Router"
import WithRouter from './study1/MiniRouter/WithRouter';
import ModalIndex from "./study1/MiniModal/Index"
import IndexHook from "./study1/LHook/index"
import UseQueryTest from './study1/LHook/useQueryTest';
// function App() {
//   return (
//     <div className="App">
//       {/* <Index1/> */}
//       {/* <Index2 a={100}/> */}
//       {/* <Index3/> */}
//       {/* <Index4/> */}
//       {/* <Index5/> */}
//       {/* <Index6 a={10}/> */}
//       {/* <Index7/> */}
//       {/* <Index8/> */}
//       {/* <Index10/> */}
//       {/* <Index11/> */}
//       {/* <Index12/> */}
//       {/* <Index13/> */}
//       {/* <Index14/> */}
//       {/* <Index15/> */}
//       {/* <Index16/> */}
//       <Index17/>
//     </div>
//   );
// }

function App(props:React.PropsWithChildren<any>){
  return <div>
    {/* <ModalIndex/> */}
    {/* <IndexHook/> */}
    <UseQueryTest/>
    <Router>
        <Switch >
          {/*
          <Route path='/router/component'   component={RouteComponent}   /> Route Component形式 
          <Route path='/router/render'  render={(props)=> <RouterRender { ...props }  /> }  {...mes}  />  Render形式 
          <Route path='/router/children'  >  chilren形式 
              <RouterChildren  {...mes} />
          </Route>
          <Route path="/router/renderProps"  >
               (props)=> <RouterRenderProps {...props} {...mes}  /> } renderProps形式
          </Route>
          */}
          <Route path="/demo1" component={Demo1}/>
          <Route path="/demo2" component={Demo2}/>
          {/* <Redirect to="/demo2"/> */}
        </Switch>
    </Router>
  </div>
}
export default App;
