import React from 'react';
import Dice from './components/Dice/index';
import PlayerIcon from './components/PlayerIcon'
// import GameManager from "./classes/gameManager";
// import Player from "./classes/player";
// import Space from "./classes/space";
// import Property from "./classes/property";
import PropertyCard from "./components/Property";
import './style.css'

// Calculator component
function App() {

  return (
    <>
      <div id="gameBoard">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard /> 
        <PropertyCard />
        <PropertyCard />
        <div id="centerItem" > <Dice /> <PlayerIcon/> </div>
        
      </div>
    </>
  );
}

export default App;
