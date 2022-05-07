const express = require("express");
const { createOrderFromSessionId } = require("../controllers/orders");
const { protectCustomer, protectRider, protectRestauant } = require("../middleware/auth");
const {getAllAvailableOrders, acceptOrderDelivery, updateOrderDeliveryStatus} = require("../controllers/orders");
const router = express.Router();
const { acceptOrderRestaurant, getOrderStatus } = require("../controllers/orders");



router.route("/createOrder").post(protectCustomer, createOrderFromSessionId);

//rider
router.route("/getAllAvailableOrders").post(protectRider, getAllAvailableOrders);

router.route("/acceptOrderDelivery").post(protectRider, acceptOrderDelivery);

router.route("/updateOrderDeliveryStatus").post(protectRider, updateOrderDeliveryStatus);


//restaurant
router.route("/acceptOrderRestaurant").post(protectRestauant, acceptOrderRestaurant);

router.route("/getOrderStatus").post(protectRestauant, getOrderStatus);

module.exports = router;