const express = require('express');
const { addUserDetails, updateCurrentGeoLocation, getAllRestaurantWithCity } = require('../controllers/customer');
const { protect } = require('../middleware/auth');
const router =  express.Router();

router.route("/addCustomerDetails").post(protect, addUserDetails);

router.route("/updateCurrentGeoLocation").post(protect, updateCurrentGeoLocation);


router.route("/getAllRestaurantsWithCity").post(protect, getAllRestaurantWithCity);
module.exports = router;