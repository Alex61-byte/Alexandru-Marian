import React from 'react'
import './AppsOR.css'

import ships from'../../Pics/Apps/Space-Ships.png'
import reacttodo from'../../Pics/Apps/Todo-React.png'

const apps=[
    {id:"09",name:"Space Ships",description:" Space Ships has been built using Javascript OOP concepts, a ship can be controled by the keyboard arrows but only it has been activated with a click.",src:ships,link:"https://github.com/Alex61-byte/space-ships"},
    {id:"10",name:"Todo App with React",description:"Well this Todo app has been built with react has the same functionalities like the other.",src:reacttodo,link:"https://github.com/Alex61-byte/Todo-app-React"}
]

function AppsOR(){
   

    
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
        <div className="container-fluid" >
            {appList}
        </div>
    )
}

export default AppsOR;