const ProudctController = require("../controllers/product.controller")


module.exports = app => {
    app.get("/api/products/test", ProductController.test),
        app.post("/api/products", ProductController.newBook)
}