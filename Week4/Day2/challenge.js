let groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        payed: true,
        meansOfPayment: ["cash", "creditCard"]
    }
}

let clone = Object.assign({}, groceries);
groceries.totalPrice = "35$";   //we will not see mods because it's another object
groceries.other.payed = false;  //we will see mods because it's the same object inside two different objects

console.log(groceries);
console.log(clone);
