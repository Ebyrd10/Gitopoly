import React from 'react';
import './style.css';

function About() {
  return (
    <div>
      <h2>About Gitopoly</h2>
      <h4>
        A full <span id="list-tag"> MERN </span> stack web application revolving around a board game where
        properties are bought and sold by players.
      </h4>
      <div>
        <h4>
          <span id="list-tag"> Mongo DB </span> //{' '}
          <span id="list-tag"> Express JS </span> //{' '}
          <span id="list-tag"> React </span> //{' '}
          <span id="list-tag"> Node </span>
        </h4>
      </div>
    </div>
  );
}

export default About;
