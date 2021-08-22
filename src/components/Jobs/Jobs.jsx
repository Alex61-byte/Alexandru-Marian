import React from 'react'


import './Jobs.css'
const jobs=[
    {id:"01", jobTitle:"Technical Manager ",company:" Viscom Engineering Services SRL", jobLocation:"Cluj-Napoca,Cluj,Romania", jobStartEnd:"July,2019-Present",tasks:"Training the Measurement tehnicians also keeping them updated with the latest technology changes(Software and Hardware),Managing the tehnical part of the ongoing projects,coordinating the team to acieve the best results during the measurement execution, also keeping the team motivated when different events occur and can demotivate the team "},
    {id:"02", jobTitle:"Measurement Engineer",company:"P3 Communications Gmbh", jobLocation:"Cluj-Napoca,Cluj,Romania",jobStartEnd:"March, 2019-July, 2019", tasks:"Performing Radio Mobile Measurements all over Europe and not only , using the lastest available mobile devices and cutting edge and specialy designed softwares "},
    {id:"03", jobTitle:"IQOS Coach",company:"Philip Morris Romania",jobLocation:"Cluj-Napoca,Cluj,Romania",jobStartEnd:"August, 2017 - April, 2018",tasks:"Meeting with adult smokers and presenting another method to smoke without any smoke and a potencially less toxic way to use tabbaco"},
    {id:"04", jobTitle:"Real Estate Agent",company:"Beep Estate",jobLocation:"Cluj-Napoca,Cluj,Romania",jobStartEnd:"December, 2016 - July, 2017",tasks:"Exploration of the local Real Estate Market and building a solid property portofolio. Also presenting properties to potential buyers and helping them to take the best decision regarding their future home. "},
    {id:"05", jobTitle:"Sales Consultant",company:"Harrison Consulting",jobLocation:"Cluj-Napoca",jobStartEnd:"March, 2016 - December, 2016",tasks:"My tasks were to offer consultancy to the State Institutions,like scools, City Halls in order for them to acces EU Grant Funds."},
    {id:"06", jobTitle:"Real Estate Agent",company:"Blitz",jobLocation:"Cluj-Napoca,Cluj,Romania",jobStartEnd:"October, 2013 - March, 2016",tasks:"Promoting and selling different type of properties according with the company policy. "},
    {id:"07", jobTitle:"Comercial Manager",company:"Casa Someseana Srl",jobLocation:"Galgau,Salaj,Romania",jobStartEnd:"August, 2012 - August, 2013",tasks:"Managing the entire Guesthouse, managing stocks, team management and organizing different type of events. "},
    {id:"08", jobTitle:"Sales Agent",company:"CTT-Group",jobLocation:"Cluj-Napoca",jobStartEnd:"September, 2009- May, 2013",tasks:"Keeping a good relationship with bussines parteners in order to increes the sales volume"},

];

function Jobs (){
   
    const jobList= jobs.map((job)=>
    <div key={job.id} className="container" id="job-item">
        <h3>{job.jobTitle}</h3>
        <h5>{job.company}</h5>
        <p>{job.jobLocation}</p>
        <p>{job.jobStartEnd}</p>
        
        <p>{job.tasks}</p>

    </div>
    );
    return(
        <div className="container " id='job-list'>
            {jobList}
        </div>
    )

}




export default Jobs;