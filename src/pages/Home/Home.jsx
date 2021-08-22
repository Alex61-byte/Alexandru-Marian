import React from 'react'
import Nav from '../../components/Nav'
import HomeAside from '../../components/HomeAside'
import GeneralDescription from '../../components/GeneralDescription'
import RightAside from '../../components/RightAside'
import './Home.css'
import BackToTop from '../../components/BackToTop/BackToTop'
import Footer from '../../components/Footer/Footer'


function Home(){
    return(
    <div className="container-fluid" id="page-content">
         <GeneralDescription/>
        <Nav/>
        <BackToTop/>
       
        <div className="row-fluid" id="lower-part">
            
            
                <HomeAside/>
            
                <RightAside/>
                
            </div>
            
            <Footer/>
        </div>
    
    )
}

export default Home;