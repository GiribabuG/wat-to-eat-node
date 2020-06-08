let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

let addFood = new mongoose.Schema({
    foodId :  { type: String, unique: true},
    foodName : String,
    foodType : {type:String, enum:['Veg','Non-Veg']},
    foodCategory : String,
    foodPrice : Number,
    // foodQuantity : {type:String, uantityType:['Large','Medium','Small ']},

});

let userModel = mongoose.model('addFood', addFood);

module.exports = userModel;