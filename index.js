var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  // turns item into js object
  let itemObj = {
    itemName: item,
    itemPrice: Math.floor((Math.random()*100) +1),
  }
  cart.push(itemObj);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  let list = [];
  if (cart.length == 0) {
    return "Your shopping cart is empty.";
  } else {
   for (let i = 0; i < cart.length; i++) {
     list.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
    }
    console.log(list);
    if (list.length == 1) {
      return `In your cart, you have ${list[0]}.`;
    } else if (list.length == 2) {
      return `In your cart, you have ${list[0]}, and ${list[1]}.`;
    } else if (list.length > 2) {
      return `In your cart, you have ${list.slice(0, list.length-1).join(', ')}, and ${list[list.length-1]}.`; 
    }
  }
}

function total() {
  let totalCost = 0;
  for (let i = 0; i < cart.length; i++) {
    totalCost += cart[i].itemPrice;
  }
  return totalCost;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
