const Order = require("../models/Order")



exports.acceptOrderRestaurant = async(req, res, next) => {
    try{
        let order = await Order.findOne({_id: req.body.orderId, orderStatus: "ORDER_REQUESTED", paymentStatus: "PAYMENT_SUCCESS"});

        order.orderStatus = "ORDER_ACCEPTED";
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