const jwt = require("jsonwebtoken");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/UserModel");
const Rider = require("../models/DeliveryModel");
const Restaurant = require("../models/RestaurantModel");


exports.protectRider = async (req, res, next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1];
    }
    console.log(token)
    if(!token)
        return next(new ErrorResponse("Not authorized to access this route", 401))

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await Rider.findById(decoded.id);

        if(!user)
            return next(new ErrorResponse("No User found with this id", 404));
        req.user = user

        next();
    }
    catch(e){
        return next(new ErrorResponse("Not authorized to access route", 401));
    }
}

exports.protectCustomer = async (req, res, next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1];
    }
    if(!token)
        return next(new ErrorResponse("Not authorized to access this route", 401))

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);

        if(!user)
            return next(new ErrorResponse("No User found with this id", 404));
        req.user = user

        next();
    }
    catch(e){
        return next(new ErrorResponse("Not authorized to access route", 401));
    }
}

exports.protectRestauant = async (req, res, next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1];
    }
    if(!token)
        return next(new ErrorResponse("Not authorized to access this route", 401))

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await Restaurant.findById(decoded.id);

        if(!user)
            return next(new ErrorResponse("No User found with this id", 404));
        req.user = user

        next();
    }
    catch(e){
        return next(new ErrorResponse("Not authorized to access route", 401));
    }
}