let express = require('express');
let router = express.Router();
let userRouter = require('../server/apis/register/route');
let userLoginRouter = require('../server/apis/login/route');
let middleWare = require('../middleware');
let postsRouter = require('../server/apis/postUserDetails/route');
let profileRouter = require('../server/apis/profile/route');

let watToEat = require('../server/apis/watToEat/auth/singUp/route');
let restaurant = require('../server/apis/watToEat/restaurants/route');
let addRestaurant = require('../server/apis/watToEat/addFood/route');

router.use('/eat', watToEat);
router.use('/restaurants', restaurant);
router.use('/addRestaurant', addRestaurant);

router.use('/user', userRouter);
router.use('/userLogin', userLoginRouter);
router.use('/post', middleWare , postsRouter);
router.use('/profile', middleWare , profileRouter);


module.exports = router;