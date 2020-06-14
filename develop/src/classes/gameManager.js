import React, { Component } from 'react'
import Player from "./player";
// import Property from "./property";
// import Space from "./space";
import GameBoard from './components/GameBoard'

export class gameManager extends Component {
    state ={
        turnArray : [],
        playerArray :[],
        bankruptArray : [],
        spacesArray : [],
        //No compromises! No free parking money!

        currentTurn : 0, //This holds the player whose turn it is
        currentPlayerInput: 0,//This holds the player who is currently being prompted. It will usually be the same as currentTurn.
        startingPosition : 0, //TODO: Set this to Go
        //Display the player color accordingly

        doubles : false,

        //The following booleans control which elements should be displayed by React
        expectingRoll : false,
        winScreen : false,
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
        ],
        spaceObjArray : []
    }
    
    // ComponentDidMount()
    // {
             
    // }
    
    AddPlayer = (newPlayerObj) => //This takes a submission of a player's data as input
    {
        const newPlayer = new Player(newPlayerObj.name,startingPosition,newPlayerObj.color,newPlayerObj.icon);
        this.playerArray.push(newPlayer);
        //TODO: Update display state
    }

    SetFirstPlayer = () => {
        let startingPlayerIndex = Math.floor(Math.random()*this.playerArray.length);
        this.currentTurn = this.playerArray[startingPlayerIndex];
        for(let i = 0; i < this.playerArray.length; i++)
        {
            let currentIndex = startingPlayerIndex + i;
            currentIndex >= this.playerArray.length ?
            (currentIndex = currentIndex-this.playerArray.length) : (currentIndex = currentIndex);
            this.turnArray.push(this.playerArray[currentIndex]);
        }
    }

    GameStart = () => {
        //TODO: Change screen to the main game
        this.SetFirstPlayer();
        this.nextTurn();
    }

    nextPlayer= () => {
        let currentPlayerIndex = this.playerArray.indexOf(this.currentTurn);
        currentPlayerIndex++;
        currentPlayerIndex >= this.playerArray.length ? 
        (currentPlayerIndex = currentPlayerIndex-this.playerArray.length) : (currentPlayerIndex = currentPlayerIndex);
        this.currentTurn = this.playerArray[currentPlayerIndex];
        this.nextTurn();
    }

    // TURN METHODS
    nextTurn = () =>{ 
        if(this.turnArray.length === 1)
        {
            this.winScreen = true;
            return;
        }
        this.currentPlayerInput = this.currentTurn;
        this.expectingRoll = true;
    }

    recieveRoll = (roll) => {
        this.expectingRoll = false;
        if(!this.currentTurn.inJail)
        {
            let totalRoll = roll[0]+roll[1];
            if(roll[0] === roll[1])
            {
                this.doubles = true;
                this.expectingRoll = true;
                this.currentTurn.doubleCounter++;
            }
            this.MovePlayerByDistance(this.currentTurn,totalRoll);
        }
        else
        {
            if(roll[0] == roll[1])
            {
                this.expectingRoll = true;
                this.currentTurn.release();
                this.continueTurn();
            }
            else
            {
                
                this.currentTurn.jailCounter++;
                if(this.continueTurn.jailCounter >= 3)
                {
                    this.expectingRoll = true;
                    this.currentTurn.loseMoney(50,null);
                    this.currentTurn.release();
                    this.continueTurn();
                }
            }
        }
    }

    continueTurn =() => {
        if(!this.expectingRoll)
        {
            this.endTurn();
        }
        else if(!this.currentTurn.inJail)
        {
            if(this.currentTurn.doubleCounter >= 3)
            {
                this.currentTurn.SendToJail(jail); //TODO: Create a "Jail" object
                endTurn();
            }
        }
    }

    endTurn =() => {
        this.currentTurn.doubleCounter = 0;
        if(this.currentTurn.balance <= 0) //Checks if this player has been eliminated
        {
            this.playerLoss(this.currentTurn);
        }
        this.nextPlayer();
    }


    //Functional methods
    playerLoss = (player) => {
        let deleteIndex = this.turnArray.indexOf(player);
        this.turnArray.splice(deleteIndex,1);
        this.bankruptArray.push(player);
        //TODO: Display a message to the player
    }

    MovePlayerByDistance = (player, distance) => {
        //This is written under the assumpation that the ids of spaces are their order around the board, starting at zero and increasing.
        //If this is changed, the code to find the destination will need to be adjusted
        let currentPos = player.position.id;
        let newPos = currentPos + distance;
        if(newPos > this.propertyArray.length)
        {
            newPos = newPos - this.playerArray.length;
        }
        let newSpace = this.propertyArray.find(id===newPos);
        player.position = newSpace;
        this.ExecuteSpace(player,space);
    }

    MovePlayerToSpace = (player, space) => {
        player.position = space;
        this.ExecuteSpace(player,space);
    }

    ExecuteSpace(player,space)
    {

    }

    
    rollDice = () => {
        let dice = [];
        dice[0] = Math.floor(Math.random() * 6) + 1;
        dice[1] = Math.floor(Math.random() * 6) + 1;
        return dice;
    }

    playerBankrupt = (player) => {
        // GET THE INDEX OF THE BANKRUPT PLAYER FROM THE TURN ARRAY
        bankruptPlayerIndex=this.turnArray.indexOf(player);
        // SLICE THEM OUT OF THE ARRAY
        this.turnArray=this.turnArray.slice(0, bankruptPlayerIndex-1).concat(this.turnArray.slice(bankruptPlayerIndex, this.turnArray.length))
    }
    
    canBuy = (player,amount) => {
        if(player.balance<amount){
            return false;
        }
        else {
            return true;
        }
    }
    // METHOD CALLED AT BEGINNING TO CREATE PLAYERS AND ADD THEM TO STATE
    createPlayer = (name, playerColor,playerIcon) => {
        player = {
            name : name,
            position : startingPosition,
            color : playerColor,
            icon : playerIcon,
            balance : 1500,
            inJail : false,
            jailCounter : 0,
            doubleCounter : 0,
            ownedProperties : [],
        }
        
    }
    
    
    
    addToPlayerBalance = (player,amount) => {
        player.balance += amount;
    }
    
    subtractFromPlayerBalance = (player,amount) => {
        player.balance -= amount;
    }
    


    // 
    playerBuysProperty = (player,property) => {
        // SET THE PLAYERS STATE TO INCLUDE THE OWNED PROPERTY IN THE ARRAY
        player.ownedProperties.push(property);

        // SET THE PROPERTY'S OWNER
        property.ownedBy = player;
    }
    
    // PLAYER.INJAIL IS TRUE AND PLAYER POSITION MOVED
    playerGoesToJail = (player) => {
        player.inJail = true;
        player.position = jailIndex;
    }
    
    addHouseToProperty = () => {

    }

    mortgageProperty = (property) => {
        property.mortgaged=True;
    }

    
    unmortgageProperty = (property) => {
        property.mortgaged=False;
    }

    addHousesToProperty = (number) => { 
        this.houses+=number;
    }

    getRent = () => {
        return rent[this.houses];
    }

    getPropertyValue = (property) => {
        return property.value;
    }

    checkOwner = (property) => {
        return property.ownedBy;
    }

    render() {
        return (
            <>
            <GameBoard />
            </>
        )
    }
}

export default gameManager;





