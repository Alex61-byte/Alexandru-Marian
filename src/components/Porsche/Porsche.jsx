import React from'react'
import './Porsche.css'
import musseum from '../../Pics/Cars/museum.jpg'
import now from '../../Pics/Cars/911.jpg'
import then from '../../Pics/Cars/911then.jpg'



function Porsche(){
        return(
            <div className="container-fluid" id="porsche-container">
                <h2>Porsche a brand that keeps the roots untouched</h2>
                <p>Porsche was the production facilties based in Stuttgart Germany, also there you can visit the Porsche Musseum, there is a huge colection of cars, from the first Porsche that was built till the latest models. Also the building of the Musseum is impresive</p>
                <h6>Porche Musseum basiclly shows us the brand history and how they got to the lastest models by preserving the initial dessign</h6>
               

                <img src={musseum} alt="Porche Musseum"  width="50%" className="img-fluid"/>
                
                    <h2>Porsche now and then</h2>
                    <p>Porsche 911 probably the most emblematic model from Porsche, the main concept and design of the model was kept alive by the designers. </p>
                    <img src={now} alt="911 latest" width="40%" className="img-fluid"/>
                    <img src={then} alt="911 first" width="40%" className="img-fluid" />
                
            </div>
        )
}


export default Porsche;