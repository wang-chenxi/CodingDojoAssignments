const { Product } = require("../models/product.model")

module.exports.test = (req, res) => {
    res.json("Hello World")
}

// CREATE
//important to set up the status 400 in catch
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
//important to set up the status 400 in catch
module.exports.updateProduct = (req, res) => {
    const { id } = req.params
    Product.findOneAndUpdate({ _id: id }, req.body, { new: true, runValidators: true })
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.status(400).json(err))
}

// DELETE

module.exports.deleteProduct = (req, res) => {
    const { id } = req.params
    Product.deleteOne({ _id: id })
        .then(confirmation => res.json(confirmation))
        .catch(err => res.status(400).json(err))
}