import React, { useState } from 'react'
import Berlin from '../Berlin';
import Koln from '../Koln';
import './Germany.css'


function Germany() {
    
    return(
        <div className="container-fluid" id="germany-container">
            <h1>Germany</h1>
            <h2>Germany from my point of view has great road infrastructure , great train infrastructure, first time with an ICE train was WOW, the train has sectors were it reaches 250Km/H and that is amazing. </h2>
            
            <Koln/>
            <Berlin/>
            
           
        </div>
    )
}
export default Germany;


