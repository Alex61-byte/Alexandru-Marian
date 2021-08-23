import React from 'react'

import './App.css'
import Home from './pages/Home'
import MyOnlineCv from './pages/MyOnlineCv'
import Hobbies from './pages/Hobbies'
import Tehnical from './pages/Tehnical'
import {
  BrowserRouter,
  
  Route,
  HashRouter,


} from "react-router-dom";




function App() {


  return (
    <BrowserRouter>
     <div className="app">
        
        <HashRouter>
          <Route path="/online-cv">
            <MyOnlineCv />
          </Route>
          <Route path="/hobbies">
            <Hobbies />
          </Route>
          <Route path="/tehnical">
            <Tehnical/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
          </HashRouter>
      </div>

      </BrowserRouter>
      );

  
}

      export default App;