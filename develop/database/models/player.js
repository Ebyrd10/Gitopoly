const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    id: {
        type: Number,
        trim: true
    },
    name: {
        type: String,
        trim: true,
        unique: true,
    },
    icon: {
        type: String,
        trim: true,
        unique: true
    },
    position: {
        type: Number,
        default: 0
    },
    balance: {
        type: Number,
        default: 1500
    },
    ownedProperties: {
        type: Array
    },
    inJail: {
        type: Boolean,
        default: false,
    },
    hasGetOutJail: {
        type: Boolean,
        default: false,
    },
    jailCounter: {
        type: Number,
        default: 0
    },
    doubleCounter: {
        type: Number,
        default: 0
    },
    


});

PlayerSchema.methods.addToBalance = (amount) =>
{
    this.balance += amount;
}

PlayerSchema.methods.subtractFromBalance = (amount) =>
{
    this.balance -= amount
}

PlayerSchema.methods.addProperty = (property) =>
{
    this.ownedProperties.push(property);
    
}

PlayerSchema.methods.inJail = () =>
{
    this.inJail=true;
    
}


PlayerSchema.methods.exitJail = () =>
{
    this.inJail=false;
    
}

const Player = mongoose.model("Player",PlayerSchema);

module.exports = Player;