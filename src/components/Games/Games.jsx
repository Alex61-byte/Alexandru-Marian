import React, { useState } from 'react'
import GameList from '../GameList'
import './Games.css'



function Games(){
    const [showGames,setShowGames]=useState(false)
    const onClickShow=()=>setShowGames(true)
    const onClickHide=()=>setShowGames(false)
    return(
        <div className="container-fluid" style={{padding:"20px"}} id="games-container">
            <h3 onClick={onClickShow} className="type-btn">Games &#9660;</h3>
            {showGames? <h3>In my free time i like to play games with my doughter</h3>:null }
            {showGames? <GameList/>:null}
            {showGames?<h3 onClick={onClickHide} className="btn-container" >Close Games &#x2716;</h3>:null}
        </div>
    )
}

export default Games;