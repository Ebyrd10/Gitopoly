const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PropertySchema = new Schema({
    id: {
        type: Number,
        trim: true
    },
    name: {
        type: String,
        trim: true,
        unique: true,
    },
    value: {
        type: Number,
    },
    rent: {
        type: Array
    },
    ownedBy: {
        type: String,
    },
    mortgaged: {
        type: Boolean,
        default: false,
    },
    houses: {
        type: Number,
        default: 0
    }
});

PropertySchema.methods.mortgage = function()
{
    this.mortgaged = true;
}

PropertySchema.methods.unmortgage = function()
{
    this.mortgaged = false;
}

const Property = mongoose.model("Property",PropertySchema);

module.exports = Property;