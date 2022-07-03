import React from 'react';
import Progress from './Progress'

export default function GamePreview({game}) {
    return(
        <div id="Progress">
            <a href={`games/${(game.name).replace(/ /g,"_")}`} id="gamelink">{game.name}</a>
            <Progress caught={game.caught} total={game.total}/>
        </div>
    )
}