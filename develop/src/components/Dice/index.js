import React, { Component } from 'react';
import './style.css';

export class Dice extends Component {
  rollDice = () => {
    var die1 = document.getElementById('die1');
    var die2 = document.getElementById('die2');
    var status = document.getElementById('status');
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1 + d2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    status.innerHTML = 'You rolled ' + diceTotal + '.';
    if (d1 == d2) {
      status.innerHTML += ' DOUBLES! You get a free turn!!';
    }
  };

  render() {
    return (
      <div>
        <h1> hi </h1>
        <div id="die1" className="dice">
          0
        </div>
        <div id="die2" className="dice">
          0
        </div>
        <button onClick={this.rollDice}>Roll Dice</button>
        <h2 id="status"></h2>
        <br></br>
        <hr></hr>
        <div>
          <ul>
            <li id="position1" value="true">
              player here{' '}
            </li>
            <li id="position2" value="true">
              now here
            </li>
            <li id="position3" value="true">
              and here again
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Dice;
