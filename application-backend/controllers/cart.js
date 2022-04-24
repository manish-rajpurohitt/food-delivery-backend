const Cart = require('../models/Cart');
const Restaurant = require('../models/RestaurantModel');

exports.createSession = async (req, res, next) => {
    try{
        let cart = await Cart.create({});
        console.log(cart);
        res.status(201).json({
            success: "true",
            data: cart._id
        })
    }
    catch(e){
        next(e);
    }
}

exports.addFoodToCart = async (req, res, next) => {
    try{
        let {restaurantId, foodItems, sessionId } = req.body;
        let cart = await Cart.findOne({_id: sessionId});
        let resProducts = await getProductFromRestaurant(restaurantId);
        let cartProducts = [];
        for(let i =0; i<foodItems.length; i++){
            resProducts.map(product =>{
                if(product._id.toString() === foodItems[i].productId){
                    let item = {
                        productDetails: product,
                        quantity: foodItems[i].productQuantity
                    }
                    cartProducts.push(item);
                }
            }) 
        }
        let total = 0;
        cartProducts.forEach(product=>{
            total += (parseFloat(product.productDetails.price) * product.quantity);
        })
        
        console.log(cart);

        cart.products = cartProducts;
        cart.netTotal = total;
        cart.save();

        res.status(201).json({
            success: "true",
            data: cart
        });
    }
    catch(e){
        next(e);
    }
}

const getProductFromRestaurant = async (resId) =>{
    let restaurant = await Restaurant.findOne({_id: resId});
    return restaurant.restaurantItems;
}

exports.getCart = async (req, res, next) => {
    let sessionId = req.body.sessionId;
    let cart = await Cart.findOne({_id : sessionId});

    res.status(201).json({
        success: "true",
        data: cart
    })
}