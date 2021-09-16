const { Team } = require("../models/team.model")

module.exports.test = (req, res) => {
    res.json("Hello World")
}

// CREATE
//important to set up the status 400 in catch
module.exports.newTeam = (req, res) => {
    Team.create(req.body)
        .then(newTeam => res.json(newTeam))
        .catch(err => res.status(400).json(err))
}

// READ
module.exports.allTeams = (req, res) => {
    Team.find()
        .then(allTeams => res.json(allTeams))
        .catch(err => res.json(err))
}

// module.exports.oneAuthor = (req, res) => {
//     const { id } = req.params
//     Author.findOne({ _id: id })
//         .then(oneAuthor => res.json(oneAuthor))
//         .catch(err => res.json(err))

// }

// UPDATE
//important to set up the status 400 in catch
module.exports.updateTeam = (req, res) => {
    const { id } = req.params
    Team.findOneAndUpdate({ _id: id }, req.body, { new: true, runValidators: true })
        .then(updatedTeam => res.json(updatedTeam))
        .catch(err => res.status(400).json(err))
}

// DELETE

module.exports.deleteTeam = (req, res) => {
    const { id } = req.params
    Team.deleteOne({ _id: id })
        .then(confirmation => res.json(confirmation))
        .catch(err => res.status(400).json(err))
}