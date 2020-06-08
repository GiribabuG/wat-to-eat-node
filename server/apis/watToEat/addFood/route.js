let express = require('express');
let userController = require('./controller')
let router = express.Router();


router.post('/foodRegister',userController.createFood);


module.exports = router;