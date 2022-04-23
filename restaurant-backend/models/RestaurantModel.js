const mongoose = require('mongoose');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const Address = require("./Address");

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
        type:Number,
        required : [true, "Please Provide Phone Number."],
        unique: true
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
        required: [true, "Pan number is required"]
    },
    city:{
        type: String,
        required: [true, "City is a required field"]
    },
    password: {
        type:String,
        required:[true, "Please provide a password"],
        minlength:6,
        select: false
    },
    resetPasswordToken : String,
    resetPasswordExpire : Date,
    addedOn:{
        type: Date
    },
    address : [Address],
    restaurantType:{
        type: String,
        required: [true, 'Restaurant Type is required.']
    },
    categories:{
        type: Array
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