import React from 'react';
import Dice from './components/Dice/index';
import GameManager from "./classes/gameManager";
import Player from "./classes/player";
import Space from "./classes/space";
import Property from "./classes/property";
import Property from "./components/Property";
import './style.css'

// Calculator component
function App() {

  state= {
    
  }

  return (
    <>
      <div id="gameBoard">
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property /> 
        <div id="centerItem" > <Dice /> </div>
      </div>
    </>
  );
}

export default App;
