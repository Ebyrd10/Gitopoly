import player from "./player"
import property from "./property"


class gameManager{
    turnArray = [];
    playerArray=[];
    freeParkingValue=0;
    propertyArray=[];
    currentPlayersTurn="";
    

    nextTurn() { 
        // GET THE CURRENT PLAYERS NAME
        let currentPlayer=this.currentPlayer;
        // GET THEIR INDEX IN THE TURN ARRAY
        let playerIndex=this.turnArray.indexOf(currentPlayer);
        // GET THE NEXT PLAYERS NAME USING THE NEXT INDEX VALUE
        let nextPlayer=this.turnArray[(playerIndex+1) % this.turnArray.length];
        // SET THE CURRENT PLAYER TO THE NEXT PLAYER
        this.currentPlayersTurn=nextPlayer;
    }

    playersTurn(currentPlayersTurn) {

    }




    
}