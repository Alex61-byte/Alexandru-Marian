import React, { useState } from 'react'
import Germany from '../Germany';
import OtherCountries from '../OtherCountries';
import Spain from '../Spain';
import './Countries.css'









function Countries() {
    const [show,setShow]=useState(false)
    const onClickShow=()=>setShow(true)
    const onClickHide=()=>setShow(false)
  
    return (
        <div className="container-fluid" id="country-container">
            <h3 onClick={onClickShow}  className="type-btn"><span id="cont-animation">&#9660;</span> Checkout my favourite visited Countries </h3>
           {show? <Germany/>:null}
            {show?<Spain/>:null}
            {show?<OtherCountries/>:null}
            {show?<h3 onClick={onClickHide} className="btn-container" >Close Travels &#x2716;</h3>:null}
        </div>
    )
}

export default Countries;


