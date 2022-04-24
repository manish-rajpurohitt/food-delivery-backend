const express = require("express");
const router = express.Router();
const {protect} = require("../middleware/auth");
const {getAllAvailableOrders, acceptOrderDelivery, updateOrderDeliveryStatus} = require("../controllers/order");


router.route("/getAllAvailableOrders").post(protect, getAllAvailableOrders);

router.route("/acceptOrderDelivery").post(protect, acceptOrderDelivery);

router.route("/updateOrderDeliveryStatus").post(protect, updateOrderDeliveryStatus);
module.exports = router;