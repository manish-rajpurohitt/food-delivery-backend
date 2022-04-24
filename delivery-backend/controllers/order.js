const Riders = require("../models/DeliveryModel");
const Order = require("../models/Order");
const verifyDeliveryState = require("../utils/verifyStates");




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
        order.deliveryStatus = "RIDER_ASSIGNED";
        order.riderDetails = rider;
        order.isPrepaid = true;
        let stateHistory = {
            state: "RIDER_ASSIGNED",
            changedOn: Date.now()
        };
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

        if(!verifyDeliveryState(state, 'DELIVERY')){
            res.status(400).json({
                success: false,
                data: null
            });
            return;
        }
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
            data: deliveryStatus
        });
    }
    catch(e){
        next(e);
    }
}

