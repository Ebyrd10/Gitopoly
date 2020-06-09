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

    SpendMoney(target, amount){
        if(amount > this.balance)
        {
            //Code for losing the game
        }
        else
        {
            this.balance -= amount;
            if(target !== null)
            {
                target.GainMoney(amount);
            }
        }
    }

    GainMoney(amount){
        this.balance += amount;
    }

    AddProperty(property){
        this.ownedProperties.push(property);
    }
}

export default Player;