

class Product():
    def __init__(self, name, price, category):
        self.name = name
        self.price = price
        self.category = category

# Let's give some methods to our Product class:
# update_price(self, percent_change, is_increased) - updates the product's price. If is_increased is True, the price should increase by the percent_change provided. If False, the price should decrease by the percent_change provided.
# print_info(self) - print the name of the product, its category, and its price.
    def update_price(self, percent_change, is_increased):
        if is_increased == True:
            self.price *= (1 + percent_change)
        else:
            self.price *= (1 - percent_change)
        return self

    def print_info(self):
        print(
            f"Product name: {self.name}; Product category: {self.category}; Product price: {self.price}")
        return self
