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

console.log(addToCart('juice'))
console.log(addToCart('carrots'))

function viewCart() {
  
  var inCart = "In your cart, you have"
  
  for (let i = 0; i < cart.length; i++) {
    
    if (cart.length === 0) {
      return "Your shopping cart is empty."
    } else if (i === parseInt(cart.length) - 1) {
      inCart = `${inCart} and ${cart[i].itemName} at \$${cart[i].itemPrice}.`
    } else {
      inCart = `${inCart} ${cart[i].itemName} at \$${cart[i].itemPrice}, `
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
