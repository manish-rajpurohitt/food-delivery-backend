const mongoose = require("mongoose");


const statusChangeHistorySchema = mongoose.Schema({
    state: {
        type: String,
        enum: [],
        require: true
    },
    changedOn:{
        type: Date,
        require: true,
        default: Date.now()
    }
})
const OrderSchema = mongoose.Schema({
    customerDetails:{
        type: Object,
        required: [true, "Customer details are required to create order."]
    },
    restaurantDetails:{
        type: Object,
        required: [true, "Restaurant details are required to create order"]
    },
    riderDetails:{
        type: Object
    },
    city:{
        type: String,
        required: [true, "City is required to create order"]
    },
    orderSummary:{
        type: Array,
        required: [true, "Order Summary is missing"]
    },
    instructions:{
        type: String
    },
    totalPrice:{
        type: Number,
        required: [true, "Total price is missing"]
    },
    orderStatus:{
        type: String,
        Enum : ["ORDER_INITIATED", "ORDER_REQUESTED", "ORDER_ACCEPTED", "ORDER_PROCESSING", "ORDER_DELIVERED"],
        required: true
    },
    deliveryStatus:{
        type: String,
        Enum : ["RIDER_INITIATED", "RIDER_ASSIGNED", "RIDER_REACHED_SOURCE", "RIDER_PICKED_UP", "RIDER_REACHED_DESTINATION", "RIDER_DELIVERED"],
        required: true
    },
    paymentStatus:{
        type: String,
        Enum : ["PAYMENT_INITIATED", "PAYMENT_PROCESSING", "PAYMET_SUCCESS"],
        required: true
    },
    orderStatusChangeHistory:{
        type: [statusChangeHistorySchema],
        required: true
    },
    deliveryStatusChangeHistory:{
        type: [statusChangeHistorySchema],
        required: true
    },
    paymentStatusChangeHistory:{
        type: [statusChangeHistorySchema],
        required: true
    },
    isPrepaid:{
        type: Boolean,
        required: true
    },
    isRiderAssigned:{
        type: Boolean,
        required: true
    },
    addedOn:{
        type: Date,
        default: Date.now()
    },
    updatedOn:{
        type: Date,
        default: Date.now()
    }
})

let Order = mongoose.model("Orders", OrderSchema);

module.exports = Order;