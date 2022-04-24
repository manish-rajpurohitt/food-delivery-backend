const Cart = require("../models/Cart");
const Order = require("../models/Order");
const Restaurant = require("../models/RestaurantModel");

exports.createOrderFromSessionId = async (req, res, next) => {
    try{
        let customerDetails = req.user;
    let cart = await Cart.findOne({_id: req.body.sessionId});

    let restaurantDetails = await Restaurant.findOne({_id: cart.restaurantId});
    let order = await Order.create({
        customerDetails: customerDetails,
        restaurantDetails: restaurantDetails,
        city: req.user.city,
        orderSummary: cart.products,
        instructions: req.body.instructions,
        totalPrice: cart.netTotal,
        orderStatus: "ORDER_INITIATED",
        deliveryStatus: "RIDER_INITIATED",
        paymentStatus: "PAYMENT_INITIATED",
        isRiderAssigned: false,
        isPrepaid: false,
        paymentStatusChangeHistory:{
            state: "PAYMENT_INITIATED"
        },
        deliveryStatusChangeHistory:{
            state: "RIDER_INITIATED"
        },
        orderStatusChangeHistory:{
            state: "ORDER_INITIATED"
        }
    });

    res.status(201).json({
        success: "true",
        data: order._id.toString()
    })
    }
    catch(e){
        console.log(e);
        next(e);
    }
}

