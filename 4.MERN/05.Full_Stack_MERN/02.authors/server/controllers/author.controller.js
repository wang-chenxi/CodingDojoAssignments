const { Author } = require("../models/author.model")

module.exports.test = (req, res) => {
    res.json("Hello World")
}

// CREATE
//important to set up the status 400 in catch
module.exports.newAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json(newAuthor))
        .catch(err => res.status(400).json(err))
}

// READ
module.exports.allAuthors = (req, res) => {
    Author.find()
        //Sort the authors alphabetically.
        .sort({ name: 'asc' })
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.json(err))
}

module.exports.oneAuthor = (req, res) => {
    const { id } = req.params
    Author.findOne({ _id: id })
        .then(oneAuthor => res.json(oneAuthor))
        .catch(err => res.json(err))

}

// UPDATE
//important to set up the status 400 in catch
module.exports.updateAuthor = (req, res) => {
    const { id } = req.params
    Author.findOneAndUpdate({ _id: id }, req.body, { new: true, runValidators: true })
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err))
}

// DELETE

module.exports.deleteAuthor = (req, res) => {
    const { id } = req.params
    Author.deleteOne({ _id: id })
        .then(confirmation => res.json(confirmation))
        .catch(err => res.status(400).json(err))
}