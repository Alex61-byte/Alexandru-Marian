import React from 'react'
import './Education.css'


const studies=[
    {id:"01",institution:"Informal School Of IT",domain:"Web Development",timeStamps:"April, 2021- August, 2021", location:"Cluj-Napoca,Cluj,Romania"},
    {id:"02",institution:"FSEGA,Babes-Balyai University",domain:"General Economics", timeStamps:"2006 - 2010", location:"Cluj-Napoca,Cluj,Romania"},
    {id:"03",institution:"Edmond Nicolau Tehnological College",domain:"Mechatronics", timeStamps:"2002-2006",location:"Cluj-Napoca,Cluj,Romania"}
]

function Education(){
    const eduList=studies.map((study)=>
        <div className="container" key={study.id} id="study-item">
            <h3>{study.institution}</h3>
            <h5>{study.domain}</h5>
            <p>{study.location}</p>
            <p>{study.timeStamps}</p>
        </div>
    )
    return(
        <div className="container" id="edu-List">{eduList}</div>
    )
}

export default Education;