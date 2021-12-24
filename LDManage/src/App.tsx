import React from 'react';
import "./index.css"
// import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom"
import { Redirect } from "react-router-dom"
import {Switch,Router,Route} from "./study1/MiniRouter/index"
import {createBrowserHistory as createHistory} from "history"
import Demo1 from "./study1/Demo1"
import Demo2 from "./study1/Demo2"
import NavLink from './study1/MiniRouter/NavLink';
import BookLet from './booklet/Index'
function App(props:React.PropsWithChildren<any>){
  return <BookLet/>
  return <div>
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
          {/* <Redirect to="/demo1"/> */}
        </Switch>
        <NavLink to="/demo1" activeClassName='active'>to demo1</NavLink>
        <NavLink to="/demo2" activeClassName='active'>to demo2</NavLink>
    </Router>
  </div>
}
export default App;
