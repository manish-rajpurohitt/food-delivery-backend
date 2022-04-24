const express = require('express');
const { addRestaurantDetails, 
        addFoodItem, 
        getAllFoodItems, 
        getAllFoodCategories, 
        deleteFoodItem, 
        disableDeliveryForFoodItem,
        enableDeliveryForFoodItem } = require('../controllers/restaurant');

const router =  express.Router();
const { protect } = require("../middleware/auth");

router.route("/AddRestaurantDetails").post(protect, addRestaurantDetails);

router.route("/AddFoodItem").post(protect, addFoodItem);

router.route("/getAllFoodItems").get(protect, getAllFoodItems);

router.route("/getAllFoodCategories").get(protect, getAllFoodCategories);

router.route("/deleteFoodItem").post(protect, deleteFoodItem);

router.route("/disableDeliveryForFoodItem").post(protect, disableDeliveryForFoodItem)

router.route("/enableDeliveryForFoodItem").post(protect, enableDeliveryForFoodItem)

module.exports = router;