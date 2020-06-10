import React, { Component } from "react";
import "./style.css";

export class PropertyCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="cardHeader" style={{backgroundColor: this.props.group ? this.props.group: 'red'}}></div>
        <div className="titleContainer">
          <div className="title"> Title Deed</div>
          <div className="subTitle"> {this.props.name ? this.props.name : 'boardwalk'}</div>
        </div>
        <div className="cardBody">
            <ul className ="bodyList">
                <li> Value: ${this.props.value ? this.props.value : 100} </li>
                <li>Owned By:{this.props.ownedBy ? this.props.ownedBy : ''}</li>
                <li>Mortaged:{this.props.mortaged ? 'Yes' : 'No'}</li>
            </ul>
        </div>
      </div>
    );
  }
}

export default PropertyCard;
