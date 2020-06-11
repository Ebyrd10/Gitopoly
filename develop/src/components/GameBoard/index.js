import React, { Component } from "react";
import PropertyCard from "../Property";
import PlayerStatusScreen from "../PlayerStatusScreen"
import Dice from '../Dice/';
// import PlayerIcon from '../PlayerIcon'
import './style.css'

export class GameBoard extends Component {
    state = {
        propertyArray : [
            {
                id:0,
                name: "Go",
                type: "cornerCard",
                "corner": true
            },
            {
                id:1,
                name: "Mediterranean Avenue",
                type: "property",
                cost: 60,
                color: "#955438",
                rent: [2,10,30,90,160,250],
                group: 'placeholdergroup',
                house: 50
            },
            {
                id:2,            
                name: "Community Chest",
                type: "community-chest"
            },
            {
                id:3,            
                name: "Baltic Avenue",
                type: "property",
                cost: 60,
                color: "#955438",
                rent: [4,20,60,180,320,450],
                group: 'placeholdergroup',
                house: 50
            },
            {
                id:4,            
                name: "Income Tax",
                type: "tax",
                cost: 200
            },
            {
                id:5,            
                name: "Reading Railroad",
                type: "railroad",
                cost: 200,
                group: 'placeholdergroup'[9, 1, 4]
            },
            // {
            //     id:6,            
            //     name: "Oriental Avenue",
            //     type: "property",
            //     cost: 100,
            //     color: "#aae0fa",
            //     rent: [6,30,90,270,400,550],
            //     group: 'placeholdergroup',
            //     house: 50
            // },
            {
                id:7,            
                name: "Chance",
                type: "chance"
            },
            {
                id:21,
                name: "Kentucky Avenue",
                type: "property",
                cost: 220,
                color: "#ed1b24",
                rent: [18,90,250,700,875,1050],
                group: 'placeholdergroup',
                house: 150
            },
            {
                id:8,            
                name: "Vermont Avenue",
                type: "property",
                cost: 100,
                color: "#aae0fa",
                rent: [6,30,90,270,400,550],
                group: 'placeholdergroup',
                house: 50
            },
            {
                id:9,            
                name: "Connecticut Avenue",
                type: "property",
                cost: 120,
                color: "#aae0fa",
                rent: [8,40,100,300,450,600],
                group: 'placeholdergroup',
                house: 50
            },
            {
                id:10,
                name: "Jail",
                type: "cornerCard",
                "corner": true
            },
            {
                id:12,
                name: "Electric Company",
                type: "utility",
                cost: 150,
                group: 'placeholdergroup'[10, 1, 2]
            },
            {
                id:18,
                name: "Tennessee Avenue",
                type: "property",
                cost: 180,
                color: "#f7941d",
                rent: [14,70,200,550,750,950],
                group: 'placeholdergroup',
                house: 100
            },
            {
                id:14,
                name: "Virginia Avenue",
                type: "property",
                cost: 160,
                color: "#d93a96",
                rent: [12,60,180,500,700,900],
                group: 'placeholdergroup',
                house: 100
            },
            {
                id:15,
                name: "Pennsylvania Railroad",
                type: "railroad",
                cost: 200,
                group: 'placeholdergroup'[9, 2, 4]
            },
            {
                id:16,
                name: "St. James Place",
                type: "property",
                cost: 180,
                color: "#f7941d",
                rent: [14,70,200,550,750,950],
                group: 'placeholdergroup',
                house: 100
            },
            {
                id:17,
                name: "Community Chest",
                type: "community-chest"
            },
            {
                id:13,
                name: "States Avenue",
                type: "property",
                cost: 140,
                color: "#d93a96",
                rent: [10,50,150,450,625,750],
                group: 'placeholdergroup',
                house: 100
            },
            {
                id:19,
                name: "New York Avenue",
                type: "property",
                cost: 200,
                color: "#f7941d",
                rent: [16,80,220,600,800,1000],
                group: 'placeholdergroup',
                house: 100
            },
            {
                id:11,
                name: "St. Charles Place",
                type: "property",
                cost: 140,
                color: "#d93a96",
                rent: [10,50,150,450,625,750],
                group: 'placeholdergroup',
                house: 100
            },
            {
                id:22,
                name: "Chance",
                type: "chance"
            },
            {
                id:23,
                name: "Indiana Avenue",
                type: "property",
                cost: 220,
                color: "#ed1b24",
                rent: [18,90,250,700,875,1050],
                group: 'placeholdergroup',
                house: 150
            },
            {
                id:24,
                name: "Illnois Avenue",
                type: "property",
                cost: 240,
                color: "#ed1b24",
                rent: [20,100,300,750,925,1100],
                group: 'placeholdergroup',
                house: 150
            },
            {
                id:25,
                name: "B. & O. Railroad",
                type: "railroad",
                cost: 200,
                group: 'placeholdergroup'[9, 3, 4]
            },
            {
                id:30,
                name: "Go To Jail",
                type: "cornerCard",
                "corner": true
            },
            {
                id:26,
                name: "Atlatic Avenue",
                type: "property",
                cost: 260,
                color: "#fef200",
                rent: [22,110,330,800,975,1150],
                group: 'placeholdergroup',
                house: 150
            },
            {
                id:27,
                name: "Ventura Avenue",
                type: "property",
                cost: 260,
                color: "#fef200",
                rent: [22,110,330,800,975,1150],
                group: 'placeholdergroup',
                house: 150
            },
            {
                id:28,
                name: "Water Works",
                type: "utility",
                cost: 150,
                group: 'placeholdergroup'[10, 2, 2]
            },
            {
                id:29,
                name: "Marvin Gardens",
                type: "property",
                cost: 280,
                color: "#fef200",
                rent: [24,120,360,850,1025,1200],
                group: 'placeholdergroup',
                house: 150
            },
            // {
            //     id:31,
            //     name: "Pacific Avenue",
            //     type: "property",
            //     cost: 300,
            //     color: "#1fb25a",
            //     rent: [26,130,390,900,1100,1275],
            //     group: 'placeholdergroup',
            //     house: 200
            // },
            // {
            //     id:32,
            //     name: "North Carolina Avenue",
            //     type: "property",
            //     cost: 300,
            //     color: "#1fb25a",
            //     rent: [26,130,390,900,1100,1275],
            //     group: 'placeholdergroup',
            //     house: 200
            // },
            {
                id:33,
                name: "Community Chest",
                type: "community-chest"
            },
            // {
            //     id:34,
            //     name: "Pennsylvania Avenue",
            //     type: "property",
            //     cost: 320,
            //     color: "#1fb25a",
            //     "rent": [28,150,450,1000,1200,1400],
            //     group: 'placeholdergroup',
            //     house: 200
            // },
            {
                id:35,
                name: "Shortline",
                type: "railroad",
                cost: 200,
                group: 'placeholdergroup'[9, 4, 4]
            },
            {
                id:36,
                name: "Chance",
                type: "chance"
            },
            {
                id:37,
                name: "Park Place",
                type: "property",
                cost: 350,
                color: "#0072bb",
                "rent": [35,175,500,1100,1300,1500],
                group: 'placeholdergroup',
                house: 200
            },
            {
                id:38,
                name: "Luxury Tax",
                type: "tax",
                cost: 100
            },
            {
                id:39,
                name: "Boardwalk",
                type: "property",
                cost: 400,
                color: "#0072bb",
                "rent": [50,200,600,1400,1700,2000],
                "group": [8, 2, 2],
                house: 200,
            },
            {
                id:20,
                name: "Free Parking",
                type: "cornerCard",
                "corner": true
            }
        ]
    }
  render() {
    return (
      <div id="gameBoard">
        <PlayerStatusScreen />
        {this.state.propertyArray.map((property, index) => 
        // if ((property.type === 'property')||(property.type === 'cornerCard'))
        {if ((property.type === 'property')||(property.type === 'cornerCard'))
        return <PropertyCard key={index} id={index} cardType = {property.type} group = {property.color} name = {property.name} value = {property.cost} ownedBy = {property.ownedBy} mortaged = {property.mortaged}/>
        })}
        <div id="centerItem">
         <Dice /> 
         {/* <PlayerIcon /> */}
        </div>
      </div>
    );
  }
}

export default GameBoard;
