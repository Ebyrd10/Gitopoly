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

}

export default Player;