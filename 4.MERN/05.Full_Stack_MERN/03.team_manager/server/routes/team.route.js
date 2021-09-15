const mongoose = require("mongoose")

const TeamSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name must be provided"],
        minlength: [3, "Name must be at least 3 characters long"]
    }
}, { timestamps: true })

module.exports.Team = mongoose.model("Team", TeamSchema)