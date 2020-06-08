let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

let postDetails = new mongoose.Schema({
    description : String,
    file: String,
    privacy : String,
    userId : ObjectId,
   
});

let postModel = mongoose.model('posts', postDetails);

module.exports = postModel;