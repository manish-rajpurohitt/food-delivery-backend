const express = require('express');
const { addRestaurantDetails } = require('../controllers/restaurant');
const router =  express.Router();
const { protect } = require("../middleware/auth");

router.route("/AddRestaurantDetails").post(protect, addRestaurantDetails);

module.exports = router;