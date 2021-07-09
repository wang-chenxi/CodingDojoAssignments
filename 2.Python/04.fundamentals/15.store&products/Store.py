

# Start by creating a Store class that has 2 attributes: a name and a list of products. The name must be provided upon creation, but the products list should be empty.


class Store():
    def __init__(self, name, products=[]):
        self.name = name
        self.products = products

# Let's also give some methods to our Store class:

# add_product(self, new_product) - takes a product and adds it to the store
    def add_product(self, new_product):
        self.products.append(new_product)
        return self

# sell_product(self, id) - remove the product from the store's list of products given the id (assume id is the index of the product in the list) and print its info.

    def sell_product(self, id):
        self.products.pop(id)
        return self
# inflation(self, percent_increase) - increases the price of each product by the percent_increase given (use the method you wrote in the Product class!)

    def inflation(self, percent_increase):
        for product in self.products:
            product.update_price(percent_increase, True)
        return self

# set_clearance(self, category, percent_discount) - updates all the products matching the given category by reducing the price by the percent_discount given (use the method you wrote in the Product class!)

    def set_clearance(self, category, percent_discount):
        for product in self.products:
            if product.category == category:
                product.update_price(percent_discount, False)
        return self

# Next, create a Product class that has 3 attributes: a name, a price, and a category. All of these should be provided upon creation.
