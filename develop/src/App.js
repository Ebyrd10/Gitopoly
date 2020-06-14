import React from 'react';

import GameManager, { gameManager } from "./classes/gameManager";
// import Player from "./classes/player";
// import Space from "./classes/space";
// import Property from "./classes/property";
// import GameBoard from './components/GameBoard'
import './style.css'

import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <NavBar/>
      {/* <GameBoard /> */}
      < gameManager />
    </>
  );
}

export default App;
