import React,{useEffect,useState} from 'react';
import Nav from '../../components/Nav';
import'./MyOnlineCv.css'
import CvAside from '../../components/CvAside/CvAside';
import CvContent from '../../components/CvContent/CvContent';
import BackToTop from '../../components/BackToTop';
import Footer from '../../components/Footer/Footer';
import HeaderCV from '../../components/HeaderCV';



function MyOnlineCv (){
    
    return(
        <div className=" container-fluid" id="my-cv-container">
            <Nav/>
            <HeaderCV/>
            <div className="row-fluid">
                <CvAside/>
                <CvContent/>
                <BackToTop/>
            </div>
            <Footer/>
        </div>
    )
}

export default MyOnlineCv;