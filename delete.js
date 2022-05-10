const fs = require("fs");
const read = require("./read");

function deleteFn(delKey) {
  // step 1: load cart
  const cart = read();
  // step 2: check in delkey in cart
  if (delKey in cart) {
    delete cart[delKey];
    // step 3: dek key and value, save new cart
    fs.writeFileSync("./data/cart.json", JSON.stringify(cart));
  } else {
    throw new Error(`key: ${delKey} not in cart`);
  }
}

module.exports = deleteFn;
