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
console.log(addToCart('berries'))

function viewCart() {
  
  var inCart = "In your cart, you have"
  
  for (let i = 0; i < cart.length; i++) {
    
    if (cart.length === 0) {
      return "Your shopping cart is empty."
    } else if (cart.length === 1) {
      inCart = `${inCart} ${cart[i].itemName} at \$${cart[i].itemPrice}.`
    } else if (i === parseInt(cart.length) - 1) {
      inCart = `${inCart} and ${cart[i].itemName} at \$${cart[i].itemPrice}.`
    } else {
      inCart = `${inCart} ${cart[i].itemName} at \$${cart[i].itemPrice},`
    }
  }
  
  return inCart
}

console.log(viewCart())

function total() {
  var tally = 0
  for (let i=0; i < cart.length; i++) {
    tally = tally + cart[i].itemPrice
  }
  return tally
}

console.log(total())

function removeFromCart(item) {
  if (item in cart[i].itemName) {
    cart.splice(i, 1)
  } else {
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
