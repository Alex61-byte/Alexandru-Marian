import React, { useState } from 'react'
import SpainCity from '../SpainCities'
import './OtherCountries.css'

const countries=[
    {id:"01",name:"Greece",src:"../../src/Pics/Travels/athens.jpg",src1:"../../src/Pics/Travels/greec flag.jpg",description:"From my point of view greek people realy know how to do tourism."},
    {id:"02",name:"Sweden",src:"../../src/Pics/Travels/stockholm.jpg",src1:"../../src/Pics/Travels/sweden flag.jpg",description:"In one word it whould be Civilisation"},
    {id:"03",name:"Czech Republic",src:"../../src/Pics/Travels/prague.jpg",src1:"../../src/Pics/Travels/czech-flag.jpg",description:"A very intresting country,i liked a lot Prague,you can find realy intresting places in Prague to visit"},
    {id:"04",name:"Slovakia",src:"../../src/Pics/Travels/bratislava.jpg",src1:"../../src/Pics/Travels/slovakia-flag.jpg",description:"Bratislava the capital of Slovakia has a lot to offer fot turists, nice pedestrian streets with restaurants and you can also visit Bratislava Castle or the Tower of Television "},
    {id:"05",name:"UK",src:"../../src/Pics/Travels/london.jpg",src1:"../../src/Pics/Travels/uk-flag.jpg",description:"From Uk I liked the most Scotland and its beatifull cities."},
    {id:"06",name:"Slovenia",src:"../../src/Pics/Travels/lublijana.jpg",src1:"../../src/Pics/Travels/slovenia-flag.jpg",description:"In Slovenia i liked the capital,Lublijana, it has a nice fortress near the city center and you can also see the Dragon Bridge "},
    {id:"07",name:"Austria",src:"../../src/Pics/Travels/salzburg.jpg",src1:"../../src/Pics/Travels/austria-flag.jpg",description:"Austria a country were i have been lots of times amd were i will defenetly return. it has great infrastructure and a lot of places to visit."},
    {id:"08",name:"Switzerland",src:"../../src/Pics/Travels/geneve.jpg",src1:"../../src/Pics/Travels/swiss-flag.jpg",description:"Switzerland, an expensive country for those who don't live there, but a very impresive country in the same time, nice mountain views and lakes."}
    
]


function OtherCountries(){
    const [show,setShow]=useState(false)
    const onClickShow=()=>setShow(true)
    const onClickHide=()=>setShow(false)

    const countryList=countries.map((country)=>
            <div className="container-fluid" key={country.id}>
                <div className="row-fluid" >
                    <div className="col-sm-4">
                        <h5>{country.name}</h5>
                        <p>{country.description}</p>

                    </div>
                    <div className="col-sm-4">
                        <img src={country.src} alt={country.name} className="img-fluid" width="100%"/>
                        </div>
                     <div className="col-sm-4">   
                        <img src={country.src1} alt={country.name} className="img-fluid" width="100%"/>
                    </div>
                </div>
            </div>
    )
    return(
           <div className="container-fluid">

                <h3 onClick={onClickShow} className="type-btn">Other Visited Countries&#9660;</h3>
                {show?countryList:null}
                {show? <h3 onClick={onClickHide} style={{margin:"15px"} } className="type-btn">Close Other Visited Countries&#9650;</h3>:null }
           </div> 
    )
}


export default OtherCountries;