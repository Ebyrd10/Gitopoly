class Player{

    constructor(name, startingPosition, playerColor, playerIcon){
        this.playerName = name;
        this.position = startingPosition;
        this.color = playerColor;
        this.icon = playerIcon;
        this.balance = 1500;
        this.inJail = false;
        this.jailCounter = 0;
        this.doubleCounter = 0;
        this.heldCards = [];
        this.ownedProperties = [];
    }

    

    addToBalance(amount){
        this.balance += amount;
    }

    loseMoney(amount, target){
        if (amount <= this.balance)
        {
            this.balance -= amount;
        }
        else
        {
            amount = this.balance;
            this.balance = 0;
            //The game manager will check if a player has zero money at the end of thier turn.
        }
        if(target !== null)
        {
            target.addToBalance(amount);
        }
    }

    AddProperty(property){
        this.ownedProperties.push(property);
    }

    SendToJail(jail){
        this.position = jail;
        this.inJail = true;
    }

    Release(){
        this.inJail = false;
    }

    loseGame(){
        this.inJail = false;
        this.position = null;
    }
}

export default Player;