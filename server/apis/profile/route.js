let express = require('express');
let profileController = require('./controller')
let router = express.Router();


router.post('/Posted',profileController.getAllDetails);


module.exports = router;