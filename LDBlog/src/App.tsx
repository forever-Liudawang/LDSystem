import React, { createContext, useEffect, useState } from 'react';
import Home from "./pages/Home/Home"
import DetailPage from "./pages/DetailPage/DetailPage"
import {Switch,Route,BrowserRouter as Router,Redirect} from "react-router-dom"
import ArticleDetail from './pages/ArticleDetail/ArticleDetail';
import AboutMe from './pages/AboutMe/AboutMe';
import { animateScroll } from 'react-scroll';
import Header from "./components/Header/Header"
export const showHeaderCtx = createContext(true)
let temp = true
export default function App() {
  const [showHeader, setShowHeader] = useState(true)
  const onScroll = (e:Event)=>{
      const top = window.pageYOffset || 0;
      if(top>=620){
          setShowHeader(false)
          temp = true
      }else{
          if(!temp || showHeader)return
          setShowHeader(true)
      }
  }
  const toTop = ()=>{
      animateScroll.scrollToTop()
  }
  useEffect(()=>{
      window.addEventListener('scroll',onScroll)
      return ()=>{
          window.removeEventListener('scroll',onScroll);
      }
  })
  return (
    <div className="App">
          <Router>
            <Switch>
              <showHeaderCtx.Provider value={showHeader}>
                <Header/>
                <Route path="/" exact component={Home}></Route>
                <Route path="/page/:navId" exact component={DetailPage}></Route>
                <Route path="/articleDetail/:articleId" exact component={ArticleDetail}></Route>
                <Route path="/about" exact component={AboutMe}></Route>
                <Redirect to="/"/>
              </showHeaderCtx.Provider>
            </Switch>
          </Router>
          <div className={`toTop ${showHeader?"hide":"show"}`} onClick={toTop}>
                <img src="/imgs/toTop.png" className="w-full h-full" alt=""/>
          </div>
    </div>
  );
}