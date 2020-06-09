import React from "react";
import Dice from "./components/Dice/index";
import Property from "./components/Property";
import './style.css'

// Calculator component
function App() {
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
