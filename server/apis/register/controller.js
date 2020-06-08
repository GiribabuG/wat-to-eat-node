let userCollection = require('./model');

let register = (req,res)=>{

    userCollection.create(req.body)
    .then(
        (response)=>{
            res.status(200).json({status : true , message : "Succesfully registered", user : response})
        }
    ).catch(
        (error)=>{
            res.status(500).json({status : false, message : "Please try again"});
        }
    )

}

let getUser = (req,res)=>{
    userCollection.findOne({_id:req.body.id})
    .then(
        (response)=>{
           if(response == null){
            res.status(200).json({status : true , message : "User Already exits"});
           }else{
            res.status(200).json({status : true , message : "Succesfully fetached", user : response});
           }
        }
    ).catch(
        (error)=>{
            res.status(500).json({status : false, message : "Please try again"});
        }
    )
}

let updateUser = (req,res)=>{
    userCollection.findOneAndUpdate({_id : req.body.id}, {$set : {name: req.body.name , email: req.body.email}},{ new :true})
    .then(
        (response)=>{
            res.status(200).json({status : true , message : "Succesfully Updated", user : response});
        }
    ).catch(
        (error)=>{
            res.status(500).json({status : false, message : "Please try again"});
        }
    )
}

let deleteUser = (req,res)=>{
    userCollection.findOneAndDelete({_id : req.body.id},)
    .then(
        (response)=>{
            res.status(200).json({status : true , message : "Succesfully deleted", user : response});
        }
    ).catch(
        (error)=>{
            res.status(500).json({status : false, message : "Please try again"});
        }
    )
}

module.exports = {
    register,
    getUser,
    updateUser,
    deleteUser
}