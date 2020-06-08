let jwt = require('jsonwebtoken');

let userCollection = require('../register/model');
let config = require('../../../config')

let login=(req,res)=>{

    userCollection.findOne({email : req.body.email})
    .then((response)=>{
        // console.log("response",response);
            if(response.password == req.body.password){
                jwt.sign({id:response._id} ,config.jwt.secret, function(err,encodedData){
                    if(err){
                        // res.status(500).json({ status : false , message : "Error while login", err:err});
                        throw err;

                    }else{
                        res.status(200).json({ status : true , message : "Login Successful" ,user : response.email,userToken : encodedData  });
                    }
                })
                
            }else{
                res.status(200).json({ status : false , message : "Wrong Credentials"});
            }
        }
    ).catch(
        (err)=>{
            res.status(500).json({ status : false , message : "Error while login", err:err});
        }
    )
   
}


module.exports = {
    login
}