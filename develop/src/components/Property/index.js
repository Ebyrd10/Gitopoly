import React, { Component } from "react";
import "./style.css";

export class Property extends Component {
  render() {
    return (
      <div className="card">
        <div className="cardHeader" style={{backgroundColor: 'red'}}></div>
        <div className="titleContainer">
          <div className="title"> Title Deed</div>
          <div className="subTitle"> Boardwalk</div>
        </div>
        <div className="cardBody">
            <ul className ="bodyList">
                <li> Value: $100 </li>
                <li>Owned By: </li>
                {/* <li>Group: Red</li> */}
                <li>Mortaged: No</li>
            </ul>
        </div>
      </div>
    );
  }
}

export default Property;
