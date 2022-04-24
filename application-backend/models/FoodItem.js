const mongoose = require("mongoose");
const CategorySchema = require("./Category")

const FoodItemSchema = new mongoose.Schema({
    foodName: {
        type: String,
        required: [true, "Food name cannot be empty"],
        unique: true
    },
    category:{
        type: CategorySchema,
        required: [true, "Cannot add food without category"]
    },
    ingredients:{
        type: Array
    },
    price:{
        type: Number,
        required: [true, "price is a necessary field"]
    },
    discount:{
        type: String
    },
    isAvailableForDelivery:{
        type: Boolean,
        required: [true, "Delivery mode is required."]
    },
    isVegetarian:{
        type: Boolean,
        required:[true, "Vegetarian status is required"]
    },
    image:{
        type: String
    },
    ratings:{
        type: Number
    },
    isTaxRequired:{
        type: Boolean,
        required: [true, "please mention tax is required or not"]
    },
    taxInPercentage:{
        type: Number
    },
    addedOn:{
        type: Date,
        default: Date.now()
    },
    updatedOn:{
        type: Date,
        default: Date.now()
    }
});

module.exports = FoodItemSchema;