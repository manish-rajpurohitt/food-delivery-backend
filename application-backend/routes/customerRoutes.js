const express = require('express');
const { addUserDetails, updateCurrentGeoLocation, getAllRestaurantWithCity } = require('../controllers/customer');
const { protectCustomer } = require('../middleware/auth');
const router =  express.Router();

router.route("/addCustomerDetails").post(protectCustomer, addUserDetails);

router.route("/updateCurrentGeoLocation").post(protectCustomer, updateCurrentGeoLocation);


router.route("/getAllRestaurantsWithCity").post(protectCustomer, getAllRestaurantWithCity);
module.exports = router;