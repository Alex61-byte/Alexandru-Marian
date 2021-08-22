import React from 'react'
import './Vw.css'


function Vw(){
    return(
        <div className="container-fluid" id="vw-container">
                    <h1>Volkswagen</h1> 
         <p>Well if you don't like spending to much money on cars, but you want a quality car, I think Volkwagen will meet your needs and standards.For me it did and i chose a clasic model from Volkswagen, The Golf.</p>
         <p>It met the needs and standards for me, more exactly when you have a family and travel pretty often you need space for luggages, but also confort while driving, the interior looks nice is not a Porsche interior but still very well build in comparation with other cars from the same class</p>
         <p>The Golf Model is Built to meet the needs for most of potential car buyers, well if you are young you might be atrracted by the Hatch version , if you have a family you might like the Variant version</p>
         <div className="row-fluid">
             <div className="col-sm-6">
                 <p>Volkswagen Golf Hatch</p>
                 <img src="../../src/Pics/Cars/Vw hatch.jpg" alt="Golf Hatch" className="img-fluid" />
             </div>
             <div className="col-sm-6">
                 <p>Volkswagen Golf Variant</p>
                 <img src="../../src/Pics/Cars/Variant.jpg" alt="Golf Variant" className="img-fluid" />
             </div>
         </div>
        </div>
    )
}

export default Vw;