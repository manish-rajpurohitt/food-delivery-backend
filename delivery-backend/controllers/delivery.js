const ErrorResponse = require("../utils/errorResponse");
const Riders = require("../models/DeliveryModel");


exports.addRiderDetails = async (req, res, next) => {
    try{
        let { riderPhoneNumber, riderName, currentLocation, pan, city, riderAddress } = req.body;
        let restaurant = await Riders.findOne({email: req.user.email});
        await restaurant.updateOne({
            riderPhoneNumber,
            pan,
            city,
            riderName,
            currentLocation,
            riderAddress
        });
        res.status(201).json({
            success: true,
            data: "Rider details are saved"
        });
    }
    catch(e){
        next(e);
    }
}

exports.updateCurrentGeoLocation = async(req, res, next) => {
    try{
        let rider = await Riders.findOne({email: req.user.email});
        rider.currentLocation = req.body.currentLocation;
        rider.save();
        res.status(201).json({
            success: 'true',
            data: "Locaion updated successfully"
        })
    }
    catch(e){
        next(e);
    }
}

