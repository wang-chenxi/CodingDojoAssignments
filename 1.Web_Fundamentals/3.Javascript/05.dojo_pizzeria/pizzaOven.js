function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);


function randomPizza() {
    var pizza = {};
    crustType = ["deep dish", "hand tossed"];
    sauceType = ["traditional", "marinara"];
    cheeses = ["mozzarella", "feta"];
    toppings = ["pepperoni", "sausage", "mushrooms", "olives", "onions"];
    pizza.crustType = crustType[Math.floor(Math.random() * crustType.length)];
    pizza.sauceType = sauceType[Math.floor(Math.random() * sauceType.length)];
    pizza.cheeses = cheeses[Math.floor(Math.random() * cheeses.length)];
    pizza.toppings = toppings[Math.floor(Math.random() * toppings.length)];
    return pizza;
}

p3 = randomPizza();

console.log(p3);