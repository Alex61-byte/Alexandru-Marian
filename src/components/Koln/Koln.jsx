import React from 'react'
import './Koln.css'
import crane from '../../Pics/Travels/CraneHomes-CGN.jpg'
import church from '../../Pics/Travels/church.jpg'
import bridge from '../../Pics/Travels/Hohentzollern Bridge.jpg'




const locations = [{ id: "01", city: "Koln", place1: "Kolner Dom ", descriptionplace1: "Cathedral Church of Saint Peter: It has an impressive arhitecture and curently is the tallest twin-spired church in the world. You can also take a walk on the Rhine's promenade where you can observe 3 impresive buildings that look the same with a modern arhitecture The Crane Homes and also the Hohentollern Bridge witch was built between 1907 and 1911, ", descriptioncity1: "Koln is a City situated in the land of  North Rhine-Westphalia, its a very animated city , there are many institutions of higher education in the city, most notably the University of Cologne, one of Europe's oldest and largest universities", src1: crane, src2: church, alt: "Crane Homes", alt1: "Cologne Cathedral", alt2: "Hohentzollern Bridge", src3: bridge }]


function Koln(){
    const citiesList = locations.map((location) =>
    <div className="row-fluid" key={location.id} id="koln-container">
        <div className="col-sm-6">
        <div id="Koln" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#Koln" data-slide-to="0" className="active"></li>
                    <li data-target="#Koln" data-slide-to="1"></li>
                    <li data-target="#Koln" data-slide-to="2"></li>
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={location.src1} alt={location.alt}   className="img-fluid"/>
                        <div className="carousel-caption">
                            
                            
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={location.src2} alt={location.alt1}  className="img-fluid" />
                        <div className="carousel-caption">
                            
                            
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={location.src3} alt={location.alt2}  className="img-fluid"/>
                        <div className="carousel-caption">
                            
                            
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#Koln" data-slide="prev" >
                    <span className="carousel-control-prev-icon" style={{backgroundColor:'orangered'}}></span>
                </a>
                <a className="carousel-control-next" href="#Koln" data-slide="next" >
                    <span className="carousel-control-next-icon" style={{backgroundColor:'orangered'}}></span>
                </a>
            </div>
           
            
        </div>
        <div className="col-sm-6" id="koln-description">
        <h4> {location.descriptioncity1}</h4>
            <p>{location.descriptionplace1}</p>
           

        </div>
    </div>

);

return(
    <div className="container-fluid">{citiesList}</div>
)
}

export default Koln;