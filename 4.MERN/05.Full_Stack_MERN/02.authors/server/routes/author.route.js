const AuthorController = require("../controllers/author.controller")


module.exports = app => {
    app.get("/api/authors/test", AuthorController.test),
        app.post("/api/authors", AuthorController.newAuthor),
        app.get("/api/authors", AuthorController.allAuthors),
        app.get("/api/:id", AuthorController.oneAuthor),
        app.put("/api/:id", AuthorController.updateAuthor),
        app.delete("/api/:id", AuthorController.deleteAuthor)
}