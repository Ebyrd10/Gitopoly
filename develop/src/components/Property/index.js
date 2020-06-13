import React, { Component } from "react";
import "./style.css";

export class PropertyCard extends Component {
  render() {
    if (this.props.cardType==='property') {
    return (
        <div className='card'>

        <div className={this.props.mortaged === true ? 'front mortaged' : 'front'}>
          <div className="cardHeader" style={{backgroundColor: this.props.group ? this.props.group: 'red'}}></div>
          <div className="titleContainer">
            <div className="title"> Title Deed</div>
            <div className="subTitle"> {this.props.name ? this.props.name : 'boardwalk'}</div>
          </div>
          <div className="cardBody">
              <div className ="bodyList">
                  <div> Value: ${this.props.value ? this.props.value : 100} </div>
                  <div>{this.props.ownedBy ? `Owned By : ${this.props.ownedBy}` : 'For Sale'}</div>
                  {/* <div>Mortaged:{this.props.mortaged ? 'Yes' : 'No'}</div> */}
              </div>
          </div>
          </div>

        <div className={this.props.mortaged === true ? 'back mortaged' : 'back'}>
            <div className="rentTitle"> Rent Per House</div>
              <div className ="rentList">
              {this.props.rent.map((rent, index) => 
                <div className='rentListItem'>{index} : ${rent} </div>
              )}
              </div>
          </div> 

        
        </div>
    )}
    else {
      return (
      <div className="card cornerCard">
        <div className = "front">
        <div className="cornerCardInterior">
        {this.props.name ? this.props.name : 'Corner Card'}
        {/* <input type="text" value={this.props.name ? this.props.name : 'Corner Card'} onChange= {this.OnTitleChange} name='cardTitle' style={{border: 'none', background: 'transparent'}}/> */}
        </div>
        <div className="cornerCardIconContainer">
            {this.props.name === 'Jail'? <i class="fas fa-trailer fa-4x"></i> : '' }
            {this.props.name === 'Free Parking'? <i class="fas fa-parking fa-4x"></i> : '' }
            {this.props.name === 'Go To Jail'? <i class="fas fa-helicopter fa-4x"></i> : '' }
            {this.props.name === 'Go'? <i class="fas fa-chevron-circle-up fa-4x"></i> : '' }
        </div>
        </div>
        <div className='back'>
          <span className="sidewaysGitopoly">Gitopoly!</span>
        </div>
      </div>
    )}
  }
}

export default PropertyCard;
