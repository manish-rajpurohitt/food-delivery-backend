const Cart = require("../models/Cart");
const Order = require("../models/Order");
const Restaurant = require("../models/RestaurantModel");
const Riders = require("../models/DeliveryModel");


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

//rider
exports.getAllAvailableOrders = async (req, res, next) => {
    try{
        let orders = await Order.find({city: req.body.city, orderStatus: "ORDER_ACCEPTED", paymentStatus: "PAYMENT_SUCCESS"});
        res.status(201).json({
            success: "true",
            data: orders
        });
    }
    catch(e){
        next(e);
    }
}

exports.acceptOrderDelivery = async (req, res, next) => {
    try{
        let orderId = req.body.orderId;
        let rider = await Riders.findOne({_id: req.user._id}) 
        let order = await Order.findOne({_id:orderId });
        console.log(orderId)
        if(order.deliveryStatus === "RIDER_ASSIGNED"){
            res.status(500).json({
                success: false,
                data: "Order already Accepted"
            });
            return;
        }
        order.deliveryStatus = "RIDER_ASSIGNED";
        order.riderDetails = rider;
        let stateHistory = {
            state: "RIDER_ASSIGNED",
            changedOn: Date.now()
        };
        order.isRiderAssigned = true; 
        console.log(order);
        order.deliveryStatusChangeHistory.push(stateHistory);
        order.save();
        rider.ordersHistory.push(order._id);
        rider.save();

        res.status(201).json({
            success: "true",
            data: order 
        });
    }
    catch(e){
        next(e);
    }
}

exports.updateOrderDeliveryStatus = async (req, res, next) => {
    try{
        let state = req.body.state;
        let orderId = req.body.orderId;
        let order = await Order.findOne({_id: orderId});

        if(state === "RIDER_PICKED_UP"){
            order.orderStatus = "ORDER_PROCESSING"
            order.orderStatusChangeHistory.push({
                state: "ORDER_PROCESSING",
                changedOn: Date.now()
            })
        }
        if(state === "RIDER_DELIVERED"){
            order.orderStatus = "ORDER_DELIVERED"
            order.orderStatusChangeHistory.push({
                state: "ORDER_DELIVERED",
                changedOn: Date.now()
            })
        }
        order.deliveryStatus = state;
        let stateHistory = {
            state: state,
            changedOn: Date.now()
        }
        order.deliveryStatusChangeHistory.push(stateHistory);
        order.save();
        res.status(201).json({
            success: "true",
            data: order
        });
    }
    catch(e){
        next(e);
    }
}

//restaurant
exports.acceptOrderRestaurant = async(req, res, next) => {
    try{
        let order = await Order.findOne({_id: req.body.orderId, orderStatus: "ORDER_REQUESTED", paymentStatus: "PAYMENT_SUCCESS"});

        order.orderStatus = "ORDER_ACCEPTED";
        order.isPrepaid = true;
        order.orderStatusChangeHistory.push({
            state: "ORDER_ACCEPTED",
            changedOn: Date.now()
        });
        order.save();
        res.status(201).json({
            success: "true",
            data: "Order Accepted successfully."
        })
    }
    catch(e){
        next(e);
    }
}

exports.getOrderStatus = async (req, res, next) => {
    try{
        let order = await Order.findOne({_id : req.body.orderId});
        res.status(201).json({
            success: "true",
            data: order
        });
    }
    catch(e){
        next(e);
    }
}
