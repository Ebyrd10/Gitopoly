import React from 'react';
import './style.css';

function Instructions() {
  return (
    <div>
      <h2> Instructions </h2>
      <div>
        <p>
          <span id="list-tag"> Step 1: </span> Select the number of players
        </p>
        <p>
          <span id="list-tag"> Step 2: </span> Create username 
        </p>
        <p>
          <span id="list-tag"> Step 3: </span> Rolle the dice!
        </p>
        <p>
          <span id="list-tag"> Step 4: </span> Select an option to buy or sell
        </p>
        <p>
          <span id="list-tag"> Step 5: </span> Wait for your next turn
        </p>
      </div>
    </div>
  );
}

export default Instructions;
