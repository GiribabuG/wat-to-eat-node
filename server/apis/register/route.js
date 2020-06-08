let express = require('express');
let userController = require('./controller')
let router = express.Router();


router.post('/userRegister',userController.register);
router.get('/getUser/:id',userController.getUser);
router.put('/updateUser/',userController.updateUser);
router.delete('/deleteUser/',userController.deleteUser);


module.exports = router;