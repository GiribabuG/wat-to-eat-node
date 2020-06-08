let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

let userSingUpData = new mongoose.Schema({
    name : String,
    email: String,
    password : String,
    phone : Number,
    resetPasswordToken: String,
    resetPasswordExpires: Date
   
});

let userModel = mongoose.model('userSingUpData', userSingUpData);

module.exports = userModel;