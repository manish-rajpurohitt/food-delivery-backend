const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: [true, "Category name is required"],
        unique: true
    },
    addedOn:{
        type: Date,
        default: Date.now()
    }
})

module.exports = CategorySchema;