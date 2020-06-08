let postsCollection = require('../postUserDetails/model');
let userCollection = require ('../register/model')
let config = require('../../../config');
let jwt = require('jsonwebtoken');
let mongoose = require('mongoose');
let ObjectId = mongoose.Types.ObjectId;

let getAllDetails = (req,res)=>{

        userCollection.aggregate([{
            $match :{_id: ObjectId(req.jwt.id)}
        },{
            $lookup:{
                form:"posts",
                localField:"_id",
                foreignFiled:"userId",
                as:"postedData"
            }
        }
    ])
    .then(
        (response)=>{
            res.status(200).json({status : true , message : "Succesfully posted", profileDetails : response})
        }
    ).catch(
        (error)=>{
            res.status(500).json({status : false, message : "Please try again"});
        }
    )

}

module.exports = {
    getAllDetails,
 
}