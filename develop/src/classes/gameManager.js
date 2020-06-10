import Player from "./player";
import Property from "./property";
import Space from "./space";


class GameManager{
    turnArray = [];
    playerArray=[];
    //I refuse to allow this dumb houserule.
    //freeParkingValue=0;
    propertyArray=[];
    currentTurn; //This holds the player whose turn it is
    currentPlayerInput;//This holds the player who is currently being prompted. It will usually be the same as currentTurn.
    //Display the player color accordingly

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
    


}
export default GameManager;
