const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/UserModel");
const Restaurant = require("../models/RestaurantModel");


exports.addUserDetails = async (req, res, next) => {
    try{
        let { customerPhoneNumber, customerName, currentLocation, city, customerAddress } = req.body;
        let restaurant = await User.findOne({email: req.user.email});
        await restaurant.updateOne({
            customerPhoneNumber,
            customerName,
            city,
            currentLocation,
            customerAddress
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
        let user = await User.findOne({email: req.user.email});
        user.currentLocation = req.body.currentLocation;
        user.save();
        res.status(201).json({
            success: 'true',
            data: "Locaion updated successfully"
        })
    }
    catch(e){
        next(e);
    }
}


exports.getAllRestaurantWithCity = async (req, res, next) => {
    try{
        let cityName = req.body.city;
        let restaurant = await Restaurant.find({city: cityName});
        res.status(201).json({
            success: 'true',
            data: restaurant
        })
    }
    catch(e){
        next();
    }
}
