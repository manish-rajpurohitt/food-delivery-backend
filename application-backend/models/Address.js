const mongoose = require("mongoose");

const Address = new mongoose.Schema({
    addressLine1: {
        type: String,
        required: [true, "Please provide address line 1"]
    },
    addressLine2: {
        type: String,
        required: [true, "Please provide address line 2"]
    },
    cityOrDistrict: {
        type: String,
        required: [true, "Please provide city or district"]
    },
    country: {
        type: String,
        required: [true, "Please provide country"]
    },
    landmark: {
        type: String,
        required: [true, "Please provide landmark"]
    },
    pincode: {
        type: Number,
        required: [true, "Please provide pincode"]
    },
    state: {
        type:String,
        required: [true, "Please provide state"]
    }
});

module.exports = Address;