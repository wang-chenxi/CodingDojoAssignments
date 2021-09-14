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
module.exports.allProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json(err))
}

module.exports.oneProduct = (req, res) => {
    const { id } = req.params
    Product.findOne({ _id: id })
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json(err))

}

// UPDATE

// DELETE