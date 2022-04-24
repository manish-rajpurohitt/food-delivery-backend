const express = require("express");
const { createStripeSession } = require("../controllers/payments");
const {protect} = require("../middleware/auth");

const router = express.Router();

router.route("/createStripeSession").post(protect, createStripeSession);

module.exports = router;