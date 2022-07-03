import React from 'react';
import GamePreview from './Home/GamePreview';

const lists = [{
  name: "Legends Arceus",
  caught: 5,
  total: 20,
  badges: 8
},
{
  name: "Brilliant Diamond",
  caught: 5,
  total: 20,
  badges: 8
},
{
  name: "Shield",
  caught: 5,
  total: 20,
  badges: 8
},
{
  name:"Let\'s go Pikachu",
  caught: 5,
  total: 20,
  badges: 8
},
{
  name:"Ultra Sun",
  caught: 5,
  total: 20,
  badges: 8
},
{
  name:"Moon",
  caught: 5,
  total: 20,
  badges: 8
},
{
  name:"Alpha Sapphire",
  caught: 5,
  total: 20,
  badges: 8
},
{
  name:"X",
  caught: 5,
  total: 20,
  badges: 8
},
{
  name:"Black 2",
  caught: 5,
  total: 20,
  badges: 8
},
{
  name:"White",
  caught: 5,
  total: 20,
  badges: 8
},
{
  name:"Heart Gold",
  caught: 5,
  total: 20,
  badges: 8
},
{
  name:"Pearl",
  caught: 5,
  total: 20,
  badges: 8
},
{
  name:"Emerald",
  caught: 5,
  total: 20,
  badges: 8
},
{
  name:"Fire Red",
  caught: 5,
  total: 20,
  badges: 8
},
{
  name:"Crystal",
  caught: 5,
  total: 20,
  badges: 8
},
{
  name:"Red",
  caught: 5,
  total: 20,
  badges: 8
}]
function Home() {
  return(
    <div className='Home'>
      <h1 id='title'>PokeTrack</h1>
      <div id="games">
        {
          lists.map((game) => <GamePreview game={game}/>)
        }
      </div>
    </div>
  );
}

export default Home;