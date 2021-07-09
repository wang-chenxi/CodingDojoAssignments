from Product import Product
from Store import Store


store = Store("seven-eleven")
banana = Product("banana", 15, "fruit")
apple = Product("apple", 5, "fruit")
beef = Product("beef", 10, "meat")


store.add_product(banana).add_product(apple).add_product(beef).inflation(0.1)

banana.print_info()
apple.print_info()
beef.print_info()

store.set_clearance("fruit", 0.5)

banana.print_info()
apple.print_info()
beef.print_info()
