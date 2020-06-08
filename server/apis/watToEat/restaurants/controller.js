var hotelsCollections = require('./model')





let createHotels = (req, res) => {
    var body = req.body;
    new Promise((resolve, reject) => {
        console.log(body)
       
        if (!body.hotelName) reject('Username cannot be empty')
        if (!body.hotelEmail) reject('hotelEmail cannot be empty')
        if (!body.hotelPhone) reject('hotelPhone cannot be empty')
        if (!body.hotelAddress1) reject('hotelAddress1 cannot be empty')
        if (!body.hotelAddress2) reject('hotelAddress2 cannot be empty')
        if (!body.hotelLocation) reject('hotelLocation cannot be empty')
        if (!body.hotelZipCode) reject('hotelZipCode cannot be empty')
        
        else resolve(null)

    }).then(()=>{
        hotelsCollections.create(body)
            .then(
                (response) => {
                    res.status(200).json({ status: true, message: "Succesfully registered", doc: response })
                }
            ).catch(
                (error) => {
                    res.status(400).json({ status: false, message: "Please try again" });
                }
            )


    }).catch(err => {
        console.log("error===>", err);

        res.status(500).json({ message: err, status: false })
    })
}



let getHotelDetails = (req, res) => {
    hotelsCollections.find().then(docs=>{
        res.status(200).json({message:'Sucessfully Fetched',data:docs,status:true})
    }).catch(err=>{
        res.status(400).json({message:err,data:null,status:false});
  
      })

}
module.exports = {
    createHotels,
    getHotelDetails
}