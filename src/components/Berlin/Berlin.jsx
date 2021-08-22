import React from'react'
import'./Berlin.css'
import gate from'../../Pics/Travels/gate.jpg'
import station from'../../Pics/Travels/Berlin Central.jpg'
import wall from '../../Pics/Travels/Berlin Wall.jpg'
import{Image}from 'react-bootstrap'


const locations=[{ id:"02", city: "Berlin", place1: "Brandemburg Gate", descriptionplace1: "In Berlin you can find a lot of things to visit and one of them is The Brandemburg Gate is a neoclassical monument from the 18th century, it was built at the order of the Prussian king Frederik William II after the temporary restoration of order in the Batavian Revolution, also you can visit the Wall Memorial or the Central Station wich I personaly find it very iteresting construction  ", descriptioncity1: "Berlin is the Capital of Germany it has a lot of visitors over the year, well actualy that is normal, you have a lot of places to visit here.", src1:gate, src2: station, src3:wall,alt:"Brandemburg Gate",alt1:"Berlin Central Station",alt2:"Berlin Wall"}]

function Berlin(){
    const citiesList = locations.map((location) =>
        <div className="row-fluid" key={location.id} id="berlin">
            <div className="col-sm-6" id="berlin-description">
               
                <h4> {location.descriptioncity1}</h4>
                <p>{location.descriptionplace1}</p>
            </div>
            <div className="col-sm-6" id="berlin-img" >
               <Image src={location.src1} alt={location.alt}  width="40%"/>
               <Image src={location.src2} alt={location.alt1}  width="40%"/>
               <Image src={location.src3} alt={location.alt2}  width="40%"/>
            </div>
        </div>

    );

    return(
        <div className="container-fluid">{citiesList}</div>
    )
}

export default Berlin;