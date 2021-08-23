import React from'react'
import BackToTop from '../../components/BackToTop/BackToTop';
import Cars from '../../components/Cars';
import Countries from '../../components/Countries';
import Footer from '../../components/Footer/Footer';
import Games from '../../components/Games';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav'

import'./Hobbies.css'


function Hobbies(){
    return(
        <div className="container-fluid " id="hobbies">
        <div className="container-fluid " id="content-container">
        <Nav/>
        
        <Header/>
        
        <ul className="hobby-list">
            <li ><Countries/></li>
            <li><Cars/></li>
            <li><Games/></li>
        </ul>
        <BackToTop/>
        </div>
        <Footer/>
        </div>
        
    )
}

export default Hobbies;