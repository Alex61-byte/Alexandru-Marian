import React from 'react'
import './HomeAside.css'
import MeTraveling from '../../Pics/me at Acropolis Final.jpg'


function HomeAside(){
    return(
        
            <div className="col">
                <h1>One of my hobbies is travelling</h1>
            <img src={MeTraveling} alt="Me" width="100%"  />
            </div>
            
       
    )
}

export default HomeAside;