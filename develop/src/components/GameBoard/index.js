import React, { Component } from "react";
import PropertyCard from "../Property";
import PlayerStatusScreen from "../PlayerStatusScreen"
import Dice from '../Dice/';
import PlayerIcon from '../PlayerIcon'
import './style.css'

export class GameBoard extends Component {
  render() {
    return (
      <div id="gameBoard">
        <PlayerStatusScreen />
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
        <div id="centerItem">
         <Dice /> 
         <PlayerIcon />
        </div>
      </div>
    );
  }
}

export default GameBoard;
