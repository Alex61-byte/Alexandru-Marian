import React from 'react'
import'./RightAside.css'
import JsImag from '../../Pics/javascript-736400_1280.png'

function RightAside(){
    return(
       
            <div className="col">
                <h1>But I also like a lot to code in JavaScript and React</h1>
            <img src={JsImag} alt="JavaScript" className="img-fluid" />
            </div> 
    )
}

export default RightAside;