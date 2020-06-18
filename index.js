var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  itemObj = {"itemName": item, "itemPrice": getRandomInt(100)} 
  
  cart.push(itemObj)
  return `${item} has been added to your cart.`
}

// console.log(addToCart('juice'))

function viewCart() {
  
  var inCart = "In your cart, you have "
  
  for (let i = 0; i < cart.length; i++) {
    
    if (cart.length === 0) {
      return "Your shopping cart is empty."
    } else if (i === parseInt(cart.length) - 1) {
      inCart = `${inCart} ${cart.itemName[i]} at \$${cart.itemPrice[i]}.`
    } else {
      inCart = `${inCart} ${cart.itemName[i]} at \$${cart.itemPrice[i]}, `
    }
  }
  
  return inCart
}

console.log(viewCart())

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
