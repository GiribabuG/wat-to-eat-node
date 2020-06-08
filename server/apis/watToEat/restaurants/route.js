let express = require('express');
let userData = require('./controller')
let router = express.Router();


router.post('/hotelRegister',userData.createHotels);

router.get('/getAllHotel',userData.getHotelDetails);



module.exports = router;