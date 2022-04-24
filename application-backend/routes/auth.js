const express = require('express');
const router =  express.Router();
const { 
    register,
    login,
    forgotpassword,
    resetpassword
} = require('../controllers/auth');

router.route("/registerCustomer").post(register);

router.route('/loginCustomer').post(login);

router.route('/forgotPasswordCustomer').post(forgotpassword);

router.route('/resetPasswordCustomer/:resetToken').put(resetpassword);



module.exports = router;