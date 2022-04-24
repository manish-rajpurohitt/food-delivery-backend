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
            data: "Restaurant details are saved"
        });
    }
    catch(e){
        next(e);
    }
}

exports.addFoodItem = async (req, res, next) => {
    try{
        let productItem = req.body;
        //{ foodName, category, ingredients, price, discount, isVegetarian, isAvailableForDelivery, image, ratings, isTaxRequired, taxInPercentage }
        let restaurant = await Restaurant.findOne({email: req.user.email});

        let isCategoryPresent = false;
        let isFoodPresent = false;
        restaurant.categories.map(category => {
            if(category.categoryName === productItem.category.categoryName){
                isCategoryPresent = true;
            }
        })

        restaurant.restaurantItems.map(product => {
            if(product.foodName === productItem.foodName){
                isFoodPresent = true;
            }
        })
        console.log(isCategoryPresent, isFoodPresent)
        if(!isCategoryPresent){
            restaurant.categories.push(productItem.category);
        }
        if(!isFoodPresent){
            restaurant.restaurantItems.push(productItem);
        }
        restaurant.save();
        res.status(201).json({
            success: true,
            data: "Item added successfully"
        });
    }
    catch(e){
        next(e)
    }
}

exports.getAllFoodItems = async (req, res, next) => {
    try{
        let restaurant = await Restaurant.findOne({email:req.user.email});
        res.status(201).json({
            success: true,
            data: restaurant.restaurantItems
        });
    }
    catch(e){
        next(e)
    }
}

exports.getAllFoodCategories = async(req, res, next) => {
    try{
        let restaurant = await Restaurant.findOne({email:req.user.email});
        res.status(201).json({
            success: true,
            data: restaurant.categories
        });
    }
    catch(e){
        next(e)
    }
} 

exports.deleteFoodItem = async(req, res, next) => {
    try{
        let foodId = req.body.foodId;
        let restaurant = await Restaurant.findOne({email:req.user.email});
        let foodItems = restaurant.restaurantItems;
        let categories = restaurant.categories;
        let catName = "";
        foodItems = foodItems.filter(food => {
            if(food._id.toString() !== foodId){
                return food;
            }else{
                catName = food.category.categoryName
                return;
            }
        });
        categories = categories.filter(cat => cat.categoryName !== catName);
        await restaurant.updateOne({
            restaurantItems: foodItems,
            categories: categories
        })
        res.status(201).json({
            success: true,
            data: restaurant.restaurantItems
        });
    }
    catch(e){
        next(e)
    }
}

exports.disableDeliveryForFoodItem = async (req, res, next) => {
    try{
        let foodId = req.body.foodId;
        let restaurant = await Restaurant.findOne({email: req.user.email});
        
        restaurant.restaurantItems.map(item => {
            if(item._id.toString() === foodId){
                item.isAvailableForDelivery = false
            }
        })
        await restaurant.save();
        res.status(200).json({
            success: true,
            data: "Delivery Disabled Successfully!"
        })
    }
    catch(e){
        next(e);
    }
}

exports.enableDeliveryForFoodItem = async (req, res, next) => {
    try{
        let foodId = req.body.foodId;
        let restaurant = await Restaurant.findOne({email: req.user.email});
        
        restaurant.restaurantItems.map(item => {
            if(item._id.toString() === foodId){
                item.isAvailableForDelivery = true
            }
        })
        await restaurant.save();
        res.status(200).json({
            success: true,
            data: "Delivery Enabled Successfully!"
        })
    }
    catch(e){
        next(e);
    }
}
