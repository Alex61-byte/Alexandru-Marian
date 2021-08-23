import React from'react'
import'./Berlin.css'
import gate from'../../Pics/Travels/gate.jpg'
import station from'../../Pics/Travels/Berlin Central.jpg'
import wall from '../../Pics/Travels/Berlin Wall.jpg'



const locations=[{ id:"02", city: "Berlin", place1: "Brandemburg Gate", descriptionplace1: "In Berlin you can find a lot of things to visit and one of them is The Brandemburg Gate is a neoclassical monument from the 18th century, it was built at the order of the Prussian king Frederik William II after the temporary restoration of order in the Batavian Revolution, also you can visit the Wall Memorial or the Central Station wich I personaly find it very iteresting construction  ", descriptioncity1: "Berlin is the Capital of Germany it has a lot of visitors over the year, well actualy that is normal, you have a lot of places to visit here.", src1:gate, src2: station, src3:wall,alt:"Brandemburg Gate",alt1:"Berlin Central Station",alt2:"Berlin Wall"}]

function Berlin(){
    const citiesList = locations.map((location) =>
    <div className="row-fluid" key={location.id} id="berlin">
        <div className="col-sm-6" id="berlin-description">
           
            <h4> {location.descriptioncity1}</h4>
            <p>{location.descriptionplace1}</p>
        </div>
        <div className="col-sm-6" id="berlin-img" >
            <div id="BerlinCarousel" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators" >
                    <li data-target="#BerlinCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#BerlinCarousel" data-slide-to="1"></li>
                    <li data-target="#BerlinCarousel" data-slide-to="2"></li>
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={location.src1} alt={location.alt}   className="img-fluid"/>
                        
                    </div>
                    <div className="carousel-item">
                        <img src={location.src2} alt={location.alt1}  className="img-fluid" />
                        
                    </div>
                    <div className="carousel-item">
                        <img src={location.src3} alt={location.alt2}  className="img-fluid"/>
                       
                    </div>
                </div>
                <a className="carousel-control-prev" href="#BerlinCarousel" data-slide="prev">
                    <span className="carousel-control-prev-icon" style={{backgroundColor:'orangered'}} ></span>
                </a>
                <a className="carousel-control-next" href="#BerlinCarousel" data-slide="next" >
                    <span className="carousel-control-next-icon" style={{backgroundColor:'orangered'}}></span>
                </a>
            </div>

        </div>
    </div>

);

return(
    <div className="container-fluid">{citiesList}</div>
)
}

export default Berlin;