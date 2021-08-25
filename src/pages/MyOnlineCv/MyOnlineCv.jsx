import React from 'react';
import Nav from '../../components/Nav';
import'./MyOnlineCv.css'
import CvAside from '../../components/CvAside/CvAside';
import CvContent from '../../components/CvContent/CvContent';
import BackToTop from '../../components/BackToTop';

import HeaderCV from '../../components/HeaderCV';



function MyOnlineCv (){
    
    return(
        <div className=" container-fluid" id="my-cv-container">
            <Nav/>
            <HeaderCV/>
            <div className="row-fluid" id="content-container">
                <CvAside/>
                <CvContent/>
                <BackToTop/>
                
            </div>
            
        </div>
    )
}

export default MyOnlineCv;