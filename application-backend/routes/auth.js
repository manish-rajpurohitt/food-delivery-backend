const express = require('express');
const router =  express.Router();
const { 
    register,
    login,
    forgotpassword,
    resetpassword,
    registerRider,
    loginRider,
    forgotpasswordRider,
    resetpasswordRider,
    registerRestaurant,
    loginRestaurant,
    forgotpasswordRestaurant,
    resetpasswordRestaurant
} = require('../controllers/auth');

//customer
router.route("/registerCustomer").post(register);

router.route('/loginCustomer').post(login);

router.route('/forgotPasswordCustomer').post(forgotpassword);

router.route('/resetPasswordCustomer/:resetToken').put(resetpassword);

//rider
router.route("/registerRider").post(registerRider);

router.route('/loginRider').post(loginRider);

router.route('/forgotPasswordRider').post(forgotpasswordRider);

router.route('/resetPasswordRider/:resetToken').put(resetpasswordRider);

//restaurant
router.route("/registerRestaurant").post(registerRestaurant);

router.route('/loginRestaurant').post(loginRestaurant);

router.route('/forgotPasswordRestaurant').post(forgotpasswordRestaurant);

router.route('/resetPasswordRestaurant/:resetToken').put(resetpasswordRestaurant);




module.exports = router;