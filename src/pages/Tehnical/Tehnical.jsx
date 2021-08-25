import React from 'react'
import Apps from '../../components/Apps'
import AppsHeader from '../../components/AppsHeader'
import Nav from '../../components/Nav'
import BackToTop from '../../components/BackToTop/BackToTop'
import'./Tehnical.css'
import Footer from '../../components/Footer/Footer'

function Tehnical(){
    return(
        <div className="container-fluid" id="technical">
            <div className="container-fluid" id="content-container">
            <Nav/>
            <AppsHeader/>
            <Apps/>
            <BackToTop/>
            </div>
            <Footer/>
        </div>
    )
}

export default Tehnical