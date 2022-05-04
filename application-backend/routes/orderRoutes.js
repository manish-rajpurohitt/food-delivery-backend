const express = require("express");
const { createOrderFromSessionId } = require("../controllers/orders");
const { protect } = require("../middleware/auth");
const {getAllAvailableOrders, acceptOrderDelivery, updateOrderDeliveryStatus} = require("../controllers/orders");
const router = express.Router();
const { acceptOrderRestaurant, getOrderStatus } = require("../controllers/orders");



router.route("/createOrder").post(protect, createOrderFromSessionId);

//rider
router.route("/getAllAvailableOrders").post(protect, getAllAvailableOrders);

router.route("/acceptOrderDelivery").post(protect, acceptOrderDelivery);

router.route("/updateOrderDeliveryStatus").post(protect, updateOrderDeliveryStatus);

//restaurant
router.route("/acceptOrderRestaurant").post(protect, acceptOrderRestaurant);

router.route("/getOrderStatus").post(protect, getOrderStatus);

module.exports = router;