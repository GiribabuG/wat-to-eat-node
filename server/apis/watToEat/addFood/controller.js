let foodCollection = require('./model');


let createFood = (req, res) => {

    var body = req.body;

    // new Promise((resolve, reject) => {
       

    //     if (body.foodId) reject('foodId cannot be empty')
    //     if (body.foodName) reject('foodName cannot be empty')
    //     if (body.foodType) reject('foodType cannot be empty')
    //     if (body.foodCategory) reject('foodCategory cannot be empty')
    //     if (body.foodPrice) reject('foodPrice cannot be empty')
    //     if (body.foodQuantity) reject('foodQuantity cannot be empty')

    //     else resolve(null)
    // }).then(()=>{
        console.log(body)
        foodCollection.create(body)
        .then(
            (response) => {
                res.status(200).json({ status: true, message: "Succesfully registered", doc: response })
            }
        ).catch(
            (error) => {
                res.status(400).json({ status: false, message: "Please try again" });
            }
        )
    // }).catch(err => {
    //     console.log("error===>", err);

    //     res.status(500).json({ message: err, status: false })
    // })
}


module.exports = {
    createFood
}