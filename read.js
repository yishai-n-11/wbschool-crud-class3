const fs = require("fs");

const read = function () {
  const data = fs.readFileSync("./data/cart.json", "utf-8");
  const jsonData = JSON.parse(data);
  return jsonData;
};

module.exports = read;
