import React from 'react'

import './App.css'
import Home from './pages/Home'
import MyOnlineCv from './pages/MyOnlineCv'
import Hobbies from './pages/Hobbies'
import Tehnical from './pages/Tehnical'
import {
  BrowserRouter,

  Route,
  
  Switch,


} from "react-router-dom";




function App() {


  return (
    <BrowserRouter>
      <div className="app">

        <Switch>
          <Route path="/online-cv">
            <MyOnlineCv />
          </Route>
          <Route path="/hobbies">
            <Hobbies />
          </Route>
          <Route path="/tehnical">
            <Tehnical />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>

    </BrowserRouter>
  );


}

export default App;