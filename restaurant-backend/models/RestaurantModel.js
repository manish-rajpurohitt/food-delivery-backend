const mongoose = require('mongoose');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const Address = require("./Address");

const CategorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: [true, "Category name is required"]
    },
    addedOn:{
        type: Date,
        default: Date.now()
    }
})

const FoodItemSchema = new mongoose.Schema({
    foodName: {
        type: String,
        required: [true, "Food name cannot be empty"]
    },
    category:{
        type: CategorySchema,
        required: [true, "Cannot add food without category"]
    },
    ingredients:{
        type: Array
    },
    price:{
        type: Number,
        required: [true, "price is a necessary field"]
    },
    discount:{
        type: String
    },
    isVegetarian:{
        type: Boolean,
        required:[true, "Vegetarian status is required"]
    },
    image:{
        type: String
    },
    ratings:{
        type: Number
    },
    requiredTax:{
        type: Boolean,
        required: [true, "please mention tax is required or not"]
    },
    taxInPercentage:{
        type: String
    },
    addedOn:{
        type: Date,
        default: Date.now()
    },
    updatedOn:{
        type: Date,
        default: Date.now()
    }
});



const RestaurantSchema = new mongoose.Schema({
    restaurantName : {
        type:String,
        required: [true, "Please provide a first name"]
    },
    userName : {
        type:String,
        required: [true, "Please provide a last name"]
    },
    userPhoneNumber : {
        type:Number,
        required : [true, "Please Provide Phone Number."],
        unique: true
    },
    restaurantPhoneNumber : {
        type:Number
    },
    restaurantLocation:{
        type: Object
    },
    email : {
        type:String,
        required: [true, "Please provide email"],
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email"
        ]
    },
    pan:{
        type: String,
    },
    city:{
        type: String,
    },
    password: {
        type:String,
        required:[true, "Please provide a password"],
        minlength:6,
        select: false
    },
    restaurentItems: {
        type: [FoodItemSchema]
    },
    resetPasswordToken : String,
    resetPasswordExpire : Date,
    pincode: {
        type: Number,
    },
    addedOn:{
        type: Date
    },
    address : {
        type: Address
    },
    restaurantType:{
        type: String,
    },
    categories:{
        type: [CategorySchema]
    },
    updatedOn: {
        type: Date,
        default : Date.now
    }
});



RestaurantSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

RestaurantSchema.methods.matchPasswords = async function(password){
    return await bcrypt.compare(password, this.password);
}

RestaurantSchema.methods.getSignedToken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });
}

RestaurantSchema.methods.getResetPasswordToken = function(){
    const resetToken = crypto.randomBytes(20).toString("hex");
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    this.resetPasswordExpire = Date.now() + 10 * (60 * 1000);
    return resetToken;
}
const Restaurant = mongoose.model("Restaurants", RestaurantSchema);

module.exports = Restaurant