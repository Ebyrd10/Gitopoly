import Player from "./player";
import Property from "./property";
import Space from "./space";
import React from "react";


class GameManager extends ReactComponent{
    state ={
        turnArray = [],
        playerArray=[],
        bankruptArray = [],
        spacesArray = [],
        //No compromises! No free parking money!

        currentTurn, //This holds the player whose turn it is
        currentPlayerInput,//This holds the player who is currently being prompted. It will usually be the same as currentTurn.
        startingPosition, //TODO: Set this to Go
        //Display the player color accordingly

        doubles = false,

        //The following booleans control which elements should be displayed by React
        expectingRoll = false,
        winScreen = false,
        propertyArray=[
       
            {
                id: 0,
                name: "Go",
                type: "go",
                "corner": true
            },
            {
                id:1,
                name: "Mediterranean Avenue",
                type: "property",
                cost: 60,
                color: "#955438",
                rent: [2,10,30,90,160,250],
                group: ,
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
                group: ,
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
                group: [9, 1, 4]
            },
            {
                id:6,            
                name: "Oriental Avenue",
                type: "property",
                cost: 100,
                color: "#aae0fa",
                rent: [6,30,90,270,400,550],
                group: ,
                house: 50
            },
            {
                id:7,            
                name: "Chance",
                type: "chance"
            },
            {
                id:8,            
                name: "Vermont Avenue",
                type: "property",
                cost: 100,
                color: "#aae0fa",
                rent: [6,30,90,270,400,550],
                group: ,
                house: 50
            },
            {
                id:9,            
                name: "Connecticut Avenue",
                type: "property",
                cost: 120,
                color: "#aae0fa",
                rent: [8,40,100,300,450,600],
                group: ,
                house: 50
            },
            {
                id:10,
                name: "Jail",
                type: "jail",
                "corner": true
            },
            {
                id:11,
                name: "St. Charles Place",
                type: "property",
                cost: 140,
                color: "#d93a96",
                rent: [10,50,150,450,625,750],
                group: ,
                house: 100
            },
            {
                id:12,
                name: "Electric Company",
                type: "utility",
                cost: 150,
                group: [10, 1, 2]
            },
            {
                id:13,
                name: "States Avenue",
                type: "property",
                cost: 140,
                color: "#d93a96",
                rent: [10,50,150,450,625,750],
                group: ,
                house: 100
            },
            {
                id:14,
                name: "Virginia Avenue",
                type: "property",
                cost: 160,
                color: "#d93a96",
                rent: [12,60,180,500,700,900],
                group: ,
                house: 100
            },
            {
                id:15,
                name: "Pennsylvania Railroad",
                type: "railroad",
                cost: 200,
                group: [9, 2, 4]
            },
            {
                id:16,
                name: "St. James Place",
                type: "property",
                cost: 180,
                color: "#f7941d",
                rent: [14,70,200,550,750,950],
                group: ,
                house: 100
            },
            {
                id:17,
                name: "Community Chest",
                type: "community-chest"
            },
            {
                id:18,
                name: "Tennessee Avenue",
                type: "property",
                cost: 180,
                color: "#f7941d",
                rent: [14,70,200,550,750,950],
                group: ,
                house: 100
            },
            {
                id:19,
                name: "New York Avenue",
                type: "property",
                cost: 200,
                color: "#f7941d",
                rent: [16,80,220,600,800,1000],
                group: ,
                house: 100
            },
            {
                id:20,
                name: "Free Parking",
                type: "free-parking",
                "corner": true
            },
            {
                id:21,
                name: "Kentucky Avenue",
                type: "property",
                cost: 220,
                color: "#ed1b24",
                rent: [18,90,250,700,875,1050],
                group: ,
                house: 150
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
                group: ,
                house: 150
            },
            {
                id:24,
                name: "Illnois Avenue",
                type: "property",
                cost: 240,
                color: "#ed1b24",
                rent: [20,100,300,750,925,1100],
                group: ,
                house: 150
            },
            {
                id:25,
                name: "B. & O. Railroad",
                type: "railroad",
                cost: 200,
                group: [9, 3, 4]
            },
            {
                id:26,
                name: "Atlatic Avenue",
                type: "property",
                cost: 260,
                color: "#fef200",
                rent: [22,110,330,800,975,1150],
                group: ,
                house: 150
            },
            {
                id:27,
                name: "Ventura Avenue",
                type: "property",
                cost: 260,
                color: "#fef200",
                rent: [22,110,330,800,975,1150],
                group: ,
                house: 150
            },
            {
                id:28,
                name: "Water Works",
                type: "utility",
                cost: 150,
                group: [10, 2, 2]
            },
            {
                id:29,
                name: "Marvin Gardens",
                type: "property",
                cost: 280,
                color: "#fef200",
                rent: [24,120,360,850,1025,1200],
                group: ,
                house: 150
            },
            {
                id:30,
                name: "Go To Jail",
                type: "go-to-jail",
                "corner": true
            },
            {
                id:31,
                name: "Pacific Avenue",
                type: "property",
                cost: 300,
                color: "#1fb25a",
                rent: [26,130,390,900,1100,1275],
                group: ,
                house: 200
            },
            {
                id:32,
                name: "North Carolina Avenue",
                type: "property",
                cost: 300,
                color: "#1fb25a",
                rent: [26,130,390,900,1100,1275],
                group: ,
                house: 200
            },
            {
                id:33,
                name: "Community Chest",
                type: "community-chest"
            },
            {
                id:34,
                name: "Pennsylvania Avenue",
                type: "property",
                cost: 320,
                color: "#1fb25a",
                "rent": [28,150,450,1000,1200,1400],
                group: ,
                house: 200
            },
            {
                id:35,
                name: "Shortline",
                type: "railroad",
                cost: 200,
                group: [9, 4, 4]
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
                group: ,
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
            }
        ],
        spaceObjArray = []
    }
    
