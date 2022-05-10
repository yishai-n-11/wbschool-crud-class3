const fs = require("fs");
const read = require("./read");

function create(product) {
  const cart = read();
  const newCart = { ...product, ...cart };
  fs.writeFileSync("./data/cart.json", JSON.stringify(newCart));
}

module.exports = create;
