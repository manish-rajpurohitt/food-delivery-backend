const mongoose = require("mongoose");
const Restaurant = require("./RestaurantModel");

const ProductSchema = mongoose.Schema({
    productDetails:{
        type: Object
    },
    quantity: {
        type: Number
    }
})
const CartSchema = mongoose.Schema({
    restaurantId:{
        type: String
    },
    products:{
        type: Array
    },
    totalWithoutTax:{
        type: Number
    },
    netTotal:{
        type: Number
    }
})

let Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;