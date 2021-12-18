import React, { createContext, useEffect, useState } from 'react';
import Home from "./pages/Home/Home"
import DetailPage from "./pages/ArticleCate/ArticleCate"
import {Switch,Route,HashRouter as Router,Redirect} from "react-router-dom"
import ArticleDetail from './pages/ArticleDetail/ArticleDetail';
import AboutMe from './pages/Music/Music';
import { animateScroll } from 'react-scroll';
import Header from "./components/Header/Header"
import ArticleSearch from "./pages/ArticleSearch/ArticleSearch"
import toTopImg from "./assets/toTop.png"
export const showHeaderCtx = createContext(true)
let temp = true
let prevTop = 0;
export default function App() {
  const [showHeader, setShowHeader] = useState(true)
  const onScroll = (e:Event)=>{
      const top = window.pageYOffset || 0;
      console.log(top,prevTop,"top")
      if(top>=prevTop){
          setShowHeader(false)
          temp = true
      }else{
          // if(!temp || showHeader)return
          setShowHeader(true)
      }
      prevTop = top;
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
                <Route path="/app" exact component={Home}></Route>
                <Route path="/app/:navId" exact component={DetailPage}></Route>
                <Route path="/articleDetail/:articleCateId/:articleId" exact component={ArticleDetail}></Route>
                <Route path="/music" exact component={AboutMe}></Route>
                <Route path="/articleSearch" exact component={ArticleSearch}></Route>
              </showHeaderCtx.Provider>
            </Switch>
            <Redirect exact={true} strict={true} from="/" to="/app"/>
          </Router>
          <div className={`toTop ${showHeader?"hide":"show"}`} onClick={toTop}>
                <img src={toTopImg} className="w-full h-full" alt=""/>
          </div>
    </div>
  );
}