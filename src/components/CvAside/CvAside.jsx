import React from 'react'
import './CvAside.css'
import Me from '../../Pics/Alex-Cv.jpg'

function CvAside(){
    return(
        <div className="col-sm-4" id="cv-aside">
            <img src={Me} alt="Me" width="80%" className="img-fluid img-thumbnail"/>
            <h1>SUMMARY</h1>
            <p>A champion of adaptability, a motivational inspiration for his colleagues , a mentor for his younger colleagues, a Swiss Watch at punctuality.</p>
            <h2>Languages</h2>
            <ul>
                <li>Romanian(Mother Language)</li>
                <li>English(Fluent Speaker)</li>
            </ul>
            <h2>Interests</h2>
            <ul>
                <li>Technology</li>
                <li>Telecomunications</li>
                <li>JavaScript</li>
                <li>ReactJs</li>
                <li>Travel</li>
            </ul>
            
        </div>
    )
}

export default CvAside;