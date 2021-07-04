num1 = 42  # variable declaration, initialize new number
num2 = 2.3  # variable declaration, initialize new number
boolean = True  # variable declaration, initialize new boolean
string = 'Hello World'  # variable declaration, initialize new string
# variable declaration, initialize new list
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives']
print(type(pizza_toppings))
person = {'name': 'John', 'location': 'Salt Lake',  # variable declaration, initialize new dict
          'age': 37, 'is_balding': False}
print(type(person))
# variable delaration, initialize new tuple
fruit = ('blueberry', 'strawberry', 'banana')
print(type(fruit))
print(pizza_toppings[1])  # print the 2nd element in pizza_toppings
pizza_toppings.append('Mushrooms')  # add value in pizza toppings
print(person['name'])  # print the value of key:name in person
person['name'] = 'George'  # change value
person['eye_color'] = 'blue'  # add key-value pair in person dict
print(fruit[2])  # print 3rd value in fruit

if num1 > 45:
    print("It's greater")
else:
    print("It's lower")

    # conditional

if len(string) < 5:
    print("It's a short word!")
elif len(string) > 15:
    print("It's a long word!")
else:
    print("Just right!")

    # if else conditional

for x in range(5):
    print(x)
for x in range(2, 5):
    print(x)
for x in range(2, 10, 3):
    print(x)
# x hasn't be declared and initialized
# for loop

x = 0
while(x < 5):
    print(x)
    x += 1

    # while loop


pizza_toppings.pop()  # delete the last element in the list
print(pizza_toppings)
pizza_toppings.pop(1)  # delete the 2nd element in the list
print(pizza_toppings)

print(person)
person.pop('eye_color')
print(person)


for topping in pizza_toppings:
    if topping == 'Pepperoni':
        continue
    print('After 1st if statement')
    if topping == 'Olives':
        break


def print_hello_ten_times():
    for num in range(10):
        print('Hello')


print_hello_ten_times()


def print_hello_x_times(x):
    for num in range(x):
        print('Hello')


print_hello_x_times(4)


def print_hello_x_or_ten_times(x=10):
    for num in range(x):
        print('Hello')


print_hello_x_or_ten_times()
print_hello_x_or_ten_times(4)


"""
Bonus section
"""

print(num3)  # name 'num3' is not defined
num3 = 72
fruit = ('blueberry', 'strawberry', 'banana')
fruit[0] = 'cranberry'  # 'tuple' object does not support item assignment
print(person['favorite_team'])  # no favorite team key
print(pizza_toppings[7])  # IndexError: list index out of range
print(boolean)  # IndentationError: unexpected indent
# AttributeError: 'tuple' object has no attribute 'append'
fruit.append('raspberry')
fruit.pop(1)  # AttributeError: 'tuple' object has no attribute 'pop'