    ComponentDidMount()
    {
             
    }
    
    AddPlayer(newPlayerObj) //This takes a submission of a player's data as input
    {
        newPlayer = new Player(newPlayerObj.name,startingPosition,newPlayerObj.color,newPlayerObj.icon);
        this.playerArray.push(newPlayer);
        //TODO: Update display state
    }

    SetFirstPlayer() {
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

    GameStart() {
        //TODO: Change screen to the main game
        this.SetFirstPlayer();
        this.nextTurn();
    }

    nextPlayer() {
        let currentPlayerIndex = this.playerArray.indexOf(this.currentTurn);
        currentPlayerIndex++;
        currentPlayerIndex >= this.playerArray.length ? 
        (currentPlayerIndex = currentPlayerIndex-this.playerArray.length) : (currentPlayerIndex = currentPlayerIndex);
        this.currentTurn = this.playerArray[currentPlayerIndex];
        this.nextTurn();
    }

    // TURN METHODS
    nextTurn() { 
        if(this.turnArray.length === 1)
        {
            this.winScreen = true;
            return;
        }
        this.currentPlayerInput = this.currentTurn;
        this.expectingRoll = true;
    }

    recieveRoll(roll) {
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

    continueTurn() {
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

    endTurn() {
        this.currentTurn.doubleCounter = 0;
        if(this.currentTurn.balance <= 0) //Checks if this player has been eliminated
        {
            this.playerLoss(this.currentTurn);
        }
        this.nextPlayer();
    }


    //Functional methods
    playerLoss(player) {
        let deleteIndex = this.turnArray.indexOf(player);
        this.turnArray.splice(deleteIndex,1);
        this.bankruptArray.push(player);
        //TODO: Display a message to the player
    }

    MovePlayerByDistance(player, distance) {
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

    MovePlayerToSpace(player, space) {
        player.position = space;
        this.ExecuteSpace(player,space);
    }

    ExecuteSpace(player,space)
    {

    }

    
    rollDice() {
        let dice = [];
        dice[0] = Math.floor(Math.random() * 6) + 1;
        dice[1] = Math.floor(Math.random() * 6) + 1;
        return dice;
    }

    playerBankrupt(player){
        // GET THE INDEX OF THE BANKRUPT PLAYER FROM THE TURN ARRAY
        bankruptPlayerIndex=this.turnArray.indexOf(player);
        // SLICE THEM OUT OF THE ARRAY
        this.turnArray=this.turnArray.slice(0, bankruptPlayerIndex-1).concat(this.turnArray.slice(bankruptPlayerIndex, this.turnArray.length))
    }
    
    canBuy(player,amount) {
        if(player.balance<amount){
            return false;
        }
        else {
            return true;
        }
    }
    // METHOD CALLED AT BEGINNING TO CREATE PLAYERS AND ADD THEM TO STATE
    createPlayer(name, playerColor,playerIcon){
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
    
    
    
    addToPlayerBalance(player,amount){
        player.balance += amount;
    }
    
    subtractFromPlayerBalance(player,amount){
        player.balance -= amount;
    }
    


    // 
    playerBuysProperty(player,property){
        // SET THE PLAYERS STATE TO INCLUDE THE OWNED PROPERTY IN THE ARRAY
        player.ownedProperties.push(property);

        // SET THE PROPERTY'S OWNER
        property.ownedBy = player;
    }
    
    // PLAYER.INJAIL IS TRUE AND PLAYER POSITION MOVED
    playerGoesToJail(player){
        player.inJail = true;
        player.position = jailIndex;
    }
    
    addHouseToProperty()




    mortgageProperty(property) {
        property.mortgaged=True;
    }

    
    unmortgageProperty(property) {
        property.mortgaged=False;
    }

    addHousesToProperty(number) { 
        this.houses+=number;
    }

    getRent() {
        return rent[this.houses];
    }

    getPropertyValue(property) {
        return property.value;
    }

    checkOwner(property) {
        return property.ownedBy;
    }
}
export default GameManager;





