
const mongoose = require("mongoose")

const TeamSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name must be provided"],
        minlength: [2, "Name must be at least 2 characters long"]
    },
    position: {
        type: String
    },
    gameOne: {
        type: Number
    },
    gameTwo: {
        type: Number
    },
    gameThree: {
        type: Number
    }
}, { timestamps: true })

module.exports.Team = mongoose.model("Team", TeamSchema)