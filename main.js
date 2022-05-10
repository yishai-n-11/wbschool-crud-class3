const args = process.argv.slice(2);
const operation = args[0];
const readFn = require("./read");
const create = require("./create");
const update = require("./update");
const deleteFn = require("./delete");

const allowed = ["create", "read", "update", "delete"];
if (!allowed.includes(operation)) {
  throw new Error(`operation: ${operation} is not allowed`);
}

switch (operation) {
  case "create":
    const product = args[1];
    if (product === undefined) {
      throw new Error("must pass product");
    } else {
      const prod = JSON.parse(product);
      create(prod);
    }
    break;
  case "read":
    console.log(readFn());
    break;
  case "update":
    const upProduct = args[1];
    if (upProduct === undefined) {
      throw new Error("no product");
    }
    const updatedProd = JSON.parse(upProduct);
    update(updatedProd);
    break;
  case "delete":
    const delKey = args[1];
    deleteFn(delKey);
    break;
}
