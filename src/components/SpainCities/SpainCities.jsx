import React from 'react'
import './SpainCities.css'

import guell from '../../Pics/Travels/Parc Guell.jpg'
import church from '../../Pics/Travels/Sagrada Familia.jpg'
import science from '../../Pics/Travels/City of Arts and Science.jpg'
import valencia2 from '../../Pics/Travels/valencia2.jpg'
import canary1 from '../../Pics/Travels/Beach Canary Island.jpg'
import canary2 from '../../Pics/Travels/Las Palmas Cathedral.jpg'



const SpainCities = [
    { id: "01", city: "Barcelona", citydescription: "Barcelona is the capital of Cataluna Region, here you can find the famous basilic Sagrada Familia, but you can also enjoy the sea side and the city center where you will find lots an d lots of terraces and restaurants. For me Barcelona visiting Barcelona was a great pleasure and i will go back with familly as well.", src1: church, src2: guell, },
    { id: "02", city: "Valencia", citydescription: "Valencia the capital of Valancia Authonomus Comunity its an interesting city were the old and new get along very well here you can find the City of Arts an Science a complex of modern buildings wich where built on the bank of a deviated river.", src1: science, src2: valencia2, },
    { id: "03", city: "Las Palmas de Gran Canarias", citydescription: "Las Palmas de Gran Canarias is the major city from the Grand Canary Island, here you can relax at the beach almost al year the coldest temperatures are around 18 degrees Celsius in February, here you can find a Tehnology Musseum its not huge but there some intresting exponates, the Island is cheap they have different type of taxes the UE and Mainland Spain", src1: canary1, src2: canary2, }
];


function SpainCity() {
    const spainList = SpainCities.map((city) =>
        <div className="row" id="city-row" key={city.id}>
            <div className="col-sm-6">
                <img src={city.src1} className="img-fluid" alt="city" width="50%" />
                <img src={city.src2} alt="city" className="img-fluid" width="50%" />
            </div>
            <div className="col-sm-6">
                <h1>{city.city}</h1>
                <p>{city.citydescription}</p>
            </div>

            
        </div>
    );

    return (
        <div className="container-fluid">{spainList}</div>
    )


}

export default SpainCity;

