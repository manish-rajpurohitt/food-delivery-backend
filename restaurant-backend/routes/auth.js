const express = require('express');
const router =  express.Router();
const { 
    register,
    login,
    forgotpassword,
    resetpassword
} = require('../controllers/auth');

router.route("/registerRestaurant").post(register);

router.route('/loginRestaurant').post(login);

router.route('/forgotPasswordRestaurant').post(forgotpassword);

router.route('/resetPasswordRestaurant/:resetToken').put(resetpassword);



module.exports = router;