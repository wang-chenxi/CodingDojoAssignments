const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/product", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("CONNECTED TO FULL MERN DEMO DB"))
    .catch(err => console.log("ERROR: ", err))