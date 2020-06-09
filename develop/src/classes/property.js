class Property extends Space{
id = "";
name = "";
value = 0;
rent = [];
ownedBy = player1;
mortgaged=False
houses=0

    constructor(id,name,value,rent){
        super(id, name);
        this.value=value;
        this.rent=rent;
    }


    purchasedProperty(playerName) { 
        this.ownedBy=playerName;
    }

    mortgageProperty() {
        this.mortgaged=True;
    }

    
    unmortgageProperty() {
        this.mortgaged=False;
    }

    addHouses(number) { 
        this.houses+=number;
    }

    getRent() {
        return rent[this.houses];
    }

    getValue() {
        return this.value;
    }
}

export default Property;



// 40 spaces total 11X11 Grid- Only the perimeter
// 22 properties-8 Property Colors
// 4 Corners - Start, Jail, Free Parking Go to Jail
// 3 Community chest cards
// 3 Chance cards
// 2 Utilities
// 2 Tax 
// 1 Dice

