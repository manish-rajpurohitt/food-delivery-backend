const express = require('express');
const { addRestaurantDetails, 
        addFoodItem, 
        getAllFoodItems, 
        getAllFoodCategories, 
        deleteFoodItem, 
        disableDeliveryForFoodItem,
        enableDeliveryForFoodItem } = require('../controllers/restaurant');

const router =  express.Router();
const { protectRestauant } = require("../middleware/auth");

router.route("/AddRestaurantDetails").post(protectRestauant, addRestaurantDetails);

router.route("/AddFoodItem").post(protectRestauant, addFoodItem);

router.route("/getAllFoodItems").get(protectRestauant, getAllFoodItems);

router.route("/getAllFoodCategories").get(protectRestauant, getAllFoodCategories);

router.route("/deleteFoodItem").post(protectRestauant, deleteFoodItem);

router.route("/disableDeliveryForFoodItem").post(protectRestauant, disableDeliveryForFoodItem)

router.route("/enableDeliveryForFoodItem").post(protectRestauant, enableDeliveryForFoodItem)

module.exports = router;