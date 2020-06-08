let express = require('express');
let postController = require('./controller')
let router = express.Router();


router.post('/userPost',postController.addPost);


module.exports = router;