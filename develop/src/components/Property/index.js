import React, { Component } from "react";
import "./style.css";

export class PropertyCard extends Component {
  render() {
    if (this.props.cardType==='property') {
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
    )}
    else {
      return (
      <div className="card cornerCard">
        <div className="cornerCardInterior">
        {this.props.name ? this.props.name : 'Corner Card'}
        </div>
        <div className="cornerCardIconContainer">
            {this.props.name === 'Jail'? <i class="fas fa-trailer fa-4x"></i> : '' }
            {this.props.name === 'Free Parking'? <i class="fas fa-parking fa-4x"></i> : '' }
            {this.props.name === 'Go to Jail'? <i class="fas fa-helicopter fa-4x"></i> : '' }
            {this.props.name === 'Go'? <i class="fas fa-chevron-circle-up fa-4x"></i> : '' }
        </div>
      </div>
    )}
  }
}

export default PropertyCard;
