let express = require('express');
let userController = require('./controller')
let router = express.Router();


router.post('/login',userController.login);



module.exports = router;