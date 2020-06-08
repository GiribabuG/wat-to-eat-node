let postsCollection = require('./model');
let config = require('../../../config');
let jwt = require('jsonwebtoken');

let addPost = (req,res)=>{
    
    let postDetails = req.body;
    postDetails.userId = req.jwt.id;
    postsCollection.create(postDetails)

    .then(
        (response)=>{
            res.status(200).json({status : true , message : "Succesfully posted", post : response})
        }
    ).catch(
        (error)=>{
            res.status(500).json({status : false, message : "Please try again"});
        }
    )

}

module.exports = {
    addPost,
 
}