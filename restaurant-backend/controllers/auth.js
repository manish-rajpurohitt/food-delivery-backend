const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');

exports.register = async (req, res, next) => {
    let {restaurantName, userName, userPhoneNumber, restaurantPhoneNumber, email, pan, city, password, address, restaurantType } = req.body;
    try{
        const user = await User.create({
            email : email.toLowerCase(), 
            restaurantName, 
            userName, 
            userPhoneNumber, 
            restaurantPhoneNumber, 
            pan, 
            city, 
            password, 
            address, 
            restaurantType,
            addedOn : Date.now(),
            updatedOn : Date.now()
        });
        sendToken(user, 201, res);
    }
    catch(e){
        next(e);
    }
}

exports.login = async (req, res, next) => {
    const {email, password} = req.body;

    if(!email || !password)
       return next(new ErrorResponse("Please provide email and password.", 400))
    try{
        const user = await User.findOne({email}).select("+password");
        if(!user)
            return next(new ErrorResponse("Invalid credentials", 401))
       const isMatched = user.matchPasswords(password);

        if(!isMatched)
       return next(new ErrorResponse("Invalid credentials", 401))
       sendToken(user, 200, res);

    }
    catch(e){
        res.status(500).json({
            success: false,
            error: e.message
        })
    }
}

exports.forgotpassword = async (req, res, next) => {
    const {email} = req.body;
    console.log(email);

    try{
        const user = await User.findOne({email});
        if(!user)
            return next(new ErrorResponse("Email couldn't be send", 404));
        const resetToken = user.getResetPasswordToken();

        await user.save();

        const resetUrl = `https://localhost:3000/passwordreset/${resetToken}`;
        const message = resetUrl;

        try{
            await sendEmail({
                to:user.email,
                subject: "Password Reset Request",
                text: message
            });

            res.status(200).json({success: true, data:"Email sent"})
        }catch(e){
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;

            await user.save();
            return next(new ErrorResponse("Email couldn't be sent", 500))

        }
    }
    catch(e){
        return next(e);
    }
}


exports.resetpassword = async (req, res, next) => {
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.resetToken).digest("hex");

    try{
        const user = await User.findOne({
            resetPasswordToken,
            resetPasswordExpire: {$gt: Date.now()}
        })

        if(!user)
            return next(new ErrorResponse("Invalid reset token", 400));

        user.password = req.body.password;
        user.resetPasswordExpire = undefined;
        user.resetPasswordToken = undefined;

        await user.save();
        res.status(201).json({
            success: true,
            data: "Password reset success"
        });
    }catch(e){
        next(e)
    }
}

const sendToken = (user, statusCode, res)=>{
    const token = user.getSignedToken(); 
    res.status(statusCode).json({
        success: true,
        token
    })
}