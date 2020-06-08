let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

let userDetails = new mongoose.Schema({
    name : String,
    email: String,
    password : String,
    phone : Number,
    gender : String
});

let userModel = mongoose.model('user', userDetails);

module.exports = userModel;