const express = require("express");
const { createStripeSession } = require("../controllers/payments");
const { protectCustomer} = require("../middleware/auth");

const router = express.Router();

router.route("/createStripeSession").post(protectCustomer, createStripeSession);

module.exports = router;