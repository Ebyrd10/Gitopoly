class Property {


id = ""
name = ""
value = 500;
rent = 100;
ownedBy = player1
mortgaged=False
houses=0



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


}