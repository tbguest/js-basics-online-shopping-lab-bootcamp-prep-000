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
  
  var inCart = []
  
  for (let i = 0; i < cart.length; i++) {
    
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
