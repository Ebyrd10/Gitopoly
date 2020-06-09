import Player from "./player";
import Property from "./property";
import Space from "./space";


class GameManager{
    turnArray = [];
    playerArray=[];
    //I refuse to allow this dumb houserule.
    //freeParkingValue=0;
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
