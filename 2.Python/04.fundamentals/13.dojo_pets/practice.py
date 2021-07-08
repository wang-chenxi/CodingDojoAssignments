# https://login.codingdojo.com/m/172/7210/59157

class Ninja:

    # implement __init__( first_name , last_name , treats , pet_food , pet )

    def __init__(self, first_name, last_name, treats, pet_food, pet):
        self.first_name = first_name
        self.last_name = last_name
        self.treats = treats
        self.pet_food = pet_food
        self.pet = pet

# implement the following methods:
# walk() - walks the ninja's pet invoking the pet play() method
    def walk(self):
        print(f"{self.first_name} is walking {self.pet.name}")
        self.pet.play()
        return self
# feed() - feeds the ninja's pet invoking the pet eat() method

    def feed(self):
        print(f"{self.first_name} is feeding {self.pet.name}")
        self.pet.eat()
        return self
# bathe() - cleans the ninja's pet invoking the pet noise() method

    def bathe(self):
        print(f"{self.first_name} is bathing {self.pet.name}")
        self.pet.noise()
        return self


class Pet:
    # implement __init__( name , type , tricks ):
    def __init__(self, name, type, tricks):
        self.name = name
        self.type = type
        self.tricks = tricks
        self.health = 100
        self.energy = 100
# implement the following methods:
# sleep() - increases the pets energy by 25

    def sleep(self):
        self.energy += 25
        print(f"{self.name}'s energy increased by 25. Total: {self.energy}.")
        return self
# eat() - increases the pet's energy by 5 & health by 10

    def eat(self):
        self.energy += 5
        self.health += 10
        print(f"{self.name}'s energy increased by 5. Total: {self.energy}.")
        print(f"{self.name}'s health increased by 10. Total: {self.health}.")
        return self
# play() - increases the pet's health by 5

    def play(self):
        self.health += 5
        print(f"{self.name}'s health increased by 5. Total: {self.health}.")
        return self
# noise() - prints out the pet's sound

    def noise(self):
        if self.type == "dog":
            print("woah woah")
        elif self.type == "cat":
            print("meow meow meow")
        return self


pet1 = Pet("bobby", "dog", "dance")
pet2 = Pet("Nancy", "cat", "sleep")
ninja1 = Ninja("Chenxi", "Wang", "treats",
               "pet_food", pet1).feed().walk().bathe()
