const stripe = require("../config/stripe");

exports.createStripeSession = async (req, res, next) => {
    try{
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: "payment",
            line_items: req.body.items.map(item => {
                    return {
                        price_data: {
                            currency: "inr",
                            product_data: {
                                name: item.productDetails.foodName
                            },
                            unit_amount: item.productDetails.price*100
                        },
                        quantity: item.quantity
                    }
            }),
            success_url: `${process.env.BASE_URL}/success.html`,
            cancel_url: `${process.env.BASE_URL}/cancel.html` 
        });
        res.status(201).json({
            success: "true",
            data: session.url
        });
    } 

    catch(e){
        next(e);
    }
}

exports.initiatePaymentSuccess = async (req, res, next) => {
    
}