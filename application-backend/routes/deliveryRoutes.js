const express = require('express');
const { addRiderDetails, updateCurrentGeoLocation } = require('../controllers/delivery');
const { protectRider } = require('../middleware/auth');
const router =  express.Router();

router.route("/addRiderDetails").post(protectRider, addRiderDetails);

router.route("/updateCurrentGeoLocation").post(protectRider, updateCurrentGeoLocation);


module.exports = router;