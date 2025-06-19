// How code looks like in JS & How will be look like in TS

// A lot of things to do here, and so many errors to fix, but this is the basic structure of a pizza ordering system in js just we have change the extension to .ts and try to fix some errors.


// TS Code

const pizzaMenu: {type: string; price: number;}[] = [
  {type: "Margherita Pizza", price: 10},
  {type: "Mushroom Pizza", price: 10},
  {type: "Cheese Pizza", price: 8},
  {type: "Veggie Pizza", price: 9},
  {type: "Pepperoni Pizza", price: 11},
  {type: "BBQ Chicken Pizza", price: 12},
  {type: "Hawaiian Pizza", price: 10},
  {type: "Meat Lovers Pizza", price: 13}
]


let cashInRegister: number = 100
let orderQueue = []
let nextOrderId: number = 1

function addNewPizza(pizzaObj) {
  pizzaMenu.push(pizzaObj)
}

function placeOrder(pizzaType) {
  const selectedPizza = pizzaMenu.find(pizza => pizza.type === pizzaType);
  if (!selectedPizza) {
    console.error("Pizza not found in the menu.");
    return null; // Pizza not found
  }
  cashInRegister += selectedPizza.price;
  const newOrder = {
    id: nextOrderId++ , type: selectedPizza, status: "ordered"
  }
  orderQueue.push(newOrder);
  return newOrder;
}

function completeOrder(orderId) {
    const myOrder = orderQueue.find(order => order.id === orderId);
    if (myOrder) {
        myOrder.status = "completed";
        return myOrder;
    } else {
        return null; // Order not found
    }
}

addNewPizza({type: "Veggie Supreme Pizza", price: 10});
addNewPizza({type: "Spicy Pepperoni Pizza", price: 11});
addNewPizza({type: "BBQ Veggie Pizza", price: 9});

placeOrder("Veggie Supreme Pizza");
placeOrder("Spicy Pepperoni Pizza");
completeOrder("1");

console.log("Menu:", pizzaMenu);
console.log("Cash in Register:", cashInRegister);
console.log("Order Queue:", orderQueue);

