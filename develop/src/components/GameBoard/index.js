import React, { Component } from "react";
import PropertyCard from "../Property";
import PlayerStatusScreen from "../PlayerStatusScreen"
import Dice from '../Dice/';
// import PlayerIcon from '../PlayerIcon'
import PlayerStatusButton from '../PlayerStatusButton'
import './style.css'

export class GameBoard extends Component {
    state = {
        propertyArray : [
            {
                
                name: "Go",
                type: "cornerCard",
                "corner": true
            },
            {
                
                name: "Mediterranean Avenue",
                type: "property",
                cost: 60,
                color: "#955438",
                rent: [2,10,30,90,160,250],
                group: 'placeholdergroup',
                house: 50
            },
            {
                            
                name: "Community Chest",
                type: "community-chest"
            },
            {
                            
                name: "Baltic Avenue",
                type: "property",
                cost: 60,
                color: "#955438",
                rent: [4,20,60,180,320,450],
                group: 'placeholdergroup',
                house: 50
            },
            {
                            
                name: "Income Tax",
                type: "tax",
                cost: 200
            },
            {
                            
                name: "Oriental Avenue",
                type: "property",
                cost: 100,
                color: "#aae0fa",
                rent: [6,30,90,270,400,550],
                group: 'placeholdergroup',
                house: 50
            },
            {

                name: "Jail",
                type: "cornerCard",
                "corner": true
            },
            {
                            
                name: "Chance",
                type: "chance"
            },
            {
                            
                name: "Vermont Avenue",
                type: "property",
                cost: 100,
                color: "#aae0fa",
                rent: [6,30,90,270,400,550],
                group: 'placeholdergroup',
                house: 50
            },
            {
                            
                name: "Connecticut Avenue",
                type: "property",
                cost: 120,
                color: "#aae0fa",
                rent: [8,40,100,300,450,600],
                group: 'placeholdergroup',
                house: 50
            },
            {
                
                name: "Virginia Avenue",
                type: "property",
                cost: 160,
                color: "#d93a96",
                rent: [12,60,180,500,700,900],
                group: 'placeholdergroup',
                house: 100
            },
            {
                
                name: "Free Parking",
                type: "cornerCard",
                "corner": true
            },
            {
                
                name: "Community Chest",
                type: "community-chest"
            },
            {
                
                name: "States Avenue",
                type: "property",
                cost: 140,
                color: "#d93a96",
                rent: [10,50,150,450,625,750],
                group: 'placeholdergroup',
                house: 100
            },
            {
                
                name: "St. Charles Place",
                type: "property",
                cost: 140,
                color: "#d93a96",
                rent: [10,50,150,450,625,750],
                group: 'placeholdergroup',
                house: 100
            },
            {
                
                name: "Chance",
                type: "chance"
            },
            {
                
                name: "Atlatic Avenue",
                type: "property",
                cost: 260,
                color: "#fef200",
                rent: [22,110,330,800,975,1150],
                group: 'placeholdergroup',
                house: 150
            },
            {
                
                name: "Go To Jail",
                type: "cornerCard",
                "corner": true
            },
            {
                
                name: "Ventura Avenue",
                type: "property",
                cost: 260,
                color: "#fef200",
                rent: [22,110,330,800,975,1150],
                group: 'placeholdergroup',
                house: 150
            },
            {
                
                name: "Marvin Gardens",
                type: "property",
                cost: 280,
                color: "#fef200",
                rent: [24,120,360,850,1025,1200],
                group: 'placeholdergroup',
                house: 150
            },
            {
                
                name: "Community Chest",
                type: "community-chest"
            },
            {
                
                name: "Chance",
                type: "chance"
            }
        ]
    }

  render() {
    return (
      <div id="gameBoard" className='grid-container'>
        <PlayerStatusScreen />
        {this.state.propertyArray.map((property, index) => 
        {if ((property.type === 'property')||(property.type === 'cornerCard') || true)
        return <PropertyCard 
        key={index} 
        id={index} 
        cardType = {property.type} 
        group = {property.color} 
        name = {property.name} 
        value = {property.cost} 
        ownedBy = {property.ownedBy} 
        mortaged = {property.mortaged} 
        rent = {property.rent}
        />
        })}
        {/* <div id="centerItem"> */}
        <div className="c">
        <div className='Chest card'>
         <div className='front'>
          <span className='chestSpan'>Community Chest</span>
        </div>
         <div className='back'>
          <span className="sidewaysGitopoly">Gitopoly!</span>
        </div>
         </div>
        < PlayerStatusButton className="Status"/>
         <Dice className="Dice"/> 
         <div className='Chance card'>
         <div className='front'>
          <span className='chanceSpan'>Chance</span>
        </div>
         <div className='back'>
          <span className="sidewaysGitopoly">Gitopoly!</span>
        </div>
         </div>
        </div>
      </div>
    );
  }
}

export default GameBoard;
