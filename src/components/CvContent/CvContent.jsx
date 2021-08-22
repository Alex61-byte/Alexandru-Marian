import React from'react'

import './CvContent.css'
import Contact from '../Contact';
import Jobs from '../Jobs/Jobs';
import Education from '../Education/Education';



function CvContent(){
    
    return(
        <div className="col-sm-8">
            <Contact/>
            <Jobs/>
            <Education/>
        </div>
    )
}


export default CvContent;