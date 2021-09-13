const { Product } = require("../models/product.model")

module.exports.test = (req, res) => {
    res.json("Hello World")
}

// CREATE
module.exports.newProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(err => res.status(400).json(err))
}

// READ

// UPDATE

// DELETE