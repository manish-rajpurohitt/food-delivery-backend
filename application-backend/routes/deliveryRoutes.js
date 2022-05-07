const express = require('express');
const { addRiderDetails, updateCurrentGeoLocation, getRiderDetails } = require('../controllers/delivery');
const { protectRider } = require('../middleware/auth');
const router =  express.Router();

router.route("/addRiderDetails").post(protectRider, addRiderDetails);

router.route("/updateCurrentGeoLocation").post(protectRider, updateCurrentGeoLocation);

router.route("/getRiderDetails").get(protectRider, getRiderDetails);

module.exports = router;