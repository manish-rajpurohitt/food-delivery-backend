const express = require('express');
const router =  express.Router();
const { 
    register,
    login,
    forgotpassword,
    resetpassword
} = require('../controllers/auth');

router.route("/registerRider").post(register);

router.route('/loginRider').post(login);

router.route('/forgotPasswordRider').post(forgotpassword);

router.route('/resetPasswordRider/:resetToken').put(resetpassword);



module.exports = router;