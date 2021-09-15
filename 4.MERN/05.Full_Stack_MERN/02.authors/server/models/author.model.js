
const mongoose = require("mongoose")

const AuthorSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name must be provided"],
        minlength: [3, "Name must be at least 3 characters long"]
    }
}, { timestamps: true })

module.exports.Author = mongoose.model("Author", AuthorSchema)