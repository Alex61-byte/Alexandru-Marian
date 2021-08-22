import React from 'react'
import'./GameList.css'


const games=[{id:"01",name:"Don't get angry",description:"This game is one of our favourite game, we play it avery 2 days, first player that makes a hole round with all 4 items wins",src:"../../src/Pics/Games/nu te supara frate.jpg"},
{id:"02",name:"Fast observation cards",description:"This is some attention game.Every round card has a couple of elements witch match with another card, so you need take to cards plece them on the table and who guesses first the common item wins.This game is really fun to play with kids.",src:"../../src/Pics/Games/Atention Game.jpg"},
];

function GameList(){
    const gameList=games.map((game)=>
        <div className="row-fluid" key={game.id} id="games">
            <div className="col-sm-6">
                <h2>{game.name}</h2>
                <p>{game.description}</p>

            </div>
            <div className="col-sm-6">
                <img src={game.src} alt={game.name} className="img-fluid" />
            </div>
        </div>
    )
    return(
        <div className="container-fluid">{gameList}</div>
    )
}
export default GameList;