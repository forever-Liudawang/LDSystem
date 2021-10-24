import React from 'react';
import Home from "./pages/Home/Home"
import DetailPage from "./pages/DetailPage/DetailPage"
import {Switch,Route,BrowserRouter as Router,Redirect} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
