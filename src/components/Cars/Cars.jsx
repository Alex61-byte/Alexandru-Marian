import React, { useState } from 'react'
import Porsche from '../Porsche'
import Vw from'../Vw'

import './Cars.css'


function Cars(){
    const [showCars,setShowCars]=useState(false)
    const onClickShow=()=>setShowCars(true)
    const onClickHide=()=>setShowCars(false)
    return(
        <div className="container-fluid" id="cars-container">
            <h3 onClick={onClickShow} className="type-btn">My Favourite Cars &#9660;</h3>
            {showCars?<Porsche/>:null}
            {showCars?<Vw/>:null}
            {showCars? <h3 onClick={onClickHide} className="type-btn">Close car section &#x2716;</h3>:null }
        </div>
    )
}

export default Cars;