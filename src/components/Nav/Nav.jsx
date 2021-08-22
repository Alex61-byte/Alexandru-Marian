import React from 'react'

import './Nav.css'
import {
    Link
} from "react-router-dom";





function Nav() {
   
    return (
        <div className="container container-fluid" id="nav">

            <ul className="nav nav-tabs" >
                <li className="nav-item" >
                    <Link className="nav-link " to="/" id="home" >Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/online-cv">My Online CV</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="hobbies">Hobbies and things I like</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="tehnical">Technical</Link>
                </li>
            </ul>
        </div>
    )
}


export default Nav;