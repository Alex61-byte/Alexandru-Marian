

import React from'react'

import blog from'../../Pics/Apps/blogv1.png'
import blogv2 from'../../Pics/Apps/blog responsive.png'
import comment from'../../Pics/Apps/comment box.jpg'
import rps from'../../Pics/Apps/rock-paper-scissors.jpg'
import shop from '../../Pics/Apps/shop ideea1.png'
import random from'../../Pics/Apps/Chuck Norris jokes.jpg'
import todo from'../../Pics/Apps/todo App.png'
import counter from'../../Pics/Apps/digital-counter.png'
import ships from'../../Pics/Apps/Space-Ships.png'
import reacttodo from'../../Pics/Apps/Todo-React.png'

import'./Apps.css'







const apps=[
    {id:"01",name:"Blog",description:"Blog built in HTML and CSS. Its easy to build you just need to use your imagination.",src:blog,link:"https://github.com/Alex61-byte/blogv1"},
    {id:"02",name:"Blog Responsive",description:"Blog built in HTML and CSS with responsive behaviour on diferent type of devices",src:blogv2,link:"https://github.com/Alex61-byte/blog-responsive"},
    {id:"03",name:"Comment Box",description:"Comment box similar with what we see on social media apps built with HTML, CSS and JavaScript",src:comment,link:"https://github.com/Alex61-byte/comment-box"},
    {id:"04",name:"Rock Papper Scissors Game",description:"The game was built in JavaScript, the computer makes a random choice as the user makes his choice",src:rps,link:"https://github.com/Alex61-byte/rock-papper-scissors"},
    {id:"05",name:"Shop Ideea",description:"Shop Ideea built in HTML And CSS",src:shop,link:"https://github.com/Alex61-byte/shop-ideea"},
    {id:"06",name:"Random Images,Jokes,Animals",description:"A funny app Built with HTML, CSS And JavaScript using Fetch GET methon from Api's",src:random,link:"https://github.com/Alex61-byte/api-fetch-get"},
    {id:"07",name:"Todo App",description:"Todo app Built using JavaScript,HTML and CSS, a server in Node Js was used to Fetch GET,POST,PUT and DELETE.",src:todo,link:"https://github.com/Alex61-byte/todoAppVanillaJs"},
    {id:"08",name:"Digital Counter",description:"Digital counter functions developed in JavaSript, the counter can start , stop, reset and save ",src:counter,link:"https://github.com/Alex61-byte/digital-counter"},
    {id:"09",name:"Space Ships",description:" Space Ships has been built using Javascript OOP concepts, a ship can be controled by the keyboard arrows but only it has been activated with a click.",src:ships,link:"https://github.com/Alex61-byte/space-ships"},
    {id:"10",name:"Todo App with React",description:"Well this Todo app has been built with react has the same functionalities like the other.",src:reacttodo,link:"https://github.com/Alex61-byte/Todo-app-React"}
];

function Apps(){
    
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
        <div className="container-fluid">{appList}</div>
    )
}

export default Apps;