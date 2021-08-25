import React from 'react'
import './AppsJ.css'
import comment from'../../Pics/Apps/comment box.jpg'
import rps from'../../Pics/Apps/rock-paper-scissors.jpg'

import random from'../../Pics/Apps/Chuck Norris jokes.jpg'
import todo from'../../Pics/Apps/todo App.png'
import counter from'../../Pics/Apps/digital-counter.png'


const apps=[

    
    {id:"03",name:"Comment Box",description:"Comment box similar with what we see on social media apps built with HTML, CSS and JavaScript",src:comment,link:"https://github.com/Alex61-byte/comment-box"},
    {id:"04",name:"Rock Papper Scissors Game",description:"The game was built in JavaScript, the computer makes a random choice as the user makes his choice",src:rps,link:"https://github.com/Alex61-byte/rock-papper-scissors"},
    {id:"06",name:"Random Images,Jokes,Animals",description:"A funny app Built with HTML, CSS And JavaScript using Fetch GET methon from Api's",src:random,link:"https://github.com/Alex61-byte/api-fetch-get"},
    {id:"07",name:"Todo App",description:"Todo app Built using JavaScript,HTML and CSS, a server in Node Js was used to Fetch GET,POST,PUT and DELETE.",src:todo,link:"https://github.com/Alex61-byte/todoAppVanillaJs"},
    {id:"08",name:"Digital Counter",description:"Digital counter functions developed in JavaSript, the counter can start , stop, reset and save ",src:counter,link:"https://github.com/Alex61-byte/digital-counter"},
]




function AppsJ(){
   

   

    
    const appList=apps.map((app)=>
    <div className="row-fluid" key={app.id}>
       
        <div className="col-sm-6" id="descript">
            <h1>{app.name}</h1>
            <p>{app.description}</p>
            <a href={app.link} className="btn btn-primary " rel="noopener noreferrer" target="_blank">See the code on Github</a>
        </div>
        <div className="col-sm-6" id="image">
            <img src={app.src} alt={app.name} className="img-fluid" />
        </div>
    </div>
    
    )
    return(
        <div className="container-fluid">
        {appList}
        </div>
    )
}

export default AppsJ;