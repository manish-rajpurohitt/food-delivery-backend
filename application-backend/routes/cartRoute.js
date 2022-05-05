const express = require("express");
const { createSession, addFoodToCart, getCart } = require("../controllers/cart");
const {  protectCustomer } = require("../middleware/auth");

const router = express.Router();


router.route("/createSession").get(protectCustomer, createSession);

router.route("/addFoodToCart").post(protectCustomer, addFoodToCart);

router.route("/getCartBySessionId").post(protectCustomer, getCart);

module.exports = router;