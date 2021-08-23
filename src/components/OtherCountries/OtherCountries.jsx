import React, { useState } from 'react'
import './OtherCountries.css'
import greece1 from'../../Pics/Travels/athens.jpg'
import greeceF from '../../Pics/Travels/greec flag.jpg'
import sweden1 from '../../Pics/Travels/stockholm.jpg'
import swedenF from '../../Pics/Travels/sweden flag.jpg'
import ceh1 from '../../Pics/Travels/prague.jpg'
import cehF from '../../Pics/Travels/czech-flag.jpg'
import slova1 from '../../Pics/Travels/bratislava.jpg'
import slovaF from '../../Pics/Travels/slovakia-flag.jpg'
import uk1 from '../../Pics/Travels/london.jpg'
import ukF from '../../Pics/Travels/uk-flag.jpg'
import slo1 from '../../Pics/Travels/lublijana.jpg'
import sloF from '../../Pics/Travels/slovenia-flag.jpg'
import at1 from '../../Pics/Travels/salzburg.jpg'
import atF from '../../Pics/Travels/austria-flag.jpg'
import ch1 from '../../Pics/Travels/geneve.jpg'
import chF from '../../Pics/Travels/swiss-flag.jpg'


const countries=[
    {id:"01",name:"Greece",src:greece1,src1:greeceF,description:"From my point of view greek people realy know how to do tourism."},
    {id:"02",name:"Sweden",src:sweden1,src1:swedenF,description:"In one word it whould be Civilisation"},
    {id:"03",name:"Czech Republic",src:ceh1,src1:cehF,description:"A very intresting country,i liked a lot Prague,you can find realy intresting places in Prague to visit"},
    {id:"04",name:"Slovakia",src:slova1,src1:slovaF,description:"Bratislava the capital of Slovakia has a lot to offer fot turists, nice pedestrian streets with restaurants and you can also visit Bratislava Castle or the Tower of Television "},
    {id:"05",name:"UK",src:uk1,src1:ukF,description:"From Uk I liked the most Scotland and its beatifull cities."},
    {id:"06",name:"Slovenia",src:slo1,src1:sloF,description:"In Slovenia i liked the capital,Lublijana, it has a nice fortress near the city center and you can also see the Dragon Bridge "},
    {id:"07",name:"Austria",src:at1,src1:atF,description:"Austria a country were i have been lots of times amd were i will defenetly return. it has great infrastructure and a lot of places to visit."},
    {id:"08",name:"Switzerland",src:ch1,src1:chF,description:"Switzerland, an expensive country for those who don't live there, but a very impresive country in the same time, nice mountain views and lakes."}
    
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