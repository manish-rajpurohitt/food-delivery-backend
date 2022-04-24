const express = require("express");
const { acceptOrderRestaurant, getOrderStatus } = require("../controllers/order");
const { protect } = require("../middleware/auth");
const router = express.Router();


router.route("/acceptOrderRestaurant").post(protect, acceptOrderRestaurant);

router.route("/getOrderStatus").post(protect, getOrderStatus);
module.exports = router;