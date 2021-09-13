const mongoose = require("mongoose")

// 1. DEFINE THE SCHEMA
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup must be required"],
        minlength: [10, "Setup must be at least 10 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline must be required"],
        minlength: [10, "Setup must be at least 10 characters long"]
    }
}, { timestamps: true })

// 2. REGISTERING THE SCHEMA
const Joke = mongoose.model("Joke", JokeSchema)

module.exports = Joke