const Restaurant = require('../models/RestaurantModel');
const ErrorResponse = require('../utils/errorResponse');



exports.addRestaurantDetails = async (req, res, next) => {

    try{
        let { restaurantPhoneNumber, pan, city, restaurantType, restaurantLocation, address } = req.body;
        let restaurant = await Restaurant.findOne({email: req.user.email});
        await restaurant.updateOne({
            restaurantPhoneNumber,
            pan,
            city,
            restaurantType,
            restaurantLocation,
            address
        });
        res.status(201).json({
            success: true,
            data: "User address saved"
        });
    }
    catch(e){
        next(e);
    }
}