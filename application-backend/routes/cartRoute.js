const express = require("express");
const { createSession, addFoodToCart, getCart } = require("../controllers/cart");
const { protect } = require("../middleware/auth");

const router = express.Router();


router.route("/createSession").get(protect, createSession);

router.route("/addFoodToCart").post(protect, addFoodToCart);

router.route("/getCartBySessionId").post(protect, getCart);

module.exports = router;