function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(p1);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
console.log(p2);

var p3 = pizzaOven("deep dish", "marinara", "feta", "pineapple")
console.log(p3);

var p4 = pizzaOven("hand tossed", "traditional", "mozzarella", "onions")
console.log(p4);


var crustType = ["deep dish", "hand tossed", "thin", "cheese crust"]

var sauceType = ["traditional", "pest", "marinara", "buffalo"]

var cheeses = ["mozzarella", "feta", "parmesan", "cheddar"]

var toppings = ["pepperoni", "sausage", "olives", "mushrooms", "onions"]


function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomRange(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomPizza() {
    var pizza = {};
    pizza.crustType = randomPick(crustType);
    pizza.sauceType = randomPick(sauceType);
    pizza.cheeses = [];
    pizza.toppings = [];
    for(var i=0; i<randomRange(4, 1); i++) {
        pizza.cheeses.push(randomPick(cheeses));
    }
    for(var i=0; i<randomRange(5, 0); i++) {
        pizza.toppings.push(randomPick(toppings));
    }
    return pizza;
}

console.log(randomPizza());
