let express = require('express');
let userData = require('./controller')
let router = express.Router();


router.post('/userRegister',userData.singUp);

router.post('/login',userData.login);

router.post('/reset',userData.resetPassword);

router.post('/verifyreset',userData.verifyResetPassword);

module.exports = router;