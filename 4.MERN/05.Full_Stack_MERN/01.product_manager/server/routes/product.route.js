const ProductController = require("../controllers/product.controller")


module.exports = app => {
    app.get("/api/products/test", ProductController.test),
        app.post("/api/products", ProductController.newProduct),
        app.get("/api/products", ProductController.allProducts),
        app.get("/api/:id", ProductController.oneProduct),
        app.put("/api/:id", ProductController.updateProduct),
        app.delete("/api/:id", ProductController.deleteProduct)
}