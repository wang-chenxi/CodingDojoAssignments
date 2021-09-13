
const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title must be provided"]
    },
    price: {
        type: Number,
        min: [0, "You cannot have negative price"],
        required: [true, "Price must be provided"]
    },
    description: {
        type: String,
        required: [true, "Description must be provided"]
    }
}, { timestamps: true })

module.exports.Product = mongoose.model("Product", ProductSchema)