const express = require('express');
const { addRiderDetails, updateCurrentGeoLocation } = require('../controllers/delivery');
const { protect } = require('../middleware/auth');
const router =  express.Router();

router.route("/addRiderDetails").post(protect, addRiderDetails);

router.route("/updateCurrentGeoLocation").post(protect, updateCurrentGeoLocation);


module.exports = router;