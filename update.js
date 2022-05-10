const fs = require("fs");
const read = require("./read");

function update(updatedProduct) {
  // step 1: read cart
  const cart = read();
  // step 2: check if updatedProduct in cart
  const keys = Object.keys(updatedProduct);
  const key = keys[0];
  if (key in cart) {
    // step 3: update product and save it
    const updatedValue = updatedProduct[key];
    cart[key] = updatedValue;
    fs.writeFileSync("./data/cart.json", JSON.stringify(cart));
  } else {
    throw new Error(`key ${key} not in cart`);
  }
}

module.exports = update;
