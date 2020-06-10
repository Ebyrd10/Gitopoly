import React, { Component } from "react";
import "./style.css";
import soundEffect from "./dice.wav"

export class Dice extends Component {
  rollDice = () => {
    const die1 = document.getElementById("die1");
    const die2 = document.getElementById("die2");
    const status = document.getElementById("status");
    const d1 = Math.floor(Math.random() * 6) + 1;
    const d2 = Math.floor(Math.random() * 6) + 1;
    const diceTotal = d1 + d2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    // status.innerHTML = 'You rolled ' + diceTotal + '.';
    status.innerHTML = `<span>${diceTotal}</span>`;
    if (d1 == d2) {
      // status.innerHTML += ' DOUBLES! You get a free turn!!';
      // status.innerHTML += ' Doubles, Free Turn';
      status.innerHTML +=
        "\n <span>D</span><span>o</span><span>u</span><span>b</span><span>l</span><span>e</span><span>s</span>";
    }
    this.playSound(soundEffect);
  };

  playSound = (src) => {
    const sound = document.createElement("audio");
    sound.src = src;
    document.querySelector('#diceContainer').appendChild(sound);
    sound.play();
  }

  render() {
    return (
      <div>
        <div id="diceContainer">
          <div id="numberSlotsContainer">
            <div id="die1" className="dice">
              0
            </div>
            <div id="die2" className="dice">
              0
            </div>
          </div>
          <div id="dieBtn" onClick={this.rollDice}>
            <i className="fas fa-dice-six fa-6x"></i>
          </div>
          {/* <br></br>
        <hr></hr>
        <div>
          <ul>
            <li id="position1" value="true">
              player here{' '}
            </li>
          </ul>
        </div> */}
          <h2 id="status"></h2>
        </div>
      </div>
    );
  }
}

export default Dice;
