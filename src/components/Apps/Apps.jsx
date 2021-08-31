import React, { useState } from'react'
import '../../pages/Hobbies/Hobbies.css'
import AppsH from '../AppsH/AppsH';
import AppsJ from '../AppsJ/AppsJ';
import AppsOR from '../AppsOR/AppsOR';


import'./Apps.css'










function Apps(){
  const[showH,setShowH]=useState(false)
  const[showJ,setShowJ]=useState(false)
  const[showO,setShowO]=useState(false)
  const show1=()=>setShowH(true)
  const show2=()=>setShowJ(true)
  const show3=()=>setShowO(true)
  const hide1=()=>setShowH(false)
  const hide2=()=>setShowJ(false)
  const hide3=()=>setShowO(false)
    
    return(
        <div className="container-fluid" >
          <div className="container-fluid" style={{marginTop:150}}>
            <h3 onClick={show1} className="type-btn"><span id="cont-animation">&#9660;</span> HTML and CSS Apps</h3>
            {showH? <AppsH/>:null}
            {showH?<h3 onClick={hide1} className="btn-container" >Close  &#x2716;</h3>:null}

          </div>
          <div className="container-fluid" style={{marginTop:70}}>
            <h3 onClick={show2} className="type-btn"><span id="cont-animation">&#9660;</span> HTML,CSS and Javascript Apps </h3>
            {showJ? <AppsJ/>:null}
            {showJ?<h3 onClick={hide2} className="btn-container" >Close  &#x2716;</h3>:null}
          </div>
          <div className="container-fluid" style={{marginTop:70}}>
            <h3 onClick={show3} className="type-btn"> <span id="cont-animation">&#9660;</span>OOP Apps and React Apps</h3>
            {showO? <AppsOR/>:null}
            {showO?<h3 onClick={hide3} className="btn-container" >Close  &#x2716;</h3>:null}
          </div>
          
         

        </div>
    )
}

export default Apps;