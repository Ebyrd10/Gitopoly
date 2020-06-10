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
    }

    

    addToBalance(amount){
        this.balance += amount;
    }

    subtractFromBalance(amount){
        this.balance -= amount;
    }
}

export default Player;