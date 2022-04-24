const express = require("express");
const { createOrderFromSessionId } = require("../controllers/orders");
const { protect } = require("../middleware/auth");
const router = express.Router();


router.route("/createOrder").post(protect, createOrderFromSessionId);

module.exports = router;