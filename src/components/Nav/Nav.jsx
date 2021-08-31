import React from 'react'
import $ from 'jquery'
import './Nav.css'
import {
    Link, 
} from "react-router-dom";





function Nav() {
    $(function(){
        $('#nav li a').filter(function(){return this.href===window.location.href}).addClass('active').siblings().removeClass('active')
        
    });
    

   
    
    
    return (
        <div className="container container-fluid " id="nav" >

            <ul className="nav nav-tabs" >
                <li className="nav-item"  >
                    <Link className="nav-link" to="/" id="home" >Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/online-cv" id="cv">My Online CV</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="hobbies" id="hob">Hobbies and things I like</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="tehnical" id="tech">Technical</Link>
                </li>
            </ul>
        </div>
    )
}


export default Nav;