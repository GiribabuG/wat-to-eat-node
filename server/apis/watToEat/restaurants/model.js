let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

let restaurantRegistration = new mongoose.Schema({
    hotelCode:String,
    hotelName : String,
    hotelEmail: String,
    hotelPhone : Number,
    hotelAddress1: String,
    hotelAddress2: String,
    hotelLocation: String,
    hotelZipCode: String,
    // foodData:[{
    //     foodName:String,
    //     foodId :String,
    //     foodCategory: String,
    //     foodType :String,
    //     foodPrice:String,
    //     foodRating:String
    // }]
   
},
{timestamps:true}
);

let userModel = mongoose.model('restaurantRegistration', restaurantRegistration);

module.exports = userModel;