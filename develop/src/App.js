import React from 'react';
import Dice from './components/Dice/index';
// import GameManager from "./classes/gameManager";
// import Player from "./classes/player";
// import Space from "./classes/space";
// import Property from "./classes/property";
import PropertyCard from "./components/Property";
import PlayerStatusScreen from "./components/PlayerStatusScreen"
import './style.css'

// Calculator component
function App() {

  return (
    <>
    <PlayerStatusScreen/>
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
        <PropertyCard />
        <PropertyCard /> 
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <div id="centerItem" > <Dice /> </div>
      </div>
    </>
  );
}

export default App;
