import React from 'react';
import Progress from './Progress'
//import vars from '/vars.json'

export default function GamePreview({game}) {
    return(
        <div id="Progress">
            <a href={`games/${(game.name).replace(/ /g,"_")}`} id="gamelink">{game.name}</a>
            <Progress caught={game.caught} total={game.total}/>
            <span id="0">Status: Finished</span><br/>
            <span>Badges:</span>
            <div id="Badges">
                
            </div>
            <span id="2">Final Team:</span>
            <div id="FinalTeam">
                <img id="0" src='https://img.pokemondb.net/sprites/sword-shield/icon/bulbasaur.png'/>
                <img id="1" src='https://img.pokemondb.net/sprites/sword-shield/icon/altaria.png'/>
                <img id="2" src='https://img.pokemondb.net/sprites/sword-shield/icon/charizard.png'/>
                <img id="3" src='https://img.pokemondb.net/sprites/sword-shield/icon/lunala.png'/>
                <img id="4" src='https://img.pokemondb.net/sprites/sword-shield/icon/yanma.png'/>
                <img id="5" src='https://img.pokemondb.net/sprites/sword-shield/icon/hoothoot.png'/>
            </div>
        </div>
    )
}