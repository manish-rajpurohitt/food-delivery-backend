const express = require('express');
const { addRiderDetails, updateCurrentGeoLocation } = require('../controllers/customer');
const { protect } = require('../middleware/auth');
const router =  express.Router();

router.route("/addUserDetails").post(protect, addRiderDetails);

router.route("/updateCurrentGeoLocation").post(protect, updateCurrentGeoLocation);


module.exports = router;