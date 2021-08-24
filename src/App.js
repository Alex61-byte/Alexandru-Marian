import React from 'react'

import './App.css'
import Home from './pages/Home'
import MyOnlineCv from './pages/MyOnlineCv'
import Hobbies from './pages/Hobbies'
import Tehnical from './pages/Tehnical'
import {
  

  HashRouter,

  Route,
  
  


} from "react-router-dom";





function App() {


  return (
    <HashRouter basename="/">
      <div id="app">
           
          
            <Route exact path="/" component={Home} />

            <Route path="/online-cv" component={MyOnlineCv} />
            <Route path="/hobbies" component={Hobbies} />
            <Route path="/tehnical" component={Tehnical} />
          
        </div>
        

    </HashRouter>
      );


}

      export default App;