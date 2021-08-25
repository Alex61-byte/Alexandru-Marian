import React from 'react'
import './AppsH.css'
import blog from'../../Pics/Apps/blogv1.png'
import blogv2 from'../../Pics/Apps/blog responsive.png'
import shop from '../../Pics/Apps/shop ideea1.png'


const apps=[{id:"01",name:"Blog",description:"Blog built in HTML and CSS. Its easy to build you just need to use your imagination.",src:blog,link:"https://github.com/Alex61-byte/blogv1"},
{id:"02",name:"Blog Responsive",description:"Blog built in HTML and CSS with responsive behaviour on diferent type of devices",src:blogv2,link:"https://github.com/Alex61-byte/blog-responsive"},
{id:"05",name:"Shop Ideea",description:"Shop Ideea built in HTML And CSS",src:shop,link:"https://github.com/Alex61-byte/shop-ideea"},]

function AppsH(){
    
    
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

export default AppsH;